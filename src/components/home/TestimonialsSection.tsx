"use client"

import { motion } from "framer-motion"
import { Star, ShieldCheck, Quote } from "lucide-react"
import { mockData } from "@/lib/data/mock"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TestimonialsSection() {
  const { testimonials } = mockData;
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="testimonials">
      {/* Ambient Mesh Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-between mb-12 md:mb-16">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 mb-4 shadow-sm"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-slate-300 font-bold tracking-wider uppercase text-xs">
                Patient Stories
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-3 leading-tight tracking-tight"
            >
              Don't just take our word for it. <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Read what our patients say.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card-dark p-6 rounded-3xl border border-slate-800 flex items-center gap-6 shrink-0 shadow-2xl"
          >
            <div>
              <div className="text-4xl font-extrabold font-heading mb-1 text-white">4.9<span className="text-xl text-slate-400 font-normal">/5</span></div>
              <div className="flex text-amber-400 gap-1 mb-1.5">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">500+ Verified Google Reviews</p>
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl h-full flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all duration-300 relative overflow-hidden group">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800 group-hover:text-blue-600/20 transition-colors pointer-events-none" />
                    
                    <div>
                      <div className="flex gap-1 mb-5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal italic mb-8">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 pt-5 border-t border-slate-800/90 mt-auto">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500/40 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-cyan-500 shrink-0 text-white font-bold text-base shadow-md">
                        {testimonial.patientName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm md:text-base font-heading">{testimonial.patientName}</h4>
                          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                        </div>
                        <p className="text-xs text-cyan-400 font-semibold">Verified Patient</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-slate-900 border-slate-800 text-white hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-md rounded-full" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-slate-900 border-slate-800 text-white hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-md rounded-full" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

