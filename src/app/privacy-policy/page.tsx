import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Brite Smile Dental Care",
  description: "Privacy Policy for Brite Smile Dental Care, Lucknow.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: October 2023</p>
          
          <div className="space-y-4 text-slate-700 text-base leading-relaxed">
            <p>At Brite Smile Dental Care, we respect your privacy and are committed to protecting your personal health information and online data.</p>
            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when booking appointments online, including your name, phone number, email address, and appointment preferences.</p>
            <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Information</h2>
            <p>Your information is strictly used to schedule consultations, confirm appointments, communicate dental instructions, and improve clinical services.</p>
            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Data Security</h2>
            <p>We implement robust physical and electronic safeguards to ensure your confidential health information remains secure and protected from unauthorized access.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
