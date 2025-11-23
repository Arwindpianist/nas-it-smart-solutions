"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { NASLogoCompact } from "@/components/nas-logo"

export function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        backgroundColor: "#0a0f0f",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <NASLogoCompact size={32} variant="light" />
              <span style={{ color: "#eceded" }} className="font-semibold">
                NAS IT Smart Solutions
              </span>
            </div>
            <p style={{ color: "#6b7e85" }} className="text-sm leading-relaxed mb-4">
              Bringing Reliability Back to IT
            </p>
            {/* Business Information */}
            <div className="space-y-2 mt-4 pt-4 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
              <p style={{ color: "#6b7e85" }} className="text-xs">
                202503193027 (KT0595180-A)
              </p>
              <p style={{ color: "#6b7e85" }} className="text-xs leading-relaxed">
                1525, Pacific63@PJ Centre, No. 5, Jalan 13/6, Sek 13,
                <br />
                Petaling Jaya, Selangor, Malaysia
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#eceded" }} className="font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {["Refurbished Hardware", "IT Consulting", "Managed Support", "Warranties"].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href="/services"
                    className="text-sm relative inline-block group"
                    style={{ color: "#6b7e85" }}
                  >
                    <motion.span
                      className="block relative"
                      whileHover={{ color: "#33cccc", x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item}
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#33cccc]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#eceded" }} className="font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item, idx) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm relative inline-block group"
                    style={{ color: "#6b7e85" }}
                  >
                    <motion.span
                      className="block relative"
                      whileHover={{ color: "#33cccc", x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#33cccc]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: "#eceded" }} className="font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {["LinkedIn", "Twitter", "Facebook"].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <a
                    href="#"
                    className="text-sm relative inline-block group"
                    style={{ color: "#6b7e85" }}
                  >
                    <motion.span
                      className="block relative"
                      whileHover={{ color: "#33cccc", x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item}
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#33cccc]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 text-center" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          <p style={{ color: "#6b7e85" }} className="text-sm">
            &copy; 2025 NAS IT Smart Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
