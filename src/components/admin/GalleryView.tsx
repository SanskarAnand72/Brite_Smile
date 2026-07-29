"use client"

import { useState } from "react"
import { CldUploadWidget } from "next-cloudinary"
import { UploadCloud, Loader2, Trash2, Tag } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { createGalleryImage, deleteGalleryImage, updateGalleryImage } from "@/lib/actions/gallery.actions"

interface GalleryImage {
  id: string
  publicId: string
  url: string
  category: string | null
  altText: string | null
  isBeforeAfter: boolean
}

export function GalleryView({ initialImages }: { initialImages: GalleryImage[] }) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [isUploading, setIsUploading] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUploadSuccess = async (result: any) => {
    setIsUploading(true)
    try {
      const publicId = result?.info?.public_id
      const url = result?.info?.secure_url

      if (publicId && url) {
        const response = await createGalleryImage({
          publicId,
          url,
          category: "General",
          isBeforeAfter: false,
          featured: false,
          displayOrder: 0,
        })

        if (response.success && response.data) {
          setImages(prev => [response.data, ...prev])
          toast.success("Image uploaded to gallery")
        }
      }
    } catch (error) {
      toast.error("Failed to save image to gallery")
    } finally {
      setIsUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    setDeletingId(id)
    try {
      const result = await deleteGalleryImage(id)
      if (result.success) {
        setImages(prev => prev.filter(img => img.id !== id))
        toast.success("Image deleted from gallery")
      } else {
        toast.error("Failed to delete image")
      }
    } catch (error) {
      toast.error("An error occurred while deleting")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4 text-teal-600">
          <UploadCloud className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-heading mb-2">Upload to Gallery</h3>
        <p className="text-slate-500 mb-6 max-w-md mx-auto">
          Add new images to your clinic's gallery. You can categorize them later.
        </p>

        <CldUploadWidget 
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          options={{
            maxFiles: 10,
            multiple: true,
          }}
          onSuccess={handleUploadSuccess}
        >
          {({ open }) => (
            <Button 
              onClick={() => open()}
              disabled={isUploading}
              className="bg-primary hover:bg-teal-700 text-white rounded-full px-8 h-12 shadow-md hover-lift"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <UploadCloud className="w-5 h-5 mr-2" />
                  Select Images
                </>
              )}
            </Button>
          )}
        </CldUploadWidget>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((image) => (
          <div key={image.id} className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="relative aspect-square">
              <Image 
                src={image.url} 
                alt={image.altText || "Gallery Image"} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    className="h-8 w-8 rounded-full shadow-lg"
                    onClick={() => handleDelete(image.id)}
                    disabled={deletingId === image.id}
                  >
                    {deletingId === image.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700 shadow-sm">
                    <Tag className="w-3 h-3 mr-1" />
                    {image.category || "General"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {images.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 border-dashed">
          <p className="text-slate-500">No images in the gallery yet.</p>
        </div>
      )}
    </div>
  )
}
