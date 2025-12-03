import { generateStructuredData } from "@/lib/seo"

export function StructuredData() {
  const organizationSchema = generateStructuredData({
    type: "Organization",
    contactPoint: {
      telephone: "+60-16-231-3385",
      contactType: "customer service",
      email: "info@nasitssolutions.com",
    },
    logo: "https://nasitssolutions.com/favicon.svg",
  })

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NAS IT Smart Solutions",
    url: "https://nasitssolutions.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://nasitssolutions.com/search?q={search_term_string}",
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
        item: "https://nasitssolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://nasitssolutions.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://nasitssolutions.com/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://nasitssolutions.com/projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://nasitssolutions.com/contact",
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

