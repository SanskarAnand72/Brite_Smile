"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Heart, CheckCircle2, Stethoscope, Sparkles } from "lucide-react"
import { mockData } from "@/lib/data/mock"
import { useBookingModal } from "@/components/booking/BookingContext"

export function DoctorSection() {
  const doctor = mockData.doctors[0]; // Primary featured doctor
  const { openBookingModal } = useBookingModal();

  const achievements = [
    { value: `${doctor.experienceYears}+`, label: "Years Experience", icon: Heart },
    { value: "5,000+", label: "Smiles Restored", icon: CheckCircle2 },
    { value: "15+", label: "Awards Won", icon: Award },
  ]

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-slate-50/70 overflow-hidden relative" id="about">
      {/* Background Mesh Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Portrait Column with Glass Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-md mx-auto lg:ml-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-cyan-400/15 to-indigo-500/20 rounded-[2.8rem] rotate-2 blur-sm -z-10" />
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/90 glass-panel">
                <Image 
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Doctor Overlay Tag */}
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Lead Specialist</span>
                  <h4 className="text-xl font-bold font-heading">{doctor.name}</h4>
                </div>
              </div>
              
              {/* Floating Award Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 z-20 shadow-2xl border border-white/80"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-extrabold font-heading text-slate-900 text-sm sm:text-base leading-tight">
                    Chief Dental Surgeon<br/>
                    <span className="text-xs font-sans font-semibold text-blue-600">MDS Certified Specialist</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Biography & Achievements */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 mb-4 shadow-sm"
              >
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-bold tracking-wider uppercase text-xs">
                  Meet Our Specialist
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-tight mb-3 tracking-tight"
              >
                {doctor.name}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-blue-600" /> {doctor.specialty}
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-base md:text-lg text-slate-600 leading-relaxed font-normal"
              >
                {doctor.bio}
              </motion.p>
            </div>

            {/* Metric Counters Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm"
            >
              {achievements.map((item, index) => (
                <div key={index} className="text-center sm:text-left group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 mx-auto sm:mx-0 group-hover:bg-blue-600 transition-colors duration-300 text-blue-600 group-hover:text-white">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors">{item.value}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="pt-2 flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="xl" 
                variant="gradient"
                onClick={() => openBookingModal(`Consultation with ${doctor.name}`)}
                className="rounded-full shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 w-full sm:w-auto"
              >
                Book Consultation
              </Button>

              <Button 
                size="xl" 
                variant="outline" 
                asChild 
                className="rounded-full border-slate-300 text-slate-800 hover:bg-white hover:border-blue-300 shadow-sm w-full sm:w-auto group"
              >
                <Link href={`/doctor/${doctor.id}`}>
                  Read Full Biography
                  <ArrowRight className="ml-2 w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

