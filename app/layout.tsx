import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IMC Servicios Chile SpA - Construcción y Servicios Especializados",
    template: "%s | IMC Servicios Chile SpA",
  },
  description:
    "Empresa líder en construcción y servicios especializados con 15+ años de experiencia. Especialistas en proyectos retail, industriales y comerciales. Servicios eléctricos, obras civiles, carpintería y más.",
  keywords: [
    "construcción Chile",
    "servicios eléctricos Santiago",
    "obras civiles",
    "carpintería especializada",
    "construcción retail",
    "construcción industrial",
    "IMC Servicios Chile",
    "electricidad industrial",
    "hormigón alta resistencia",
    "techumbres industriales",
    "soldadura certificada",
    "demarcación vial",
    "construcción comercial Santiago",
    "remodelaciones Jumbo",
    "construcción Easy",
    "obras Construmart",
  ],
  authors: [{ name: "IMC Servicios Chile SpA" }],
  creator: "IMC Servicios Chile SpA",
  publisher: "IMC Servicios Chile SpA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imcservicioschile.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IMC Servicios Chile SpA - Construcción y Servicios Especializados",
    description:
      "Empresa líder en construcción con 15+ años de experiencia. Especialistas en proyectos retail, industriales y comerciales en Chile.",
    url: "https://imcservicioschile.cl",
    siteName: "IMC Servicios Chile SpA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC Servicios Chile - Construcción y Servicios Especializados",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMC Servicios Chile SpA - Construcción y Servicios Especializados",
    description:
      "Empresa líder en construcción con 15+ años de experiencia. Especialistas en proyectos retail, industriales y comerciales.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#222020" />
        <meta name="msapplication-TileColor" content="#222020" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "IMC Servicios Chile SpA",
              image: "https://imcservicioschile.cl/og-image.png",
              description:
                "Empresa líder en construcción y servicios especializados con más de 15 años de experiencia en proyectos retail, industriales y comerciales.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santiago",
                addressRegion: "Región Metropolitana",
                addressCountry: "CL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.4489,
                longitude: -70.6693,
              },
              url: "https://imcservicioschile.cl",
              telephone: "+56988542926",
              email: "contacto@imcs.cl",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              serviceArea: {
                "@type": "Country",
                name: "Chile",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Construcción",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Servicios Eléctricos",
                      description:
                        "Instalaciones domiciliarias certificadas, electricidad semi-industrial, sistemas LED",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Obras Civiles",
                      description: "Hormigón de alta resistencia, enfierraduras especializadas, fundaciones",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Carpintería Especializada",
                      description: "Carpintería en metalcom, estructuras de aluminio, mobiliario comercial",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Carlos Mendoza",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "IMC Servicios Chile ha sido nuestro socio estratégico en más de 50 remodelaciones. Su profesionalismo, cumplimiento de plazos y calidad excepcional los convierte en nuestra primera opción.",
                },
              ],
              foundingDate: "2009",
              numberOfEmployees: "50-100",
              slogan: "Construcción y Servicios Especializados",
              brand: "IMC Servicios Chile",
              sameAs: [
                "https://www.facebook.com/imcservicioschile",
                "https://www.instagram.com/imcservicioschile",
                "https://www.tiktok.com/@imcservicioschile",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IMC Servicios Chile SpA",
              url: "https://imcservicioschile.cl",
              logo: "https://imcservicioschile.cl/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56988542926",
                contactType: "customer service",
                availableLanguage: "Spanish",
                areaServed: "CL",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santiago",
                addressRegion: "Región Metropolitana",
                addressCountry: "Chile",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
