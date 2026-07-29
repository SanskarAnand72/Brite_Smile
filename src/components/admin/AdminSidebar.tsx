"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  CalendarDays, 
  Activity, 
  Image as ImageIcon, 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  Stethoscope,
  Settings,
  Users,
  Search,
  LogOut,
  Star,
  List
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Appointments", href: "/admin/appointments", icon: CalendarDays },
  { name: "Treatments", href: "/admin/treatments", icon: Activity },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Testimonials", href: "/admin/testimonials", icon: Star },
  { name: "Blogs", href: "/admin/blogs", icon: FileText },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { name: "Navigation", href: "/admin/navigation", icon: List },
  { name: "SEO Manager", href: "/admin/seo", icon: Search },
  { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Users & Staff", href: "/admin/users", icon: Users },
  { name: "Activity Logs", href: "/admin/logs", icon: Activity },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-900 flex flex-col h-full border-r border-slate-800 hidden md:flex shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link href="/admin" className="flex items-center gap-2 group">
          <span className="text-xl font-bold font-heading text-white tracking-tight">
            Brite<span className="text-primary">Admin</span>
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-4 scrollbar-thin scrollbar-thumb-slate-800">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                isActive 
                  ? "text-white bg-slate-800/80" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-300")} />
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-slate-400 hover:text-rose-400 hover:bg-slate-800/50 transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
