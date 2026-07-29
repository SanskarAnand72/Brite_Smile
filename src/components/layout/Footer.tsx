import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mockData } from "@/lib/data/mock"

export function Footer() {
  const { settings } = mockData

  const clinicName = "Brite Smile Dental Care"
  const contactPhone = settings.contactPhone || "(555) 123-4567"
  const contactEmail = settings.contactEmail || "hello@britesmile.com"
  const address = settings.contactAddress || "123 Smile Avenue, NY 10001"
  const workingHours = settings.workingHours || "Mon - Fri: 8:00 AM - 7:00 PM\nSat: 9:00 AM - 2:00 PM"
  
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 mb-16 border-b border-slate-800">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold font-heading text-white mb-2">Subscribe to our newsletter</h3>
            <p className="text-slate-400">Get the latest updates on dental health, exclusive offers, and tips for a brighter smile.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-slate-800 border border-slate-700 text-white rounded-full px-6 py-3 w-full lg:w-80 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 h-auto">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-3xl font-bold font-heading text-white tracking-tight transition-colors">
                {clinicName.split(" ")[0]}<span className="text-blue-500">{clinicName.split(" ").slice(1).join(" ")}</span>
              </span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed pr-8">
              Premium dental care tailored for your perfect smile. Experience world-class treatments in a relaxing and modern environment.
            </p>
            <div className="flex items-center gap-2 text-white bg-slate-800/50 inline-flex px-4 py-2 rounded-full border border-slate-700">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-medium text-sm">4.9/5 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> About Clinic</Link></li>
              <li><Link href="/treatments" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Our Treatments</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Smile Gallery</Link></li>
              <li><Link href="/doctor/dr-priyank" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Meet the Doctor</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Dental Blog</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold font-heading mb-6">Popular Treatments</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/treatments/teeth-whitening" className="hover:text-blue-400 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Teeth Whitening</Link></li>
              <li><Link href="/treatments/dental-implants" className="hover:text-blue-400 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Dental Implants</Link></li>
              <li><Link href="/treatments/invisalign" className="hover:text-blue-400 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Invisalign</Link></li>
              <li><Link href="/treatments/root-canal" className="hover:text-blue-400 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Root Canal</Link></li>
              <li><Link href="/treatments/pediatric-dentistry" className="hover:text-blue-400 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Pediatric Dentistry</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold font-heading mb-6">Contact Us</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-900 transition-colors">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="mt-1 leading-relaxed whitespace-pre-line">{address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-900 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <span className="font-medium text-white text-base">{contactPhone}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-900 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span>{contactEmail}</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-900 transition-colors">
                  <Clock className="h-5 w-5 text-blue-400" />
                </div>
                <span className="mt-1 leading-relaxed whitespace-pre-line">{workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {clinicName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
