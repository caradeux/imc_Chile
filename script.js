// Import Lucide icons library
import lucide from "lucide"

// Initialize Lucide icons
lucide.createIcons()

// Global variables
let currentQuotationStep = 1
let selectedService = null
let currentTestimonial = 0
let isScrolled = false
let countersAnimated = false

// DOM elements
const header = document.getElementById("header")
const mobileMenu = document.getElementById("mobileMenu")
const quotationModal = document.getElementById("quotationModal")
const projectModal = document.getElementById("projectModal")
const progressBar = document.getElementById("progressBar")
const modalTitle = document.getElementById("modalTitle")
const stepNumber = document.getElementById("stepNumber")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeScrollEffects()
  initializeAnimations()
  initializeTestimonialCarousel()
  initializeCounters()
  initializeQuotationModal()
  initializeContactForm()
  initializeSmoothScrolling()
  optimizeImageLoading()
  addSmoothTransitions()
})

// Scroll effects
function initializeScrollEffects() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Header scroll effect
    if (scrollTop > 50 && !isScrolled) {
      isScrolled = true
      header.classList.add("scrolled")
    } else if (scrollTop <= 50 && isScrolled) {
      isScrolled = false
      header.classList.remove("scrolled")
    }

    // Animate elements on scroll
    animateOnScroll()

    // Animate counters when stats section is visible
    if (!countersAnimated) {
      const statsSection = document.getElementById("stats-section")
      if (statsSection && isElementInViewport(statsSection)) {
        animateCounters()
        countersAnimated = true
      }
    }
  })
}

// Initialize animations
function initializeAnimations() {
  // Add animation classes to elements when they come into view
  const animatedElements = document.querySelectorAll(".animate-slide-up, .animate-slide-left, .animate-slide-right")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0) translateX(0) scale(1)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    if (el.classList.contains("animate-slide-up")) {
      el.style.transform = "translateY(80px) scale(0.95)"
    } else if (el.classList.contains("animate-slide-left")) {
      el.style.transform = "translateX(-80px) scale(0.95)"
    } else if (el.classList.contains("animate-slide-right")) {
      el.style.transform = "translateX(80px) scale(0.95)"
    }
    el.style.transition = "all 1s cubic-bezier(0.23, 1, 0.32, 1)"
    observer.observe(el)
  })
}

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".service-card, .project-card, .client-card")

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Initialize testimonial carousel
function initializeTestimonialCarousel() {
  const testimonials = document.querySelectorAll(".testimonial-card")

  if (testimonials.length > 0) {
    setInterval(() => {
      testimonials[currentTestimonial].classList.remove("active")
      currentTestimonial = (currentTestimonial + 1) % testimonials.length
      testimonials[currentTestimonial].classList.add("active")
    }, 6000)
  }
}

// Initialize counters
function initializeCounters() {
  // Hero stats counters
  const heroStats = document.querySelectorAll(".stat-number")
  heroStats.forEach((stat) => {
    const target = Number.parseInt(stat.getAttribute("data-target"))
    animateCounter(stat, target, 3000)
  })
}

// Animate counters in stats section
function animateCounters() {
  const counters = [
    { element: document.getElementById("projects-counter"), target: 500 },
    { element: document.getElementById("clients-counter"), target: 50 },
    { element: document.getElementById("years-counter"), target: 15 },
    { element: document.getElementById("satisfaction-counter"), target: 98 },
  ]

  counters.forEach((counter) => {
    if (counter.element) {
      animateCounter(counter.element, counter.target, 3000)
    }
  })
}

// Animate counter function
function animateCounter(element, target, duration) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target + (target === 98 ? "%" : "+")
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start) + (target === 98 ? "%" : "+")
    }
  }, 16)
}

// Initialize quotation modal
function initializeQuotationModal() {
  const serviceOptions = document.querySelectorAll(".service-option")
  const nextBtn = document.getElementById("nextStep1")

  serviceOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      serviceOptions.forEach((opt) => opt.classList.remove("selected"))

      // Add selected class to clicked option
      this.classList.add("selected")

      // Store selected service
      selectedService = this.getAttribute("data-service")

      // Enable next button
      nextBtn.disabled = false
    })
  })
}

