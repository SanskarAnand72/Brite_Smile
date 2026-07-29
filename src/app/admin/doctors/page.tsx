import { getDoctors } from "@/lib/actions/doctor.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function DoctorsPage() {
  const result = await getDoctors()
  const doctors = result.data || []

  return (
    <div>
      <PageHeader 
        title="Doctors" 
        description="Manage your clinic's doctors and staff members."
        actionLabel="Add Doctor"
        actionHref="/admin/doctors/new"
      />
      
      <DataTable 
        columns={columns} 
        data={doctors} 
        searchKey="name" 
        searchPlaceholder="Search doctors..." 
      />
    </div>
  )
}
