"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Smile, ShieldCheck, Activity, Search, ShieldPlus, Component } from "lucide-react"
import { mockData } from "@/lib/data/mock"

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

  return (
    <section className="py-32 bg-slate-50 relative" id="services">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
                Clinical Excellence
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight mb-6 tracking-tight"
            >
              Premium Dental Treatments
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-light leading-relaxed"
            >
              From routine cleanings to complete smile makeovers, we offer a comprehensive suite of world-class dental services tailored to your unique needs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="outline" asChild className="rounded-full px-8 py-6 text-base border-slate-300 text-slate-700 hover:bg-white shadow-sm hover:shadow transition-all group">
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {services.map((treatment, index) => {
            const Icon = getIcon(treatment.icon);
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group bg-white rounded-[2rem] shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 border border-slate-100 relative overflow-hidden flex flex-col hover:-translate-y-1 ${
                  treatment.isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-blue-50/30' : ''
                }`}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150" />
                
                <div className="p-10 flex-1 flex flex-col z-10">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm relative">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-500 relative z-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed mb-10 flex-1">
                    {treatment.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <Link 
                      href={`/treatments/${treatment.id}`}
                      className="text-slate-900 group-hover:text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Button asChild size="sm" className="bg-slate-900 text-white hover:bg-blue-600 rounded-full px-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
