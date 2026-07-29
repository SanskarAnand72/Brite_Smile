"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown, Eye, Trash, CheckCircle2, Clock, XCircle, CalendarX } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { updateAppointmentStatus } from "@/lib/actions/appointment.actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export type AppointmentList = {
  id: string
  name: string
  email: string
  phone: string
  preferredDate: Date
  preferredTime: string
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED"
  createdAt: Date
  treatment?: {
    title: string
  } | null
}

const statusConfig = {
  PENDING: { color: "bg-amber-100 text-amber-800", icon: Clock, label: "Pending" },
  CONFIRMED: { color: "bg-blue-100 text-blue-800", icon: CheckCircle2, label: "Confirmed" },
  COMPLETED: { color: "bg-emerald-100 text-emerald-800", icon: CheckCircle2, label: "Completed" },
  CANCELLED: { color: "bg-rose-100 text-rose-800", icon: XCircle, label: "Cancelled" },
}

export const columns: ColumnDef<AppointmentList>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0 hover:bg-transparent"
        >
          Patient Info
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const apt = row.original
      return (
        <div className="flex flex-col">
          <span className="font-medium text-slate-900">{apt.name}</span>
          <span className="text-xs text-slate-500">{apt.email}</span>
          <span className="text-xs text-slate-500">{apt.phone}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "treatment",
    header: "Treatment",
    cell: ({ row }) => {
      const treatment = row.original.treatment
      return <span className="text-slate-600 font-medium">{treatment ? treatment.title : "General Checkup"}</span>
    },
  },
  {
    accessorKey: "preferredDate",
    header: "Date & Time",
    cell: ({ row }) => {
      const date = row.getValue("preferredDate") as Date
      const time = row.original.preferredTime
      return (
        <div className="flex flex-col">
          <span className="font-medium text-slate-800">{new Date(date).toLocaleDateString()}</span>
          <span className="text-xs text-slate-500">{time}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as keyof typeof statusConfig
      const config = statusConfig[status]
      const Icon = config.icon
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
          <Icon className="w-3.5 h-3.5" /> {config.label}
        </span>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const appointment = row.original
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter()

      const handleStatusChange = async (status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED") => {
        const result = await updateAppointmentStatus(appointment.id, status)
        if (result.success) {
          toast.success(`Appointment marked as ${status.toLowerCase()}`)
          router.refresh()
        } else {
          toast.error("Failed to update status")
        }
      }

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-8 w-8 p-0 inline-flex items-center justify-center rounded-md hover:bg-slate-100">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem >
                <Link href={`/admin/appointments/${appointment.id}`} className="cursor-pointer">
                  <Eye className="mr-2 h-4 w-4" /> View Details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleStatusChange("CONFIRMED")} className="cursor-pointer">
                <CheckCircle2 className="mr-2 h-4 w-4 text-blue-600" /> Confirm
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("COMPLETED")} className="cursor-pointer">
                <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-600" /> Complete
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("CANCELLED")} className="cursor-pointer">
                <CalendarX className="mr-2 h-4 w-4 text-rose-600" /> Cancel
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-rose-600 focus:text-rose-600 cursor-pointer">
                <Trash className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
