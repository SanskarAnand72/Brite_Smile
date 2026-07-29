"use client"

import { motion } from "framer-motion"
import { Users, Award, HeartPulse } from "lucide-react"
import { mockData } from "@/lib/data/mock"

export function StatsSection() {
  const { heroStatistics } = mockData.settings;
  
  // Map icons to the dynamic stats
  const statIcons = [Users, Award, HeartPulse];

  return (
    <section className="py-12 bg-white relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-5xl mx-auto">
          {heroStatistics.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm text-blue-600">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-heading">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 tracking-wider uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
