"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Stethoscope, Smile, Microscope, PhoneCall, Sparkles } from "lucide-react"

const reasons = [
  {
    title: "Advanced Technology",
    description: "We use state-of-the-art dental technology for precise diagnoses, including 3D imaging and laser dentistry.",
    icon: Microscope,
  },
  {
    title: "Certified Specialists",
    description: "Our team consists of internationally trained specialists with decades of combined clinical excellence.",
    icon: Stethoscope,
  },
  {
    title: "Transparent Pricing",
    description: "Premium dental care with crystal clear pricing, zero hidden fees, and flexible payment options.",
    icon: ShieldCheck,
  },
  {
    title: "Pain-Free Philosophy",
    description: "Advanced anesthesia and gentle techniques ensure a completely comfortable and anxiety-free experience.",
    icon: Smile,
  },
  {
    title: "Priority Scheduling",
    description: "Flexible scheduling and same-day availability for busy professionals and urgent dental needs.",
    icon: Clock,
  },
  {
    title: "24/7 Emergency Care",
    description: "Dedicated emergency support line ensuring you are covered whenever you need us most.",
    icon: PhoneCall,
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-32 relative bg-slate-50 overflow-hidden" id="why-us">
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-[600px] bg-teal-50/50 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
              Why Choose BriteSmile
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight mb-6 tracking-tight"
          >
            The Standard of Excellence in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Premium Dentistry</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-light"
          >
            We don't just treat teeth; we design confident smiles. Experience the perfect harmony of clinical precision, aesthetic mastery, and ultimate patient comfort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 border border-slate-100 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="w-16 h-16 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm relative">
                <reason.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-500 relative z-10" />
                <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
