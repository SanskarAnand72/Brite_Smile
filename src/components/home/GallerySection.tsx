"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Microscope, HeartHandshake, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { mockData } from "@/lib/data/mock"

const premiumFeatures = [
  { title: "Digital Dentistry", icon: Microscope, desc: "High-precision 3D CBCT scanners" },
  { title: "Painless Tech", icon: Zap, desc: "Gentle computer-controlled anesthesia" },
  { title: "Safety Standards", icon: ShieldCheck, desc: "Strict 100% sterilization protocols" },
  { title: "Modern Tech", icon: Award, desc: "State-of-the-art German dental chairs" },
  { title: "Customized Care", icon: HeartHandshake, desc: "Bespoke treatment pathways" },
  { title: "Luxury Comfort", icon: CheckCircle2, desc: "Relaxing spa-like clinic environment" },
]

export function GallerySection() {
  const { gallery } = mockData;
  const featuredGallery = gallery.filter(item => item.isFeatured).slice(0, 4);

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden" id="gallery">
      {/* Background Mesh Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 mb-4 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-bold tracking-wider uppercase text-xs">
                State of the Art Facility
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-tight mb-4 tracking-tight"
            >
              Experience Luxury Dental Care
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed font-normal"
            >
              Step inside our modern facility designed specifically for your ultimate clinical precision, safety, and spa-like comfort.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="shrink-0"
          >
            <Button variant="outline" size="lg" asChild className="rounded-full px-6 border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-blue-300 shadow-sm transition-all group">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Feature Highlights Pill Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {premiumFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center group hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-2.5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                <feat.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs md:text-sm leading-tight mb-1">{feat.title}</h4>
              <p className="text-[11px] text-slate-500 font-medium leading-tight">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[480px]">
          {featuredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/70 min-h-[280px] ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-2.5">
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

