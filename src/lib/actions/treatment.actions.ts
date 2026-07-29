"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const treatmentSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  overview: z.string().min(10, "Overview is required"),
  benefits: z.string(),
  procedureDetails: z.string(),
  recoveryInfo: z.string(),
  featuredImageId: z.string().optional().nullable(),
  featuredImageUrl: z.string().optional().nullable(),
})

export async function getTreatments() {
  try {
    const treatments = await prisma.treatment.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: treatments }
  } catch (error) {
    console.error("Failed to fetch treatments:", error)
    return { success: false, error: "Failed to fetch treatments" }
  }
}

export async function getTreatmentById(id: string) {
  try {
    const treatment = await prisma.treatment.findUnique({
      where: { id },
    })
    return { success: true, data: treatment }
  } catch (error) {
    console.error("Failed to fetch treatment:", error)
    return { success: false, error: "Failed to fetch treatment" }
  }
}

export async function createTreatment(data: z.infer<typeof treatmentSchema>) {
  try {
    const validatedData = treatmentSchema.parse(data)
    
    // Check slug uniqueness
    const existing = await prisma.treatment.findUnique({ where: { slug: validatedData.slug } })
    if (existing) {
      return { success: false, error: "Slug already exists" }
    }

    const treatment = await prisma.treatment.create({
      data: validatedData,
    })

    revalidatePath("/admin/treatments")
    revalidatePath("/treatments")
    return { success: true, data: treatment }
  } catch (error) {
    console.error("Failed to create treatment:", error)
    return { success: false, error: "Failed to create treatment" }
  }
}

export async function updateTreatment(id: string, data: z.infer<typeof treatmentSchema>) {
  try {
    const validatedData = treatmentSchema.parse(data)

    // Check slug uniqueness for other records
    const existing = await prisma.treatment.findFirst({
      where: { 
        slug: validatedData.slug,
        id: { not: id }
      }
    })
    
    if (existing) {
      return { success: false, error: "Slug already exists" }
    }

    const treatment = await prisma.treatment.update({
      where: { id },
      data: validatedData,
    })

    revalidatePath("/admin/treatments")
    revalidatePath(`/treatments/${treatment.slug}`)
    revalidatePath("/treatments")
    return { success: true, data: treatment }
  } catch (error) {
    console.error("Failed to update treatment:", error)
    return { success: false, error: "Failed to update treatment" }
  }
}

export async function deleteTreatment(id: string) {
  try {
    await prisma.treatment.delete({
      where: { id },
    })

    revalidatePath("/admin/treatments")
    revalidatePath("/treatments")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete treatment:", error)
    return { success: false, error: "Failed to delete treatment" }
  }
}
