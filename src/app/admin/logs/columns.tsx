"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export type LogList = {
  id: string
  action: string
  entityType: string
  entityId: string
  userId: string | null
  details: string | null
  createdAt: Date
}

export const columns: ColumnDef<LogList>[] = [
  {
    accessorKey: "action",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0 hover:bg-transparent"
        >
          Action
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-900">{row.getValue("action")}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "entityType",
    header: "Entity Type",
    cell: ({ row }) => <span className="text-slate-500">{row.getValue("entityType")}</span>,
  },
  {
    accessorKey: "entityId",
    header: "Entity ID",
    cell: ({ row }) => <span className="text-slate-500 text-xs font-mono">{row.getValue("entityId")}</span>,
  },
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => {
      const details = row.getValue("details") as string | null
      return <span className="text-slate-500 truncate max-w-[200px] block" title={details || ""}>{details || "-"}</span>
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-right">Timestamp</div>,
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date
      return (
        <div className="text-right text-slate-500 text-sm">
          {new Date(date).toLocaleString()}
        </div>
      )
    },
  },
]
