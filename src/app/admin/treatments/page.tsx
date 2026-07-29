import { getTreatments } from "@/lib/actions/treatment.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function TreatmentsPage() {
  const result = await getTreatments()
  const treatments = result.data || []

  return (
    <div>
      <PageHeader 
        title="Treatments" 
        description="Manage all dental treatments and services offered by the clinic."
        actionLabel="Add Treatment"
        actionHref="/admin/treatments/new"
      />
      
      <DataTable 
        columns={columns} 
        data={treatments} 
        searchKey="title" 
        searchPlaceholder="Search treatments..." 
      />
    </div>
  )
}
