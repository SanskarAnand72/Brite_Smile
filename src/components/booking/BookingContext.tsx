"use client"

import React, { createContext, useContext, useState } from "react"
import { CalBookingModal } from "./CalBookingModal"

interface BookingContextType {
  isOpen: boolean
  openBookingModal: (serviceName?: string) => void
  closeBookingModal: () => void
  selectedService?: string
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)

  const openBookingModal = (serviceName?: string) => {
    setSelectedService(serviceName)
    setIsOpen(true)
  }

  const closeBookingModal = () => {
    setIsOpen(false)
    setSelectedService(undefined)
  }

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openBookingModal,
        closeBookingModal,
        selectedService,
      }}
    >
      {children}
      <CalBookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        selectedService={selectedService}
      />
    </BookingContext.Provider>
  )
}

export function useBookingModal() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingProvider")
  }
  return context
}
