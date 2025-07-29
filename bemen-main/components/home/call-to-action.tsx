"use client"

import { Calendar, Clock, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (scrollRef.current) {
      observer.observe(scrollRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={scrollRef}
      className="py-20 px-6 bg-masculine-blue-dark relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury-salon-interior.jpg"
          alt="Luxury salon interior"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-black/90 to-charcoal/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 right-20 w-48 h-48 border border-gold rounded-full floating-element gpu-accelerated" />
        <div
          className="absolute bottom-20 left-20 w-32 h-32 border border-gold/50 rotate-45 floating-element gpu-accelerated"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-8 py-4 mb-8">
            <Star className="text-gold" size={20} />
            <span className="text-pure-white font-semibold text-sm tracking-wider">RESERVA TU EXPERIENCIA PREMIUM</span>
          </div>

          <h1 className="gradient-text font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿LISTO PARA UNA EXPERIENCIA
            <span className="block text-gold">EXCEPCIONAL?</span>
          </h1>

          <p className="text-deep-black font-sans text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Reserva tu cita ahora y descubre por qué somos la referencia en bienestar masculino premium en Madrid
          </p>

          {/* Business Hours Highlight */}
          <div className="elegant-card bg-pure-white/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 mb-12 max-w-md mx-auto">
            <h3 className="font-serif text-xl font-bold text-pure-white mb-4 flex items-center justify-center gap-2">
              <Clock className="text-gold" size={20} />
              Horarios de Atención
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-pearl">Lunes - Viernes</span>
                <span className="text-gold font-semibold">10:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-pearl">Sábado</span>
                <span className="text-gold font-semibold">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-pearl">Domingo</span>
                <span className="text-pure-white font-semibold">CERRADO</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/reservas"
              className="professional-btn bg-gold text-deep-black font-semibold py-5 px-12 rounded-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Calendar size={20} />
              RESERVAR ONLINE
            </Link>
            <Link
              href="tel:+34604308870"
              className="professional-btn bg-pure-white/10 backdrop-blur-sm border-2 border-pure-white text-pure-white font-semibold py-5 px-12 rounded-lg hover:bg-pure-white hover:text-deep-black transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Phone size={20} />
              LLAMAR AHORA
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-gold mb-2">
                <MapPin size={20} />
                <span className="font-sans font-semibold">UBICACIÓN PREMIUM</span>
              </div>
              <p className="text-pearl">Santísima Trinidad 11, Madrid</p>
              <p className="text-pearl text-sm">Metro Iglesia - Zona exclusiva</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-gold mb-2">
                <Phone size={20} />
                <span className="font-sans font-semibold">ATENCIÓN DIRECTA</span>
              </div>
              <p className="text-pearl">604 30 88 70</p>
              <p className="text-pearl text-sm">Atención personalizada</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">4.9</div>
              <div className="text-xs text-pearl">Valoración Media</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">1000+</div>
              <div className="text-xs text-pearl">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">5+</div>
              <div className="text-xs text-pearl">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
