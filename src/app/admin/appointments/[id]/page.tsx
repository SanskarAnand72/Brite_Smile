import { getAppointmentById, updateAppointmentStatus } from "@/lib/actions/appointment.actions"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/admin/PageHeader"
import { Calendar, Clock, User, Mail, Phone, Stethoscope, FileText } from "lucide-react"

interface AppointmentDetailsPageProps {
  params: {
    id: string
  }
}

export default async function AppointmentDetailsPage({ params }: AppointmentDetailsPageProps) {
  const result = await getAppointmentById(params.id)
  
  if (!result.success || !result.data) {
    notFound()
  }

  const appointment = result.data

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <PageHeader 
        title="Appointment Details" 
        description={`Reference ID: ${appointment.id}`}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold font-heading mb-4 pb-4 border-b border-slate-100">Patient Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Full Name</p>
                  <p className="font-medium text-slate-900">{appointment.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Phone Number</p>
                  <p className="font-medium text-slate-900">{appointment.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email Address</p>
                  <p className="font-medium text-slate-900">{appointment.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold font-heading mb-4 pb-4 border-b border-slate-100">Request Details</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Preferred Date</p>
                    <p className="font-medium text-slate-900">{new Date(appointment.preferredDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Preferred Time</p>
                    <p className="font-medium text-slate-900">{appointment.preferredTime}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Stethoscope className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Requested Treatment</p>
                  <p className="font-medium text-slate-900">{appointment.treatment?.title || "General Consultation / Checkup"}</p>
                </div>
              </div>
              
              {appointment.notes && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">Patient Notes</p>
                    <p className="text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm leading-relaxed">
                      {appointment.notes}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold font-heading mb-4 pb-4 border-b border-slate-100">Status</h3>
            <div className="mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                ${appointment.status === 'PENDING' ? 'bg-amber-100 text-amber-800' : ''}
                ${appointment.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-800' : ''}
                ${appointment.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : ''}
                ${appointment.status === 'CANCELLED' ? 'bg-rose-100 text-rose-800' : ''}
              `}>
                {appointment.status}
              </span>
            </div>
            
            <p className="text-xs text-slate-500 mb-2">Requested On</p>
            <p className="text-sm font-medium text-slate-900 mb-6">{new Date(appointment.createdAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
