"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const faqSchema = z.object({
  question: z.string().min(5, "Question is required"),
  answer: z.string().min(10, "Answer is required"),
  category: z.string().optional().nullable(),
})

export async function getFAQs() {
  try {
    const faqs = await prisma.fAQ.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: faqs }
  } catch (error) {
    console.error("Failed to fetch FAQs:", error)
    return { success: false, error: "Failed to fetch FAQs" }
  }
}

export async function getFAQById(id: string) {
  try {
    const faq = await prisma.fAQ.findUnique({
      where: { id },
    })
    return { success: true, data: faq }
  } catch (error) {
    console.error("Failed to fetch FAQ:", error)
    return { success: false, error: "Failed to fetch FAQ" }
  }
}

export async function createFAQ(data: z.infer<typeof faqSchema>) {
  try {
    const validatedData = faqSchema.parse(data)

    const faq = await prisma.fAQ.create({
      data: validatedData,
    })

    revalidatePath("/admin/faqs")
    revalidatePath("/")
    return { success: true, data: faq }
  } catch (error) {
    console.error("Failed to create FAQ:", error)
    return { success: false, error: "Failed to create FAQ" }
  }
}

export async function updateFAQ(id: string, data: z.infer<typeof faqSchema>) {
  try {
    const validatedData = faqSchema.parse(data)

    const faq = await prisma.fAQ.update({
      where: { id },
      data: validatedData,
    })

    revalidatePath("/admin/faqs")
    revalidatePath("/")
    return { success: true, data: faq }
  } catch (error) {
    console.error("Failed to update FAQ:", error)
    return { success: false, error: "Failed to update FAQ" }
  }
}

export async function deleteFAQ(id: string) {
  try {
    await prisma.fAQ.delete({
      where: { id },
    })

    revalidatePath("/admin/faqs")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete FAQ:", error)
    return { success: false, error: "Failed to delete FAQ" }
  }
}
