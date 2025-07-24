"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Euro, Star, Clock, Scissors, Heart, Sparkles, Hand, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Masajes Terapéuticos Premium",
    subtitle: "Relajación & Bienestar Supremo",
    description:
      "Masajes de lujo con técnicas especializadas internacionales. Tratamientos personalizados con aceites premium importados y ambiente de spa exclusivo.",
    priceFrom: "35",
    duration: "35-90 min",
    image: "/images/premium-massage-therapy.jpg",
    category: "BIENESTAR PREMIUM",
    popular: true,
    rating: 4.9,
    treatments: ["Relajante Sueco", "Deportivo Profesional", "Shiatsu Tradicional", "Drenaje Linfático Completo"],
    icon: Heart,
  },
  {
    id: 2,
    title: "Barbería Artesanal de Lujo",
    subtitle: "Cortes & Afeitado Magistral",
    description:
      "Barbería de élite con técnicas tradicionales y modernas. Cortes personalizados, afeitado con navaja artesanal y productos premium exclusivos.",
    priceFrom: "16",
    duration: "30-60 min",
    image: "/images/luxury-barbering-suite.jpg",
    category: "BARBERÍA EXCLUSIVA",
    popular: true,
    rating: 4.8,
    treatments: ["Corte Signature", "Fade Profesional", "Afeitado Tradicional", "Diseño de Barba Artístico"],
    icon: Scissors,
  },
  {
    id: 3,
    title: "Depilación Corporal Premium",
    subtitle: "Cuidado & Precisión Absoluta",
    description:
      "Servicios de depilación de lujo con técnicas avanzadas europeas. Tratamientos seguros y efectivos en ambiente privado y exclusivo.",
    priceFrom: "10",
    duration: "15-90 min",
    image: "/images/premium-waxing-suite.jpg",
    category: "ESTÉTICA PREMIUM",
    popular: false,
    rating: 4.7,
    treatments: ["Depilación Láser", "Cera Premium", "Tratamiento Corporal", "Cuidado Post-Depilación"],
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Manicura Masculina Ejecutiva",
    subtitle: "Cuidado de Manos Profesional",
    description:
      "Manicura de lujo diseñada para ejecutivos. Cuidado completo de manos y uñas con productos premium y acabado impecable.",
    priceFrom: "15",
    duration: "30-45 min",
    image: "/images/luxury-manicure-service.jpg",
    category: "CUIDADO EJECUTIVO",
    popular: false,
    rating: 4.6,
    treatments: ["Manicura Executive", "Tratamiento Completo", "Pedicura Premium", "Cuidado Integral"],
    icon: Hand,
  },
  {
    id: 5,
    title: "Tratamientos Estéticos Avanzados",
    subtitle: "Cuidado Facial de Élite",
    description:
      "Tratamientos faciales de vanguardia para el cuidado de la piel masculina. Tecnología avanzada y productos de lujo internacional.",
    priceFrom: "40",
    duration: "30-60 min",
    image: "/images/elite-aesthetic-treatment.jpg",
    category: "ESTÉTICA FACIAL",
    popular: false,
    rating: 4.9,
    treatments: ["Limpieza Profunda", "Peeling Diamante", "Hidratación Premium", "Anti-Aging Avanzado"],
    icon: User,
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section ref={scrollRef} className="py-20 px-6 bg-gradient-to-br from-pearl to-pure-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-gold rounded-full floating-element gpu-accelerated" />
        <div
          className="absolute bottom-20 left-20 w-48 h-48 border border-charcoal/50 rotate-45 floating-element gpu-accelerated"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="inline-flex items-center gap-2 bg-pure-white/90 backdrop-blur-sm border border-gold/40 rounded-full px-8 py-4 mb-8">
            <Star className="text-gold" size={18} />
            <span className="text-deep-black font-semibold text-sm tracking-wider">SERVICIOS PREMIUM EXCLUSIVOS</span>
          </div>

          <h2 className="section-title">EXPERIENCIAS DE LUJO</h2>
          <p className="font-sans text-xl text-charcoal max-w-4xl mx-auto leading-relaxed">
            Cada servicio representa la máxima expresión del lujo y la profesionalidad, diseñado para superar las
            expectativas más exigentes
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out gpu-accelerated"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="elegant-card text-center relative">
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gold to-gold-light text-deep-black px-6 py-3 rounded-full text-xs font-bold z-10 shadow-gold-glow">
                          PREMIUM
                        </div>
                      )}

                      <div className="relative h-72 bg-charcoal rounded-xl mb-6 overflow-hidden group">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 gpu-accelerated"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="text-gold text-xs font-bold tracking-wider mb-2 flex items-center gap-2">
                            <div className="bg-gold/20 p-2 rounded-full">
                              <IconComponent size={14} />
                            </div>
                            {service.category}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star size={16} className="text-gold fill-current" />
                              <span className="text-pure-white text-sm font-semibold">{service.rating}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gold font-bold text-lg">
                              <span>Desde {service.priceFrom}</span>
                              <Euro size={16} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl font-bold mb-3 text-deep-black">{service.title}</h3>
                      <p className="font-sans text-gold mb-4 italic font-medium text-lg">{service.subtitle}</p>
                      <p className="font-sans text-charcoal mb-6 text-sm leading-relaxed">{service.description}</p>

                      <div className="flex justify-between items-center mb-6 text-sm">
                        <div className="flex items-center gap-1 text-charcoal">
                          <Clock size={16} />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.treatments.map((treatment, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-r from-pearl to-platinum rounded-lg py-3 px-4 text-xs text-charcoal border border-gold/20 hover:border-gold/40 transition-colors"
                          >
                            {treatment}
                          </div>
                        ))}
                      </div>

                      <Link href="/reservas" className="professional-btn w-full block text-center">
                        RESERVAR EXPERIENCIA
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pure-white/95 backdrop-blur-sm border border-gold/30 text-deep-black p-4 rounded-full hover:bg-gold hover:text-pure-white transition-all duration-300 shadow-elegant"
            aria-label="Servicio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pure-white/95 backdrop-blur-sm border border-gold/30 text-deep-black p-4 rounded-full hover:bg-gold hover:text-pure-white transition-all duration-300 shadow-elegant"
            aria-label="Siguiente servicio"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold shadow-gold-glow scale-125" : "bg-platinum hover:bg-charcoal"
                }`}
                aria-label={`Ir al servicio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`elegant-card text-center transition-all duration-700 stagger-animation ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ "--stagger": index } as React.CSSProperties}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gold to-gold-light text-deep-black px-6 py-3 rounded-full text-xs font-bold z-10 shadow-gold-glow">
                    PREMIUM
                  </div>
                )}

                <div className="relative h-72 bg-charcoal rounded-xl mb-6 overflow-hidden group">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 gpu-accelerated"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-gold text-xs font-bold tracking-wider mb-2 flex items-center gap-2">
                      <div className="bg-gold/20 p-2 rounded-full">
                        <IconComponent size={14} />
                      </div>
                      {service.category}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-gold fill-current" />
                        <span className="text-pure-white text-sm font-semibold">{service.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gold font-bold text-lg">
                        <span>Desde {service.priceFrom}</span>
                        <Euro size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3 text-deep-black">{service.title}</h3>
                <p className="font-sans text-gold mb-4 italic font-medium text-lg">{service.subtitle}</p>
                <p className="font-sans text-charcoal mb-6 text-sm leading-relaxed">{service.description}</p>

                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="flex items-center gap-1 text-charcoal">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.treatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-pearl to-platinum rounded-lg py-3 px-4 text-xs text-charcoal border border-gold/20 hover:border-gold/40 transition-colors"
                    >
                      {treatment}
                    </div>
                  ))}
                </div>

                <Link href="/reservas" className="professional-btn w-full block text-center">
                  RESERVAR EXPERIENCIA
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
