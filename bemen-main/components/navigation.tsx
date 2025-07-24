"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  const navItems = [
    { href: "/", label: "INICIO", ariaLabel: "Ir a la página de inicio" },
    { href: "/servicios", label: "SERVICIOS", ariaLabel: "Ver nuestros servicios" },
    { href: "/reservas", label: "RESERVAS", ariaLabel: "Reservar una cita" },
    { href: "/contacto", label: "CONTACTO", ariaLabel: "Información de contacto" },
  ]

  const handleCall = () => {
    window.location.href = "tel:+34604308870"
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pure-white/95 backdrop-blur-xl border-b border-platinum shadow-elegant"
          : "bg-pure-white/80 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-lg p-1"
            aria-label="BEMEN Madrid - Ir al inicio"
          >
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="BEMEN Madrid Logo"
                fill
                className="object-contain"
                priority
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-serif text-2xl font-bold text-deep-black group-hover:text-gold transition-colors">
                BEMEN
              </div>
              <div className="font-sans text-sm font-medium text-charcoal tracking-wider">MADRID</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans font-semibold text-sm tracking-wide transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded px-2 py-1 ${
                  pathname === item.href ? "text-gold" : "text-deep-black hover:text-gold"
                }`}
                aria-label={item.ariaLabel}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Call Button */}
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-gold text-deep-black font-semibold px-4 py-2 rounded-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label="Llamar al 604 30 88 70"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">604 30 88 70</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-deep-black hover:text-gold transition-colors group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden animate-fade-in" role="menu" aria-orientation="vertical">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-pure-white/95 backdrop-blur-xl rounded-2xl mt-4 border border-platinum shadow-elegant">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 font-sans font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                    pathname === item.href
                      ? "text-gold bg-gold/10 border border-gold/30"
                      : "text-deep-black hover:text-gold hover:bg-gold/5"
                  }`}
                  role="menuitem"
                  aria-label={item.ariaLabel}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Call Button */}
              <button
                onClick={() => {
                  handleCall()
                  setIsOpen(false)
                }}
                className="w-full flex items-center justify-center gap-2 bg-gold text-deep-black font-semibold py-4 px-6 rounded-xl hover:bg-gold/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 mt-4"
                aria-label="Llamar al 604 30 88 70"
              >
                <Phone size={20} />
                604 30 88 70
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
