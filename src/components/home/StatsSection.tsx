"use client"

import { motion } from "framer-motion"
import { Users, Award, HeartPulse, Sparkles } from "lucide-react"
import { mockData } from "@/lib/data/mock"

export function StatsSection() {
  const { heroStatistics } = mockData.settings;
  const statIcons = [Users, Award, HeartPulse];

  return (
    <section className="py-12 md:py-16 bg-white relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {heroStatistics.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:border-blue-300/80 transition-all duration-500 flex items-center gap-6 overflow-hidden hover:-translate-y-1"
              >
                {/* Background Accent Mesh */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600 group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </span>
                    <Sparkles className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">
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

