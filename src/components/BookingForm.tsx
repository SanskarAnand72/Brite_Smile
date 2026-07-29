"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { CalendarIcon, Loader2, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createPublicAppointment } from "@/lib/actions/public.actions"
import { getTreatments } from "@/lib/actions/treatment.actions"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  treatmentId: z.string().optional(),
  preferredDate: z.date({ message: "A preferred date is required." }),
  preferredTime: z.string().min(1, "Preferred time is required"),
  notes: z.string().optional(),
})

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [treatments, setTreatments] = useState<{id: string, title: string}[]>([])

  useEffect(() => {
    async function fetchTreatments() {
      const res = await getTreatments()
      if (res.success && res.data) {
        setTreatments(res.data)
      }
    }
    fetchTreatments()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Format the date to an ISO string for the backend action
      const submissionData = {
        ...values,
        preferredDate: values.preferredDate.toISOString(),
      }
      
      const result = await createPublicAppointment(submissionData)
      
      if (result.success) {
        toast.success("Appointment request submitted!")
        setIsSuccess(true)
      } else {
        toast.error(result.error || "Failed to submit request")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white p-10 md:p-14 rounded-3xl border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold font-heading text-slate-900">Request Received</h2>
        <p className="text-slate-600 max-w-md mx-auto text-lg leading-relaxed">
          Thank you for choosing Brite Smile. Our team will contact you shortly to confirm your appointment.
        </p>
        <Button 
          onClick={() => {
            form.reset()
            setIsSuccess(false)
          }}
          className="mt-8 bg-primary hover:bg-teal-700 text-white rounded-full px-8 h-12 shadow-lg"
        >
          Book Another Appointment
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
      <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8">Book an Appointment</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-slate-700 font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
            <FormField
              control={form.control}
              name="treatmentId"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-slate-700 font-medium">Treatment (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors">
                        <SelectValue placeholder="Select a treatment..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">General Consultation / Checkup</SelectItem>
                      {treatments.map((treatment) => (
                        <SelectItem key={treatment.id} value={treatment.id}>
                          {treatment.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel className="text-slate-700 font-medium mb-1">Preferred Date</FormLabel>
                  <Popover>
                    <FormControl>
                      <PopoverTrigger
                        className={cn(
                          "flex w-full h-12 pl-3 text-left font-normal bg-slate-50 border-slate-200 hover:bg-slate-100 transition-colors items-center rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </PopoverTrigger>
                    </FormControl>
                    <PopoverContent className="w-auto p-0 bg-white" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel className="text-slate-700 font-medium mb-1">Preferred Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors">
                        <SelectValue placeholder="Select time..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</SelectItem>
                      <SelectItem value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</SelectItem>
                      <SelectItem value="Late Afternoon (4PM - 6PM)">Late Afternoon (4PM - 6PM)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem className="border-t border-slate-100 pt-6">
                <FormLabel className="text-slate-700 font-medium">Additional Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your dental needs or any specific concerns..." 
                    {...field} 
                    className="min-h-[120px] bg-slate-50 border-slate-200 resize-none focus:bg-white transition-colors" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-medium bg-primary hover:bg-teal-700 text-white rounded-full shadow-lg hover-lift mt-4"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting Request...
              </>
            ) : (
              "Request Appointment"
            )}
          </Button>
          
          <p className="text-center text-xs text-slate-500 mt-4">
            By submitting this form, you agree to our privacy policy. We will contact you to confirm the exact time and details.
          </p>
        </form>
      </Form>
    </div>
  )
}
