"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBookingModal } from "@/components/booking/BookingContext"

type ContactSectionProps = {
  address: string
  phone: string
  email: string
  workingHours: string
  googleMapsEmbedUrl: string
}

export function ContactSection({
  address,
  phone,
  email,
  workingHours,
  googleMapsEmbedUrl,
}: ContactSectionProps) {
  const { openBookingModal } = useBookingModal()

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_25px_70px_rgba(15,23,42,0.35)] relative border border-slate-800">
          
          {/* Decorative Background Mesh */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Contact Details Column */}
          <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16 text-white flex flex-col justify-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4 w-max shadow-sm"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 font-bold tracking-wider uppercase text-xs">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-8 leading-tight tracking-tight"
            >
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Luxury Clinic</span>
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 md:gap-5 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-cyan-400 group-hover:text-white">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-lg md:text-xl mb-1 text-white">Clinic Address</h4>
                  <p className="text-slate-400 text-sm md:text-base font-normal leading-relaxed whitespace-pre-line">{address}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex items-start gap-4 md:gap-5 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-cyan-400 group-hover:text-white">
                  <Phone className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-lg md:text-xl mb-1 text-white">Phone & WhatsApp</h4>
                  <p className="text-slate-400 text-sm md:text-base font-normal leading-relaxed">{phone}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 md:gap-5 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-cyan-400 group-hover:text-white">
                  <Clock className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-lg md:text-xl mb-1 text-white">Working Hours</h4>
                  <p className="text-slate-400 text-sm md:text-base font-normal leading-relaxed whitespace-pre-line">{workingHours}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="xl" 
                variant="gradient"
                onClick={() => openBookingModal()}
                className="rounded-full shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/50"
              >
                Book Appointment Online
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                asChild 
                className="border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 rounded-full group"
              >
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>
                  Call Direct Line
                  <ArrowRight className="ml-2 h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full lg:w-1/2 min-h-[380px] lg:min-h-full bg-slate-900 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10 w-24 pointer-events-none hidden lg:block" />
            <iframe 
              src={googleMapsEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(0.15) contrast(1.15)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

