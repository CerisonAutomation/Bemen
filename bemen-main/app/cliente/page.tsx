"use client"
import { getUserRole, isClient } from "@/utils/roles"
import { supabase } from "@/utils/supabaseClient"
import { BRAND } from "@/utils/globalDesign"
import { useEffect, useState } from "react"

export default function ClientDashboard() {
  const [role, setRole] = useState<string>("guest")
  const [bookings, setBookings] = useState<any[]>([])
  useEffect(() => {
    getUserRole().then(setRole)
    // Fetch client bookings
    supabase.from("bookings").select("*").then(({ data }) => setBookings(data || []))
  }, [])

  if (!isClient(role)) return (
    <main className="min-h-screen flex items-center justify-center bg-pure-white">
      <div className="text-xl text-red-600">{BRAND.texts.errors.notFound}</div>
    </main>
  )

  return (
    <main className="min-h-screen bg-pure-white text-deep-black">
      <div className="w-full max-w-2xl mt-24">
        <h1 className="gradient-text text-4xl font-bold mb-8 text-center">{BRAND.texts.headings.cliente}</h1>
        <div className="elegant-card">
          {bookings.length === 0 ? (
            <div className="text-deep-black text-center">{BRAND.texts.ui.loading}</div>
          ) : (
            <ul className="space-y-4">
              {bookings.map((b) => (
                <li key={b.id} className="elegant-card flex flex-col gap-2 bg-platinum border-gold text-deep-black">
                  <div><b>Servicio:</b> <span className="text-gold">{b.service}</span></div>
                  <div><b>Fecha:</b> <span className="text-deep-black">{b.date}</span></div>
                  <div><b>Estado:</b> <span className="text-gold">{b.status || "pendiente"}</span></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}
