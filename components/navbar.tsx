"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { NASLogoCompact } from "@/components/nas-logo"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(9, 16, 16, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 font-semibold text-lg">
            <NASLogoCompact size={32} variant="light" />
            <span style={{ color: "#eceded" }} className="hidden sm:inline">
              NAS IT Smart Solutions
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#eceded" }}
                className="relative text-sm font-medium transition-opacity hover:opacity-70 group"
              >
                {item.label}
                <span
                  className="absolute bottom-[-4px] left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#33cccc" }}
                />
              </Link>
            ))}
            <Link href="/contact">
              <button
                style={{
                  backgroundColor: "#33cccc",
                  color: "#091010",
                }}
                className="px-5 py-2 text-sm font-semibold rounded-md transition-all hover:opacity-90"
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" style={{ color: "#eceded" }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#eceded" }}
                className="block py-3 text-sm font-medium transition-opacity hover:opacity-70"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
