"use server"

import { z } from "zod"

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

    const { name, preferredDate, preferredTime } = validatedFields.data

    // DB integration coming later — log and return success
    console.log("Appointment request received:", validatedFields.data)

    const message = `Hello Brite Smile! I just booked an appointment online.\nName: ${name}\nDate: ${preferredDate}\nTime: ${preferredTime}`
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`

    return {
      success: true,
      message: "Appointment booked successfully!",
      whatsappUrl
    }
  } catch (error) {
    console.error("Booking error:", error)
    return { error: "Something went wrong. Please try again." }
  }
}
