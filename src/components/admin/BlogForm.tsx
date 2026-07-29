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
import { Checkbox } from "@/components/ui/checkbox"
import { createBlog, updateBlog } from "@/lib/actions/blog.actions"

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  slug: z.string().min(3, "Slug must be at least 3 characters."),
  content: z.string().min(10, "Content is required."),
  excerpt: z.string().min(5, "Excerpt is required."),
  author: z.string().min(2, "Author is required."),
  category: z.string().min(2, "Category is required."),
  tags: z.string(),
  readingTime: z.any().transform(Number),
  featuredImageId: z.string().optional().nullable(),
  featuredImageUrl: z.string().optional().nullable(),
  published: z.boolean().default(false),
})

interface BlogFormProps {
  initialData?: Partial<z.infer<typeof formSchema>> & { id: string }
}

export function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      content: initialData?.content || "",
      excerpt: initialData?.excerpt || "",
      author: initialData?.author || "",
      category: initialData?.category || "",
      tags: initialData?.tags || "",
      readingTime: initialData?.readingTime || 5,
      featuredImageId: initialData?.featuredImageId || "",
      featuredImageUrl: initialData?.featuredImageUrl || "",
      published: initialData?.published || false,
    },
  })

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
      const result = initialData 
        ? await updateBlog(initialData.id, values)
        : await createBlog(values)
      
      if (result.success) {
        toast.success(`Blog post successfully ${initialData ? 'updated' : 'created'}`)
        router.push("/admin/blogs")
        router.refresh()
      } else {
        toast.error(result.error || "An error occurred")
      }
    } catch (error) {
      toast.error("Failed to save blog post")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blogs">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold font-heading">
          {initialData ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5 Tips for Healthy Teeth" {...field} onChange={handleTitleChange} className="h-12 bg-slate-50 border-slate-200" />
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
                      <Input placeholder="e.g. 5-tips-for-healthy-teeth" {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Input placeholder="Short summary for blog card..." {...field} className="h-12 bg-slate-50 border-slate-200" />
                    </FormControl>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Dr. Smith" {...field} className="h-12 bg-slate-50 border-slate-200" />
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
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Dental Care" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="readingTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reading Time (mins)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className="h-12 bg-slate-50 border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (comma separated)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Tips, Health, Whitening" {...field} className="h-12 bg-slate-50 border-slate-200" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
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

          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-200 p-4 bg-slate-50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Publish this post
                  </FormLabel>
                  <FormDescription>
                    If unchecked, this post will be saved as a draft.
                  </FormDescription>
                </div>
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
                  Save Blog Post
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
