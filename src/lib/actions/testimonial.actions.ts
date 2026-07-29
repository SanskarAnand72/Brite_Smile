"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const testimonialSchema = z.object({
  patientName: z.string().min(2, "Patient name is required"),
  rating: z.coerce.number().min(1).max(5),
  review: z.string().min(10, "Review is required"),
  videoUrl: z.string().optional().nullable(),
  featured: z.boolean().default(false),
  displayOrder: z.coerce.number().default(0),
})

export async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: testimonials }
  } catch (error) {
    console.error("Failed to fetch testimonials:", error)
    return { success: false, error: "Failed to fetch testimonials" }
  }
}

export async function getTestimonialById(id: string) {
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id },
    })
    return { success: true, data: testimonial }
  } catch (error) {
    console.error("Failed to fetch testimonial:", error)
    return { success: false, error: "Failed to fetch testimonial" }
  }
}

export async function createTestimonial(data: z.infer<typeof testimonialSchema>) {
  try {
    const validatedData = testimonialSchema.parse(data)

    const testimonial = await prisma.testimonial.create({
      data: validatedData,
    })

    revalidatePath("/admin/testimonials")
    revalidatePath("/")
    return { success: true, data: testimonial }
  } catch (error) {
    console.error("Failed to create testimonial:", error)
    return { success: false, error: "Failed to create testimonial" }
  }
}

export async function updateTestimonial(id: string, data: z.infer<typeof testimonialSchema>) {
  try {
    const validatedData = testimonialSchema.parse(data)

    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: validatedData,
    })

    revalidatePath("/admin/testimonials")
    revalidatePath("/")
    return { success: true, data: testimonial }
  } catch (error) {
    console.error("Failed to update testimonial:", error)
    return { success: false, error: "Failed to update testimonial" }
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await prisma.testimonial.delete({
      where: { id },
    })

    revalidatePath("/admin/testimonials")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete testimonial:", error)
    return { success: false, error: "Failed to delete testimonial" }
  }
}
