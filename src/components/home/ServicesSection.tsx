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
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 relative" id="services">
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
                Clinical Excellence
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight mb-4 tracking-tight"
            >
              Premium Dental Treatments
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 font-normal leading-relaxed"
            >
              From routine cleanings to complete smile makeovers, we offer a comprehensive suite of world-class dental services tailored to your unique needs.
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
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-3xl p-7 md:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 border border-slate-100 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-50/80 to-transparent rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125" />
                
                {/* Top Section */}
                <div className="flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm shrink-0">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>
                
                {/* Bottom Action Footer - Aligned Perfectly Across All Cards */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                  <Link 
                    href={`/treatments/${treatment.id}`}
                    className="text-slate-900 group-hover:text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 text-blue-600" />
                  </Link>
                  <Button 
                    size="sm" 
                    onClick={() => openBookingModal(treatment.title)}
                    className="bg-slate-900 text-white hover:bg-blue-600 rounded-full px-5 py-2 text-xs md:text-sm font-semibold transition-all duration-300 shadow-md"
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
