import { generateMetadata as genMetadata } from "@/lib/seo"

export const metadata = genMetadata({
  title: "Our Projects",
  description:
    "Explore our successful IT infrastructure projects across Malaysia. From banking institutions to educational facilities, we've delivered cost-effective refurbished IT solutions to 500+ clients.",
  path: "/projects",
  keywords: [
    "IT projects Malaysia",
    "case studies refurbished IT",
    "IT infrastructure projects",
    "enterprise IT deployment Malaysia",
    "successful IT projects",
  ],
})

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


