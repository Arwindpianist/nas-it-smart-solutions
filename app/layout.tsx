import type React from "react"
import { Geist, Geist_Mono, Sora, Quantico } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { generateMetadata as genMetadata } from "@/lib/seo"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const quantico = Quantico({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-quantico" 
})

export const metadata = genMetadata({
  title: "NAS IT Smart Solutions",
  description:
    "Trusted reseller of premium refurbished IT devices in Malaysia. Save up to 70% on enterprise-grade laptops, servers, and workstations. 15+ years expertise, 6-month warranty, quality assurance guaranteed.",
  path: "/",
  keywords: [
    "refurbished laptops Malaysia",
    "refurbished IT devices Malaysia",
    "IT solutions Malaysia",
    "enterprise IT hardware Malaysia",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${sora.variable} ${quantico.variable}`} style={{ fontFamily: "var(--font-quantico), Quantico, system-ui, sans-serif" }}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
