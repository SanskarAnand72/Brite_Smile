"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import bcrypt from "bcryptjs"

const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal('')),
  role: z.enum(["ADMIN", "STAFF"]).default("STAFF"),
})

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      }
    })
    return { success: true, data: users }
  } catch (error) {
    console.error("Failed to fetch users:", error)
    return { success: false, error: "Failed to fetch users" }
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    })
    return { success: true, data: user }
  } catch (error) {
    console.error("Failed to fetch user:", error)
    return { success: false, error: "Failed to fetch user" }
  }
}

export async function createUser(data: z.infer<typeof userSchema>) {
  try {
    const validatedData = userSchema.parse(data)
    
    const existing = await prisma.user.findUnique({ where: { email: validatedData.email } })
    if (existing) {
      return { success: false, error: "Email already exists" }
    }

    if (!validatedData.password) {
      return { success: false, error: "Password is required for new users" }
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10)

    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        role: validatedData.role,
      },
      select: { id: true, name: true, email: true, role: true }
    })

    revalidatePath("/admin/users")
    return { success: true, data: user }
  } catch (error) {
    console.error("Failed to create user:", error)
    return { success: false, error: "Failed to create user" }
  }
}

export async function updateUser(id: string, data: z.infer<typeof userSchema>) {
  try {
    const validatedData = userSchema.parse(data)

    const existing = await prisma.user.findFirst({
      where: { 
        email: validatedData.email,
        id: { not: id }
      }
    })
    
    if (existing) {
      return { success: false, error: "Email already exists" }
    }

    const updateData: any = {
      name: validatedData.name,
      email: validatedData.email,
      role: validatedData.role,
    }

    if (validatedData.password) {
      updateData.password = await bcrypt.hash(validatedData.password, 10)
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: { id: true, name: true, email: true, role: true }
    })

    revalidatePath("/admin/users")
    return { success: true, data: user }
  } catch (error) {
    console.error("Failed to update user:", error)
    return { success: false, error: (error as Error).message || "Failed to update admin password" }
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    })

    revalidatePath("/admin/users")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete user:", error)
    return { success: false, error: "Failed to delete user" }
  }
}
