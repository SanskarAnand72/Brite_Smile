"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Award, 
  GraduationCap, 
  Heart, 
  CheckCircle2, 
  Stethoscope, 
  CalendarCheck, 
  Clock, 
  Globe, 
  ShieldCheck, 
  ArrowLeft,
  Star,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBookingModal } from "@/components/booking/BookingContext"
import { mockData } from "@/lib/data/mock"

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const { openBookingModal } = useBookingModal()
  const doctor = mockData.doctors[0]

  const qualifications = [
    { degree: "M.D.S. (Prosthodontics & Implantology)", institution: "King George's Medical University (KGMU)" },
    { degree: "B.D.S. (Bachelor of Dental Surgery)", institution: "Lucknow University" },
    { degree: "Fellowship in Oral Implantology (FICOI)", institution: "International Congress of Oral Implantologists, USA" },
    { degree: "Advanced Certification in Cosmetic Dentistry", institution: "New York University (NYU), USA" },
  ]

  const specializations = [
    "Dental Implants & Immediate Loading",
    "Full Mouth Rehabilitation",
    "Cosmetic Smile Makeover & Veneers",
    "Pain-Free Root Canal Treatment (Rotary Endodontics)",
    "Invisalign & Clear Aligner Therapy",
    "Laser Periodontal & Gum Surgery"
  ]

  const awards = [
    "Best Dental Specialist in Lucknow — Healthcare Excellence Awards",
    "Outstanding Contribution to Oral Implantology — ICOI Fellowship",
    "Pioneer in Painless Rotary Endodontics — Dental Surgeons Association",
    "Top Rated Dental Surgeon on Google Reviews (4.9★ Rating)"
  ]

  const timings = [
    { day: "Monday – Saturday", hours: "10:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "Emergency Appointments Only" },
  ]

  return (
    <main className="min-h-screen bg-slate-50/70 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Back Link */}
        <Link 
          href="/#about" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Doctor Header Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-100 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/80 rounded-bl-full -z-0 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
            {/* Doctor Photo */}
            <div className="relative w-48 h-60 sm:w-60 sm:h-72 md:w-72 md:h-84 shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Doctor Intro */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
                <Stethoscope className="w-3.5 h-3.5" />
                Senior Dental Surgeon & Implantologist
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
                {doctor.name}
              </h1>

              <p className="text-blue-600 font-semibold text-lg md:text-xl">
                {doctor.specialty} • {doctor.experienceYears}+ Years Clinical Experience
              </p>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                {doctor.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => openBookingModal(`Consultation with ${doctor.name}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
                >
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>

                <a 
                  href="tel:+919415004719" 
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors text-sm"
                >
                  Call Clinic Directly
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Qualifications */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-slate-900">Education & Qualifications</h2>
              </div>

              <div className="space-y-4 pt-2">
                {qualifications.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">{q.degree}</h3>
                      <p className="text-xs md:text-sm text-slate-500 font-medium">{q.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations & Clinical Expertise */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-slate-900">Specializations & Expertise</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="font-semibold text-slate-800 text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-slate-900">Awards & Recognition</h2>
              </div>

              <div className="space-y-3 pt-2">
                {awards.map((award, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-amber-50/40 rounded-xl border border-amber-100/60">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-400 shrink-0" />
                    <span className="font-semibold text-slate-800 text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Info Column */}
          <div className="space-y-8">
            
            {/* Quick Details Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg space-y-5">
              <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                Practice Overview
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Experience</span>
                    <span className="text-slate-600 text-xs">24+ Years Active Clinical Practice</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Languages Spoken</span>
                    <span className="text-slate-600 text-xs">English, Hindi</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Patients Treated</span>
                    <span className="text-slate-600 text-xs">5,000+ Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg space-y-4">
              <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                Clinic Timings
              </h3>

              <div className="space-y-3">
                {timings.map((t, idx) => (
                  <div key={idx} className="flex flex-col p-3 bg-slate-50 rounded-xl">
                    <span className="font-bold text-slate-900 text-xs">{t.day}</span>
                    <span className="text-blue-600 text-sm font-semibold">{t.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-6 rounded-3xl text-white text-center shadow-xl space-y-4">
              <h3 className="text-xl font-bold font-heading">Book Consultation</h3>
              <p className="text-xs text-slate-300">Reserve your appointment slot online with Dr. Priyank Prakash.</p>
              <Button 
                onClick={() => openBookingModal(`Consultation with ${doctor.name}`)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-full py-5 text-sm font-semibold shadow-lg"
              >
                Schedule Appointment
              </Button>
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}
