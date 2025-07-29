"use client"
import { getUserRole, isAdmin } from "@/utils/roles"
import { BRAND } from "@/utils/globalDesign"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const [role, setRole] = useState<string>("guest")
  useEffect(() => {
    getUserRole().then(setRole)
  }, [])

  if (!isAdmin(role)) return (
    <main className="min-h-screen flex items-center justify-center bg-pure-white">
      <div className="text-xl text-red-600">{BRAND.texts.errors.notFound}</div>
    </main>
  )

  return (
    <main className="min-h-screen bg-pure-white text-deep-black flex flex-col items-center pt-20 px-4">
      <h1 className="gradient-text text-4xl font-bold mb-8 text-center">{BRAND.texts.headings.admin}</h1>
      <div className="grid gap-8 w-full max-w-3xl">
        <Link href="/admin/bookings" className="elegant-card professional-btn px-8 py-8 text-center font-semibold text-lg shadow-gold-glow hover:scale-105 transition-transform duration-300 border-gold bg-platinum text-deep-black">{BRAND.texts.buttons.gestionarReservas}</Link>
        <Link href="/admin/services" className="elegant-card professional-btn px-8 py-8 text-center font-semibold text-lg shadow-gold-glow hover:scale-105 transition-transform duration-300 border-gold bg-platinum text-deep-black">{BRAND.texts.buttons.gestionarServicios}</Link>
        <Link href="/admin/texts" className="elegant-card professional-btn px-8 py-8 text-center font-semibold text-lg shadow-gold-glow hover:scale-105 transition-transform duration-300 border-gold bg-platinum text-deep-black">{BRAND.texts.buttons.editarTextos}</Link>
      </div>
      <p className="text-deep-black font-sans text-xl max-w-2xl mx-auto animate-slide-up mb-6">
        <svg width="20" height="20" fill="none" stroke="#212529" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path></svg>
        Dirección: Santísima Trinidad 11, Metro Iglesia, Madrid
      </p>
    </main>
  )
}
