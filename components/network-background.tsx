"use client"

import { useEffect, useRef } from "react"

export function NetworkBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    svg.setAttribute("width", window.innerWidth.toString())
    svg.setAttribute("height", window.innerHeight.toString())

    // Create network nodes
    const nodes = Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))

    // Draw nodes
    nodes.forEach((node) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      circle.setAttribute("cx", node.x.toString())
      circle.setAttribute("cy", node.y.toString())
      circle.setAttribute("r", "3")
      circle.setAttribute("fill", "rgba(82, 194, 139, 0.8)")
      circle.setAttribute("class", "animate-pulse-glow")
      svg.appendChild(circle)
    })

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x
        const dy = nodes[j].y - nodes[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 300) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
          line.setAttribute("x1", nodes[i].x.toString())
          line.setAttribute("y1", nodes[i].y.toString())
          line.setAttribute("x2", nodes[j].x.toString())
          line.setAttribute("y2", nodes[j].y.toString())
          line.setAttribute("stroke", "rgba(82, 194, 139, 0.3)")
          line.setAttribute("stroke-width", "1")
          line.setAttribute("stroke-dasharray", "1000")
          line.setAttribute("class", "animate-network-flow")
          svg.appendChild(line)
        }
      }
    }

    const handleResize = () => {
      svg.setAttribute("width", window.innerWidth.toString())
      svg.setAttribute("height", window.innerHeight.toString())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <svg ref={svgRef} className="fixed inset-0 z-0 opacity-40" style={{ pointerEvents: "none" }} />
}
