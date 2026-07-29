import { FAQForm } from "@/components/admin/FAQForm"
import { getFAQById } from "@/lib/actions/faq.actions"
import { notFound } from "next/navigation"

interface EditFAQPageProps {
  params: {
    id: string
  }
}

export default async function EditFAQPage({ params }: EditFAQPageProps) {
  const result = await getFAQById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <FAQForm initialData={result.data} />
    </div>
  )
}
