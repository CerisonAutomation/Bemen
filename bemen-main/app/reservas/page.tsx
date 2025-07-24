"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  Check,
  ArrowRight,
  ArrowLeft,
  Euro,
  MapPin,
  User,
  Mail,
  Phone,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const services = [
  {
    id: 1,
    name: "Masaje Relajante",
    duration: "35 min",
    price: 40,
    category: "Bienestar",
    description: "Masaje relajante para aliviar tensiones",
  },
  {
    id: 2,
    name: "Masaje Reafirmante",
    duration: "60 min",
    price: 50,
    category: "Bienestar",
    description: "Masaje reafirmante con técnicas especializadas",
  },
  {
    id: 3,
    name: "Masaje Drenante",
    duration: "30 min",
    price: 35,
    category: "Bienestar",
    description: "Masaje drenante para mejorar la circulación",
  },
  {
    id: 4,
    name: "Shiatsu",
    duration: "60 min",
    price: 75,
    category: "Bienestar",
    description: "Técnica japonesa de masaje terapéutico",
  },
  {
    id: 5,
    name: "Drenaje Completo",
    duration: "90 min",
    price: 90,
    category: "Bienestar",
    description: "Drenaje linfático completo",
  },
  {
    id: 6,
    name: "Corte Clásico",
    duration: "30 min",
    price: 16,
    category: "Cabello",
    description: "Corte de cabello clásico profesional",
  },
  {
    id: 7,
    name: "Corte Fade",
    duration: "45 min",
    price: 20,
    category: "Cabello",
    description: "Corte moderno con degradado",
  },
  {
    id: 8,
    name: "Corte + Lavado + Secado",
    duration: "45 min",
    price: 18,
    category: "Cabello",
    description: "Servicio completo de barbería",
  },
  {
    id: 9,
    name: "Afeitado",
    duration: "30 min",
    price: 15,
    category: "Cabello",
    description: "Afeitado tradicional profesional",
  },
  {
    id: 10,
    name: "Diseño de Barba",
    duration: "30 min",
    price: 18,
    category: "Cabello",
    description: "Diseño y arreglo de barba",
  },
  {
    id: 11,
    name: "Depilación Axilas",
    duration: "15 min",
    price: 10,
    category: "Estética",
    description: "Depilación profesional de axilas",
  },
  {
    id: 12,
    name: "Depilación Espalda",
    duration: "30 min",
    price: 22,
    category: "Estética",
    description: "Depilación completa de espalda",
  },
  {
    id: 13,
    name: "Depilación Pecho",
    duration: "20 min",
    price: 15,
    category: "Estética",
    description: "Depilación profesional de pecho",
  },
  {
    id: 14,
    name: "Depilación Abdomen",
    duration: "20 min",
    price: 15,
    category: "Estética",
    description: "Depilación de zona abdominal",
  },
  {
    id: 15,
    name: "Depilación Brazos",
    duration: "25 min",
    price: 20,
    category: "Estética",
    description: "Depilación completa de brazos",
  },
  {
    id: 16,
    name: "Depilación Zona Íntima",
    duration: "45 min",
    price: 35,
    category: "Estética",
    description: "Depilación íntima profesional",
  },
  {
    id: 17,
    name: "Manicura Express",
    duration: "30 min",
    price: 15,
    category: "Cuidado",
    description: "Manicura rápida y profesional",
  },
  {
    id: 18,
    name: "Manicura Completa",
    duration: "45 min",
    price: 18,
    category: "Cuidado",
    description: "Manicura completa con tratamiento",
  },
  {
    id: 19,
    name: "Pedicura Express",
    duration: "35 min",
    price: 20,
    category: "Cuidado",
    description: "Pedicura rápida y efectiva",
  },
  {
    id: 20,
    name: "Pedicura Completa",
    duration: "50 min",
    price: 26,
    category: "Cuidado",
    description: "Pedicura completa con tratamiento",
  },
  {
    id: 21,
    name: "Limpieza Facial",
    duration: "50 min",
    price: 40,
    category: "Facial",
    description: "Limpieza facial profunda",
  },
  {
    id: 22,
    name: "Peeling Capilar",
    duration: "30 min",
    price: 20,
    category: "Facial",
    description: "Peeling especializado para cuero cabelludo",
  },
  {
    id: 23,
    name: "Peeling Corporal",
    duration: "45 min",
    price: 50,
    category: "Facial",
    description: "Peeling corporal revitalizante",
  },
]

