"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Euro,
  MapPin,
  Filter,
  Scissors,
  Heart,
  Sparkles,
  Hand,
  User,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Masajes Terapéuticos Premium",
    category: "Bienestar",
    description:
      "Masajes de lujo con técnicas especializadas internacionales para aliviar tensiones y renovar energías.",
    priceFrom: "35",
    duration: "35-90 min",
    rating: 4.9,
    reviews: 127,
    image: "/images/premium-massage-therapy.jpg",
    popular: true,
    icon: Heart,
    treatments: [
      { name: "Relajante Sueco Premium", price: "40", duration: "35 min" },
      { name: "Reafirmante Deportivo", price: "50", duration: "60 min" },
      { name: "Drenaje Linfático", price: "35", duration: "30 min" },
      { name: "Shiatsu Tradicional", price: "75", duration: "60 min" },
      { name: "Drenaje Completo Luxury", price: "90", duration: "90 min" },
    ],
  },
  {
    id: 2,
    title: "Barbería Artesanal de Lujo",
    category: "Cabello",
    description: "Servicios de barbería de élite con técnicas tradicionales y productos premium exclusivos.",
    priceFrom: "16",
    duration: "30-60 min",
    rating: 4.8,
    reviews: 89,
    image: "/images/luxury-barbering-suite.jpg",
    popular: true,
    icon: Scissors,
    treatments: [
      { name: "Corte Signature", price: "16", duration: "30 min" },
      { name: "Fade Profesional", price: "20", duration: "45 min" },
      { name: "Corte + Lavado Premium", price: "18", duration: "45 min" },
      { name: "Afeitado Tradicional", price: "15", duration: "30 min" },
      { name: "Diseño Barba Artístico", price: "18", duration: "30 min" },
    ],
  },
  {
    id: 3,
    title: "Depilación Corporal Premium",
    category: "Estética",
    description: "Servicios de depilación de lujo con técnicas avanzadas europeas en ambiente exclusivo.",
    priceFrom: "10",
    duration: "15-90 min",
    rating: 4.7,
    reviews: 156,
    image: "/images/premium-waxing-suite.jpg",
    icon: Sparkles,
    treatments: [
      { name: "Axilas Premium", price: "10", duration: "15 min" },
      { name: "Espalda Completa", price: "22", duration: "30 min" },
      { name: "Pecho Profesional", price: "15", duration: "20 min" },
      { name: "Abdomen Luxury", price: "15", duration: "20 min" },
      { name: "Brazos Completos", price: "20", duration: "25 min" },
      { name: "Zona Íntima Exclusiva", price: "35", duration: "45 min" },
    ],
  },
  {
    id: 4,
    title: "Manicura Masculina Ejecutiva",
    category: "Cuidado",
    description: "Cuidado profesional de manos y uñas diseñado específicamente para ejecutivos distinguidos.",
    priceFrom: "15",
    duration: "30-45 min",
    rating: 4.6,
    reviews: 94,
    image: "/images/luxury-manicure-service.jpg",
    icon: Hand,
    treatments: [
      { name: "Manicura Executive", price: "15", duration: "30 min" },
      { name: "Manicura Premium", price: "18", duration: "45 min" },
      { name: "Pedicura Executive", price: "20", duration: "35 min" },
      { name: "Pedicura Luxury", price: "26", duration: "50 min" },
    ],
  },
  {
    id: 5,
    title: "Tratamientos Estéticos Avanzados",
    category: "Facial",
    description: "Tratamientos faciales de vanguardia con tecnología avanzada y productos de lujo internacional.",
    priceFrom: "40",
    duration: "30-60 min",
    rating: 4.9,
    reviews: 67,
    image: "/images/elite-aesthetic-treatment.jpg",
    icon: User,
    treatments: [
      { name: "Limpieza Facial Premium", price: "40", duration: "50 min" },
      { name: "Peeling Diamante", price: "20", duration: "30 min" },
      { name: "Peeling Corporal Luxury", price: "50", duration: "45 min" },
    ],
  },
]

const categories = ["Todos", "Bienestar", "Cabello", "Estética", "Cuidado", "Facial"]

