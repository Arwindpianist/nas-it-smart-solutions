"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface GravityStarsBackgroundProps extends React.ComponentProps<"div"> {
  starsCount?: number
  starsSize?: number
  starsOpacity?: number
  glowIntensity?: number
  glowAnimation?: "instant" | "ease" | "spring"
  movementSpeed?: number
  mouseInfluence?: number
  mouseGravity?: "attract" | "repel"
  gravityStrength?: number
  starsInteraction?: boolean
  starsInteractionType?: "bounce" | "merge"
}

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = "ease",
  movementSpeed = 0.3,
  mouseInfluence = 100,
  mouseGravity = "attract",
  gravityStrength = 75,
  starsInteraction = false,
  starsInteractionType = "bounce",
  className,
  ...props
}: GravityStarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const containerRef = useRef<HTMLDivElement>(null)

  const initializeStars = useCallback(
    (width: number, height: number) => {
      if (!width || width === 0) width = window.innerWidth
      if (!height || height === 0) height = window.innerHeight
      
      const stars: Star[] = []
      for (let i = 0; i < starsCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * movementSpeed * 2,
          vy: (Math.random() - 0.5) * movementSpeed * 2,
          size: starsSize + Math.random() * starsSize,
        })
      }
      starsRef.current = stars
    },
    [starsCount, starsSize, movementSpeed]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const width = rect.width || window.innerWidth
        const height = rect.height || window.innerHeight
        canvas.width = width
        canvas.height = height
        initializeStars(width, height)
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [initializeStars])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const stars = starsRef.current
      const mouse = mouseRef.current

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Apply mouse gravity
        if (mouse.active) {
          const dx = mouse.x - star.x
          const dy = mouse.y - star.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseInfluence) {
            const force = ((mouseInfluence - distance) / mouseInfluence) * 0.03
            const angle = Math.atan2(dy, dx)

            if (mouseGravity === "attract") {
              star.vx += Math.cos(angle) * force
              star.vy += Math.sin(angle) * force
            } else {
              star.vx -= Math.cos(angle) * force
              star.vy -= Math.sin(angle) * force
            }
          }
        }

        // Star-to-star interactions
        if (starsInteraction) {
          for (let j = i + 1; j < stars.length; j++) {
            const otherStar = stars[j]
            const dx = otherStar.x - star.x
            const dy = otherStar.y - star.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < gravityStrength && distance > 0) {
              const force = (gravityStrength - distance) / gravityStrength / 1000

              if (starsInteractionType === "bounce") {
                const angle = Math.atan2(dy, dx)
                star.vx -= Math.cos(angle) * force
                star.vy -= Math.sin(angle) * force
                otherStar.vx += Math.cos(angle) * force
                otherStar.vy += Math.sin(angle) * force
              }
            }
          }
        }

        // Update position with increased movement
        star.x += star.vx
        star.y += star.vy

        // Boundary wrapping
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Reduced damping for more movement
        star.vx *= 0.995
        star.vy *= 0.995
        
        // Add continuous random drift for more visible movement
        star.vx += (Math.random() - 0.5) * 0.15
        star.vy += (Math.random() - 0.5) * 0.15
        
        // Limit max velocity to prevent chaos
        const maxVel = 2
        star.vx = Math.max(-maxVel, Math.min(maxVel, star.vx))
        star.vy = Math.max(-maxVel, Math.min(maxVel, star.vy))

        // Draw glow
        const glowRadius = star.size * glowIntensity
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius)
        gradient.addColorStop(0, `rgba(51, 204, 204, ${starsOpacity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(51, 204, 204, ${starsOpacity * 0.4})`)
        gradient.addColorStop(1, `rgba(51, 204, 204, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        // Draw star
        ctx.fillStyle = `rgba(51, 204, 204, ${starsOpacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [
    starsOpacity,
    glowIntensity,
    mouseInfluence,
    mouseGravity,
    gravityStrength,
    starsInteraction,
    starsInteractionType,
  ])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (canvasRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ pointerEvents: "auto" }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
    </div>
  )
}
