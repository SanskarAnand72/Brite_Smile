import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Brite Smile Dental Care",
  description: "Terms of Service for Brite Smile Dental Care, Lucknow.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: October 2023</p>
          
          <div className="space-y-4 text-slate-700 text-base leading-relaxed">
            <p>Welcome to Brite Smile Dental Care. By accessing our website or booking an appointment, you agree to these terms of service.</p>
            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Appointment Cancellations</h2>
            <p>We request at least 24 hours advance notice if you need to reschedule or cancel your appointment.</p>
            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Clinical Consultations</h2>
            <p>All online appointment requests are subject to confirmation by our clinic staff based on practitioner availability.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
