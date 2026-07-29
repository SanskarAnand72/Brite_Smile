"use client"

import { motion } from "framer-motion"
import { Star, ShieldCheck } from "lucide-react"
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
    <section className="py-16 md:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden" id="testimonials">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-between mb-10 md:mb-12">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-4"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-slate-300 font-semibold tracking-wider uppercase text-xs">
                Patient Success Stories
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 leading-tight tracking-tight"
            >
              Don't just take our word for it. <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Listen to our patients.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/80 flex items-center gap-6 shrink-0 shadow-xl"
          >
            <div>
              <div className="text-4xl font-extrabold font-heading mb-1">4.9<span className="text-xl text-slate-400 font-normal">/5</span></div>
              <div className="flex text-amber-400 gap-0.5 mb-1">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs text-slate-400 font-medium">500+ Verified Google Reviews</p>
            </div>
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-3 shadow-md shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
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
                  <div className="bg-slate-800/90 border border-slate-700/80 p-6 md:p-8 rounded-3xl h-full flex flex-col justify-between shadow-lg hover:border-slate-600 transition-colors duration-300">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal italic mb-8">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 pt-5 border-t border-slate-700/70 mt-auto">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-slate-600 flex items-center justify-center bg-slate-700 shrink-0">
                        <span className="text-base font-bold text-slate-200">{testimonial.patientName.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm md:text-base font-heading">{testimonial.patientName}</h4>
                          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                        </div>
                        <p className="text-xs text-blue-400 font-medium">Verified Patient</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 bg-slate-800 border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" />
              <CarouselNext className="static translate-y-0 h-11 w-11 bg-slate-800 border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
