"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const categories = ["All", "Teeth Whitening", "Veneers", "Implants", "Invisalign"]

const galleryImages = [
  { id: 1, url: "https://placehold.co/600x800/e2e8f0/475569?text=Smile+Makeover", category: "Veneers", isBeforeAfter: false },
  { id: 2, url: "https://placehold.co/800x600/e2e8f0/475569?text=Teeth+Whitening", category: "Teeth Whitening", isBeforeAfter: true },
  { id: 3, url: "https://placehold.co/600x600/e2e8f0/475569?text=Dental+Implants", category: "Implants", isBeforeAfter: false },
  { id: 4, url: "https://placehold.co/800x800/e2e8f0/475569?text=Invisalign+Result", category: "Invisalign", isBeforeAfter: false },
  { id: 5, url: "https://placehold.co/600x400/e2e8f0/475569?text=Before+and+After", category: "Veneers", isBeforeAfter: true },
  { id: 6, url: "https://placehold.co/400x600/e2e8f0/475569?text=Happy+Patient", category: "Teeth Whitening", isBeforeAfter: false },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = galleryImages.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  )

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category 
                ? "bg-teal-600 text-white" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={image.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={image.url}
                  alt={`Gallery image ${image.id}`}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>
                {image.isBeforeAfter && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Before & After
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium text-slate-800 text-center shadow-lg">
                    {image.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
