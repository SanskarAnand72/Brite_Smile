"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, CalendarCheck } from "lucide-react"
import { useState, useEffect } from "react"
import { useBookingModal } from "@/components/booking/BookingContext"
import { mockData } from "@/lib/data/mock"

export function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false)
  const { openBookingModal } = useBookingModal()
  
  const rawPhone = mockData.settings.contactPhone.replace(/[^0-9]/g, '')
  const whatsappUrl = `https://wa.me/${rawPhone}`

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating WhatsApp CTA - Desktop & Tablet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 right-8 z-50 hidden sm:block"
          >
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 relative"
            >
              <MessageCircle className="w-6 h-6 fill-white/20" />
              {/* Tooltip */}
              <div className="absolute right-full mr-3.5 bg-slate-900 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Instant Dental Advice</span>
              </div>
              {/* Animated Pulse Ring */}
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 pointer-events-none" />
            </a>
          </motion.div>

          {/* Sticky App Bottom Action Bar - Mobile Native Experience */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-0 left-0 w-full z-50 sm:hidden bg-white/85 backdrop-blur-2xl border-t border-slate-200/80 p-3.5 pb-5 flex gap-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)]"
          >
            <button 
              onClick={() => openBookingModal()} 
              className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white rounded-2xl h-13 flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all btn-sheen"
            >
              <CalendarCheck className="mr-2 h-4 w-4" /> Book Appointment
            </button>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              aria-label="WhatsApp Us"
              className="w-13 h-13 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 active:scale-[0.98] transition-transform shrink-0"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

