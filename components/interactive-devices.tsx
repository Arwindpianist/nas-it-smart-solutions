"use client"

import { useEffect, useRef, useState } from "react"

interface DeviceProps {
  delay?: number
  variant?: "laptop" | "server" | "desktop"
}

export function InteractiveDevice({ delay = 0, variant = "laptop" }: DeviceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotationX = (y - centerY) * 0.05
      const rotationY = (x - centerX) * 0.05

      setRotation({ x: rotationX, y: rotationY })
    }

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 })
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const getDeviceDimensions = () => {
    switch (variant) {
      case "server":
        return { w: "w-40", h: "h-32" }
      case "desktop":
        return { w: "w-44", h: "h-28" }
      default:
        return { w: "w-48", h: "h-32" }
    }
  }

  const dims = getDeviceDimensions()

  return (
    <div ref={containerRef} className="perspective-1000 cursor-pointer">
      <div
        className={`${dims.w} ${dims.h} bg-gradient-to-br from-[#52C28B] via-[#1A6FB2] to-[#0F202E] rounded-2xl animate-glow-pulse transition-smooth transform-gpu`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
      </div>
    </div>
  )
}
