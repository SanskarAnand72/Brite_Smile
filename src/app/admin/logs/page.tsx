import { getActivityLogs } from "@/lib/actions/log.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function LogsPage() {
  const result = await getActivityLogs()
  const logs = result.data || []

  return (
    <div>
      <PageHeader 
        title="Activity Logs" 
        description="Audit trail of actions performed within the CMS."
      />
      
      <DataTable 
        columns={columns} 
        data={logs} 
        searchKey="action" 
        searchPlaceholder="Search actions..." 
      />
    </div>
  )
}
