import { BookingForm } from "@/components/BookingForm"
import Image from "next/image"

export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-tight">
              Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">smile?</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Book a consultation with our expert team today. We provide premium dental care tailored to your unique needs.
            </p>
            
            <div className="relative h-[300px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5 mt-8 border border-white">
              <Image 
                src="/images/clinic_hero.jpg"
                alt="Modern dental clinic reception"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xl font-bold text-primary">5.0</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">Top Rated Clinic</p>
                    <p className="text-sm text-slate-600">Based on 500+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-blue-500/10 blur-3xl rounded-full opacity-50"></div>
            <div className="relative z-10">
              <BookingForm />
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
