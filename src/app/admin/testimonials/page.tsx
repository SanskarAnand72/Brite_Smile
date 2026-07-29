import { getTestimonials } from "@/lib/actions/testimonial.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function TestimonialsPage() {
  const result = await getTestimonials()
  const testimonials = result.data || []

  return (
    <div>
      <PageHeader 
        title="Testimonials" 
        description="Manage patient reviews and video testimonials."
        actionLabel="Add Testimonial"
        actionHref="/admin/testimonials/new"
      />
      
      <DataTable 
        columns={columns} 
        data={testimonials} 
        searchKey="patientName" 
        searchPlaceholder="Search patients..." 
      />
    </div>
  )
}
