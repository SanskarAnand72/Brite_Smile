"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const gallerySchema = z.object({
  publicId: z.string().min(1),
  url: z.string().url(),
  category: z.string().optional().nullable(),
  altText: z.string().optional().nullable(),
  isBeforeAfter: z.boolean().default(false),
  featured: z.boolean().default(false),
  displayOrder: z.coerce.number().default(0),
})

export async function getGalleryImages() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: images }
  } catch (error) {
    console.error("Failed to fetch gallery images:", error)
    return { success: false, error: "Failed to fetch gallery images" }
  }
}

export async function createGalleryImage(data: z.infer<typeof gallerySchema>) {
  try {
    const validatedData = gallerySchema.parse(data)

    const image = await prisma.galleryImage.create({
      data: validatedData,
    })

    revalidatePath("/admin/gallery")
    revalidatePath("/gallery")
    return { success: true, data: image }
  } catch (error) {
    console.error("Failed to create gallery image:", error)
    return { success: false, error: "Failed to create gallery image" }
  }
}

export async function deleteGalleryImage(id: string) {
  try {
    // Note: This only deletes the DB record, Cloudinary deletion should be handled separately
    await prisma.galleryImage.delete({
      where: { id },
    })

    revalidatePath("/admin/gallery")
    revalidatePath("/gallery")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete gallery image:", error)
    return { success: false, error: "Failed to delete gallery image" }
  }
}

export async function updateGalleryImage(id: string, data: Partial<z.infer<typeof gallerySchema>>) {
  try {
    const image = await prisma.galleryImage.update({
      where: { id },
      data,
    })

    revalidatePath("/admin/gallery")
    revalidatePath("/gallery")
    return { success: true, data: image }
  } catch (error) {
    console.error("Failed to update gallery image:", error)
    return { success: false, error: "Failed to update gallery image" }
  }
}
