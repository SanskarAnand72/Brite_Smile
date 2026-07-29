"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        treatment: true
      }
    })
    return { success: true, data: appointments }
  } catch (error) {
    console.error("Failed to fetch appointments:", error)
    return { success: false, error: "Failed to fetch appointments" }
  }
}

export async function getAppointmentById(id: string) {
  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id },
      include: {
        treatment: true
      }
    })
    return { success: true, data: appointment }
  } catch (error) {
    console.error("Failed to fetch appointment:", error)
    return { success: false, error: "Failed to fetch appointment" }
  }
}

export async function updateAppointmentStatus(id: string, status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED") {
  try {
    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status },
    })

    revalidatePath("/admin/appointments")
    revalidatePath(`/admin/appointments/${id}`)
    return { success: true, data: appointment }
  } catch (error) {
    console.error("Failed to update appointment status:", error)
    return { success: false, error: "Failed to update appointment status" }
  }
}

export async function deleteAppointment(id: string) {
  try {
    await prisma.appointment.delete({
      where: { id },
    })

    revalidatePath("/admin/appointments")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete appointment:", error)
    return { success: false, error: "Failed to delete appointment" }
  }
}
