import { BlogForm } from "@/components/admin/BlogForm"
import { getBlogById } from "@/lib/actions/blog.actions"
import { notFound } from "next/navigation"

interface EditBlogPageProps {
  params: {
    id: string
  }
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const result = await getBlogById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto">
      <BlogForm initialData={result.data} />
    </div>
  )
}
