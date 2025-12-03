import { generateMetadata as genMetadata } from "@/lib/seo"

export const metadata = genMetadata({
  title: "Contact Us",
  description:
    "Get in touch with NAS IT Smart Solutions. Contact us for refurbished IT devices, bulk procurement, or IT consultation. WhatsApp: +60 16 231 3385",
  path: "/contact",
  keywords: [
    "contact NAS IT Smart Solutions",
    "IT company Malaysia",
    "refurbished IT contact",
    "IT consultation Malaysia",
  ],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


