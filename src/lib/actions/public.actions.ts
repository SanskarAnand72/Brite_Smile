"use server"

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
    // Phase 2: connect to DB here
    console.log("Appointment request received:", validatedData)
    return { success: true, message: "Appointment request submitted successfully. We will contact you shortly." }
  } catch (error) {
    console.error("Failed to book appointment:", error)
    return { success: false, error: "Failed to book appointment. Please try again." }
  }
}
