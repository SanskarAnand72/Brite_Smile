import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ChevronRight, Home } from "lucide-react"

// In a real app, fetch from database based on slug
const getTreatment = (slug: string) => {
  if (slug === "teeth-whitening") {
    return {
      title: "Professional Teeth Whitening",
      overview: "Achieve a dazzling, brighter smile in just a single visit with our professional teeth whitening solutions. Over time, teeth can become stained from coffee, tea, wine, or simply aging. Our advanced whitening technology safely removes deep stains, restoring your teeth's natural brilliance without damaging the enamel.",
      benefits: [
        "Immediate and noticeable results",
        "Safe for tooth enamel",
        "Customized to your desired shade",
        "Long-lasting brightness with proper care"
      ],
      procedure: "During your visit, a protective barrier is applied to your gums. A professional-grade whitening gel is then applied to your teeth, which is activated by a specialized light to accelerate the stain-breaking process. The procedure takes about 60-90 minutes.",
      recovery: "You may experience mild tooth sensitivity for a day or two after the procedure. We recommend avoiding dark-colored foods and beverages for 48 hours to maximize the results.",
      faqs: [
        { q: "Is the procedure painful?", a: "Most patients experience no pain, though some may feel temporary sensitivity." },
        { q: "How long do the results last?", a: "With good oral hygiene, results can last from 1 to 3 years." }
      ]
    }
  }
  return null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const treatment = getTreatment(params.slug)
  if (!treatment) return { title: "Not Found" }
  return {
    title: `${treatment.title} | Brite Smile Dental Care`,
    description: treatment.overview.substring(0, 160) + '...'
  }
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const treatment = getTreatment(params.slug)
  
  if (!treatment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-teal-100 mb-8">
            <Link href="/" className="hover:text-white transition-colors"><Home className="h-4 w-4" /></Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">{treatment.title}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{treatment.title}</h1>
            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              {treatment.overview.substring(0, 150)}...
            </p>
            <Button size="lg" asChild className="bg-white text-teal-600 hover:bg-slate-100 rounded-full px-8">
              <Link href="/book">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {treatment.overview}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <CheckCircle2 className="h-6 w-6 text-teal-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Procedure</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {treatment.procedure}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Recovery & Aftercare</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {treatment.recovery}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-slate-900 mb-2">{faq.q}</h4>
                      <p className="text-sm text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-600 p-8 rounded-3xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for a better smile?</h3>
                <p className="text-teal-100 mb-6">Schedule your consultation today and take the first step towards perfect oral health.</p>
                <Button size="lg" asChild className="w-full bg-white text-teal-600 hover:bg-slate-100 rounded-full">
                  <Link href="/book">Book Appointment</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
