import { PageHeader } from "@/components/admin/PageHeader"
import { NavigationForm } from "@/components/admin/NavigationForm"

export default function NewNavigationPage() {
  return (
    <div>
      <PageHeader 
        title="Add Navigation Link" 
        description="Add a new link to the main navigation menu."
      />
      <div className="mt-8">
        <NavigationForm />
      </div>
    </div>
  )
}
