import { generateStructuredData } from "@/lib/seo"

export function StructuredData() {
  const organizationSchema = generateStructuredData({
    type: "LocalBusiness",
    contactPoint: {
      telephone: "+60-16-231-3385",
      contactType: "customer service",
      email: "info@nasitssolutins.com",
    },
    address: {
      streetAddress: "1525, Pacific63@PJ Centre, No. 5, Jalan 13/6, Sek 13",
      addressLocality: "Petaling Jaya",
      addressRegion: "Selangor",
      postalCode: "46200",
      addressCountry: "MY",
    },
    logo: "https://nasitssolutins.com/favicon.svg",
  })

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NAS IT Smart Solutions",
    url: "https://nasitssolutins.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://nasitssolutins.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nasitssolutins.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://nasitssolutins.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://nasitssolutins.com/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://nasitssolutins.com/projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://nasitssolutins.com/contact",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
    </>
  )
}

