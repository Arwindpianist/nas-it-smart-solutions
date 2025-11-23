import { generateMetadata as genMetadata } from "@/lib/seo"

export const metadata = genMetadata({
  title: "Our Services",
  description:
    "Comprehensive IT services including 8-step device refurbishment, bulk procurement, IT asset disposal, technical training, remote monitoring, and custom solutions. Serving businesses across Malaysia.",
  path: "/services",
  keywords: [
    "IT services Malaysia",
    "device refurbishment services",
    "IT asset disposal Malaysia",
    "bulk IT procurement",
    "technical training Malaysia",
    "IT support services",
  ],
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


