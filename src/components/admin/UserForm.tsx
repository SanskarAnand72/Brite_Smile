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
import { createUser, updateUser } from "@/lib/actions/user.actions"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  password: z.string().optional(),
  role: z.enum(["ADMIN", "STAFF"]),
})

interface UserFormProps {
  initialData?: Omit<Partial<z.infer<typeof formSchema>>, "name"> & { id: string; name?: string | null }
}

export function UserForm({ initialData }: UserFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      password: "",
      role: initialData?.role || "STAFF",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!initialData && !values.password) {
      toast.error("Password is required for new users")
      return
    }

    setIsSubmitting(true)
    try {
      const result = initialData 
        ? await updateUser(initialData.id, values)
        : await createUser(values)
      
      if (result.success) {
        toast.success(`User successfully ${initialData ? 'updated' : 'created'}`)
        router.push("/admin/users")
        router.refresh()
      } else {
        toast.error(result.error || "An error occurred")
      }
    } catch (error) {
      toast.error("Failed to save user")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/users">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold font-heading">
          {initialData ? "Edit User" : "Add New User"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Jane Doe" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g. jane@britesmile.com" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{initialData ? "New Password (Optional)" : "Password"}</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  {initialData && (
                    <FormDescription>Leave blank to keep the current password.</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ADMIN">Admin (Full Access)</SelectItem>
                      <SelectItem value="STAFF">Staff (Limited Access)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                  Save User
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
