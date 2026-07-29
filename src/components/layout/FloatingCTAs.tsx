"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, CalendarCheck } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTAs after scrolling down a bit
      if (window.scrollY > 300) {
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
          {/* Floating WhatsApp CTA - Desktop & Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 hidden sm:block md:block lg:block"
          >
            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 relative"
            >
              <MessageCircle className="w-6 h-6" />
              {/* Tooltip */}
              <div className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
            </a>
          </motion.div>

          {/* Sticky Bottom CTA - Mobile Only */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-0 left-0 w-full z-50 sm:hidden bg-white/80 backdrop-blur-xl border-t border-slate-200 p-4 pb-6 flex gap-3 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]"
          >
            <Link 
              href="/book" 
              className="flex-1 bg-primary hover:bg-teal-700 text-white rounded-2xl h-14 flex items-center justify-center font-bold shadow-lg transition-colors"
            >
              <CalendarCheck className="mr-2 h-5 w-5" /> Book Now
            </Link>
            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
