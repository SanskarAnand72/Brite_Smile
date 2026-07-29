"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Stethoscope, Smile, Microscope, PhoneCall, Sparkles, Award, Cpu, HeartHandshake } from "lucide-react"

const reasons = [
  {
    title: "Advanced Technology",
    description: "We use state-of-the-art dental technology for precise diagnoses, including 3D imaging and laser dentistry.",
    icon: Microscope,
    tag: "Modern Tech"
  },
  {
    title: "Certified Specialists",
    description: "Our team consists of internationally trained specialists with decades of combined clinical excellence.",
    icon: Stethoscope,
    tag: "MDS Doctors"
  },
  {
    title: "Transparent Pricing",
    description: "Premium dental care with crystal clear pricing, zero hidden fees, and flexible payment options.",
    icon: ShieldCheck,
    tag: "No Hidden Costs"
  },
  {
    title: "Pain-Free Philosophy",
    description: "Advanced anesthesia and gentle techniques ensure a completely comfortable and anxiety-free experience.",
    icon: Smile,
    tag: "100% Gentle"
  },
  {
    title: "Priority Scheduling",
    description: "Flexible scheduling and same-day availability for busy professionals and urgent dental needs.",
    icon: Clock,
    tag: "Fast Track"
  },
  {
    title: "24/7 Emergency Care",
    description: "Dedicated emergency support line ensuring you are covered whenever you need us most.",
    icon: PhoneCall,
    tag: "Always Open"
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative bg-slate-50 overflow-hidden" id="why-us">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-teal-50/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/60 mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
              Why Choose BriteSmile
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight mb-4 tracking-tight"
          >
            The Standard of Excellence in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Premium Dentistry</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 leading-relaxed font-normal"
          >
            We don't just treat teeth; we design confident smiles. Experience the perfect harmony of clinical precision, aesthetic mastery, and ultimate patient comfort.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-7 md:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 border border-slate-100 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm relative">
                    <reason.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider bg-slate-50 group-hover:bg-blue-50 px-3 py-1 rounded-full border border-slate-100">
                    {reason.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
