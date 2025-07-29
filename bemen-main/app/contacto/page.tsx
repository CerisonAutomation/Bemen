"use client"

import Link from "next/link"
import { BRAND } from "@/utils/globalDesign";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-pure-white text-deep-black flex flex-col items-center justify-center gap-8 pt-20">
      <h1 className="gradient-text text-4xl font-bold mb-8 text-center">{BRAND.texts.headings.contacto}</h1>
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Link href="/reservas" className="professional-btn text-lg py-4 px-10 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">{BRAND.texts.buttons.reservar}</Link>
        <Link href="/login/cliente" className="professional-btn text-lg py-4 px-10 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">{BRAND.texts.buttons.misReservas}</Link>
        <Link href="/login/admin" className="professional-btn text-lg py-4 px-10 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">{BRAND.texts.buttons.admin}</Link>
      </div>
    </main>
  )
}
