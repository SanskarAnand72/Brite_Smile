import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Star, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
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
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        
        {/* Newsletter Box */}
        <div className="glass-card-dark p-8 lg:p-10 rounded-3xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="max-w-xl">
            <h3 className="text-2xl font-extrabold font-heading text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" /> Stay Informed On Oral Health
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">Subscribe to get clinic announcements, seasonal wellness packages, and oral care tips directly to your inbox.</p>
          </div>
          
          <div className="flex w-full lg:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-slate-900/90 border border-slate-800 text-white placeholder:text-slate-500 rounded-full px-6 py-3.5 w-full lg:w-80 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
            />
            <Button variant="gradient" size="lg" className="rounded-full px-7 shrink-0 shadow-lg shadow-blue-600/20">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4 fill-white/20" />
              </div>
              <span className="text-2xl font-extrabold font-heading text-white tracking-tight">
                BRITE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ml-1.5">SMILE</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed pr-6">
              World-class painless dentistry designed for your ultimate comfort, precision, and lifelong oral health.
            </p>
            
            <div className="flex items-center gap-2 text-white bg-slate-900/80 inline-flex px-4 py-2 rounded-full border border-slate-800 shadow-sm">
              <div className="flex text-amber-400 gap-0.5">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-bold text-xs">4.9/5 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold font-heading mb-6 text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link href="/#about" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><ArrowRight className="w-3 h-3 text-blue-500"/> About Clinic</Link></li>
              <li><Link href="/treatments" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><ArrowRight className="w-3 h-3 text-blue-500"/> Our Treatments</Link></li>
              <li><Link href="/gallery" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><ArrowRight className="w-3 h-3 text-blue-500"/> Smile Gallery</Link></li>
              <li><Link href="/doctor/dr-priyank" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><ArrowRight className="w-3 h-3 text-blue-500"/> Meet Specialist</Link></li>
              <li><Link href="/blogs" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><ArrowRight className="w-3 h-3 text-blue-500"/> Dental Blog</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold font-heading mb-6 text-base tracking-wide">Popular Treatments</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link href="/treatments/teeth-whitening" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400"/> Teeth Whitening</Link></li>
              <li><Link href="/treatments/dental-implants" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400"/> Dental Implants</Link></li>
              <li><Link href="/treatments/invisalign" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400"/> Invisible Aligners</Link></li>
              <li><Link href="/treatments/root-canal" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400"/> Root Canal</Link></li>
              <li><Link href="/treatments/pediatric-dentistry" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400"/> Pediatric Care</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold font-heading mb-6 text-base tracking-wide">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-cyan-400 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed whitespace-pre-line text-xs">{address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-cyan-400 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-semibold text-white text-sm">{contactPhone}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-cyan-400 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-xs">{contactEmail}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-cyan-400 shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="leading-relaxed whitespace-pre-line text-xs">{workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
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

