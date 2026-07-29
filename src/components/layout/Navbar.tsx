"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useBookingModal } from "@/components/booking/BookingContext"

type NavbarProps = {
  navLinks: { name: string; href: string }[]
  contactPhone: string
  clinicName: string
}

export function Navbar({ navLinks, contactPhone }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { openBookingModal } = useBookingModal()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl py-3 border-b border-slate-200/50 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
          : "bg-transparent py-5 lg:py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex items-center justify-between gap-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-700 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 fill-white/20 animate-pulse" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight font-heading">
            <span className="text-slate-900">BRITE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 ml-1.5">SMILE</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[14px] font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:shadow-sm whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a 
            href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center gap-2.5 bg-slate-100/80 hover:bg-white transition-all duration-300 rounded-full py-2 px-4 border border-slate-200/60 text-slate-700 font-semibold text-[14px] hover:shadow-md hover:border-blue-200"
          >
            <div className="bg-blue-600 p-1.5 rounded-full shadow-sm text-white">
              <Phone className="h-3.5 w-3.5" />
            </div>
            <span>{contactPhone}</span>
          </a>
          
          <Button 
            onClick={() => openBookingModal()}
            size="lg"
            variant="gradient"
            className="rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 text-[14px]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-slate-800 hover:text-blue-600 p-3 rounded-xl hover:bg-blue-50/60 transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-px bg-slate-100 my-1" />
            
            <a 
              href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center justify-center gap-3 bg-slate-100 p-3.5 rounded-2xl text-slate-800 font-semibold text-base"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span>Call: {contactPhone}</span>
            </a>

            <Button 
              onClick={() => {
                setIsMobileMenuOpen(false)
                openBookingModal()
              }}
              variant="gradient"
              size="lg"
              className="w-full rounded-2xl py-6 text-base font-bold shadow-xl shadow-blue-600/30"
            >
              Book Appointment Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

