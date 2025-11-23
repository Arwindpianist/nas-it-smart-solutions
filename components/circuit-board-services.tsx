"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

interface CircuitBoardServicesProps {
  services: ServiceItem[]
}

export function CircuitBoardServices({ services }: CircuitBoardServicesProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div className="relative">
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ filter: "blur(1px)" }}>
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#33cccc" />
            <line x1="10" y1="10" x2="90" y2="10" stroke="#33cccc" strokeWidth="1" />
            <line x1="10" y1="10" x2="10" y2="90" stroke="#33cccc" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Services grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {services.map((service, idx) => {
          const Icon = service.icon
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="glass-neon p-6 rounded-xl cursor-pointer transition-smooth group hover:glass-neon-active"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:transition-smooth"
                style={{ backgroundColor: "rgba(51, 204, 204, 0.2)" }}
              >
                <Icon style={{ color: "#1cfcfc" }} className="w-6 h-6" />
              </div>

              <h3 style={{ color: "#1cfcfc" }} className="text-lg font-bold mb-2">
                {service.title}
              </h3>
              <p style={{ color: "#eceded" }} className="opacity-75 mb-4 text-sm">
                {service.description}
              </p>

              {hoveredIdx === idx && (
                <div className="space-y-2 animate-slide-up">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center text-sm" style={{ color: "#33cccc" }}>
                      <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: "#33cccc" }}></span>
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
