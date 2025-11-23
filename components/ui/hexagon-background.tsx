"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface HexagonBackgroundProps {
  hexagonSize?: number
  hexagonMargin?: number
  hexagonProps?: React.ComponentProps<"div">
  children?: React.ReactNode
  className?: string
}

export function HexagonBackground({
  hexagonSize = 75,
  hexagonMargin = 3,
  hexagonProps,
  children,
  className,
}: HexagonBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Calculate grid dimensions
  const hexWidth = hexagonSize
  const hexHeight = hexagonSize * 0.866 // sqrt(3)/2 for perfect hexagon
  const horizontalSpacing = hexWidth + hexagonMargin * 2
  const verticalSpacing = hexHeight * 0.75 + hexagonMargin * 2

  const cols = Math.ceil(dimensions.width / horizontalSpacing) + 1
  const rows = Math.ceil(dimensions.height / verticalSpacing) + 2

  const hexagons: JSX.Element[] = []

  for (let row = 0; row < rows; row++) {
    const offset = row % 2 === 0 ? 0 : hexWidth / 2 + hexagonMargin
    for (let col = 0; col < cols; col++) {
      const x = col * horizontalSpacing + offset
      const y = row * verticalSpacing

      hexagons.push(
        <div
          key={`${row}-${col}`}
          className="hexagon-element absolute"
          style={{
            width: `${hexagonSize}px`,
            height: `${hexagonSize}px`,
            left: `${x}px`,
            top: `${y}px`,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            backgroundColor: "transparent",
            opacity: 0,
            transformOrigin: "center",
            pointerEvents: "none",
          }}
          {...hexagonProps}
        />
      )
    }
  }

  return (
    <div ref={containerRef} className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {hexagons}
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}

