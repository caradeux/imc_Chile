import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Cotización de Proyectos de Construcción",
  description:
    "Contacta a IMC Servicios Chile para tu proyecto de construcción. Cotizaciones gratuitas, atención 24/7 para emergencias. +56 9 8854 2926",
  keywords: [
    "contacto construcción Santiago",
    "cotización obras civiles",
    "presupuesto construcción",
    "emergencias eléctricas",
    "contacto IMC Servicios",
  ],
  openGraph: {
    title: "Contacto | IMC Servicios Chile SpA",
    description: "Contacta a IMC Servicios Chile para tu proyecto. Cotizaciones gratuitas y atención 24/7.",
  },
}

export default function ContactoPage() {
  return (
    <div>
      <h1>Contacto</h1>
      {/* Content will be added here */}
    </div>
  )
}
