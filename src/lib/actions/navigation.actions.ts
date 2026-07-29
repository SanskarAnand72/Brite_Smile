"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const navigationSchema = z.object({
  label: z.string().min(1, "Label is required"),
  href: z.string().min(1, "Href is required"),
  order: z.coerce.number().default(0),
  isEnabled: z.boolean().default(true),
})

export async function getNavigationItems() {
  try {
    const items = await prisma.navigationItem.findMany({
      orderBy: { order: "asc" },
    })
    return { success: true, data: items }
  } catch (error) {
    console.error("Failed to fetch navigation items:", error)
    return { success: false, error: "Failed to fetch navigation items" }
  }
}

export async function createNavigationItem(data: z.infer<typeof navigationSchema>) {
  try {
    const validatedData = navigationSchema.parse(data)

    const item = await prisma.navigationItem.create({
      data: validatedData,
    })

    revalidatePath("/admin/navigation")
    revalidatePath("/")
    return { success: true, data: item }
  } catch (error) {
    console.error("Failed to create navigation item:", error)
    return { success: false, error: "Failed to create navigation item" }
  }
}

export async function updateNavigationItem(id: string, data: Partial<z.infer<typeof navigationSchema>>) {
  try {
    const item = await prisma.navigationItem.update({
      where: { id },
      data,
    })

    revalidatePath("/admin/navigation")
    revalidatePath("/")
    return { success: true, data: item }
  } catch (error) {
    console.error("Failed to update navigation item:", error)
    return { success: false, error: "Failed to update navigation item" }
  }
}

export async function deleteNavigationItem(id: string) {
  try {
    await prisma.navigationItem.delete({
      where: { id },
    })

    revalidatePath("/admin/navigation")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete navigation item:", error)
    return { success: false, error: "Failed to delete navigation item" }
  }
}
