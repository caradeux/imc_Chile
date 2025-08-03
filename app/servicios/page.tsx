import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Construcción Especializados",
  description:
    "Servicios eléctricos, obras civiles, carpintería especializada y más. IMC Servicios Chile ofrece soluciones integrales para proyectos retail, industriales y comerciales.",
  keywords: [
    "servicios eléctricos Santiago",
    "obras civiles Chile",
    "carpintería especializada",
    "construcción retail",
    "electricidad industrial",
    "hormigón alta resistencia",
  ],
  openGraph: {
    title: "Servicios de Construcción Especializados | IMC Servicios Chile",
    description:
      "Servicios eléctricos, obras civiles, carpintería especializada y más para proyectos retail, industriales y comerciales.",
  },
}

export default function ServiciosPage() {
  return (
    <div>
      <h1>Nuestros Servicios de Construcción</h1>
      {/* Content will be added here */}
    </div>
  )
}
