import { getSettings } from "@/lib/actions/setting.actions"
import { PageHeader } from "@/components/admin/PageHeader"
import { SettingsForm } from "@/components/admin/SettingsForm"

export default async function SettingsPage() {
  const result = await getSettings()
  const settings = result.data || {}

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <PageHeader 
        title="Website Settings" 
        description="Configure global settings for your clinic's website."
      />
      
      <SettingsForm initialData={settings} />
    </div>
  )
}
