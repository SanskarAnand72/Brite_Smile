import { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"

export const metadata: Metadata = {
  title: "Smile Gallery | Brite Smile Dental Care",
  description: "View our gallery of stunning smile transformations and before & after cases.",
}

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Smile Gallery</h1>
          <p className="text-lg text-slate-600">
            Real patients, real results. Browse through our collection of smile transformations 
            and see what our expert dental team can do for you.
          </p>
        </div>

        <GalleryGrid />
      </div>
    </div>
  )
}
