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
import { createTestimonial, updateTestimonial } from "@/lib/actions/testimonial.actions"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  patientName: z.string().min(2, "Patient name is required."),
  rating: z.coerce.number().min(1, "Minimum rating is 1").max(5, "Maximum rating is 5"),
  review: z.string().min(10, "Review is required."),
  videoUrl: z.string().optional(),
})

interface TestimonialFormProps {
  initialData?: Omit<Partial<z.infer<typeof formSchema>>, "videoUrl"> & { 
    id: string; 
    videoUrl?: string | null; 
    featured?: boolean; 
    displayOrder?: number 
  } 
}

export function TestimonialForm({ initialData }: TestimonialFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      patientName: initialData?.patientName || "",
      rating: initialData?.rating || 5,
      review: initialData?.review || "",
      videoUrl: initialData?.videoUrl || "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const submitData = {
        ...values,
        featured: initialData?.featured || false,
        displayOrder: initialData?.displayOrder || 0
      }
      const result = initialData 
        ? await updateTestimonial(initialData.id, submitData)
        : await createTestimonial(submitData)
      
      if (result.success) {
        toast.success(`Testimonial successfully ${initialData ? 'updated' : 'created'}`)
        router.push("/admin/testimonials")
        router.refresh()
      } else {
        toast.error(result.error || "An error occurred")
      }
    } catch (error) {
      toast.error("Failed to save testimonial")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/testimonials">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold font-heading">
          {initialData ? "Edit Testimonial" : "Add New Testimonial"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              control={form.control as any}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John Doe" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              control={form.control as any}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating (1-5)</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} max={5} {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={form.control as any}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review Text</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Write the patient's review here..." 
                    {...field} 
                    className="min-h-[150px] bg-slate-50 border-slate-200 resize-none" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={form.control as any}
            name="videoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video URL (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. https://youtube.com/..." {...field} value={field.value || ""} className="h-12 bg-slate-50 border-slate-200" />
                </FormControl>
                <FormDescription>
                  If the patient provided a video testimonial, paste the link here.
                </FormDescription>
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
                  Save Testimonial
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
