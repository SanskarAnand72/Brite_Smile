"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
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
    <section id="contact" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative">
          
          {/* Decorative background in the card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6 w-max"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 font-semibold tracking-wider uppercase text-xs">
                Get In Touch
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading mb-10 leading-tight"
            >
              Visit Our Clinic
            </motion.h2>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-xl mb-1 text-white">Clinic Address</h4>
                  <p className="text-slate-400 font-light leading-relaxed whitespace-pre-line">{address}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-xl mb-1 text-white">Phone & WhatsApp</h4>
                  <p className="text-slate-400 font-light leading-relaxed">{phone}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <Clock className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-xl mb-1 text-white">Opening Hours</h4>
                  <p className="text-slate-400 font-light leading-relaxed whitespace-pre-line">{workingHours}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => openBookingModal()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-transform"
              >
                Book Appointment Online
              </Button>
              <Button size="lg" variant="outline" asChild className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full px-8 h-14 text-base group">
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>
                  Call Clinic
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-slate-800 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10 w-24 pointer-events-none hidden lg:block" />
            <iframe 
              src={googleMapsEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(0.2) contrast(1.2)' }} 
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
