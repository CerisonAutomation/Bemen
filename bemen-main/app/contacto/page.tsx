"use client"

import Link from "next/link"

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-pure-white pt-20">
      <h1 className="text-4xl font-bold mb-8">BEMEN Booking & Management</h1>
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Link href="/reservas" className="professional-btn text-lg py-4 px-10 text-center">Reservar</Link>
        <Link href="/login/cliente" className="professional-btn text-lg py-4 px-10 text-center">Login Cliente</Link>
        <Link href="/login/admin" className="professional-btn text-lg py-4 px-10 text-center">Login Admin</Link>
      </div>
    </main>
  )
}