export default function ServiciosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredServices =
    selectedCategory === "Todos" ? services : services.filter((service) => service.category === selectedCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredServices.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.ceil(filteredServices.length / 3)) % Math.ceil(filteredServices.length / 3),
    )
  }

  return (
    <main className="min-h-screen pt-20 bg-pure-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pearl to-pure-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/executive-grooming.jpg"
            alt="Executive grooming"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pure-white/90 via-pearl/80 to-platinum/90" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-pure-white/90 backdrop-blur-sm border border-gold/40 rounded-full px-8 py-4 mb-8">
            <Star className="text-gold" size={20} />
            <span className="text-deep-black font-semibold text-sm tracking-wider">SERVICIOS PREMIUM EXCLUSIVOS</span>
          </div>

          <h1 className="section-title animate-fade-in">EXPERIENCIAS DE LUJO</h1>
          <p className="font-sans text-xl text-charcoal max-w-3xl mx-auto animate-slide-up mb-8">
            Descubre nuestra gama exclusiva de servicios premium de bienestar masculino en el corazón de Madrid
          </p>
          <div className="flex items-center justify-center gap-2 text-gold">
            <MapPin size={20} />
            <span className="font-sans font-semibold">Santísima Trinidad 11, Metro Iglesia</span>
          </div>

          {/* Business Hours */}
          <div className="bg-pure-white/80 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 mt-8 max-w-md mx-auto">
            <h3 className="font-serif text-lg font-bold text-deep-black mb-4">Horarios de Atención</h3>
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
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-pure-white border-b border-platinum">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="text-charcoal" size={20} />
            <span className="font-sans font-semibold text-deep-black">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentSlide(0)
                }}
                className={`px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-gold to-gold-light text-deep-black shadow-gold-glow"
                    : "bg-pearl text-deep-black hover:bg-charcoal hover:text-pure-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="elegant-card group cursor-pointer transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gold to-gold-light text-deep-black px-6 py-3 rounded-full text-xs font-bold z-10 shadow-gold-glow">
                      PREMIUM
                    </div>
                  )}

                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 gpu-accelerated"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-gold to-gold-light text-deep-black px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                      <div className="bg-deep-black/20 p-1 rounded-full">
                        <IconComponent size={12} />
                      </div>
                      {service.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-deep-black/90 text-gold px-4 py-2 rounded-full font-semibold flex items-center gap-1">
                      <span>Desde {service.priceFrom}</span>
                      <Euro size={14} />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold mb-3 text-deep-black group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-charcoal mb-4 text-sm leading-relaxed">{service.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-charcoal">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-gold fill-current" />
                      <span>{service.rating}</span>
                    </div>
                    <div className="text-charcoal">
                      <span>({service.reviews} reseñas)</span>
                    </div>
                  </div>

                  {/* Treatments List */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-sans font-semibold text-deep-black text-sm">Tratamientos disponibles:</h4>
                    {service.treatments.slice(0, 3).map((treatment, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-charcoal">{treatment.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-charcoal">{treatment.duration}</span>
                          <span className="font-semibold text-gold">{treatment.price}€</span>
                        </div>
                      </div>
                    ))}
                    {service.treatments.length > 3 && (
                      <div className="text-xs text-charcoal italic">
                        +{service.treatments.length - 3} tratamientos más
                      </div>
                    )}
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

      {/* Featured Carousel */}
      <section className="py-20 px-6 bg-gradient-to-br from-pearl to-platinum">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">SERVICIOS DESTACADOS</h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gpu-accelerated"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(filteredServices.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-8">
                      {filteredServices.slice(slideIndex * 3, slideIndex * 3 + 3).map((service) => {
                        const IconComponent = service.icon
                        return (
                          <div key={service.id} className="elegant-card text-center">
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              width={300}
                              height={200}
                              className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <div className="text-gold text-xs font-semibold mb-2 flex items-center justify-center gap-2">
                              <div className="bg-gold/20 p-1 rounded-full">
                                <IconComponent size={12} />
                              </div>
                              {service.category}
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-2 text-deep-black">{service.title}</h3>
                            <p className="font-sans text-sm text-charcoal mb-4">
                              {service.description.substring(0, 80)}...
                            </p>
                            <div className="flex items-center justify-center gap-1 text-gold font-semibold text-lg">
                              <span>Desde {service.priceFrom}</span>
                              <Euro size={16} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold text-pure-white p-3 rounded-full hover:bg-gold-dark transition-colors shadow-elegant"
              aria-label="Servicios anteriores"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold text-pure-white p-3 rounded-full hover:bg-gold-dark transition-colors shadow-elegant"
              aria-label="Siguientes servicios"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(filteredServices.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentSlide ? "bg-gold shadow-gold-glow" : "bg-charcoal/30"
                  }`}
                  aria-label={`Ir a la página ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