const timeSlots = ["10:00", "11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]

interface BookingData {
  service: number | null
  date: string
  time: string
  name: string
  email: string
  phone: string
  notes: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  date?: string
  time?: string
}

export default function ReservasPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const { toast } = useToast()

  const categories = ["Todos", "Bienestar", "Cabello", "Estética", "Cuidado", "Facial"]
  const filteredServices =
    selectedCategory === "Todos" ? services : services.filter((service) => service.category === selectedCategory)

  // Auto-fill functionality with error handling
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("bemen-booking-data")
      if (savedData) {
        const parsed = JSON.parse(savedData)
        setBookingData((prev) => ({
          ...prev,
          name: parsed.name || prev.name,
          email: parsed.email || prev.email,
          phone: parsed.phone || prev.phone,
        }))
      }
    } catch (error) {
      console.warn("Error loading saved booking data:", error)
    }
  }, [])

  // Save data to localStorage for autofill
  const saveToLocalStorage = (data: Partial<BookingData>) => {
    try {
      const currentData = JSON.parse(localStorage.getItem("bemen-booking-data") || "{}")
      const updatedData = { ...currentData, ...data }
      localStorage.setItem("bemen-booking-data", JSON.stringify(updatedData))
    } catch (error) {
      console.warn("Error saving booking data:", error)
    }
  }

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[\d\s\-()]{9,}$/
    return phoneRegex.test(phone.trim())
  }

  const validateStep = (step: number): FormErrors => {
    const newErrors: FormErrors = {}

    switch (step) {
      case 1:
        if (!bookingData.service) {
          newErrors.service = "Por favor, selecciona un servicio"
        }
        break
      case 2:
        if (!bookingData.date) {
          newErrors.date = "Por favor, selecciona una fecha"
        }
        if (!bookingData.time) {
          newErrors.time = "Por favor, selecciona una hora"
        }
        break
      case 3:
        if (!bookingData.name.trim()) {
          newErrors.name = "El nombre es obligatorio"
        } else if (bookingData.name.trim().length < 2) {
          newErrors.name = "El nombre debe tener al menos 2 caracteres"
        }

        if (!bookingData.email.trim()) {
          newErrors.email = "El email es obligatorio"
        } else if (!validateEmail(bookingData.email)) {
          newErrors.email = "Por favor, introduce un email válido"
        }

        if (!bookingData.phone.trim()) {
          newErrors.phone = "El teléfono es obligatorio"
        } else if (!validatePhone(bookingData.phone)) {
          newErrors.phone = "Por favor, introduce un teléfono válido"
        }
        break
    }

    return newErrors
  }

  const nextStep = () => {
    const stepErrors = validateStep(currentStep)
    setErrors(stepErrors)

    if (Object.keys(stepErrors).length === 0 && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else if (Object.keys(stepErrors).length > 0) {
      toast({
        title: "Error de validación",
        description: "Por favor, corrige los errores antes de continuar",
        variant: "destructive",
      })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleInputChange = (field: keyof BookingData, value: string | number) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))

    // Clear specific error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    // Save personal data for autofill
    if (["name", "email", "phone"].includes(field)) {
      saveToLocalStorage({ [field]: value })
    }
  }

  const sendWhatsAppConfirmation = (booking: BookingData) => {
    const selectedService = services.find((s) => s.id === booking.service)
    const message = `🎉 *RESERVA CONFIRMADA - BEMEN MADRID*

📅 *Detalles de tu cita:*
• Servicio: ${selectedService?.name}
• Descripción: ${selectedService?.description}
• Fecha: ${formatDate(booking.date)}
• Hora: ${booking.time}
• Duración: ${selectedService?.duration}
• Precio: ${selectedService?.price}€

👤 *Datos del cliente:*
• Nombre: ${booking.name}
• Email: ${booking.email}
• Teléfono: ${booking.phone}
${booking.notes ? `• Notas: ${booking.notes}` : ""}

📍 *Ubicación:*
Santísima Trinidad 11, Metro Iglesia, Madrid

⏰ *Información importante:*
• Llega 5 minutos antes de tu cita
• Si necesitas cancelar, avísanos con 24h de antelación
• Trae una toalla si vienes por masaje
• Confirmaremos tu cita en las próximas horas

¡Te esperamos! 💪✨

*BEMEN Madrid - Bienestar Masculino Premium*
📞 604 30 88 70`

    const whatsappUrl = `https://wa.me/34604308870?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const finalErrors = validateStep(3)
    setErrors(finalErrors)

    if (Object.keys(finalErrors).length > 0) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrige los errores antes de enviar",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Send WhatsApp confirmation
      sendWhatsAppConfirmation(bookingData)

      // Show success message
      toast({
        title: "¡Reserva confirmada!",
        description: "Se ha enviado la confirmación por WhatsApp. Te contactaremos pronto.",
        variant: "success",
      })

      // Reset form but keep personal data for future bookings
      setBookingData((prev) => ({
        service: null,
        date: "",
        time: "",
        name: prev.name,
        email: prev.email,
        phone: prev.phone,
        notes: "",
      }))
      setCurrentStep(1)
      setErrors({})
    } catch (error) {
      console.error("Error submitting booking:", error)
      toast({
        title: "Error al enviar",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date.toISOString().split("T")[0])
    }
    return dates
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const canProceed = (step: number) => {
    const stepErrors = validateStep(step)
    return Object.keys(stepErrors).length === 0
  }

  return (
    <main className="min-h-screen pt-20 bg-pure-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pearl to-pure-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pure-white/80 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
            <Calendar className="text-gold" size={20} />
            <span className="text-deep-black font-semibold text-sm tracking-wider">SISTEMA DE RESERVAS</span>
          </div>

          <h1 className="section-title animate-fade-in">RESERVA TU CITA</h1>
          <p className="font-sans text-xl text-charcoal max-w-2xl mx-auto animate-slide-up mb-6">
            Reserva tu cita en tres simples pasos y recibe confirmación inmediata por WhatsApp
          </p>
          <div className="flex items-center justify-center gap-2 text-gold">
            <MapPin size={20} />
            <span className="font-sans font-semibold">Santísima Trinidad 11, Metro Iglesia, Madrid</span>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 px-6 bg-pure-white border-b border-platinum">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step ? "bg-gold text-pure-white shadow-gold-glow" : "bg-platinum text-charcoal"
                  }`}
                >
                  {currentStep > step ? <Check size={20} /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step ? "bg-gold" : "bg-platinum"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-16">
            <span className={`font-sans text-sm font-semibold ${currentStep >= 1 ? "text-gold" : "text-charcoal"}`}>
              Servicio
            </span>
            <span className={`font-sans text-sm font-semibold ${currentStep >= 2 ? "text-gold" : "text-charcoal"}`}>
              Fecha y Hora
            </span>
            <span className={`font-sans text-sm font-semibold ${currentStep >= 3 ? "text-gold" : "text-charcoal"}`}>
              Datos Personales
            </span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="elegant-card">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-3xl font-bold mb-8 text-center text-gold">SELECCIONA TU SERVICIO</h2>

                {/* Category Filter */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-gold text-pure-white shadow-gold-glow"
                            : "bg-pearl text-deep-black hover:bg-charcoal hover:text-pure-white"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {errors.service && (
                  <div className="flex items-center gap-2 text-red-600 mb-4 justify-center">
                    <AlertCircle size={16} />
                    <span className="text-sm">{errors.service}</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 max-h-96 overflow-y-auto">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleInputChange("service", service.id)}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        bookingData.service === service.id
                          ? "border-gold bg-gold/10 shadow-gold-glow"
                          : "border-platinum hover:border-gold/50 hover:shadow-elegant"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-serif text-xl font-bold text-deep-black">{service.name}</h3>
                        <div className="text-gold text-xs font-semibold bg-gold/10 px-2 py-1 rounded">
                          {service.category}
                        </div>
                      </div>
                      <p className="text-charcoal text-sm mb-3">{service.description}</p>
                      <div className="flex items-center gap-4 text-charcoal">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        <div className="text-gold font-bold flex items-center gap-1">
                          <span>{service.price}</span>
                          <Euro size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-3xl font-bold mb-8 text-center text-gold">ELIGE FECHA Y HORA</h2>

                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="font-sans text-lg font-semibold mb-4 text-deep-black flex items-center gap-2">
                    <Calendar size={20} />
                    Seleccionar Fecha
                  </h3>
                  {errors.date && (
                    <div className="flex items-center gap-2 text-red-600 mb-4">
                      <AlertCircle size={16} />
                      <span className="text-sm">{errors.date}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {generateDates().map((date) => (
                      <button
                        key={date}
                        onClick={() => handleInputChange("date", date)}
                        className={`p-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                          bookingData.date === date
                            ? "border-gold bg-gold text-pure-white shadow-gold-glow"
                            : "border-platinum text-deep-black hover:border-gold/50 hover:shadow-elegant"
                        }`}
                        aria-label={`Seleccionar fecha ${formatDate(date)}`}
                      >
                        <div className="text-sm font-semibold">{formatDate(date).split(",")[0]}</div>
                        <div className="text-xs opacity-80">{date.split("-").reverse().join("/")}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-4 text-deep-black flex items-center gap-2">
                    <Clock size={20} />
                    Seleccionar Hora
                  </h3>
                  {errors.time && (
                    <div className="flex items-center gap-2 text-red-600 mb-4">
                      <AlertCircle size={16} />
                      <span className="text-sm">{errors.time}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleInputChange("time", time)}
                        className={`p-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                          bookingData.time === time
                            ? "border-gold bg-gold text-pure-white shadow-gold-glow"
                            : "border-platinum text-deep-black hover:border-gold/50 hover:shadow-elegant"
                        }`}
                        aria-label={`Seleccionar hora ${time}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-3xl font-bold mb-8 text-center text-gold">TUS DATOS</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans font-semibold text-deep-black mb-2 flex items-center gap-2">
                        <User size={18} />
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`luxury-input ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                        placeholder="Tu nombre completo"
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <div id="name-error" className="flex items-center gap-2 text-red-600 mt-2">
                          <AlertCircle size={16} />
                          <span className="text-sm">{errors.name}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block font-sans font-semibold text-deep-black mb-2 flex items-center gap-2">
                        <Mail size={18} />
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`luxury-input ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                        placeholder="tu@email.com"
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <div id="email-error" className="flex items-center gap-2 text-red-600 mt-2">
                          <AlertCircle size={16} />
                          <span className="text-sm">{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans font-semibold text-deep-black mb-2 flex items-center gap-2">
                      <Phone size={18} />
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`luxury-input ${errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
                      placeholder="600 000 000"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <div id="phone-error" className="flex items-center gap-2 text-red-600 mt-2">
                        <AlertCircle size={16} />
                        <span className="text-sm">{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block font-sans font-semibold text-deep-black mb-2 flex items-center gap-2">
                      <MessageSquare size={18} />
                      Notas Adicionales
                    </label>
                    <textarea
                      rows={4}
                      value={bookingData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      className="luxury-input resize-none"
                      placeholder="Cualquier solicitud específica o información adicional..."
                    />
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-pearl p-6 rounded-xl border border-platinum">
                    <h3 className="font-serif text-xl font-bold mb-4 text-gold flex items-center gap-2">
                      <CheckCircle size={20} />
                      RESUMEN DE LA RESERVA
                    </h3>
                    <div className="space-y-2 text-charcoal">
                      <div className="flex justify-between">
                        <span>Servicio:</span>
                        <span className="font-semibold">
                          {services.find((s) => s.id === bookingData.service)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fecha:</span>
                        <span className="font-semibold">{bookingData.date ? formatDate(bookingData.date) : ""}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hora:</span>
                        <span className="font-semibold">{bookingData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duración:</span>
                        <span className="font-semibold">
                          {services.find((s) => s.id === bookingData.service)?.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ubicación:</span>
                        <span className="font-semibold">Santísima Trinidad 11, Madrid</span>
                      </div>
                      <div className="flex justify-between font-bold text-gold border-t border-platinum pt-2">
                        <span>Total:</span>
                        <span className="flex items-center gap-1">
                          {services.find((s) => s.id === bookingData.service)?.price}
                          <Euro size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  currentStep === 1
                    ? "bg-platinum text-charcoal cursor-not-allowed"
                    : "bg-charcoal text-pure-white hover:bg-deep-black hover:scale-105 focus:ring-charcoal"
                }`}
              >
                <ArrowLeft size={20} />
                Anterior
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed(currentStep)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    !canProceed(currentStep)
                      ? "bg-platinum text-charcoal cursor-not-allowed"
                      : "professional-btn focus:ring-gold"
                  }`}
                >
                  Siguiente
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed(currentStep) || isSubmitting}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    !canProceed(currentStep) || isSubmitting
                      ? "bg-platinum text-charcoal cursor-not-allowed"
                      : "bg-green-600 text-pure-white hover:bg-green-700 hover:scale-105 focus:ring-green-600"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      PROCESANDO...
                    </>
                  ) : (
                    <>
                      CONFIRMAR RESERVA
                      <Check size={20} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
