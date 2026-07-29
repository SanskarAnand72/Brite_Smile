"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Microscope, HeartHandshake, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { mockData } from "@/lib/data/mock"

const premiumFeatures = [
  { title: "Modern Digital Dentistry", icon: Microscope, desc: "High-precision 3D scanners & digital X-rays" },
  { title: "Painless Procedures", icon: Zap, desc: "Advanced anesthesia for total comfort" },
  { title: "International Standards", icon: ShieldCheck, desc: "Strict sterilization & safety protocols" },
  { title: "Latest Equipment", icon: Award, desc: "State-of-the-art dental technology" },
  { title: "Personalized Plans", icon: HeartHandshake, desc: "Tailored treatments for your smile" },
  { title: "Comfort Experience", icon: CheckCircle2, desc: "Relaxing, stress-free clinic environment" },
]

export function GallerySection() {
  const { gallery } = mockData;
  const featuredGallery = gallery.filter(item => item.isFeatured).slice(0, 4);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="gallery">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/60 mb-4"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
                State of the Art Facility
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight mb-4 tracking-tight"
            >
              Experience Premium Care
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed font-normal"
            >
              Take a tour of our modern clinic designed specifically for your ultimate comfort, hygiene, and clinical excellence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="shrink-0"
          >
            <Button variant="outline" asChild className="rounded-full px-6 py-5 text-sm md:text-base border-slate-300 text-slate-700 hover:bg-white shadow-sm hover:shadow transition-all group">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Premium Highlights Grid - Fills Unused Space Elegantly */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10 md:mb-12">
          {premiumFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feat.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs md:text-sm leading-tight mb-1">{feat.title}</h4>
              <p className="text-[11px] text-slate-500 font-medium leading-tight">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Image Grid - Tight Equal Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[460px]">
          {featuredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/50 min-h-[260px] ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : 
                index === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              <Image 
                src={item.url}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
