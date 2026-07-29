import { TestimonialForm } from "@/components/admin/TestimonialForm"
import { getTestimonialById } from "@/lib/actions/testimonial.actions"
import { notFound } from "next/navigation"

interface EditTestimonialPageProps {
  params: {
    id: string
  }
}

export default async function EditTestimonialPage({ params }: EditTestimonialPageProps) {
  const result = await getTestimonialById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <TestimonialForm initialData={result.data} />
    </div>
  )
}
