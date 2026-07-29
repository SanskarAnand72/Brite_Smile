"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { deleteNavigationItem } from "@/lib/actions/navigation.actions"
import { useTransition } from "react"
import { useRouter } from "next/navigation"

export type NavigationItem = {
  id: string
  label: string
  href: string
  order: number
  isEnabled: boolean
}

export const columns: ColumnDef<NavigationItem>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "href",
    header: "URL",
  },
  {
    accessorKey: "isEnabled",
    header: "Status",
    cell: ({ row }) => {
      const isEnabled = row.original.isEnabled
      return (
        <Badge variant={isEnabled ? "default" : "secondary"}>
          {isEnabled ? "Visible" : "Hidden"}
        </Badge>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original

      return <ActionCell item={item} />
    },
  },
]

function ActionCell({ item }: { item: NavigationItem }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this link?")) {
      startTransition(async () => {
        await deleteNavigationItem(item.id)
        router.refresh()
      })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group/button inline-flex shrink-0 items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">Open menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={`/admin/navigation/${item.id}`} className="flex items-center w-full">
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={handleDelete}
          disabled={isPending}
          className="text-red-600 focus:text-red-600"
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
