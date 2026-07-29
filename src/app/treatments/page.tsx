import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Treatments | Brite Smile Dental Care",
  description: "Explore our comprehensive range of premium dental treatments.",
}

const treatments = [
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile in just one visit.",
    icon: "✨",
    slug: "teeth-whitening"
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements that restore function and aesthetics.",
    icon: "🦷",
    slug: "dental-implants"
  },
  {
    title: "Invisalign",
    description: "Clear, removable aligners to straighten your teeth discreetly and comfortably.",
    icon: "😁",
    slug: "invisalign"
  },
  {
    title: "Root Canal",
    description: "Pain-free endodontic therapy to save infected teeth and relieve severe toothache.",
    icon: "⚕️",
    slug: "root-canal"
  },
  {
    title: "Porcelain Veneers",
    description: "Custom-made shells to correct chipped, stained, or misaligned front teeth.",
    icon: "💎",
    slug: "porcelain-veneers"
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle and specialized dental care to ensure your child's optimal oral health.",
    icon: "🧸",
    slug: "pediatric-dentistry"
  },
]

export default function TreatmentsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Dental Treatments</h1>
          <p className="text-lg text-slate-600">
            Comprehensive, state-of-the-art dental care tailored specifically to your needs. 
            We utilize advanced technology to ensure the best outcomes for your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                {treatment.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {treatment.title}
              </h3>
              <p className="text-slate-600 mb-8 line-clamp-3">
                {treatment.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <Link 
                  href={`/treatments/${treatment.slug}`}
                  className="text-teal-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
                <Button asChild size="sm" className="bg-slate-900 text-white hover:bg-blue-600 rounded-full px-6 transition-all duration-300">
                  <Link href="/book">Book Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