// Initialize contact form
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Simulate form submission
      alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.")

      // Reset form
      this.reset()
    })
  }
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })
}

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = header.offsetHeight
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Mobile menu functions
function toggleMobileMenu() {
  mobileMenu.classList.toggle("active")
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active")
}

// Quotation modal functions
function openQuotationModal() {
  quotationModal.classList.add("active")
  document.body.style.overflow = "hidden"
  resetQuotationModal()
}

function closeQuotationModal() {
  quotationModal.classList.remove("active")
  document.body.style.overflow = "auto"
  resetQuotationModal()
}

function resetQuotationModal() {
  currentQuotationStep = 1
  selectedService = null
  updateQuotationStep()

  // Reset form
  const form = document.getElementById("quotationForm")
  if (form) {
    form.reset()
  }

  // Reset service selection
  const serviceOptions = document.querySelectorAll(".service-option")
  serviceOptions.forEach((option) => option.classList.remove("selected"))

  // Disable next button
  const nextBtn = document.getElementById("nextStep1")
  if (nextBtn) {
    nextBtn.disabled = true
  }
}

function nextStep() {
  if (currentQuotationStep < 3) {
    currentQuotationStep++
    updateQuotationStep()
  }
}

function prevStep() {
  if (currentQuotationStep > 1) {
    currentQuotationStep--
    updateQuotationStep()
  }
}

function updateQuotationStep() {
  // Update progress bar
  const progress = ((currentQuotationStep - 1) / 2) * 100
  progressBar.style.width = progress + "%"

  // Update title and step number
  if (currentQuotationStep === 3) {
    modalTitle.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; animation: bounce 1s ease-out;">
                    <i data-lucide="check" style="width: 24px; height: 24px; color: white;"></i>
                </div>
                ¡Cotización Enviada!
            </div>
        `
    stepNumber.innerHTML = '<i data-lucide="check" style="width: 32px; height: 32px;"></i>'
  } else {
    modalTitle.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #ffb340, #ff8c00); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; animation: pulse 2s ease-in-out infinite;">
                    <i data-lucide="crown" style="width: 24px; height: 24px; color: white;"></i>
                </div>
                Cotización Premium - Paso ${currentQuotationStep} de 2
            </div>
        `
    stepNumber.textContent = currentQuotationStep
  }

  // Show/hide steps
  const steps = document.querySelectorAll(".modal-step")
  steps.forEach((step, index) => {
    if (index + 1 === currentQuotationStep) {
      step.style.display = "block"
      step.classList.add("active")
    } else {
      step.style.display = "none"
      step.classList.remove("active")
    }
  })

  // Reinitialize Lucide icons
  lucide.createIcons()
}

function submitQuotation() {
  const form = document.getElementById("quotationForm")
  const formData = new FormData(form)

  // Validate required fields
  const requiredFields = ["description", "name", "email", "phone"]
  let isValid = true

  requiredFields.forEach((field) => {
    const value = formData.get(field)
    if (!value || value.trim() === "") {
      isValid = false
    }
  })

  if (!isValid) {
    alert("Por favor, completa todos los campos requeridos.")
    return
  }

  // Simulate form submission
  currentQuotationStep = 3
  updateQuotationStep()

  // Auto-close modal after 3 seconds
  setTimeout(() => {
    closeQuotationModal()
  }, 3000)
}

