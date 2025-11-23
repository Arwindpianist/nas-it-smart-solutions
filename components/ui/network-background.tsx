"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface NetworkBackgroundProps {
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function NetworkBackground({ className, intensity = "medium" }: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawNetwork(ctx, canvas.width, canvas.height)
    }

    const drawNetwork = (context: CanvasRenderingContext2D, width: number, height: number) => {
      context.clearRect(0, 0, width, height)

      // Network nodes configuration
      const nodeCount = intensity === "low" ? 15 : intensity === "medium" ? 25 : 35
      const nodes: Array<{ x: number; y: number; connections: number[] }> = []

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          connections: [],
        })
      }

      // Draw connections (network topology)
      const connectionDistance = Math.min(width, height) * 0.15
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            nodes[i].connections.push(j)
            nodes[j].connections.push(i)

            // Draw connection line
            const opacity = (1 - distance / connectionDistance) * 0.15
            context.strokeStyle = `rgba(51, 204, 204, ${opacity})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(nodes[i].x, nodes[i].y)
            context.lineTo(nodes[j].x, nodes[j].y)
            context.stroke()
          }
        }
      }

      // Draw nodes (network devices)
      nodes.forEach((node) => {
        // Outer glow
        const gradient = context.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8)
        gradient.addColorStop(0, "rgba(51, 204, 204, 0.3)")
        gradient.addColorStop(0.5, "rgba(51, 204, 204, 0.1)")
        gradient.addColorStop(1, "rgba(51, 204, 204, 0)")

        context.fillStyle = gradient
        context.beginPath()
        context.arc(node.x, node.y, 8, 0, Math.PI * 2)
        context.fill()

        // Inner node
        context.fillStyle = "rgba(51, 204, 204, 0.4)"
        context.beginPath()
        context.arc(node.x, node.y, 3, 0, Math.PI * 2)
        context.fill()
      })
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animate with subtle movement
    let animationFrame: number
    let frameCount = 0

    const animate = () => {
      frameCount++
      if (frameCount % 60 === 0) {
        // Redraw every 60 frames for subtle animation
        drawNetwork(ctx, canvas.width, canvas.height)
      }
      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      style={{ zIndex: 0 }}
    />
  )
}

