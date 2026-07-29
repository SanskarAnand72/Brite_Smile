"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, CalendarCheck, Star, ShieldCheck, ArrowRight, Sparkles, Clock, MapPin, Award } from "lucide-react"
import { AnimatedToothMascot3D } from "./AnimatedToothMascot3D"
import { useBookingModal } from "@/components/booking/BookingContext"

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
  const { openBookingModal } = useBookingModal()

  return (
    <section id="hero" className="relative pt-24 pb-8 lg:pt-32 lg:pb-14 overflow-hidden bg-mesh-hero">
      {/* Decorative Glow Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[140px] animate-pulse-ring" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs (5 Cols) */}
        <div className="lg:col-span-6 space-y-8 text-center lg:text-left z-20 xl:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm mb-6 hover:shadow-md transition-shadow">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100" />
              <span className="text-[13px] font-bold tracking-wide uppercase text-slate-700">
                Top Rated Clinic in Lucknow
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[13px] font-semibold text-blue-600 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 fill-blue-600" /> 5,000+ Happy Smiles
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-extrabold font-heading tracking-tight leading-[1.08] text-slate-900">
              BRITE SMILE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 block mt-2">
                Multi-Speciality Dental Care
              </span>
            </h1>
            
            <div className="w-12 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full my-6 mx-auto lg:mx-0 shadow-sm" />
            
            <p className="text-base lg:text-[18px] text-slate-600 leading-relaxed font-normal max-w-xl">
              Experience world-class painless dentistry led by <span className="font-semibold text-slate-900">Dr. Priyank Prakash</span>. Precision Implants, Invisible Aligners, Root Canals & Cosmetic Dentistry in Lucknow.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <Button 
              size="xl" 
              variant="gradient"
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto rounded-full shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/50"
            >
              <CalendarCheck className="h-5 w-5 mr-1" />
              Book Appointment
              <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
            
            <Button 
              size="xl" 
              variant="outline" 
              asChild 
              className="w-full sm:w-auto rounded-full border-slate-300 text-slate-800 hover:bg-white hover:border-blue-300 shadow-sm hover:shadow-md"
            >
              <a href={`tel:${whatsappNumber.replace(/[^0-9+]/g, '')}`}>
                <Phone className="mr-2 h-4 w-4 text-blue-600" /> 
                Call Clinic Directly
              </a>
            </Button>
          </motion.div>

          {/* Quick Features List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-medium"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> 100% Painless Tech
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-600" /> Certified Specialists
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" /> Zero Waiting Time
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Visual Composition (6 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center z-10 w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] mt-4 lg:mt-0"
        >
          {/* Main Container Glass Frame */}
          <div className="relative z-10 w-full max-w-[480px] aspect-square rounded-3xl p-6 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-2xl border border-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="w-full h-full relative">
              <AnimatedToothMascot3D />
            </div>
          </div>
          
          {/* Floating Card 1: Google Rating */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-6 lg:top-10 left-2 lg:left-0 glass-panel px-4 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 z-30 animate-float-slow hover:scale-105 transition-transform cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-slate-900 text-base">4.9 / 5.0</span>
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <span className="text-slate-500 text-xs font-semibold">Google Verified Clinic</span>
            </div>
          </motion.div>

          {/* Floating Card 2: Doctor Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 lg:bottom-12 right-2 lg:right-0 glass-panel px-4 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 z-30 animate-float-medium hover:scale-105 transition-transform cursor-default"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 text-xl font-bold shrink-0">
              🦷
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg leading-none">25+ Years</span>
              <span className="text-slate-600 text-xs font-semibold mt-1">Clinical Distinction</span>
            </div>
          </motion.div>

          {/* Floating Speech Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-2 right-4 lg:right-10 bg-slate-900 text-white px-4 py-2.5 rounded-2xl rounded-bl-none shadow-2xl z-30 hidden sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold tracking-wide">Next Appointment: Today 5:00 PM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Bottom Section Transition Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" className="fill-white/80 backdrop-blur-md"></path>
        </svg>
      </div>
    </section>
  )
}