// Project modal functions
function openProjectModal(projectId) {
  const projects = {
    project1: {
      title: "Remodelación Jumbo Maipú - Detalles del Proyecto",
      image: "modern-retail-renovation.png",
      description:
        "Remodelación completa de tienda retail de 2,500 m² incluyendo sistemas eléctricos de última generación, obras civiles especializadas y acabados premium. El proyecto incluyó la instalación de sistemas LED inteligentes, automatización de procesos y mejoras estructurales para optimizar la experiencia del cliente.",
      year: "2024",
      area: "2,500 m²",
      duration: "3 meses",
      investment: "$2.5M USD",
    },
    project2: {
      title: "Construcción Bodega Construmart - Detalles del Proyecto",
      image: "industrial-warehouse-construction.png",
      description:
        "Construcción de bodega industrial de 5,000 m² con estructuras de concreto de alta resistencia y sistemas eléctricos especializados. El proyecto incluyó fundaciones profundas, sistemas de climatización industrial y tecnología de automatización para optimizar la logística.",
      year: "2023",
      area: "5,000 m²",
      duration: "6 meses",
      investment: "$4.2M USD",
    },
    project3: {
      title: "Modernización Easy Providencia - Detalles del Proyecto",
      image: "modern-home-improvement-store.png",
      description:
        "Modernización integral de tienda de 3,200 m² con nuevos sistemas de iluminación LED, carpintería especializada en metalcom y acabados de lujo. El proyecto transformó completamente la experiencia de compra con tecnología de vanguardia.",
      year: "2024",
      area: "3,200 m²",
      duration: "4 meses",
      investment: "$3.1M USD",
    },
    project4: {
      title: "Centro Logístico Santa Isabel - Detalles del Proyecto",
      image: "logistics-center-construction.png",
      description:
        "Centro logístico de gran escala de 8,000 m² con pavimentación industrial de alta resistencia y sistemas automatizados. Incluye tecnología de clasificación automática, sistemas de refrigeración y infraestructura para vehículos de carga pesada.",
      year: "2023",
      area: "8,000 m²",
      duration: "8 meses",
      investment: "$6.8M USD",
    },
    project5: {
      title: "Oficinas Corporativas - Detalles del Proyecto",
      image: "modern-corporate-offices.png",
      description:
        "Oficinas corporativas modernas de 1,800 m² con acabados de lujo y sistemas de automatización inteligente. El proyecto incluyó espacios colaborativos, salas de reuniones de alta tecnología y sistemas de climatización eficientes.",
      year: "2024",
      area: "1,800 m²",
      duration: "5 meses",
      investment: "$2.8M USD",
    },
    project6: {
      title: "Planta Industrial - Detalles del Proyecto",
      image: "large-industrial-plant.png",
      description:
        "Planta industrial de gran escala de 12,000 m² con estructuras especializadas y sistemas eléctricos complejos. Incluye sistemas de seguridad avanzados, infraestructura para maquinaria pesada y tecnología de monitoreo en tiempo real.",
      year: "2023",
      area: "12,000 m²",
      duration: "12 meses",
      investment: "$12.5M USD",
    },
  }

  const project = projects[projectId]
  if (!project) return

  const modalContent = document.getElementById("projectModalContent")
  modalContent.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="project-modal-meta">
            <div class="meta-item">
                <i data-lucide="calendar"></i>
                ${project.year}
            </div>
            <div class="meta-item">
                <i data-lucide="ruler"></i>
                ${project.area}
            </div>
            <div class="meta-item">
                <i data-lucide="timer"></i>
                ${project.duration}
            </div>
            <div class="meta-item">
                <i data-lucide="trending-up"></i>
                ${project.investment}
            </div>
        </div>
    `

  projectModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Reinitialize Lucide icons
  lucide.createIcons()
}

function closeProjectModal() {
  projectModal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === quotationModal) {
    closeQuotationModal()
  }
  if (e.target === projectModal) {
    closeProjectModal()
  }
})

// Close modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (quotationModal.classList.contains("active")) {
      closeQuotationModal()
    }
    if (projectModal.classList.contains("active")) {
      closeProjectModal()
    }
    if (mobileMenu.classList.contains("active")) {
      closeMobileMenu()
    }
  }
})

// Prevent modal content clicks from closing modal
document.querySelectorAll(".modal-container").forEach((container) => {
  container.addEventListener("click", (e) => {
    e.stopPropagation()
  })
})

// Add loading animation to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.disabled) {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    }
  })
})

// Add hover effects to cards
document.querySelectorAll(".service-card, .project-card, .client-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = ""
  })
})

// Optimize images loading
function optimizeImageLoading() {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    img.addEventListener("error", function () {
      this.src = "/placeholder.svg?height=400&width=600&text=Image+Not+Found"
    })
  })
}

// Add smooth transitions to all elements
function addSmoothTransitions() {
  const elements = document.querySelectorAll("*")

  elements.forEach((element) => {
    if (!element.style.transition) {
      element.style.transition = "all 0.3s ease"
    }
  })
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll handler
window.addEventListener(
  "scroll",
  debounce(() => {
    // Scroll handling code here
  }, 10),
)

// Add intersection observer for better performance
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all animated elements
document.querySelectorAll(".animate-slide-up, .animate-slide-left, .animate-slide-right").forEach((el) => {
  observer.observe(el)
})

console.log("IMC Servicios Chile website loaded successfully! 🚀")
