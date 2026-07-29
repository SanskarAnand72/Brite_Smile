import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Blog | Brite Smile Dental Care",
  description: "Read our latest articles on oral health, dental treatments, and smile care tips.",
}

const blogs = [
  {
    title: "5 Tips for Maintaining a Healthy Smile",
    slug: "5-tips-healthy-smile",
    excerpt: "Discover the best daily habits to keep your teeth strong and your smile bright.",
    author: "Dr. Sarah Jenkins",
    date: "October 12, 2023",
    readTime: "4 min read",
    category: "Oral Health",
    image: "https://placehold.co/800x500/e2e8f0/475569?text=Healthy+Smile",
  },
  {
    title: "Understanding Dental Implants",
    slug: "understanding-dental-implants",
    excerpt: "Everything you need to know about dental implants, from the procedure to the recovery process.",
    author: "Dr. Michael Chen",
    date: "September 28, 2023",
    readTime: "7 min read",
    category: "Treatments",
    image: "https://placehold.co/800x500/e2e8f0/475569?text=Dental+Implants",
  },
  {
    title: "Is Professional Teeth Whitening Worth It?",
    slug: "is-professional-teeth-whitening-worth-it",
    excerpt: "Comparing over-the-counter whitening kits with professional in-office treatments.",
    author: "Dr. Sarah Jenkins",
    date: "September 15, 2023",
    readTime: "5 min read",
    category: "Cosmetic",
    image: "https://placehold.co/800x500/e2e8f0/475569?text=Teeth+Whitening",
  }
]

export default function BlogsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Dental Blog</h1>
          <p className="text-lg text-slate-600">
            Insights, tips, and the latest news from our dental experts to help you maintain optimal oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blog.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-900">{blog.author}</span>
                  </div>
                  <Link href={`/blogs/${blog.slug}`} className="text-sm font-semibold text-teal-600 hover:text-teal-800">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
