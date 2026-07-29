"use client"

import { useState } from "react"
import { Calendar, Loader2, ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalBookingEmbedProps {
  calUrl?: string
  className?: string
  height?: string
}

export function CalBookingEmbed({
  calUrl = "https://cal.com/atul-singh-ajxolc/book",
  className = "",
  height = "700px"
}: CalBookingEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Append embed parameters for optimal styling
  const embedUrl = calUrl.includes("?") 
    ? `${calUrl}&embed=true` 
    : `${calUrl}?embed=true`

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-xl ${className}`}>
      
      {/* Loading Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-white p-6 md:p-10 flex flex-col items-center justify-center min-h-[500px]">
          <div className="w-full max-w-2xl space-y-6 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-5 w-40 bg-slate-200 rounded-md" />
                  <div className="h-4 w-28 bg-slate-100 rounded-md" />
                </div>
              </div>
              <div className="h-8 w-24 bg-slate-100 rounded-full" />
            </div>

            {/* Content Skeleton Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-4">
                <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
                <div className="h-4 w-full bg-slate-100 rounded-md" />
                <div className="h-4 w-5/6 bg-slate-100 rounded-md" />
                <div className="h-20 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 space-y-2">
                  <div className="h-4 w-1/2 bg-slate-200 rounded" />
                  <div className="h-3 w-3/4 bg-slate-100 rounded" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-10 w-full bg-slate-100 rounded-lg" />
                <div className="grid grid-cols-7 gap-2 pt-2">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div key={i} className="h-9 w-full bg-slate-100 rounded-md" />
                  ))}
                </div>
              </div>
            </div>

            {/* Spinner Overlay */}
            <div className="flex items-center justify-center gap-3 pt-6 text-blue-600 font-semibold text-sm">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Loading Brite Smile Booking System...</span>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Cal.com iFrame */}
      <iframe
        src={embedUrl}
        title="Book Appointment with Brite Smile Dental Care"
        className="w-full border-0 rounded-2xl md:rounded-3xl"
        style={{ height, minHeight: "550px" }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        allow="camera; microphone; autoplay; payment"
      />

      {/* Footer Fallback Link */}
      <div className="bg-slate-50 border-t border-slate-100 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-medium">
          <Calendar className="w-3.5 h-3.5 text-blue-600" />
          Official Online Booking System
        </span>
        <a
          href={calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
        >
          Open booking page in new tab
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
