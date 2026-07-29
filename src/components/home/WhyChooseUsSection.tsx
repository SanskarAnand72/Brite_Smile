"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Stethoscope, Smile, Microscope, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Advanced 3D Dental Tech",
    description: "We utilize low-radiation 3D CBCT imaging, digital intraoral scanners, and computer-guided laser precision.",
    icon: Microscope,
    tag: "Modern Tech"
  },
  {
    title: "Certified MDS Specialists",
    description: "Our team consists of internationally trained MDS specialists with decades of combined clinical excellence.",
    icon: Stethoscope,
    tag: "Expert Team"
  },
  {
    title: "Transparent & Honest Care",
    description: "Experience premium dental treatments with 100% crystal-clear pricing and personalized treatment pathways.",
    icon: ShieldCheck,
    tag: "Transparent"
  },
  {
    title: "Pain-Free Philosophy",
    description: "Advanced gentle anesthesia and calm clinic environments ensure a completely relaxed, comfortable visit.",
    icon: Smile,
    tag: "100% Gentle"
  },
  {
    title: "Zero Waiting Schedule",
    description: "Priority appointments and streamlined booking eliminate waiting times for busy professionals.",
    icon: Clock,
    tag: "Fast Track"
  },
  {
    title: "24/7 Dental Support",
    description: "Dedicated emergency support line ensuring you have instant access to dental care when urgent needs arise.",
    icon: PhoneCall,
    tag: "Always Open"
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 relative bg-slate-50/60 overflow-hidden" id="why-us">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-bold tracking-wider uppercase text-xs">
              Why BriteSmile Leads
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-tight mb-4 tracking-tight"
          >
            The Gold Standard of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">Modern Dentistry</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 leading-relaxed font-normal"
          >
            We don't just treat teeth — we craft confident, healthy smiles using world-class clinical precision and luxury patient care.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group animated-border bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] transition-all duration-500 border border-slate-200/80 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Background Highlight Sphere */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600 group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                      <reason.icon className="h-7 w-7" />
                    </div>
                  </div>
                  
                  <span className="text-xs font-extrabold text-blue-700 tracking-wider uppercase bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full shadow-xs">
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

              <div className="pt-6 mt-6 border-t border-slate-100/80 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Guaranteed Quality Standard
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

