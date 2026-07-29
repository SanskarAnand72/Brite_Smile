"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Activity, TrendingUp, CheckCircle, Clock } from "lucide-react"

// Mock data for initial layout
const stats = [
  { title: "Total Appointments", value: "2,350", icon: Calendar, trend: "+12.5%", trendUp: true },
  { title: "Active Patients", value: "1,204", icon: Users, trend: "+5.2%", trendUp: true },
  { title: "Completed Treatments", value: "856", icon: CheckCircle, trend: "+18.1%", trendUp: true },
  { title: "Pending Requests", value: "12", icon: Clock, trend: "-2.5%", trendUp: false },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 bg-slate-50/50">
              <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <p className={`text-sm flex items-center ${stat.trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.trendUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <Activity className="w-4 h-4 mr-1" />}
                {stat.trend} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-2 border-slate-200 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle>Appointments Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center bg-slate-50 m-6 rounded-xl border border-dashed border-slate-300 text-slate-400">
            [Recharts Area Chart Placeholder]
          </CardContent>
        </Card>

        <Card className="col-span-1 border-slate-200 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">New appointment booked</p>
                    <p className="text-xs text-slate-500">Sarah Jenkins • 5 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
