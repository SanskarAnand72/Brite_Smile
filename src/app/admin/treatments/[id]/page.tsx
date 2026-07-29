import { TreatmentForm } from "@/components/admin/TreatmentForm"
import { getTreatmentById } from "@/lib/actions/treatment.actions"
import { notFound } from "next/navigation"

interface EditTreatmentPageProps {
  params: {
    id: string
  }
}

export default async function EditTreatmentPage({ params }: EditTreatmentPageProps) {
  const result = await getTreatmentById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto">
      <TreatmentForm initialData={result.data} />
    </div>
  )
}
