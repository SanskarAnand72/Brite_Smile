"use server"

import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  treatmentId: z.string().optional(),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  notes: z.string().optional(),
})

export async function submitAppointment(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries())
    
    // Parse and validate data
    const validatedFields = bookingSchema.safeParse({
      ...data,
      treatmentId: data.treatmentId === "none" ? undefined : data.treatmentId,
    })

    if (!validatedFields.success) {
      return {
        error: "Validation failed. Please check your inputs.",
        details: validatedFields.error.flatten().fieldErrors
      }
    }

    const { name, email, phone, treatmentId, preferredDate, preferredTime, notes } = validatedFields.data

    // Save to Database
    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        treatmentId,
        preferredDate: new Date(preferredDate),
        preferredTime,
        notes,
        status: "PENDING"
      }
    })

    revalidatePath("/admin/appointments")

    // Generate WhatsApp link (for client redirect)
    // URL Encode the message
    const message = `Hello Brite Smile! I just booked an appointment online.
Name: ${name}
Date: ${preferredDate}
Time: ${preferredTime}`
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`

    return { 
      success: true, 
      message: "Appointment booked successfully!",
      whatsappUrl 
    }

  } catch (error) {
    console.error("Booking error:", error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
