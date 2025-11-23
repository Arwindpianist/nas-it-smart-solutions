import { generateMetadata as genMetadata } from "@/lib/seo"

export const metadata = genMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for NAS IT Smart Solutions. Learn how we collect, use, and protect your personal information when using our services.",
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "terms of service"],
  noindex: true,
})

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


