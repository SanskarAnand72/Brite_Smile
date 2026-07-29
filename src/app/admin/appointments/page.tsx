import { getAppointments } from "@/lib/actions/appointment.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function AppointmentsPage() {
  const result = await getAppointments()
  const appointments = result.data || []

  return (
    <div>
      <PageHeader 
        title="Appointments" 
        description="Manage patient bookings and schedule."
      />
      
      <DataTable 
        columns={columns} 
        data={appointments} 
        searchKey="name" 
        searchPlaceholder="Search patients..." 
      />
    </div>
  )
}
