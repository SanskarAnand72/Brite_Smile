import { getFAQs } from "@/lib/actions/faq.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { DataTable } from "@/components/admin/DataTable"
import { columns } from "./columns"

export default async function FAQsPage() {
  const result = await getFAQs()
  const faqs = result.data || []

  return (
    <div>
      <PageHeader 
        title="FAQs" 
        description="Manage frequently asked questions."
        actionLabel="Add FAQ"
        actionHref="/admin/faqs/new"
      />
      
      <DataTable 
        columns={columns} 
        data={faqs} 
        searchKey="question" 
        searchPlaceholder="Search questions..." 
      />
    </div>
  )
}
