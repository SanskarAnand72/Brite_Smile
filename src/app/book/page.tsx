import { CalBookingEmbed } from "@/components/booking/CalBookingEmbed"
import Image from "next/image"
import { Metadata } from "next"
import { ShieldCheck, Star, CalendarCheck, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Book an Appointment | Brite Smile Dental Care",
  description: "Schedule your dental consultation online with Dr. Priyank Prakash at Brite Smile Dental Care, Lucknow.",
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            Official Cal.com Booking
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Schedule Your <span className="text-blue-600">Dental Appointment</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Select your preferred date & time below for instant confirmation with our dental specialists.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Trust Info & Clinic Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Instant Confirmation</h3>
                  <p className="text-xs text-slate-500 font-medium">Real-time slot availability</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-100 text-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">No Advance Fee</span>
                    <span className="text-slate-500 text-xs">Pay at the clinic after consultation</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Flexible Rescheduling</span>
                    <span className="text-slate-500 text-xs">Easily change your appointment time</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">25+ Years Experience</span>
                    <span className="text-slate-500 text-xs">Trusted dental care in Lucknow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Card */}
            <div className="relative h-[220px] rounded-3xl overflow-hidden shadow-xl border border-white">
              <Image 
                src="/images/clinic_hero.jpg"
                alt="Brite Smile Clinic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <p className="font-bold text-base">Dr. Priyank Prakash</p>
                  <p className="text-xs text-slate-200">Chief Dental Surgeon</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-slate-900 text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  4.9 Google
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Cal.com Booking Widget */}
          <div className="lg:col-span-8">
            <CalBookingEmbed 
              calUrl="https://cal.com/atul-singh-ajxolc/book"
              height="750px"
              className="shadow-2xl"
            />
          </div>

        </div>
      </div>
    </main>
  )
}
