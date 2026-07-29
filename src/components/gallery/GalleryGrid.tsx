"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn, Loader2, Sparkles, CheckCircle2 } from "lucide-react"

const categories = [
  "All", 
  "Teeth Whitening", 
  "Implants", 
  "Veneers", 
  "Invisalign", 
  "Root Canal", 
  "Smile Makeover"
]

const galleryImages = [
  { 
    id: 1, 
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", 
    category: "Smile Makeover", 
    title: "Complete Smile Reconstruction", 
    isBeforeAfter: true 
  },
  { 
    id: 2, 
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", 
    category: "Teeth Whitening", 
    title: "Laser Whitening Treatment", 
    isBeforeAfter: false 
  },
  { 
    id: 3, 
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", 
    category: "Implants", 
    title: "Single Tooth Titanium Implant", 
    isBeforeAfter: false 
  },
  { 
    id: 4, 
    url: "/images/clinic_hero.jpg", 
    category: "Smile Makeover", 
    title: "Brite Smile Dental Facility", 
    isBeforeAfter: false 
  },
  { 
    id: 5, 
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80", 
    category: "Invisalign", 
    title: "Clear Aligner Straightening", 
    isBeforeAfter: false 
  },
  { 
    id: 6, 
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", 
    category: "Veneers", 
    title: "Porcelain Laminate Veneers", 
    isBeforeAfter: true 
  },
  { 
    id: 7, 
    url: "/images/gallery_1.jpg", 
    category: "Root Canal", 
    title: "Painless Endodontic Care", 
    isBeforeAfter: false 
  },
  { 
    id: 8, 
    url: "/images/gallery_2.jpg", 
    category: "Implants", 
    title: "Full Arch Restoration", 
    isBeforeAfter: true 
  },
  { 
    id: 9, 
    url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80", 
    category: "Teeth Whitening", 
    title: "In-Office Brightening", 
    isBeforeAfter: true 
  },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>({})

  const filteredImages = galleryImages.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  )

  const handleImageLoad = (id: number) => {
    setLoadingImages(prev => ({ ...prev, [id]: false }))
  }

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 md:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm ${
              activeCategory === category 
                ? "bg-blue-600 text-white shadow-blue-600/30 scale-105" 
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              key={image.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                
                {/* Skeleton Loader */}
                {loadingImages[image.id] !== false && (
                  <div className="absolute inset-0 z-10 bg-slate-200 animate-pulse flex items-center justify-center">
                    <Loader2 className="w-6 h-6 text-slate-400 animate-spin" />
                  </div>
                )}

                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onLoad={() => handleImageLoad(image.id)}
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-full text-slate-900 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-md border border-white">
                    {image.category}
                  </span>
                  {image.isBeforeAfter && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Before & After
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 bg-white border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-base font-heading group-hover:text-blue-600 transition-colors">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-900/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{selectedImage.title}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{selectedImage.category}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image View */}
              <div className="relative w-full h-[65vh] max-h-[600px] bg-slate-900 flex items-center justify-center">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
