"use client"

import { BRAND } from "@/utils/globalDesign"
import { getUserRole, isAdmin, isClient } from "@/utils/roles"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [role, setRole] = useState<string>("guest")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-nav")
      const button = document.getElementById("mobile-menu-button")

      if (isOpen && nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    getUserRole().then(setRole)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio", ariaLabel: "Ir a la página de inicio" },
    ...(isClient(role) ? [{ href: "/cliente", label: "Mis reservas", ariaLabel: "Ver mis reservas" }] : []),
    ...(isAdmin(role) ? [{ href: "/admin", label: "Admin", ariaLabel: "Panel de administración" }] : []),
  ]

  return (
    <header className={`w-full flex items-center justify-between px-8 py-4 bg-pure-white text-deep-black shadow-sm z-20 ${scrolled ? 'border-b border-gold/30' : ''}`}
      role="banner"
    >
      <div className="flex items-center gap-3">
        <Link href="/" aria-label={BRAND.name} tabIndex={0}>
          <Image src="/images/logo.png" alt="BEMEN Logo" width={40} height={40} className="logo-black cursor-pointer hover:scale-105 transition-transform" priority />
        </Link>
        <span className="font-serif font-bold text-xl gradient-text tracking-tight text-deep-black">BEMEN <span className="font-sans font-light text-base text-deep-black">Madrid</span></span>
      </div>
      <nav className="hidden md:flex gap-4 text-lg font-semibold items-center text-deep-black" aria-label="Navegación principal">
        {isClient(role) && (
          <Link href="/cliente" className="professional-btn px-6 py-3 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white" tabIndex={0}>{BRAND.texts.buttons.misReservas}</Link>
        )}
        {isAdmin(role) && (
          <Link href="/admin" className="professional-btn px-6 py-3 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white" tabIndex={0}>{BRAND.texts.buttons.admin}</Link>
        )}
        <Link href="/reservas" className="professional-btn px-6 py-3 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white" tabIndex={0}>{BRAND.texts.buttons.reservar}</Link>
        <Link href="/login" className="professional-btn px-6 py-3 text-center text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white" tabIndex={0}>{BRAND.texts.buttons.signin}</Link>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="professional-btn px-6 py-3 text-center bg-gold text-deep-black hover:bg-gold-dark hover:text-pure-white" aria-label="Contactar por WhatsApp" tabIndex={0}>{BRAND.texts.buttons.contacto}</a>
      </nav>
      <div className="flex gap-2 items-center">
        <Link href="/servicios" className="professional-btn px-3 py-1 text-sm text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">Servicios</Link>
        <Link href="/reservas" className="professional-btn px-3 py-1 text-sm text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">Reservas</Link>
        <Link href="/login" className="professional-btn px-3 py-1 text-sm text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">Login</Link>
      </div>
      {/* Mobile menu: ensure it matches desktop links and styles, omitted for brevity */}
    </header>
  )
}
