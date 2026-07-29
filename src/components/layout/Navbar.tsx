"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type NavbarProps = {
  navLinks: { name: string; href: string }[]
  contactPhone: string
  clinicName: string
}

export function Navbar({ navLinks, contactPhone, clinicName }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-4 border-b border-slate-100"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="text-[26px] font-extrabold tracking-tight">
            <span className="text-slate-900">BRITE</span>
            <span className="text-blue-600 ml-1.5">SMILE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a 
            href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 transition-colors rounded-full py-2.5 px-4 pr-5 text-slate-700 font-semibold text-[15px] whitespace-nowrap"
          >
            <div className="bg-white p-1.5 rounded-full shadow-sm">
              <Phone className="h-[18px] w-[18px] text-slate-700" fill="currentColor" />
            </div>
            {contactPhone}
          </a>
          
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-6 text-[15px] font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
            <Link href="/book" className="flex items-center gap-2">
              Book Appointment
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t py-6 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-800 hover:text-primary transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <Button asChild className="w-full bg-primary hover:bg-teal-700 text-white rounded-full py-6 text-lg shadow-lg shadow-primary/20">
              <Link href="/book">Book Appointment Now</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
