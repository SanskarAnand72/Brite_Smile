"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, GraduationCap, Heart, CheckCircle2, Stethoscope } from "lucide-react"
import { mockData } from "@/lib/data/mock"
import { useBookingModal } from "@/components/booking/BookingContext"

export function DoctorSection() {
  const doctor = mockData.doctors[0]; // Primary featured doctor
  const { openBookingModal } = useBookingModal();

  const achievements = [
    { value: `${doctor.experienceYears}+`, label: "Years Experience", icon: Heart },
    { value: "5000+", label: "Smiles Restored", icon: CheckCircle2 },
    { value: "15+", label: "Awards Won", icon: Award },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden relative" id="about">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-md mx-auto lg:ml-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-[2.5rem] -rotate-3 -z-10" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Award Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl flex items-center gap-3 z-20 shadow-xl border border-white"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold font-heading text-slate-900 text-sm sm:text-base leading-tight">
                    Chief Surgeon<br/>
                    <span className="text-xs font-sans font-medium text-slate-500">MDS Certified Specialist</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-4 shadow-sm"
              >
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
                  Meet Our Specialist
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight mb-3 tracking-tight"
              >
                {doctor.name}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl font-semibold text-blue-600 mb-4"
              >
                {doctor.specialty}
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

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100"
            >
              {achievements.map((item, index) => (
                <div key={index} className="text-center sm:text-left group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3 mx-auto sm:mx-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-0.5">{item.value}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="pt-2 flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => openBookingModal(`Consultation with ${doctor.name}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-7 py-6 text-sm md:text-base shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 w-full sm:w-auto transition-all duration-300"
              >
                Book Consultation
              </Button>

              <Button size="lg" variant="outline" asChild className="bg-transparent text-slate-700 border-slate-200 hover:bg-slate-50 rounded-full px-7 py-6 text-sm md:text-base group w-full sm:w-auto transition-all duration-300">
                <Link href={`/doctor/${doctor.id}`}>
                  Read Full Biography
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
