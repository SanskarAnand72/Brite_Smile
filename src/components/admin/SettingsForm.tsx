"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Save, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { updateSettings } from "@/lib/actions/setting.actions"
import { CldUploadWidget } from "next-cloudinary"

interface SettingsFormProps {
  initialData: Record<string, string>
}

export function SettingsForm({ initialData }: SettingsFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    defaultValues: {
      clinicName: initialData?.clinicName || "Brite Smile Dental Care",
      contactEmail: initialData?.contactEmail || "hello@britesmile.com",
      contactPhone: initialData?.contactPhone || "(555) 123-4567",
      address: initialData?.address || "123 Smile Avenue, NY 10001",
      workingHours: initialData?.workingHours || "Mon-Fri: 9am-6pm",
      facebookUrl: initialData?.facebookUrl || "",
      instagramUrl: initialData?.instagramUrl || "",
      twitterUrl: initialData?.twitterUrl || "",
      seoTitle: initialData?.seoTitle || "Brite Smile Dental Care",
      seoDescription: initialData?.seoDescription || "Premium dental care services.",
      heroHeadline: initialData?.heroHeadline || "Premium Dental Care for Your Perfect Smile",
      heroSubheadline: initialData?.heroSubheadline || "Expert dental care by Dr. Jenkins — Teeth Whitening, Implants, Root Canal & Orthodontics in New York at affordable prices. Your Smile Is Our Priority.",
      heroCtaText: initialData?.heroCtaText || "Book an Appointment",
      heroCtaLink: initialData?.heroCtaLink || "/book",
      heroBgImageUrl: initialData?.heroBgImageUrl || "/images/clinic_hero.jpg",
      heroDoctorImageUrl: initialData?.heroDoctorImageUrl || "/images/doctor_profile.jpg",
      googleMapsEmbedUrl: initialData?.googleMapsEmbedUrl || "",
      contactWhatsapp: initialData?.contactWhatsapp || "",
      emergencyNumber: initialData?.emergencyNumber || "",
    },
  })

  async function onSubmit(values: Record<string, string>) {
    setIsSubmitting(true)
    try {
      const result = await updateSettings(values)
      if (result.success) {
        toast.success("Settings updated successfully")
        router.refresh()
      } else {
        toast.error("Failed to update settings")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General & Contact</TabsTrigger>
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* General Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold font-heading mb-6 pb-4 border-b border-slate-100">General Information</h3>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="clinicName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Clinic Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Phone</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="bg-slate-50 border-slate-200 resize-none" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workingHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Working Hours</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactWhatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emergencyNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emergency Number</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold font-heading mb-6 pb-4 border-b border-slate-100">Social Media Links</h3>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="facebookUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook URL</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagramUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram URL</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitterUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter URL</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Global SEO */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
              <h3 className="text-lg font-bold font-heading mb-6 pb-4 border-b border-slate-100">Global SEO Settings</h3>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="seoTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default SEO Title</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seoDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default SEO Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-slate-50 border-slate-200 resize-none h-24" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            {/* Maps embed */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold font-heading mb-6 pb-4 border-b border-slate-100">Google Maps</h3>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="googleMapsEmbedUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Google Maps Embed URL</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="https://www.google.com/maps/embed?pb=..." className="bg-slate-50 border-slate-200 resize-none h-24" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        </TabsContent>
        <TabsContent value="hero">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold font-heading mb-6 pb-4 border-b border-slate-100">Hero Section</h3>
              <div className="space-y-6 max-w-2xl">
                <FormField
                  control={form.control}
                  name="heroHeadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="heroSubheadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subheadline</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-slate-50 border-slate-200 resize-none h-24" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="heroCtaText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CTA Button Text</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="heroCtaLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CTA Button Link</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="heroBgImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background Image URL</FormLabel>
                      <FormControl>
                        <div className="flex gap-4 items-center">
                          <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                          <CldUploadWidget 
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                            onSuccess={(result: any) => {
                              form.setValue("heroBgImageUrl", result.info.secure_url)
                            }}
                          >
                            {({ open }) => (
                              <Button type="button" variant="outline" onClick={() => open()}>Upload</Button>
                            )}
                          </CldUploadWidget>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="heroDoctorImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Doctor Image URL (Foreground)</FormLabel>
                      <FormControl>
                        <div className="flex gap-4 items-center">
                          <Input {...field} className="h-12 bg-slate-50 border-slate-200" />
                          <CldUploadWidget 
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                            onSuccess={(result: any) => {
                              form.setValue("heroDoctorImageUrl", result.info.secure_url)
                            }}
                          >
                            {({ open }) => (
                              <Button type="button" variant="outline" onClick={() => open()}>Upload</Button>
                            )}
                          </CldUploadWidget>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
          </div>
        </TabsContent>
        </Tabs>

        <div className="flex justify-end pt-4">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-primary hover:bg-teal-700 text-white rounded-full px-8 h-12 shadow-lg hover-lift w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Saving Changes...
              </>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Save Settings
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
