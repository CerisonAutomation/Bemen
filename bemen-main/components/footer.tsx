"use client"

import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me gustaría obtener más información sobre los servicios de BEMEN Madrid.",
    )
    window.open(`https://wa.me/34604308870?text=${message}`, "_blank")
  }

  return (
    <footer className="bg-gradient-to-br from-deep-black to-charcoal text-pure-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gold rounded-full floating-element gpu-accelerated" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 border border-gold/50 rotate-45 floating-element gpu-accelerated"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image src="/images/logo.png" alt="BEMEN Madrid Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-gold">BEMEN</h3>
                <p className="text-pearl text-sm">MADRID</p>
              </div>
            </div>
            <p className="text-pearl mb-6 text-sm leading-relaxed">
              Gestión de reservas y contacto para clientes y administradores.
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-current" />
              ))}
              <span className="text-pearl text-sm ml-2">4.9/5 - 1000+ reseñas</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold mt-1" size={16} />
                <div>
                  <p className="text-pearl text-sm">Santísima Trinidad 11</p>
                  <p className="text-pearl text-sm">Madrid (Metro Iglesia)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold" size={16} />
                <Link href="tel:+34604308870" className="text-pearl hover:text-gold transition-colors text-sm">
                  604 30 88 70
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gold" size={16} />
                <Link
                  href="mailto:info@bemenmadrid.com"
                  className="text-pearl hover:text-gold transition-colors text-sm"
                >
                  info@bemenmadrid.com
                </Link>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold mb-6">Horarios</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="text-gold" size={16} />
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span className="text-pearl">Lun - Vie</span>
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
            </div>

            <h5 className="font-sans font-semibold text-pure-white mb-4">Síguenos</h5>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-pure-white/10 p-3 rounded-full hover:bg-gold hover:text-deep-black transition-all duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="bg-pure-white/10 p-3 rounded-full hover:bg-gold hover:text-deep-black transition-all duration-300"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-charcoal/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-6">
              <Link href="/reservas" className="professional-btn">
                RESERVAR CITA
              </Link>
              <button onClick={handleWhatsAppClick} className="professional-btn bg-green-600 hover:bg-green-700">
                WHATSAPP
              </button>
            </div>
            <div className="text-center md:text-right">
              <p className="text-pearl text-sm">© 2024 BEMEN Madrid. Todos los derechos reservados.</p>
              <p className="text-pearl text-xs mt-1">Diseñado con excelencia para el caballero moderno</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
