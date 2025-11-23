"use client"

import type { ReactNode } from "react"

interface FloatingPanelProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FloatingPanel({ children, delay = 0, className = "" }: FloatingPanelProps) {
  return (
    <div
      className={`glass-neon p-6 rounded-2xl backdrop-blur-xl ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
