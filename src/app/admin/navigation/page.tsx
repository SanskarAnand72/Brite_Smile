import { getNavigationItems } from "@/lib/actions/navigation.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function NavigationPage() {
  const result = await getNavigationItems()
  const navigationItems = result.data || []

  return (
    <div>
      <PageHeader 
        title="Navigation" 
        description="Manage the main navigation menu."
        actionLabel="Add Link"
        actionHref="/admin/navigation/new"
      />
      
      <DataTable 
        columns={columns} 
        data={navigationItems} 
        searchKey="label" 
        searchPlaceholder="Search links..." 
      />
    </div>
  )
}
