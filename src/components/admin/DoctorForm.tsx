"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Save, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MediaManager } from "./MediaManager"
import { RichTextEditor } from "./RichTextEditor"
import { createDoctor, updateDoctor } from "@/lib/actions/doctor.actions"

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  specializations: z.string().min(2, "Specialty is required."),
  biography: z.string().min(10, "Bio is required."),
  qualifications: z.string().min(5, "Qualifications are required."),
  experienceYears: z.any().transform(Number),
  awards: z.string().optional().nullable(),
  timeline: z.string().optional().nullable(),
  imageId: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
})

interface DoctorFormProps {
  initialData?: Partial<z.infer<typeof formSchema>> & { id: string }
}

export function DoctorForm({ initialData }: DoctorFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      name: initialData?.name || "",
      specializations: initialData?.specializations || "",
      biography: initialData?.biography || "",
      qualifications: initialData?.qualifications || "",
      experienceYears: initialData?.experienceYears || 0,
      awards: initialData?.awards || "",
      timeline: initialData?.timeline || "",
      imageId: initialData?.imageId || "",
      imageUrl: initialData?.imageUrl || "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = initialData 
        ? await updateDoctor(initialData.id, values)
        : await createDoctor(values)
      
      if (result.success) {
        toast.success(`Doctor successfully ${initialData ? 'updated' : 'created'}`)
        router.push("/admin/doctors")
        router.refresh()
      } else {
        toast.error(result.error || "An error occurred")
      }
    } catch (error) {
      toast.error("Failed to save doctor")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/doctors">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold font-heading">
          {initialData ? "Edit Doctor" : "Add New Doctor"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Doctor Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Dr. Sarah Jenkins" {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specializations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialty</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Orthodontist" {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experienceYears"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div>
              <FormLabel className="mb-2 block">Doctor Portrait</FormLabel>
              <MediaManager 
                defaultImage={form.getValues("imageUrl") || ""}
                onUploadSuccess={(url, publicId) => {
                  form.setValue("imageUrl", url)
                  form.setValue("imageId", publicId)
                }}
              />
            </div>
          </div>
          
          <FormField
            control={form.control}
            name="qualifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qualifications</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. DDS, MSc Orthodontics" {...field} className="h-12 bg-slate-50 border-slate-200" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="biography"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <RichTextEditor 
                    content={field.value} 
                    onChange={field.onChange} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end border-t border-slate-100 pt-6 mt-8">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-teal-700 text-white rounded-full px-8 h-12 shadow-lg hover-lift w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Save Doctor
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
