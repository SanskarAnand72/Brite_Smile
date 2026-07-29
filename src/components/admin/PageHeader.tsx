import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  actionHref?: string
}

export function PageHeader({ title, description, actionLabel, onAction, actionHref }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">{title}</h1>
        {description && <p className="text-slate-500 mt-1">{description}</p>}
      </div>
      
      {actionLabel && (
        actionHref ? (
          <Link href={actionHref}>
            <Button className="bg-primary hover:bg-teal-700 text-white rounded-full px-6 shadow-md hover-lift">
              <Plus className="w-4 h-4 mr-2" />
              {actionLabel}
            </Button>
          </Link>
        ) : (
          <Button 
            onClick={onAction} 
            className="bg-primary hover:bg-teal-700 text-white rounded-full px-6 shadow-md hover-lift"
          >
            <Plus className="w-4 h-4 mr-2" />
            {actionLabel}
          </Button>
        )
      )}
    </div>
  )
}
