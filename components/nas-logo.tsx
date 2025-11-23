"use client"

import React from "react"

interface NASLogoProps {
  width?: number | string
  height?: number | string
  className?: string
  variant?: "light" | "dark"
}

export function NASLogo({ 
  width = 160, 
  height = 120, 
  className = "",
  variant = "light"
}: NASLogoProps) {
  const primaryColor = "#33cccc"
  const secondaryColor = variant === "light" ? "#ffffff" : "#eceded"
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      {/* Letter N - Cyan/Teal */}
      <text
        x="0"
        y="431.89"
        dominantBaseline="ideographic"
        textLength="254.7"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "var(--font-sora), Sora, system-ui, -apple-system, sans-serif",
          fontSize: "300px",
          fontWeight: 400,
          fill: primaryColor,
          letterSpacing: "normal",
          whiteSpace: "pre",
        }}
      >
        N
      </text>
      
      {/* Letter A - Black/Dark, overlapping N */}
      <text
        x="184"
        y="432.89"
        dominantBaseline="ideographic"
        textLength="226.81"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "var(--font-sora), Sora, system-ui, -apple-system, sans-serif",
          fontSize: "300px",
          fontWeight: 400,
          fill: secondaryColor,
          letterSpacing: "normal",
          whiteSpace: "pre",
        }}
      >
        A
      </text>
      
      {/* Letter S - Cyan/Teal, overlapping A */}
      <text
        x="333"
        y="432.89"
        dominantBaseline="ideographic"
        textLength="206.7"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "var(--font-sora), Sora, system-ui, -apple-system, sans-serif",
          fontSize: "300px",
          fontWeight: 400,
          fill: primaryColor,
          letterSpacing: "normal",
          whiteSpace: "pre",
        }}
      >
        S
      </text>
    </svg>
  )
}

// Compact version for favicon/small sizes
export function NASLogoCompact({ 
  size = 32, 
  className = "",
  variant = "light"
}: { 
  size?: number | string
  className?: string
  variant?: "light" | "dark"
}) {
  const primaryColor = "#33cccc"
  const secondaryColor = variant === "light" ? "#ffffff" : "#eceded"
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      {/* Letter N - Cyan/Teal */}
      <text
        x="0"
        y="431.89"
        dominantBaseline="ideographic"
        textLength="254.7"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "var(--font-sora), Sora, system-ui, -apple-system, sans-serif",
          fontSize: "300px",
          fontWeight: 400,
          fill: primaryColor,
          letterSpacing: "normal",
          whiteSpace: "pre",
        }}
      >
        N
      </text>
      
      {/* Letter A - Black/Dark */}
      <text
        x="184"
        y="432.89"
        dominantBaseline="ideographic"
        textLength="226.81"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "var(--font-sora), Sora, system-ui, -apple-system, sans-serif",
          fontSize: "300px",
          fontWeight: 400,
          fill: secondaryColor,
          letterSpacing: "normal",
          whiteSpace: "pre",
        }}
      >
        A
      </text>
      
      {/* Letter S - Cyan/Teal */}
      <text
        x="333"
        y="432.89"
        dominantBaseline="ideographic"
        textLength="206.7"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "var(--font-sora), Sora, system-ui, -apple-system, sans-serif",
          fontSize: "300px",
          fontWeight: 400,
          fill: primaryColor,
          letterSpacing: "normal",
          whiteSpace: "pre",
        }}
      >
        S
      </text>
    </svg>
  )
}

