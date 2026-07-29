"use client"

import { useState } from "react"
import { CldUploadWidget } from "next-cloudinary"
import { UploadCloud, Image as ImageIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface MediaManagerProps {
  onUploadSuccess: (url: string, publicId: string) => void
  defaultImage?: string
  className?: string
}

export function MediaManager({ onUploadSuccess, defaultImage, className }: MediaManagerProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(defaultImage || null)

  return (
    <div className={`border-2 border-dashed border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors hover:border-primary/50 group ${className || ""}`}>
      <CldUploadWidget
        uploadPreset="britesmile_assets"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess={(result: any) => {
          if (result.info) {
            setImagePreview(result.info.secure_url)
            onUploadSuccess(result.info.secure_url, result.info.public_id)
          }
        }}
      >
        {({ open }) => {
          return (
            <div className="relative w-full h-full min-h-[200px] flex flex-col items-center justify-center p-6">
              {imagePreview ? (
                <>
                  <Image 
                    src={imagePreview} 
                    alt="Preview" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button 
                      type="button" 
                      variant="secondary" 
                      onClick={(e) => { e.preventDefault(); open() }}
                    >
                      Replace Image
                    </Button>
                    <Button 
                      type="button" 
                      variant="destructive" 
                      size="icon"
                      onClick={(e) => {
                        e.preventDefault()
                        setImagePreview(null)
                        onUploadSuccess("", "") // Clear image
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div 
                  className="flex flex-col items-center justify-center cursor-pointer text-slate-500 w-full h-full"
                  onClick={(e) => { e.preventDefault(); open() }}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              )}
            </div>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}
