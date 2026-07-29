"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, CalendarCheck, Star, ShieldCheck, ArrowRight, MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react"
import { AnimatedToothMascot3D } from "./AnimatedToothMascot3D"

type HeroSectionProps = {
  headline: string
  subheadline: string
  ctaText: string
  ctaLink: string
  bgImageUrl: string
  doctorImageUrl: string
  whatsappNumber: string
}

export function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  bgImageUrl,
  doctorImageUrl,
  whatsappNumber,
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-visible bg-[#f8fafc]">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Content - 45% */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left z-20 xl:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 mb-6 hover:shadow-md transition-shadow">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse ring-4 ring-green-100" />
              <span className="text-[14px] font-semibold text-slate-700">Trusted by 5,000+ patients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold font-heading tracking-tight leading-[1.1] text-slate-900">
              BRITE SMILE<br/>
              <span className="text-blue-600 block mt-2">
                Best Multi Speciality Dental Clinic in Lucknow<span className="text-yellow-400 ml-2">✨</span>
              </span>
            </h1>
            
            <div className="w-10 h-1 bg-slate-800 rounded-full my-6 mx-auto lg:mx-0" />
            
            <p className="text-base lg:text-[17px] text-slate-600 leading-relaxed font-medium max-w-xl">
              Expert dental care by Dr. Priyank Prakash — Teeth Whitening, Implants, Root Canal & Orthodontics in Lucknow at affordable prices. Your Smile Is Our Priority.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-7 py-6 text-[15px] font-semibold w-full sm:w-auto shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300">
              <Link href={ctaLink}>
                View Services
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-blue-50 text-blue-600 border-2 border-blue-200 hover:border-blue-300 rounded-full px-7 py-6 text-[15px] font-semibold w-full sm:w-auto transition-all duration-300">
              <a href={`tel:${whatsappNumber.replace(/[^0-9+]/g, '')}`}>
                <Phone className="mr-2 h-[18px] w-[18px]" /> 
                Schedule a Call
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Hero Visual Composition - 55% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative flex items-center justify-center z-10 w-full min-h-[450px] lg:min-h-[600px] mt-8 lg:mt-0"
        >
          {/* Main 3D Tooth Illustration */}
          <div className="relative z-10 w-full max-w-[500px] aspect-square lg:ml-auto">
            <AnimatedToothMascot3D />
          </div>
          
          {/* Floating Trust Card - Google Rating */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -8, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", opacity: { duration: 0.8 } }}
            className="absolute top-12 lg:top-24 left-0 lg:left-16 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl shadow-slate-200/50 flex flex-col gap-1.5 z-20 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
              <div className="flex text-amber-400 gap-0.5">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <span className="text-[14px] font-semibold text-slate-700">4.9 Google Rating</span>
          </motion.div>

          {/* Floating Speech Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5, opacity: { duration: 0.8 } }}
            className="absolute top-4 right-10 lg:right-28 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl rounded-bl-sm shadow-xl shadow-slate-200/50 z-20 hidden md:block hover:shadow-2xl transition-shadow"
          >
            <span className="text-[14px] font-semibold text-slate-800">When Will You Come? 😊</span>
          </motion.div>

          {/* Floating Trust Card - Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 8, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1, opacity: { duration: 0.8 } }}
            className="absolute bottom-16 lg:bottom-28 right-0 lg:right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-3 z-20 hover:shadow-2xl transition-shadow"
          >
            <div className="w-[40px] h-[40px] bg-blue-50 rounded-lg flex items-center justify-center">
              <span className="text-xl">🦷</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg leading-none">25+</span>
              <span className="text-slate-600 text-xs font-semibold mt-0.5">Years Experience</span>
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/4 grid grid-cols-4 gap-4 opacity-20 -z-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
            ))}
          </div>
          
          <div className="absolute top-1/3 left-1/4 w-12 h-12 text-yellow-300 opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.33,197.87,112.5,239.5,108.31,280.24,96.6,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}
