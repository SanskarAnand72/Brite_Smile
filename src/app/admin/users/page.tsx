import { getUsers } from "@/lib/actions/user.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function UsersPage() {
  const result = await getUsers()
  const users = result.data || []

  return (
    <div>
      <PageHeader 
        title="Users & Roles" 
        description="Manage admin and staff access to the CMS."
        actionLabel="Add User"
        actionHref="/admin/users/new"
      />
      
      <DataTable 
        columns={columns} 
        data={users} 
        searchKey="email" 
        searchPlaceholder="Search emails..." 
      />
    </div>
  )
}
