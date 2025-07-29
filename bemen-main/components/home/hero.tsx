"use client"

import { useState, useEffect } from "react"
import { ChevronDown, MapPin, Star, Phone, Scissors, Sparkles, Heart, Hand } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pure-white via-pearl to-platinum">
      {/* Luxury Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury-salon-interior.jpg"
          alt="Luxury salon interior"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pure-white/90 via-pearl/80 to-platinum/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gold rotate-45 floating-element gpu-accelerated" />
        <div
          className="absolute bottom-32 right-32 w-24 h-24 border border-charcoal rotate-12 floating-element gpu-accelerated"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-16 h-16 border border-gold/50 floating-element gpu-accelerated"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-pure-white/90 backdrop-blur-sm border border-gold/40 rounded-full px-8 py-4 mb-8 shadow-elegant">
            <Star className="text-gold" size={20} />
            <span className="text-deep-black font-semibold text-sm tracking-wider">SERVICIOS PREMIUM EXCLUSIVOS</span>
          </div>

          {/* Main Logo and Title */}
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-8 animate-scale-in">
              <Image src="/images/logo.png" alt="BEMEN Madrid Logo" fill className="object-contain" priority />
            </div>
            <h1 className="gradient-text">{/* ...existing code... */}</h1>
            <div
              className="flex items-center justify-center gap-3 text-charcoal mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <MapPin size={20} className="text-gold" />
              <span className="font-sans text-lg tracking-wide font-medium">SANTÍSIMA TRINIDAD 11 • METRO IGLESIA</span>
            </div>
          </div>

          {/* Professional Tagline */}
          <p
            className="font-serif text-3xl md:text-4xl mb-6 text-charcoal italic animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            "Excelencia suprema en bienestar masculino"
          </p>
          <p
            className="text-deep-black font-sans text-xl mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            Servicios de lujo exclusivos: barbería artesanal, masajes terapéuticos premium, estética avanzada y cuidado
            personal de élite para el caballero distinguido.
          </p>

          {/* Business Hours */}
          <div
            className="bg-pure-white/80 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 mb-12 max-w-md mx-auto animate-fade-in"
            style={{ animationDelay: "1.0s" }}
          >
            <h3 className="font-serif text-xl font-bold text-deep-black mb-4">Horarios de Atención</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-charcoal">Lunes - Viernes</span>
                <span className="text-gold font-semibold">10:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal">Sábado</span>
                <span className="text-gold font-semibold">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal">Domingo</span>
                <span className="text-deep-black font-semibold">CERRADO</span>
              </div>
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in"
            style={{ animationDelay: "1.2s" }}
          >
            <Link href="/reservas" className="professional-btn text-lg px-12 py-5">
              RESERVAR CITA EXCLUSIVA
            </Link>
            <Link
              href="/servicios"
              className="bg-pure-white text-deep-black border-2 border-deep-black font-semibold py-5 px-12 rounded-lg hover:bg-deep-black hover:text-pure-white transition-all duration-300 hover:scale-105"
            >
              EXPLORAR SERVICIOS
            </Link>
          </div>

          {/* Service Highlights with Professional Icons */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <div className="bg-gold/10 p-4 rounded-full">
                  <Scissors className="text-gold" size={32} />
                </div>
              </div>
              <div className="text-deep-black font-semibold text-sm tracking-wider">BARBERÍA ARTESANAL</div>
              <div className="text-charcoal text-xs mt-1">Desde 16€</div>
            </div>
            <div className="text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <div className="bg-gold/10 p-4 rounded-full">
                  <Heart className="text-gold" size={32} />
                </div>
              </div>
              <div className="text-deep-black font-semibold text-sm tracking-wider">MASAJES PREMIUM</div>
              <div className="text-charcoal text-xs mt-1">Desde 35€</div>
            </div>
            <div className="text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <div className="bg-gold/10 p-4 rounded-full">
                  <Sparkles className="text-gold" size={32} />
                </div>
              </div>
              <div className="text-deep-black font-semibold text-sm tracking-wider">ESTÉTICA AVANZADA</div>
              <div className="text-charcoal text-xs mt-1">Desde 10€</div>
            </div>
            <div className="text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <div className="bg-gold/10 p-4 rounded-full">
                  <Hand className="text-gold" size={32} />
                </div>
              </div>
              <div className="text-deep-black font-semibold text-sm tracking-wider">CUIDADO EXCLUSIVO</div>
              <div className="text-charcoal text-xs mt-1">Desde 15€</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "1.8s" }}>
            <div className="flex items-center justify-center gap-2 text-gold">
              <Phone size={20} />
              <span className="font-sans font-semibold text-lg">604 30 88 70</span>
            </div>
            <p className="text-deep-black text-sm mt-2">Atención personalizada y citas exclusivas</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold" />
          <ChevronDown className="text-gold animate-pulse" size={32} />
        </div>
      </div>
    </section>
  )
}
