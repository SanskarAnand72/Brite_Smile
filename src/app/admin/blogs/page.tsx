import { getBlogs } from "@/lib/actions/blog.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function BlogsPage() {
  const result = await getBlogs()
  const blogs = result.data || []

  return (
    <div>
      <PageHeader 
        title="Blog Posts" 
        description="Manage your clinic's articles and news updates."
        actionLabel="Create Post"
        actionHref="/admin/blogs/new"
      />
      
      <DataTable 
        columns={columns} 
        data={blogs} 
        searchKey="title" 
        searchPlaceholder="Search posts..." 
      />
    </div>
  )
}
