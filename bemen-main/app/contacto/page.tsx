"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, MessageCircle, Clock, Award, Users, Target, Instagram, Star } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Auto-fill from localStorage
    const savedData = localStorage.getItem("bemen-booking-data")
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setFormData((prev) => ({
        ...prev,
        name: parsed.name || prev.name,
        email: parsed.email || prev.email,
        phone: parsed.phone || prev.phone,
      }))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save data for future autofill
    const dataToSave = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    }
    localStorage.setItem("bemen-booking-data", JSON.stringify(dataToSave))

    // Send WhatsApp message
    const message = `CONSULTA DESDE WEB - BEMEN MADRID

Datos del cliente:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

Asunto: ${formData.subject}

Mensaje:
${formData.message}

---
Enviado desde la web de BEMEN Madrid`

    const whatsappUrl = `https://wa.me/34604308870?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.")

    // Reset form but keep personal data
    setFormData((prev) => ({
      name: prev.name,
      email: prev.email,
      phone: prev.phone,
      subject: "",
      message: "",
    }))
  }

  const handleWhatsApp = () => {
    const message = "Hola! Estoy interesado en los servicios de BEMEN Madrid."
    const whatsappUrl = `https://wa.me/34604308870?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInstagram = () => {
    window.open("https://www.instagram.com/bemen.madrid", "_blank")
  }

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Santísima+Trinidad+11,+Madrid,+Spain", "_blank")
  }

  return (
    <main className="min-h-screen pt-20 bg-pure-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pearl to-pure-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border border-gold rounded-full floating-element gpu-accelerated" />
          <div
            className="absolute bottom-20 left-20 w-48 h-48 border border-charcoal/50 rotate-45 floating-element gpu-accelerated"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-pure-white/80 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="text-gold" size={20} />
            <span className="text-deep-black font-semibold text-sm tracking-wider">CONTACTO PROFESIONAL</span>
          </div>

          <h1 className="section-title animate-fade-in">CONTACTO</h1>
          <p className="font-sans text-2xl text-charcoal max-w-3xl mx-auto animate-slide-up mb-8">
            Estamos aquí para atenderte y resolver todas tus consultas
          </p>
          <div
            className="flex items-center justify-center gap-3 text-gold animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <MapPin size={20} />
            <span className="font-sans font-semibold tracking-wide">
              SANTÍSIMA TRINIDAD 11 • METRO IGLESIA • MADRID
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-platinum to-pearl">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-pure-white/80 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8">
                <Award className="text-gold" size={18} />
                <span className="text-deep-black font-semibold text-sm tracking-wider">SOBRE NOSOTROS</span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-deep-black">BEMEN MADRID</h2>
              <p className="font-sans text-xl text-gold mb-6 italic font-medium">
                "Tu destino para el bienestar masculino en Madrid"
              </p>
              <p className="font-sans text-lg text-charcoal mb-8 leading-relaxed">
                En BEMEN Madrid ofrecemos servicios profesionales de barbería, masajes terapéuticos, estética y cuidado
                personal en un ambiente moderno y acogedor. Nuestro equipo de profesionales certificados utiliza
                productos premium y técnicas avanzadas para garantizar tu satisfacción.
              </p>
              <p className="font-sans text-lg text-charcoal mb-12 leading-relaxed">
                Ubicados en el corazón de Madrid, cerca del Metro Iglesia, ofrecemos horarios flexibles y un servicio
                personalizado que se adapta a tus necesidades y estilo de vida.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center elegant-card py-6">
                  <div className="text-4xl font-serif font-bold text-gold mb-2">500+</div>
                  <div className="text-charcoal font-sans text-sm">Clientes Satisfechos</div>
                </div>
                <div className="text-center elegant-card py-6">
                  <div className="text-4xl font-serif font-bold text-gold mb-2 flex items-center justify-center gap-1">
                    4.9
                    <Star size={20} className="text-gold fill-current" />
                  </div>
                  <div className="text-charcoal font-sans text-sm">Valoración Media</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="elegant-card text-center py-8">
                  <Award className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-serif text-xl font-bold mb-3 text-deep-black">Calidad Premium</h3>
                  <p className="text-charcoal text-sm leading-relaxed">
                    Productos y equipamiento de la más alta calidad
                  </p>
                </div>
                <div className="elegant-card text-center py-8">
                  <Users className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-serif text-xl font-bold mb-3 text-deep-black">Profesionales</h3>
                  <p className="text-charcoal text-sm leading-relaxed">Equipo certificado con amplia experiencia</p>
                </div>
                <div className="elegant-card text-center py-8">
                  <Target className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-serif text-xl font-bold mb-3 text-deep-black">Personalizado</h3>
                  <p className="text-charcoal text-sm leading-relaxed">Servicios adaptados a tus necesidades</p>
                </div>
                <div className="elegant-card text-center py-8">
                  <Clock className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-serif text-xl font-bold mb-3 text-deep-black">Flexibilidad</h3>
                  <p className="text-charcoal text-sm leading-relaxed">Horarios que se adaptan a tu agenda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-6 bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-pearl/80 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8">
                <Phone className="text-gold" size={18} />
                <span className="text-deep-black font-semibold text-sm tracking-wider">INFORMACIÓN DE CONTACTO</span>
              </div>

              <h2 className="font-serif text-4xl font-bold mb-12 text-deep-black">PONTE EN CONTACTO</h2>

              <div className="space-y-8 mb-12">
                <div className="elegant-card p-6 flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                  <MapPin className="text-gold mt-1" size={28} />
                  <div>
                    <h3 className="font-serif font-bold text-deep-black mb-2 text-lg">Ubicación</h3>
                    <p className="text-gold mb-2 font-semibold">Santísima Trinidad 11</p>
                    <p className="text-charcoal">Metro Iglesia, Madrid, España</p>
                    <button
                      onClick={openGoogleMaps}
                      className="text-gold hover:text-gold/80 transition-colors text-sm mt-2 font-semibold"
                    >
                      Ver en Google Maps →
                    </button>
                  </div>
                </div>

                <div className="elegant-card p-6 flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                  <Phone className="text-gold mt-1" size={28} />
                  <div>
                    <h3 className="font-serif font-bold text-deep-black mb-2 text-lg">Teléfono</h3>
                    <p className="text-gold text-xl font-bold">604 30 88 70</p>
                    <p className="text-charcoal text-sm">Llamadas y WhatsApp</p>
                  </div>
                </div>

                <div className="elegant-card p-6 flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                  <Mail className="text-gold mt-1" size={28} />
                  <div>
                    <h3 className="font-serif font-bold text-deep-black mb-2 text-lg">Email</h3>
                    <p className="text-gold font-semibold">pipemoncloa@gmail.com</p>
                    <p className="text-charcoal text-sm">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="elegant-card p-6 flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                  <Clock className="text-gold mt-1" size={28} />
                  <div>
                    <h3 className="font-serif font-bold text-deep-black mb-2 text-lg">Horarios</h3>
                    <div className="space-y-1">
                      <p className="text-gold font-semibold">Lun - Vie: 10:00 - 20:00</p>
                      <p className="text-gold font-semibold">Sábados: 10:00 - 18:00</p>
                      <p className="text-red-600 font-semibold">Domingos: CERRADO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4 mb-12">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-3 w-full bg-green-600 hover:bg-green-700 text-pure-white py-5 px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-elegant group"
                >
                  <MessageCircle size={28} />
                  <div className="text-left">
                    <div className="text-lg">WhatsApp Directo</div>
                    <div className="text-sm opacity-90">Respuesta inmediata</div>
                  </div>
                  <div className="ml-auto group-hover:translate-x-1 transition-transform">→</div>
                </button>

                <button
                  onClick={handleInstagram}
                  className="flex items-center gap-3 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-pure-white py-5 px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-elegant group"
                >
                  <Instagram size={28} />
                  <div className="text-left">
                    <div className="text-lg">@bemen.madrid</div>
                    <div className="text-sm opacity-90">Síguenos para novedades</div>
                  </div>
                  <div className="ml-auto group-hover:translate-x-1 transition-transform">→</div>
                </button>
              </div>

              {/* Map */}
              <div
                onClick={openGoogleMaps}
                className="elegant-card p-0 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 group"
              >
                <div className="relative h-80 bg-gradient-to-br from-pearl to-platinum flex items-center justify-center">
                  <div className="text-center text-charcoal group-hover:text-gold transition-colors">
                    <MapPin size={64} className="mx-auto mb-4 text-gold group-hover:scale-110 transition-transform" />
                    <p className="font-serif font-bold text-xl mb-2">Santísima Trinidad 11</p>
                    <p className="text-lg mb-2">Metro Iglesia, Madrid</p>
                    <p className="text-sm text-gold font-semibold">Haz clic para abrir Google Maps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="elegant-card p-10">
                <div className="inline-flex items-center gap-2 bg-pearl/80 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8">
                  <Mail className="text-gold" size={18} />
                  <span className="text-deep-black font-semibold text-sm tracking-wider">FORMULARIO DE CONTACTO</span>
                </div>

                <h2 className="font-serif text-3xl font-bold mb-8 text-deep-black">ENVÍANOS UN MENSAJE</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-sans font-semibold text-deep-black mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="luxury-input"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans font-semibold text-deep-black mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="luxury-input"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-sans font-semibold text-deep-black mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="luxury-input"
                        placeholder="600 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans font-semibold text-deep-black mb-2">Asunto *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="luxury-input"
                    >
                      <option value="">Selecciona el tipo de consulta</option>
                      <option value="Información General">Información General</option>
                      <option value="Reserva de Cita">Reserva de Cita</option>
                      <option value="Servicios de Barbería">Servicios de Barbería</option>
                      <option value="Masajes Terapéuticos">Masajes Terapéuticos</option>
                      <option value="Tratamientos Estéticos">Tratamientos Estéticos</option>
                      <option value="Manicura">Manicura</option>
                      <option value="Precios y Promociones">Precios y Promociones</option>
                      <option value="Sugerencias">Sugerencias</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans font-semibold text-deep-black mb-2">Mensaje *</label>
                    <textarea
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="luxury-input resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>

                  <button type="submit" className="professional-btn w-full text-lg py-4">
                    ENVIAR MENSAJE
                  </button>
                </form>

                <div className="mt-8 p-6 bg-pearl rounded-xl border border-platinum">
                  <p className="text-charcoal text-sm text-center">
                    <Star size={16} className="inline text-gold mr-2" />
                    Todas las consultas son atendidas personalmente y con la máxima confidencialidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
