"use server"

import { prisma } from "@/lib/prisma"
import { z } from "zod"

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  treatmentId: z.string().optional(),
  preferredDate: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),
  preferredTime: z.string().min(1, "Preferred time is required"),
  notes: z.string().optional(),
})

export async function createPublicAppointment(data: z.infer<typeof bookingSchema>) {
  try {
    const validatedData = bookingSchema.parse(data)
    
    // Convert date string to Date object
    const dateObj = new Date(validatedData.preferredDate)

    const appointment = await prisma.appointment.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        treatmentId: validatedData.treatmentId || undefined,
        preferredDate: dateObj,
        preferredTime: validatedData.preferredTime,
        notes: validatedData.notes,
        status: "PENDING",
      }
    })

    // Log the action anonymously
    await prisma.activityLog.create({
      data: {
        action: "NEW_BOOKING",
        entityType: "Appointment",
        entityId: appointment.id,
        details: `New booking request from ${validatedData.name}`
      }
    })

    return { success: true, message: "Appointment request submitted successfully." }
  } catch (error) {
    console.error("Failed to book appointment:", error)
    return { success: false, error: "Failed to book appointment. Please try again." }
  }
}
