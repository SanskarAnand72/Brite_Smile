"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  content: z.string().min(10, "Content is required"),
  excerpt: z.string().min(5, "Excerpt is required"),
  author: z.string().min(2, "Author is required"),
  category: z.string().min(2, "Category is required"),
  tags: z.string(),
  readingTime: z.coerce.number().min(1),
  featuredImageId: z.string().optional().nullable(),
  featuredImageUrl: z.string().optional().nullable(),
  published: z.boolean().default(false),
})

export async function getBlogs() {
  try {
    const blogs = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: blogs }
  } catch (error) {
    console.error("Failed to fetch blogs:", error)
    return { success: false, error: "Failed to fetch blogs" }
  }
}

export async function getBlogById(id: string) {
  try {
    const blog = await prisma.blogPost.findUnique({
      where: { id },
    })
    return { success: true, data: blog }
  } catch (error) {
    console.error("Failed to fetch blog:", error)
    return { success: false, error: "Failed to fetch blog" }
  }
}

export async function createBlog(data: z.infer<typeof blogSchema>) {
  try {
    const validatedData = blogSchema.parse(data)
    
    const existing = await prisma.blogPost.findUnique({ where: { slug: validatedData.slug } })
    if (existing) {
      return { success: false, error: "Slug already exists" }
    }

    const blog = await prisma.blogPost.create({
      data: validatedData,
    })

    revalidatePath("/admin/blogs")
    revalidatePath("/blogs")
    return { success: true, data: blog }
  } catch (error) {
    console.error("Failed to create blog:", error)
    return { success: false, error: "Failed to create blog" }
  }
}

export async function updateBlog(id: string, data: z.infer<typeof blogSchema>) {
  try {
    const validatedData = blogSchema.parse(data)

    const existing = await prisma.blogPost.findFirst({
      where: { 
        slug: validatedData.slug,
        id: { not: id }
      }
    })
    
    if (existing) {
      return { success: false, error: "Slug already exists" }
    }

    const blog = await prisma.blogPost.update({
      where: { id },
      data: validatedData,
    })

    revalidatePath("/admin/blogs")
    revalidatePath(`/blogs/${blog.slug}`)
    revalidatePath("/blogs")
    return { success: true, data: blog }
  } catch (error) {
    console.error("Failed to update blog:", error)
    return { success: false, error: "Failed to update blog" }
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blogPost.delete({
      where: { id },
    })

    revalidatePath("/admin/blogs")
    revalidatePath("/blogs")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete blog:", error)
    return { success: false, error: "Failed to delete blog" }
  }
}
