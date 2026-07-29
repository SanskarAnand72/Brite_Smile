import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/admin/PageHeader"
import { NavigationForm } from "@/components/admin/NavigationForm"

export default async function EditNavigationPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const item = await prisma.navigationItem.findUnique({
    where: { id },
  })

  if (!item) {
    notFound()
  }

  return (
    <div>
      <PageHeader 
        title="Edit Navigation Link" 
        description="Update navigation link details."
      />
      <div className="mt-8">
        <NavigationForm initialData={item} />
      </div>
    </div>
  )
}
