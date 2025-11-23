import { generateMetadata as genMetadata } from "@/lib/seo"

export const metadata = genMetadata({
  title: "About Us",
  description:
    "Learn about NAS IT Smart Solutions - 15+ years of expertise in refurbished IT hardware and enterprise solutions in Malaysia. Meet our director Nora and discover our company story.",
  path: "/about",
  keywords: [
    "about NAS IT Smart Solutions",
    "IT company Malaysia",
    "refurbished IT devices company",
    "enterprise IT solutions Malaysia",
  ],
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


