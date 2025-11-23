"use client"

import type { ReactNode } from "react"

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "outline"
}

export function GlowButton({ children, onClick, className = "", variant = "primary" }: GlowButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-smooth transform-gpu hover:scale-105"

  const variants = {
    primary: "neon-glow hover:neon-glow-lg",
    secondary: "hover:bg-opacity-80 transition-smooth",
    outline: "border-2 hover:bg-opacity-10 animate-neon-border",
  }

  const getStyle = () => {
    if (variant === "primary") {
      return {
        backgroundColor: "#33cccc",
        color: "#091010",
      }
    } else if (variant === "secondary") {
      return {
        backgroundColor: "#158c8c",
        color: "#eceded",
      }
    } else {
      return {
        borderColor: "#33cccc",
        color: "#33cccc",
      }
    }
  }

  return (
    <button onClick={onClick} style={getStyle()} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
