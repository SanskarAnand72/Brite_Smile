"use server"

import { prisma } from "@/lib/prisma"

export async function getActivityLogs() {
  try {
    const logs = await prisma.activityLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 100, // Limit to recent 100 logs
    })
    return { success: true, data: logs }
  } catch (error) {
    console.error("Failed to fetch activity logs:", error)
    return { success: false, error: "Failed to fetch activity logs" }
  }
}
