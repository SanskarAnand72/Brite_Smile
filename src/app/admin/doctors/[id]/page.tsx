import { DoctorForm } from "@/components/admin/DoctorForm"
import { getDoctorById } from "@/lib/actions/doctor.actions"
import { notFound } from "next/navigation"

interface EditDoctorPageProps {
  params: {
    id: string
  }
}

export default async function EditDoctorPage({ params }: EditDoctorPageProps) {
  const result = await getDoctorById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto">
      <DoctorForm initialData={result.data} />
    </div>
  )
}
