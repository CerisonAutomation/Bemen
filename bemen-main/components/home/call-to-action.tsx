"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, MessageCircle, Calendar, Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me gustaría reservar una cita en BEMEN Madrid. ¿Podrían ayudarme con la disponibilidad?",
    )
    window.open(`https://wa.me/34604308870?text=${message}`, "_blank")
  }

  return (
    <section
      ref={scrollRef}
      className="py-20 px-6 bg-gradient-to-br from-deep-black to-charcoal relative overflow-hidden"
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

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pure-white leading-tight">
            ¿LISTO PARA UNA EXPERIENCIA
            <span className="block text-gold">EXCEPCIONAL?</span>
          </h2>

          <p className="font-sans text-xl text-pearl max-w-3xl mx-auto mb-12 leading-relaxed">
            Reserva tu cita ahora y descubre por qué somos la referencia en bienestar masculino premium en Madrid
          </p>

          {/* Business Hours Highlight */}
          <div className="bg-pure-white/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 mb-12 max-w-md mx-auto">
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
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-pure-white font-semibold py-5 px-12 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <MessageCircle size={20} />
              RESERVAR POR WHATSAPP
            </button>
            <Link
              href="/reservas"
              className="bg-gold text-deep-black font-semibold py-5 px-12 rounded-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Calendar size={20} />
              RESERVAR ONLINE
            </Link>
            <Link
              href="tel:+34604308870"
              className="bg-pure-white/10 backdrop-blur-sm border-2 border-pure-white text-pure-white font-semibold py-5 px-12 rounded-lg hover:bg-pure-white hover:text-deep-black transition-all duration-300 hover:scale-105 flex items-center gap-3"
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
