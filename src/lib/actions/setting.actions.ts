"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getSettings() {
  try {
    const settings = await prisma.websiteSetting.findMany()
    // Convert array to object { key: value }
    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value
      return acc
    }, {} as Record<string, string>)
    
    return { success: true, data: settingsMap }
  } catch (error) {
    console.error("Failed to fetch settings:", error)
    return { success: false, error: "Failed to fetch settings" }
  }
}

export async function updateSettings(data: Record<string, string>) {
  try {
    const operations = Object.entries(data).map(([key, value]) => {
      return prisma.websiteSetting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) }
      })
    })

    await prisma.$transaction(operations)

    revalidatePath("/admin/settings")
    revalidatePath("/") // revalidate layout/homepage
    return { success: true }
  } catch (error) {
    console.error("Failed to update settings:", error)
    return { success: false, error: "Failed to update settings" }
  }
}
