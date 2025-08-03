import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SEOHead({
  title = "IMC Servicios Chile SpA - Construcción y Servicios Especializados",
  description = "Empresa líder en construcción y servicios especializados con 15+ años de experiencia. Especialistas en proyectos retail, industriales y comerciales.",
  canonical,
  ogImage = "/og-image.png",
  noindex = false,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="author" content="IMC Servicios Chile SpA" />
      <meta name="publisher" content="IMC Servicios Chile SpA" />
      <meta name="copyright" content="IMC Servicios Chile SpA" />
      <meta name="language" content="es-CL" />
      <meta name="geo.region" content="CL-RM" />
      <meta name="geo.placename" content="Santiago, Chile" />
      <meta name="geo.position" content="-33.4489;-70.6693" />
      <meta name="ICBM" content="-33.4489, -70.6693" />
    </Head>
  )
}
