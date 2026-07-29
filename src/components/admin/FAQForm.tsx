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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createFAQ, updateFAQ } from "@/lib/actions/faq.actions"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  question: z.string().min(5, "Question is required."),
  answer: z.string().min(10, "Answer is required."),
  category: z.string().optional().nullable(),
})

interface FAQFormProps {
  initialData?: Partial<z.infer<typeof formSchema>> & { id: string }
}

export function FAQForm({ initialData }: FAQFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: initialData?.question || "",
      answer: initialData?.answer || "",
      category: initialData?.category || "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = initialData 
        ? await updateFAQ(initialData.id, values)
        : await createFAQ(values)
      
      if (result.success) {
        toast.success(`FAQ successfully ${initialData ? 'updated' : 'created'}`)
        router.push("/admin/faqs")
        router.refresh()
      } else {
        toast.error(result.error || "An error occurred")
      }
    } catch (error) {
      toast.error("Failed to save FAQ")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/faqs">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold font-heading">
          {initialData ? "Edit FAQ" : "Add New FAQ"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Do you accept insurance?" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Insurance & Billing" {...field} value={field.value || ""} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Answer</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Provide a detailed answer..." 
                    {...field} 
                    className="min-h-[150px] bg-slate-50 border-slate-200 resize-none" 
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
                  Save FAQ
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
