import { UserForm } from "@/components/admin/UserForm"
import { getUserById } from "@/lib/actions/user.actions"
import { notFound } from "next/navigation"

interface EditUserPageProps {
  params: {
    id: string
  }
}

export default async function EditUserPage({ params }: EditUserPageProps) {
  const result = await getUserById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <UserForm initialData={result.data} />
    </div>
  )
}
