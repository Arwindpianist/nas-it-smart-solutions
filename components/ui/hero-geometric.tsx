"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroGeometricProps {
  badge?: string
  title1?: string
  title2?: string
  description?: string
  className?: string
  children?: React.ReactNode
}


export function HeroGeometric({
  badge = "Enterprise IT Solutions",
  title1 = "Premium Refurbished IT",
  title2 = "Without the Premium Price",
  description = "Save up to 70% on enterprise-grade refurbished IT devices in Malaysia. Premium laptops, servers, and workstations with 6-month warranty, quality assurance, and expert support.",
  className,
  children,
}: HeroGeometricProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden",
        "geometric-grid",
        className
      )}
      style={{ backgroundColor: "transparent" }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full border"
            style={{
              backgroundColor: "rgba(51, 204, 204, 0.05)",
              borderColor: "rgba(51, 204, 204, 0.2)",
            }}
          >
            <p style={{ color: "#33cccc" }} className="text-xs font-semibold uppercase tracking-wider">
              {badge}
            </p>
          </div>
        </motion.div>

        {/* Title Line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: "#eceded" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight"
        >
          {title1}
        </motion.h1>

        {/* Title Line 2 with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #33cccc 0%, #1cfcfc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title2}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: "#6b7e85" }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Custom children (buttons, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}

