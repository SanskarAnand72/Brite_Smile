import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts: Record<string, {
  title: string
  date: string
  readTime: string
  author: string
  category: string
  image: string
  content: string[]
}> = {
  "5-tips-healthy-smile": {
    title: "5 Tips for Maintaining a Healthy Smile",
    date: "October 12, 2023",
    readTime: "4 min read",
    author: "Dr. Priyank Prakash",
    category: "Oral Health",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A healthy smile is not just about looks—it's essential for your overall wellbeing. Daily oral care habits can prevent tooth decay, gum disease, and long-term dental complications.",
      "1. Brush Twice Daily for 2 Full Minutes: Use a soft-bristled toothbrush and fluoride toothpaste. Don't rush; make sure you clean all surfaces of every tooth.",
      "2. Floss Daily: Brushing alone misses 35% of tooth surfaces. Daily flossing removes plaque and trapped food particles between teeth where your toothbrush can't reach.",
      "3. Limit Sugary Foods and Drinks: Sugar feeds harmful oral bacteria that produce acid, breaking down tooth enamel and causing cavities.",
      "4. Stay Hydrated: Drinking plenty of water helps wash away food particles and maintains healthy saliva levels, your mouth's natural defense mechanism.",
      "5. Visit Brite Smile Every 6 Months: Regular professional cleanings and examinations catch potential issues early before they turn into costly or painful problems."
    ]
  },
  "understanding-dental-implants": {
    title: "Understanding Dental Implants: The Permanent Solution",
    date: "September 28, 2023",
    readTime: "7 min read",
    author: "Dr. Priyank Prakash",
    category: "Treatments",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Dental implants are widely considered the gold standard for replacing missing teeth. Unlike traditional dentures, implants fuse directly with your jawbone to provide permanent, natural-looking function.",
      "What is a Dental Implant? A dental implant consists of a titanium post placed into the jawbone, a connecting abutment, and a custom porcelain crown crafted to match your natural teeth seamlessly.",
      "Benefits of Implants: They restore 100% of your biting force, preserve facial bone structure, prevent adjacent teeth from shifting, and last a lifetime with proper oral hygiene.",
      "Am I a Candidate? Most adults with good general health and sufficient jawbone density are ideal candidates for implants. Schedule a consultation at Brite Smile to evaluate your personalized implant plan."
    ]
  },
  "is-professional-teeth-whitening-worth-it": {
    title: "Is Professional Teeth Whitening Worth It?",
    date: "September 15, 2023",
    readTime: "5 min read",
    author: "Dr. Priyank Prakash",
    category: "Cosmetic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    content: [
      "With so many over-the-counter whitening strips and pastes available, many patients wonder if professional in-office whitening is worth the investment.",
      "Over-the-Counter vs. Professional: Store-bought kits contain weak active ingredients and generic trays that can leak, causing gum irritation and uneven whitening.",
      "The In-Office Advantage: At Brite Smile, we use professional-grade hydrogen peroxide formulas activated by specialized light technology, lightening teeth up to 8 shades in a single 60-minute visit.",
      "Safety First: Professional whitening protects your enamel and gums with custom barriers, ensuring a bright smile without hypersensitivity."
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Brite Smile Dental Blog`,
    description: post.content[0].substring(0, 160)
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug] || blogPosts["5-tips-healthy-smile"]

  return (
    <main className="min-h-screen bg-slate-50/70 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Articles
        </Link>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl space-y-8">
          <div className="space-y-4">
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-blue-100">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-medium"><User className="w-4 h-4 text-blue-600" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-400" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {post.readTime}</span>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-md">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
            <Link 
              href="/book" 
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-colors"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/blogs" 
              className="text-slate-600 hover:text-blue-600 font-semibold text-sm transition-colors"
            >
              View More Articles
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
