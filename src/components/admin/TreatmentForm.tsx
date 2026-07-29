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
import { createTreatment, updateTreatment } from "@/lib/actions/treatment.actions"

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  slug: z.string().min(3, "Slug must be at least 3 characters."),
  overview: z.string().min(10, "Overview is required."),
  benefits: z.string().optional(),
  procedureDetails: z.string().optional(),
  recoveryInfo: z.string().optional(),
  featuredImageId: z.string().optional().nullable(),
  featuredImageUrl: z.string().optional().nullable(),
})

interface TreatmentFormProps {
  initialData?: Partial<z.infer<typeof formSchema>> & { id: string }
}

export function TreatmentForm({ initialData }: TreatmentFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      overview: initialData?.overview || "",
      benefits: initialData?.benefits || "",
      procedureDetails: initialData?.procedureDetails || "",
      recoveryInfo: initialData?.recoveryInfo || "",
      featuredImageId: initialData?.featuredImageId || "",
      featuredImageUrl: initialData?.featuredImageUrl || "",
    },
  })

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    form.setValue("title", title)
    if (!initialData) {
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
      form.setValue("slug", slug, { shouldValidate: true })
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const submitData = {
        ...values,
        benefits: values.benefits || "",
        procedureDetails: values.procedureDetails || "",
        recoveryInfo: values.recoveryInfo || "",
      };

      const result = initialData 
        ? await updateTreatment(initialData.id, submitData)
        : await createTreatment(submitData)
      
      if (result.success) {
        toast.success(`Treatment successfully ${initialData ? 'updated' : 'created'}`)
        router.push("/admin/treatments")
        router.refresh()
      } else {
        toast.error(result.error || "An error occurred")
      }
    } catch (error) {
      toast.error("Failed to save treatment")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/treatments">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold font-heading">
          {initialData ? "Edit Treatment" : "Add New Treatment"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treatment Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Dental Implants" {...field} onChange={handleTitleChange} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. dental-implants" {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                    <FormDescription>
                      This will be the URL for the treatment page (/treatments/slug).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div>
              <FormLabel className="mb-2 block">Featured Image</FormLabel>
              <MediaManager 
                defaultImage={form.getValues("featuredImageUrl") || ""}
                onUploadSuccess={(url, publicId) => {
                  form.setValue("featuredImageUrl", url)
                  form.setValue("featuredImageId", publicId)
                }}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="overview"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overview</FormLabel>
                <FormControl>
                  <RichTextEditor 
                    content={field.value} 
                    onChange={field.onChange} 
                  />
                </FormControl>
                <FormDescription>
                  A detailed overview of the treatment.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="benefits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Benefits</FormLabel>
                  <FormControl>
                    <RichTextEditor 
                      content={field.value || ""} 
                      onChange={field.onChange} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="procedureDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Procedure Details</FormLabel>
                  <FormControl>
                    <RichTextEditor 
                      content={field.value || ""} 
                      onChange={field.onChange} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="recoveryInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recovery Information</FormLabel>
                <FormControl>
                  <RichTextEditor 
                    content={field.value || ""} 
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
                  Save Treatment
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
