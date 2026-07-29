"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Smile, ShieldCheck, Activity, Search, ShieldPlus, Component } from "lucide-react"
import { mockData } from "@/lib/data/mock"
import { useBookingModal } from "@/components/booking/BookingContext"

// Helper to map string icon names from mock data to actual Lucide components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "tooth": return Smile;
    case "implant": return Component;
    case "braces": return ShieldCheck;
    case "drill": return Activity;
    case "search": return Search;
    case "shield": return ShieldPlus;
    default: return Sparkles;
  }
}

export function ServicesSection() {
  const { services } = mockData;
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden" id="services">
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[140px]" />
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
                Clinical Excellence
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-tight mb-4 tracking-tight"
            >
              Comprehensive Dental Care
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 font-normal leading-relaxed"
            >
              From routine cleanings to complete smile makeovers, we offer a suite of world-class dental treatments tailored to your exact needs.
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
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Uniform Grid - All Cards Identical Height & Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((treatment, index) => {
            const Icon = getIcon(treatment.icon);
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group animated-border bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] transition-all duration-500 border border-slate-200/80 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150" />
                
                {/* Top Section */}
                <div className="flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500 mb-6 shrink-0">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600 group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>
                
                {/* Bottom Action Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                  <Link 
                    href={`/treatments/${treatment.id}`}
                    className="text-slate-800 group-hover:text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    Details <ArrowRight className="h-4 w-4 text-blue-600" />
                  </Link>
                  <Button 
                    size="sm" 
                    variant="gradient"
                    onClick={() => openBookingModal(treatment.title)}
                    className="rounded-full px-5 py-2 text-xs md:text-sm font-semibold shadow-md shadow-blue-600/20"
                  >
                    Book Now
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

