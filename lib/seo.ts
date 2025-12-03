import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nasitssolutions.com"
const siteName = "NAS IT Smart Solutions"
const defaultDescription =
  "Trusted reseller of premium refurbished IT devices in Malaysia. Save up to 70% on enterprise-grade laptops, servers, and workstations. 15+ years expertise, 6-month warranty, quality assurance guaranteed."

export function generateMetadata({
  title,
  description = defaultDescription,
  path = "",
  keywords,
  noindex = false,
}: {
  title: string
  description?: string
  path?: string
  keywords?: string[]
  noindex?: boolean
}): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const url = `${siteUrl}${path}`

  const defaultKeywords = [
    "refurbished laptops Malaysia",
    "refurbished IT devices Malaysia",
    "refurbished computers Malaysia",
    "refurbished servers Malaysia",
    "IT assets procurement Malaysia",
    "refurbished workstations Malaysia",
    "IT solutions Malaysia",
    "enterprise IT hardware Malaysia",
    "affordable IT equipment Malaysia",
    "NAS IT Smart Solutions",
  ]

  return {
    title: fullTitle,
    description,
    keywords: keywords ? [...defaultKeywords, ...keywords] : defaultKeywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_MY",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/og-image.png`],
      creator: "@nasitssolutions",
      site: "@nasitssolutions",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add Google Search Console verification when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
    category: "Technology",
    classification: "Business",
  }
}

export function generateStructuredData({
  type = "Organization",
  name = siteName,
  url = siteUrl,
  logo = `${siteUrl}/favicon.svg`,
  contactPoint,
  address,
}: {
  type?: "Organization" | "LocalBusiness"
  name?: string
  url?: string
  logo?: string
  contactPoint?: {
    telephone: string
    contactType: string
    email?: string
  }
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
}) {
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url,
    logo,
  }

  if (type === "LocalBusiness") {
    baseSchema.priceRange = "$$"
    baseSchema.areaServed = {
      "@type": "Country",
      name: "Malaysia",
    }
  }

  if (contactPoint) {
    baseSchema.contactPoint = {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      email: contactPoint.email,
      availableLanguage: ["English", "Bahasa Malaysia"],
    }
  }

  if (address) {
    baseSchema.address = {
      "@type": "PostalAddress",
      ...address,
    }
  }

  return baseSchema
}

