"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Award, Users, Clock, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BRAND } from "@/utils/globalDesign"

export default function About() {
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
    <section ref={scrollRef} className="py-20 px-6 bg-gradient-to-br from-platinum to-pearl relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-96 h-96 border border-gold/30 rounded-full floating-element gpu-accelerated" />
        <div
          className="absolute bottom-32 right-32 w-64 h-64 border border-charcoal/30 rotate-45 floating-element gpu-accelerated"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="inline-flex items-center gap-2 bg-pure-white/90 backdrop-blur-sm border border-gold/40 rounded-full px-8 py-4 mb-8">
              <Award className="text-gold" size={18} />
              <span className="text-deep-black font-semibold text-sm tracking-wider">SOBRE BEMEN MADRID</span>
            </div>

            <h2 className="section-title mb-8 gradient-text">EXCELENCIA EN BIENESTAR MASCULINO</h2>

            <p className="font-sans text-lg text-deep-black mb-8 leading-relaxed">
              En BEMEN Madrid, redefinimos el concepto de bienestar masculino a través de servicios premium que combinan
              técnicas tradicionales con innovación moderna. Nuestro compromiso es ofrecer experiencias excepcionales
              que superen las expectativas más exigentes.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">5+</div>
                <div className="text-sm text-charcoal">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">1000+</div>
                <div className="text-sm text-charcoal">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">4.9</div>
                <div className="text-sm text-charcoal">Valoración Media</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-sm text-charcoal">Servicios Premium</div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-pure-white/80 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 mb-8">
              <h3 className="font-serif text-xl font-bold text-deep-black mb-4 flex items-center gap-2">
                <Clock className="text-gold" size={20} />
                Horarios de Atención
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal font-medium">Lunes - Viernes</span>
                  <span className="text-gold font-semibold">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal font-medium">Sábado</span>
                  <span className="text-gold font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal font-medium">Domingo</span>
                  <span className="text-deep-black font-semibold">CERRADO</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-gold" size={20} />
                <span className="text-charcoal">Santísima Trinidad 11, Madrid (Metro Iglesia)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold" size={20} />
                <span className="text-charcoal">604 30 88 70</span>
              </div>
            </div>

            <Link href="/contacto" className="professional-btn inline-block">
              CONTACTAR AHORA
            </Link>
          </div>

          {/* Images */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/luxury-barbering-suite.jpg"
                    alt="Luxury barbering suite"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 gpu-accelerated"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/premium-massage-therapy.jpg"
                    alt="Premium massage therapy"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 gpu-accelerated"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="relative h-48 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/elite-aesthetic-treatment.jpg"
                    alt="Elite aesthetic treatment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 gpu-accelerated"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/luxury-manicure-service.jpg"
                    alt="Luxury manicure service"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 gpu-accelerated"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-pure-white/80 backdrop-blur-sm rounded-xl border border-gold/20">
                <Star className="text-gold mx-auto mb-2" size={24} />
                <div className="text-xs text-deep-black font-semibold">{BRAND.texts.ui.success}</div>
              </div>
              <div className="text-center p-4 bg-pure-white/80 backdrop-blur-sm rounded-xl border border-gold/20">
                <Users className="text-gold mx-auto mb-2" size={24} />
                <div className="text-xs text-deep-black font-semibold">{BRAND.texts.ui.success}</div>
              </div>
              <div className="text-center p-4 bg-pure-white/80 backdrop-blur-sm rounded-xl border border-gold/20">
                <Award className="text-gold mx-auto mb-2" size={24} />
                <div className="text-xs text-deep-black font-semibold">{BRAND.texts.ui.success}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="relative w-16 h-16">
        <Image src="/images/logo.png" alt="BEMEN Logo" width={48} height={48} className="logo-black" />
      </div>
    </section>
  )
}
