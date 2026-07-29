import { getGalleryImages } from "@/lib/actions/gallery.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { GalleryView } from "@/components/admin/GalleryView"

export default async function GalleryPage() {
  const result = await getGalleryImages()
  // @ts-ignore
  const images = result.data || []

  return (
    <div>
      <PageHeader 
        title="Media Gallery" 
        description="Manage all images used across your clinic's website."
      />
      
      <div className="mt-8">
        <GalleryView initialImages={images} />
      </div>
    </div>
  )
}
