"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X, CalendarCheck, ShieldCheck } from "lucide-react"
import { CalBookingEmbed } from "./CalBookingEmbed"
import { useEffect } from "react"

interface CalBookingModalProps {
  isOpen: boolean
  onClose: () => void
  selectedService?: string
}

export function CalBookingModal({
  isOpen,
  onClose,
  selectedService
}: CalBookingModalProps) {

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Glassmorphism Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 md:px-8 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg md:text-xl tracking-tight leading-none">
                    Book Your Appointment
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    Instant Confirmation • Brite Smile Dental Care
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors flex items-center justify-center focus:outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Content Container */}
            <div className="p-2 sm:p-4 md:p-6 overflow-y-auto flex-1 bg-slate-50/50">
              <CalBookingEmbed 
                calUrl="https://cal.com/atul-singh-ajxolc/book"
                height="650px"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
