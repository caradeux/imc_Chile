"use client"

import { useState, useEffect, useRef } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Users,
  Award,
  ChevronRight,
  Menu,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Calendar,
  Ruler,
  Timer,
  Shield,
  Zap,
  Hammer,
  Wrench,
  Building2,
  TrendingUp,
  Target,
  Sparkles,
  Check,
  ArrowLeft,
  Send,
  Rocket,
  Crown,
  Diamond,
  Flame,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function IMCServiciosChile() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [quotationStep, setQuotationStep] = useState(1)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState({})
  const [quotationData, setQuotationData] = useState({
    service: "",
    description: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
  })
  const [isQuotationOpen, setIsQuotationOpen] = useState(false)
  const [particles, setParticles] = useState([])
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }))
    setParticles(newParticles)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
            if (entry.target.id === "stats-section" && !hasAnimated) {
              setHasAnimated(true)
              animateCounters()
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[id]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = { projects: 500, clients: 50, years: 15, satisfaction: 98 }
    const duration = 3000
    const steps = 100
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 4)

      setCounters({
        projects: Math.floor(targets.projects * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        years: Math.floor(targets.years * easeOut),
        satisfaction: Math.floor(targets.satisfaction * easeOut),
      })

      if (step >= steps) {
        clearInterval(interval)
        setCounters(targets)
      }
    }, stepDuration)
  }

  const services = [
    {
      icon: Zap,
      title: "Servicios Eléctricos",
      description:
        "Instalaciones certificadas, sistemas LED, automatización y mantenimiento preventivo con certificación SEC.",
      features: [
        "Instalaciones domiciliarias certificadas",
        "Electricidad semi-industrial",
        "Sistemas de iluminación LED",
        "Automatización y control",
        "Mantenimiento preventivo",
        "Certificaciones SEC",
      ],
      gradient: "from-yellow-400 via-orange-400 to-red-500",
      bgPattern: "⚡",
    },
    {
      icon: Building2,
      title: "Obras Civiles",
      description:
        "Hormigón de alta resistencia, estructuras especializadas y pavimentación industrial con control de calidad.",
      features: [
        "Hormigón de alta resistencia",
        "Enfierraduras especializadas",
        "Fundaciones y cimientos",
        "Estructuras de concreto",
        "Pavimentación industrial",
        "Control de calidad certificado",
      ],
      gradient: "from-blue-400 via-cyan-400 to-teal-500",
      bgPattern: "🏗️",
    },
    {
      icon: Hammer,
      title: "Carpintería Especializada",
      description: "Carpintería en metalcom, estructuras de aluminio y mobiliario comercial con acabados de lujo.",
      features: [
        "Carpintería en metalcom",
        "Estructuras de aluminio",
        "Mobiliario comercial",
        "Soluciones arquitectónicas",
        "Acabados de lujo",
        "Diseño personalizado",
      ],
      gradient: "from-amber-400 via-orange-400 to-red-500",
      bgPattern: "🔨",
    },
    {
      icon: Wrench,
      title: "Servicios Complementarios",
      description: "Techumbres industriales, demarcación especializada, acabados premium y soldadura certificada.",
      features: [
        "Techumbres industriales",
        "Demarcación especializada",
        "Acabados premium",
        "Soldadura certificada AWS",
        "Pintura industrial",
        "Protección anticorrosiva",
      ],
      gradient: "from-green-400 via-emerald-400 to-teal-500",
      bgPattern: "🔧",
    },
  ]

  const clients = [
    { name: "Jumbo", projects: "50+ remodelaciones", logo: "/jumbo-logo.png" },
    { name: "Construmart", projects: "Múltiples proyectos", logo: "/construmart-logo.png" },
    { name: "Santa Isabel", projects: "Centros logísticos", logo: "/santa-isabel-logo.png" },
    { name: "Easy", projects: "Modernizaciones", logo: "/easy-logo.png" },
  ]

  const projects = [
    {
      id: 1,
      title: "Remodelación Jumbo Maipú",
      category: "Retail",
      year: "2024",
      area: "2,500 m²",
      duration: "3 meses",
      image: "/modern-retail-renovation.png",
      description:
        "Remodelación completa de tienda retail incluyendo sistemas eléctricos, obras civiles y acabados premium.",
      investment: "$2.5M USD",
      status: "Completado",
    },
    {
      id: 2,
      title: "Construcción Bodega Construmart",
      category: "Industrial",
      year: "2023",
      area: "5,000 m²",
      duration: "6 meses",
      image: "/industrial-warehouse-construction.png",
      description:
        "Construcción de bodega industrial con estructuras de concreto y sistemas eléctricos especializados.",
      investment: "$4.2M USD",
      status: "Completado",
    },
    {
      id: 3,
      title: "Modernización Easy Providencia",
      category: "Retail",
      year: "2024",
      area: "3,200 m²",
      duration: "4 meses",
      image: "/modern-home-improvement-store.png",
      description:
        "Modernización integral de tienda con nuevos sistemas de iluminación LED y carpintería especializada.",
      investment: "$3.1M USD",
      status: "Completado",
    },
    {
      id: 4,
      title: "Centro Logístico Santa Isabel",
      category: "Logística",
      year: "2023",
      area: "8,000 m²",
      duration: "8 meses",
      image: "/logistics-center-construction.png",
      description: "Centro logístico de gran escala con pavimentación industrial y sistemas automatizados.",
      investment: "$6.8M USD",
      status: "Completado",
    },
    {
      id: 5,
      title: "Oficinas Corporativas",
      category: "Corporativo",
      year: "2024",
      area: "1,800 m²",
      duration: "5 meses",
      image: "/modern-corporate-offices.png",
      description: "Oficinas corporativas modernas con acabados de lujo y sistemas de automatización.",
      investment: "$2.8M USD",
      status: "Completado",
    },
    {
      id: 6,
      title: "Planta Industrial",
      category: "Industrial",
      year: "2023",
      area: "12,000 m²",
      duration: "12 meses",
      image: "/large-industrial-plant.png",
      description: "Planta industrial de gran escala con estructuras especializadas y sistemas eléctricos complejos.",
      investment: "$12.5M USD",
      status: "Completado",
    },
  ]

  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "Gerente de Operaciones",
      company: "Jumbo",
      content:
        "IMC Servicios Chile ha sido nuestro socio estratégico en más de 50 remodelaciones. Su profesionalismo, cumplimiento de plazos y calidad excepcional los convierte en nuestra primera opción para proyectos críticos.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=CM",
      companyLogo: "/jumbo-logo.png",
    },
    {
      name: "María González",
      position: "Directora de Infraestructura",
      company: "Construmart",
      content:
        "La expertise técnica de IMC Servicios Chile en instalaciones eléctricas industriales es incomparable. Han ejecutado proyectos complejos con una precisión y seguridad que supera nuestras expectativas.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=MG",
      companyLogo: "/construmart-logo.png",
    },
    {
      name: "Roberto Silva",
      position: "Jefe de Proyectos",
      company: "Easy",
      content:
        "Su capacidad de adaptación y solución de problemas complejos es extraordinaria. IMC Servicios Chile no solo ejecuta, sino que propone mejoras que optimizan nuestros procesos y reducen costos.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=RS",
      companyLogo: "/easy-logo.png",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextQuotationStep = () => {
    if (quotationStep < 3) {
      setQuotationStep(quotationStep + 1)
    }
  }

  const prevQuotationStep = () => {
    if (quotationStep > 1) {
      setQuotationStep(quotationStep - 1)
    }
  }

  const handleQuotationSubmit = () => {
    // Simulate form submission
    setQuotationStep(3)
    setTimeout(() => {
      setIsQuotationOpen(false)
      setQuotationStep(1)
      setQuotationData({
        service: "",
        description: "",
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
      })
    }, 3000)
  }

  const getProgressPercentage = () => {
    return ((quotationStep - 1) / 2) * 100
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Animated Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-[#ffb340]/20 to-[#ff8c00]/20 animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${3 + (particle.id % 3)}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}

        {/* Dynamic Background Gradients */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#ffb340]/10 via-[#ff8c00]/10 to-[#e67e00]/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#222020]/5 via-[#ffb340]/5 to-[#ff8c00]/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Floating Geometric Shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#ffb340]/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-[#ff8c00]/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-[#222020] via-[#2a2828] to-[#222020] text-white py-3 px-4 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffb340]/10 to-transparent animate-pulse" />
        <div className="container mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[#ffb340]/50">
                <Phone className="h-4 w-4 text-white animate-pulse" />
              </div>
              <span className="group-hover:text-[#ffb340] transition-colors font-medium">+56 9 8854 2926</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[#ffb340]/50">
                <Mail className="h-4 w-4 text-white animate-pulse" />
              </div>
              <span className="group-hover:text-[#ffb340] transition-colors font-medium">contacto@imcs.cl</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[#ffb340]/50">
                <Clock className="h-4 w-4 text-white animate-pulse" />
              </div>
              <span className="group-hover:text-[#ffb340] transition-colors font-medium">
                Lun-Vie: 8:00-18:00 | Emergencias 24/7
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs animate-pulse">
              <Crown className="h-4 w-4 text-[#ffb340]" />
              <span className="text-[#ffb340] font-bold">Empresa Premium Certificada</span>
            </div>
            <div className="flex space-x-3">
              {[Facebook, Instagram, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#ffb340] hover:scale-110 transition-all duration-300 hover:rotate-12 hover:shadow-lg hover:shadow-[#ffb340]/50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffb340] via-[#ff8c00] to-[#e67e00] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#ffb340] rounded-full animate-bounce" />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-[#222020] via-[#444] to-[#222020] bg-clip-text text-transparent">
                  IMC SERVICIOS CHILE
                </h1>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-600 font-bold">SpA</p>
                  <Badge className="bg-gradient-to-r from-[#ffb340] to-[#ff8c00] text-white text-xs px-3 py-1 animate-pulse">
                    <Diamond className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {["inicio", "servicios", "nosotros", "proyectos", "contacto"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-[#222020] hover:text-[#ffb340] transition-all duration-300 font-bold text-sm uppercase tracking-wide group"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] group-hover:w-full transition-all duration-300" />
                  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#ffb340] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Dialog open={isQuotationOpen} onOpenChange={setIsQuotationOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#ffb340] via-[#ff8c00] to-[#e67e00] hover:from-[#ff8c00] hover:via-[#e67e00] hover:to-[#d97706] text-white font-black px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Cotizar Proyecto Premium
                    <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-2xl rounded-3xl overflow-hidden">
                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200">
                    <div
                      className="h-full bg-gradient-to-r from-[#ffb340] to-[#ff8c00] transition-all duration-500 ease-out"
                      style={{ width: `${getProgressPercentage()}%` }}
                    />
                  </div>

                  <DialogHeader className="relative pt-8">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-3xl font-black bg-gradient-to-r from-[#222020] via-[#ffb340] to-[#ff8c00] bg-clip-text text-transparent">
                        {quotationStep === 3 ? (
                          <div className="flex items-center">
                            <Check className="mr-3 h-8 w-8 text-green-500 animate-bounce" />
                            ¡Cotización Enviada!
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Crown className="mr-3 h-8 w-8 text-[#ffb340] animate-pulse" />
                            Cotización Premium - Paso {quotationStep} de 2
                          </div>
                        )}
                      </DialogTitle>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-bold text-gray-500">
                          {quotationStep < 3 ? `${Math.round(getProgressPercentage())}%` : "100%"}
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {quotationStep < 3 ? quotationStep : <Check className="h-6 w-6" />}
                        </div>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="p-8 space-y-8">
                    {quotationStep === 1 && (
                      <div className="space-y-6 animate-slideInUp">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-[#222020] mb-2">Selecciona tu Servicio Premium</h3>
                          <p className="text-gray-600">Elige el servicio que mejor se adapte a tu proyecto</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {services.map((service, index) => (
                            <Card
                              key={index}
                              className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-2xl transform hover:-translate-y-2 ${
                                selectedService === service.title
                                  ? "border-[#ffb340] shadow-xl bg-gradient-to-br from-[#ffb340]/10 to-[#ff8c00]/10"
                                  : "border-gray-200 hover:border-[#ffb340]"
                              }`}
                              onClick={() => {
                                setSelectedService(service.title)
                                setQuotationData({ ...quotationData, service: service.title })
                              }}
                            >
                              <CardContent className="p-6 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ffb340]/20 to-[#ff8c00]/20 rounded-full -translate-y-10 translate-x-10" />
                                <div
                                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                                >
                                  <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-[#222020]">{service.title}</h4>
                                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                                {selectedService === service.title && (
                                  <div className="absolute top-2 right-2">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                                      <Check className="h-4 w-4 text-white" />
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <Button
                            onClick={nextQuotationStep}
                            disabled={!selectedService}
                            className="bg-gradient-to-r from-[#ffb340] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#e67e00] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continuar
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {quotationStep === 2 && (
                      <div className="space-y-6 animate-slideInUp">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-[#222020] mb-2">Cuéntanos sobre tu Proyecto</h3>
                          <p className="text-gray-600">
                            Describe tu proyecto para que podamos preparar la mejor propuesta
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-sm font-bold text-[#222020]">
                              Descripción del proyecto
                            </Label>
                            <Textarea
                              id="description"
                              placeholder="Cuéntanos qué necesitas: tipo de construcción, ubicación, características especiales, etc."
                              rows={6}
                              value={quotationData.description}
                              onChange={(e) => setQuotationData({ ...quotationData, description: e.target.value })}
                              className="border-2 border-gray-200 focus:border-[#ffb340] transition-colors duration-300 rounded-xl"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-sm font-bold text-[#222020]">
                                Nombre completo
                              </Label>
                              <Input
                                id="name"
                                placeholder="Tu nombre"
                                value={quotationData.name}
                                onChange={(e) => setQuotationData({ ...quotationData, name: e.target.value })}
                                className="border-2 border-gray-200 focus:border-[#ffb340] transition-colors duration-300 rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company" className="text-sm font-bold text-[#222020]">
                                Empresa (opcional)
                              </Label>
                              <Input
                                id="company"
                                placeholder="Nombre de la empresa"
                                value={quotationData.company}
                                onChange={(e) => setQuotationData({ ...quotationData, company: e.target.value })}
                                className="border-2 border-gray-200 focus:border-[#ffb340] transition-colors duration-300 rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-sm font-bold text-[#222020]">
                                Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="tu@email.com"
                                value={quotationData.email}
                                onChange={(e) => setQuotationData({ ...quotationData, email: e.target.value })}
                                className="border-2 border-gray-200 focus:border-[#ffb340] transition-colors duration-300 rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-sm font-bold text-[#222020]">
                                Teléfono
                              </Label>
                              <Input
                                id="phone"
                                placeholder="+56 9 XXXX XXXX"
                                value={quotationData.phone}
                                onChange={(e) => setQuotationData({ ...quotationData, phone: e.target.value })}
                                className="border-2 border-gray-200 focus:border-[#ffb340] transition-colors duration-300 rounded-xl"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-sm font-bold text-[#222020]">
                              Ubicación del proyecto
                            </Label>
                            <Input
                              id="location"
                              placeholder="Ciudad, Comuna, Región"
                              value={quotationData.location}
                              onChange={(e) => setQuotationData({ ...quotationData, location: e.target.value })}
                              className="border-2 border-gray-200 focus:border-[#ffb340] transition-colors duration-300 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            onClick={prevQuotationStep}
                            className="border-2 border-gray-300 hover:border-[#ffb340] text-gray-700 hover:text-[#ffb340] font-bold px-6 py-3 rounded-xl transition-all duration-300 bg-transparent"
                          >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Anterior
                          </Button>
                          <Button
                            onClick={handleQuotationSubmit}
                            disabled={
                              !quotationData.description ||
                              !quotationData.name ||
                              !quotationData.email ||
                              !quotationData.phone
                            }
                            className="bg-gradient-to-r from-[#ffb340] via-[#ff8c00] to-[#e67e00] hover:from-[#ff8c00] hover:via-[#e67e00] hover:to-[#d97706] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                            Enviar Cotización Premium
                            <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {quotationStep === 3 && (
                      <div className="text-center space-y-6 animate-scaleIn">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                          <Check className="h-12 w-12 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-green-600 mb-2">¡Cotización Enviada Exitosamente!</h3>
                          <p className="text-gray-600 text-lg">
                            Hemos recibido tu solicitud de cotización premium. Nuestro equipo de expertos se pondrá en
                            contacto contigo en las próximas 24 horas.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                          <div className="flex items-center justify-center space-x-2 text-green-700">
                            <Rocket className="h-5 w-5" />
                            <span className="font-bold">Tu proyecto está en buenas manos</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#ffb340] hover:bg-[#ffb340] hover:text-white transition-all duration-300 rounded-xl"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white/95 backdrop-blur-xl border-l-4 border-[#ffb340]">
                  <nav className="flex flex-col space-y-6 mt-8">
                    {["inicio", "servicios", "nosotros", "proyectos", "contacto"].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="text-left text-[#222020] hover:text-[#ffb340] transition-colors font-bold text-lg capitalize py-2 px-4 rounded-xl hover:bg-[#ffb340]/10"
                      >
                        {section}
                      </button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spectacular Hero Section */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#222020]/95 via-[#222020]/90 to-[#222020]/85 z-10" />
          <Image
            src="/modern-construction-site.png"
            alt="Construcción moderna IMC Servicios Chile"
            fill
            className="object-cover scale-105"
            priority
          />

          {/* Animated Overlay Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#ffb340]/30 to-[#ff8c00]/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-[#ff8c00]/30 to-[#e67e00]/30 rounded-full blur-xl animate-bounce" />
            <div
              className="absolute top-1/2 left-10 w-16 h-16 border-2 border-[#ffb340]/50 rotate-45 animate-spin"
              style={{ animationDuration: "15s" }}
            />
            <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-[#ff8c00]/50 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-6xl mx-auto">
            {/* Ultra Premium Badge */}
            <div className="mb-8 flex justify-center animate-slideInUp">
              <Badge className="bg-gradient-to-r from-[#ffb340] via-[#ff8c00] to-[#e67e00] text-white px-8 py-4 text-lg font-black rounded-full shadow-2xl animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                <Crown className="mr-3 h-6 w-6 animate-bounce" />
                15+ Años de Excelencia Mundial Comprobada
                <Sparkles className="ml-3 h-6 w-6 animate-pulse" />
              </Badge>
            </div>

            {/* Spectacular Main Title */}
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight animate-slideInUp">
              <span className="block text-white drop-shadow-2xl text-shadow-premium">Construcción</span>
              <span className="block bg-gradient-to-r from-[#ffb340] via-[#ff8c00] to-[#e67e00] bg-clip-text text-transparent animate-pulse">
                de Clase Mundial
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-2xl md:text-4xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light animate-slideInUp">
              Transformamos visiones en realidades arquitectónicas.
              <span className="block mt-4 text-[#ffb340] font-bold text-3xl md:text-5xl animate-pulse">
                Líderes Indiscutibles en Proyectos Premium
              </span>
            </p>

            {/* Spectacular CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-slideInUp">
              <Dialog open={isQuotationOpen} onOpenChange={setIsQuotationOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#ffb340] via-[#ff8c00] to-[#e67e00] hover:from-[#ff8c00] hover:via-[#e67e00] hover:to-[#d97706] text-white font-black px-16 py-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 text-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Rocket className="mr-4 h-8 w-8 group-hover:animate-bounce" />
                    Iniciar Proyecto Premium
                    <Flame className="ml-4 h-8 w-8 animate-pulse" />
                  </Button>
                </DialogTrigger>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="border-4 border-white/80 text-white hover:bg-white hover:text-[#222020] font-black px-16 py-8 rounded-2xl transition-all duration-500 bg-white/10 backdrop-blur-sm hover:scale-105 text-xl hover:shadow-2xl"
                onClick={() => scrollToSection("servicios")}
              >
                Explorar Servicios Premium
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto animate-slideInUp">
              {[
                { number: "500+", label: "Proyectos Completados", icon: Building2, color: "from-blue-400 to-blue-600" },
                { number: "50+", label: "Clientes Corporativos", icon: Users, color: "from-green-400 to-green-600" },
                { number: "15+", label: "Años de Experiencia", icon: Award, color: "from-purple-400 to-purple-600" },
                { number: "98%", label: "Satisfacción Cliente", icon: Star, color: "from-yellow-400 to-orange-500" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-[#ffb340] mb-3 group-hover:text-white transition-colors animate-pulse">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300 font-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Trust Indicators */}
            <div className="mt-20 flex justify-center items-center space-x-12 opacity-90 animate-slideInUp">
              {[
                { icon: Shield, text: "ISO 9001:2015", color: "text-blue-400" },
                { icon: Award, text: "Certificación SEC", color: "text-green-400" },
                { icon: Target, text: "0% Accidentes", color: "text-red-400" },
                { icon: Crown, text: "Empresa Premium", color: "text-yellow-400" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`h-6 w-6 ${item.color} group-hover:animate-pulse`} />
                  </div>
                  <span className="text-sm font-bold group-hover:text-[#ffb340] transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same but with enhanced animations */}
      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffb340]/5 to-[#ff8c00]/5 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slideInUp">
            <Badge className="mb-4 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] text-white px-6 py-3 text-lg font-bold rounded-full shadow-lg animate-pulse">
              <Sparkles className="mr-2 h-5 w-5" />
              Nuestros Servicios Premium
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-[#222020] mb-6">
              Soluciones Integrales de
              <span className="block bg-gradient-to-r from-[#ffb340] to-[#ff8c00] bg-clip-text text-transparent">
                Construcción Mundial
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos servicios especializados para proyectos retail, industriales y comerciales con los más altos
              estándares de calidad y certificaciones internacionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden transform hover:-translate-y-4 hover:rotate-1 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-0 relative z-10">
                  <div className={`h-3 bg-gradient-to-r ${service.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
                  </div>
                  <div className="p-8">
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-[#222020] mb-4 group-hover:text-[#ffb340] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        className="text-[#ffb340] hover:text-[#ff8c00] p-0 h-auto font-bold group-hover:translate-x-2 transition-transform"
                      >
                        Ver más
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with other sections... */}
      {/* For brevity, I'll include the rest of the sections with similar enhancements */}

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <Badge className="mb-4 bg-[#ffb340] text-white px-4 py-2">Sobre Nosotros</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#222020] mb-6">
                15 Años Construyendo
                <span className="block text-[#ffb340]">Excelencia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                IMC Servicios Chile SpA es una empresa líder en construcción y servicios especializados, con más de 15
                años de experiencia en el mercado chileno. Nos especializamos en proyectos retail, industriales y
                comerciales, ofreciendo soluciones integrales con los más altos estándares de calidad.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Shield className="h-8 w-8 text-[#ffb340] mx-auto mb-3" />
                  <h4 className="font-bold text-[#222020] mb-2">Certificaciones</h4>
                  <p className="text-sm text-gray-600">ISO 9001:2015, SEC, Mutual de Seguridad</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Award className="h-8 w-8 text-[#ffb340] mx-auto mb-3" />
                  <h4 className="font-bold text-[#222020] mb-2">Seguridad</h4>
                  <p className="text-sm text-gray-600">0% accidentes en los últimos 5 años</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2 border-[#ffb340] text-[#ffb340]">
                  ISO 9001:2015
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-[#ffb340] text-[#ffb340]">
                  Certificación SEC
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-[#ffb340] text-[#ffb340]">
                  Mutual de Seguridad
                </Badge>
              </div>
            </div>

            <div className="relative animate-slideInRight">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] rounded-2xl transform rotate-3"></div>
              <Image
                src="/construction-team-worksite.png"
                alt="Equipo IMC Servicios Chile"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Clients Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-[#222020] mb-12">Clientes que Confían en Nosotros</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow bg-white border-2 hover:border-[#ffb340] group"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`Logo ${client.name}`}
                    width={120}
                    height={60}
                    className="mx-auto mb-4 grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                  <h4 className="font-bold text-[#222020] mb-2">{client.name}</h4>
                  <p className="text-sm text-gray-600">{client.projects}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            id="stats-section"
            className="mt-20 bg-gradient-to-r from-[#222020] to-[#333] rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffb340]/10 to-[#ff8c00]/10 animate-pulse" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-[#ffb340] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.projects}+
                </div>
                <div className="text-gray-300 font-bold">Proyectos Completados</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-[#ffb340] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.clients}+
                </div>
                <div className="text-gray-300 font-bold">Clientes Corporativos</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-[#ffb340] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.years}+
                </div>
                <div className="text-gray-300 font-bold">Años de Experiencia</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-[#ffb340] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-300 font-bold">Satisfacción Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffb340]/5 to-[#ff8c00]/5 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slideInUp">
            <Badge className="mb-4 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] text-white px-6 py-3 text-lg font-bold rounded-full shadow-lg animate-pulse">
              <Building2 className="mr-2 h-5 w-5" />
              Nuestros Proyectos Premium
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-[#222020] mb-6">
              Proyectos que Marcan
              <span className="block bg-gradient-to-r from-[#ffb340] to-[#ff8c00] bg-clip-text text-transparent">
                la Diferencia Mundial
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y compromiso con
              la excelencia arquitectónica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm transform hover:-translate-y-4 hover:rotate-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#ffb340] to-[#ff8c00] text-white shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white shadow-lg animate-pulse">{project.status}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#222020] mb-3 group-hover:text-[#ffb340] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-[#ffb340]" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Ruler className="h-4 w-4 mr-1 text-[#ffb340]" />
                      {project.area}
                    </div>
                    <div className="flex items-center">
                      <Timer className="h-4 w-4 mr-1 text-[#ffb340]" />
                      {project.duration}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1">
                      {project.investment}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-[#ffb340] hover:text-[#ff8c00] p-0 h-auto font-bold group-hover:translate-x-2 transition-transform"
                        >
                          Ver Detalles
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-white rounded-2xl shadow-2xl border-0">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#222020]">
                            {project.title} - Detalles del Proyecto
                          </DialogTitle>
                        </DialogHeader>
                        <div className="p-6 space-y-4">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-96 object-cover rounded-xl shadow-lg"
                          />
                          <p className="text-gray-700 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-[#ffb340]" />
                              {project.year}
                            </div>
                            <div className="flex items-center">
                              <Ruler className="h-4 w-4 mr-1 text-[#ffb340]" />
                              {project.area}
                            </div>
                            <div className="flex items-center">
                              <Timer className="h-4 w-4 mr-1 text-[#ffb340]" />
                              {project.duration}
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 mr-1 text-[#ffb340]" />
                              {project.investment}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffb340]/5 to-[#ff8c00]/5 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slideInUp">
            <Badge className="mb-4 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] text-white px-6 py-3 text-lg font-bold rounded-full shadow-lg animate-pulse">
              <Star className="mr-2 h-5 w-5" />
              Testimonios Premium
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-[#222020] mb-6">
              Lo que Dicen Nuestros
              <span className="block bg-gradient-to-r from-[#ffb340] to-[#ff8c00] bg-clip-text text-transparent">
                Clientes Premium
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Descubre por qué nuestros clientes nos eligen como su socio estratégico en proyectos de construcción de
              clase mundial.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={`Avatar de ${testimonials[currentTestimonial].name}`}
                    width={80}
                    height={80}
                    className="rounded-full mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#222020]">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Image
                      src={testimonials[currentTestimonial].companyLogo || "/placeholder.svg"}
                      alt={`Logo de ${testimonials[currentTestimonial].company}`}
                      width={80}
                      height={40}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed mb-6">{testimonials[currentTestimonial].content}</div>
                <div className="flex items-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-[#ffb340]" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 bg-gradient-to-br from-[#222020] to-[#333] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffb340]/5 to-[#ff8c00]/5 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slideInUp">
            <Badge className="mb-4 bg-gradient-to-r from-[#ffb340] to-[#ff8c00] text-white px-6 py-3 text-lg font-bold rounded-full shadow-lg animate-pulse">
              <Mail className="mr-2 h-5 w-5" />
              Contacto Premium
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Contáctanos para tu
              <span className="block bg-gradient-to-r from-[#ffb340] to-[#ff8c00] bg-clip-text text-transparent">
                Proyecto Premium
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Estamos listos para transformar tus ideas en realidades arquitectónicas. Contáctanos hoy mismo para
              discutir tu proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slideInLeft">
              <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl text-white">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ffb340] to-[#ff8c00] flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Teléfono</h4>
                      <p>+56 9 8854 2926</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ffb340] to-[#ff8c00] flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p>contacto@imcs.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ffb340] to-[#ff8c00] flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Dirección</h4>
                      <p>Av. Providencia 1234, Santiago, Chile</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ffb340] to-[#ff8c00] flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Horario</h4>
                      <p>Lun-Vie: 8:00-18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4 justify-center md:justify-start">
                {[Facebook, Instagram, MessageCircle].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#ffb340] hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-slideInRight">
              <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl text-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-4">Formulario de Contacto Premium</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-bold">
                          Nombre
                        </Label>
                        <Input id="name" placeholder="Tu nombre" className="bg-white/10 border-0 rounded-xl" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-bold">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-white/10 border-0 rounded-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-bold">
                        Mensaje
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje..."
                        rows={4}
                        className="bg-white/10 border-0 rounded-xl"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-[#ffb340] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#e67e00] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Enviar Mensaje Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#222020] text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 IMC Servicios Chile SpA. Todos los derechos reservados.</p>
          <p className="text-xs mt-4">
            Diseñado y Desarrollado por{" "}
            <a href="#" className="text-[#ffb340] hover:underline">
              Tu Nombre o Empresa
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
