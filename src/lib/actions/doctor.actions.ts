"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const doctorSchema = z.object({
  name: z.string().min(2, "Name is required"),
  specializations: z.string().min(2, "Specializations are required"),
  biography: z.string().min(10, "Biography is required"),
  qualifications: z.string().min(5, "Qualifications are required"),
  experienceYears: z.coerce.number().min(0, "Experience years must be >= 0"),
  awards: z.string().optional().nullable(),
  timeline: z.string().optional().nullable(),
  imageId: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
})

export async function getDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: doctors }
  } catch (error) {
    console.error("Failed to fetch doctors:", error)
    return { success: false, error: "Failed to fetch doctors" }
  }
}

export async function getDoctorById(id: string) {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
    })
    return { success: true, data: doctor }
  } catch (error) {
    console.error("Failed to fetch doctor:", error)
    return { success: false, error: "Failed to fetch doctor" }
  }
}

export async function createDoctor(data: z.infer<typeof doctorSchema>) {
  try {
    const validatedData = doctorSchema.parse(data)

    const doctor = await prisma.doctor.create({
      data: validatedData,
    })

    revalidatePath("/admin/doctors")
    revalidatePath("/doctors")
    return { success: true, data: doctor }
  } catch (error) {
    console.error("Failed to create doctor:", error)
    return { success: false, error: "Failed to create doctor" }
  }
}

export async function updateDoctor(id: string, data: z.infer<typeof doctorSchema>) {
  try {
    const validatedData = doctorSchema.parse(data)

    const doctor = await prisma.doctor.update({
      where: { id },
      data: validatedData,
    })

    revalidatePath("/admin/doctors")
    revalidatePath("/doctors")
    return { success: true, data: doctor }
  } catch (error) {
    console.error("Failed to update doctor:", error)
    return { success: false, error: "Failed to update doctor" }
  }
}

export async function deleteDoctor(id: string) {
  try {
    await prisma.doctor.delete({
      where: { id },
    })

    revalidatePath("/admin/doctors")
    revalidatePath("/doctors")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete doctor:", error)
    return { success: false, error: "Failed to delete doctor" }
  }
}
