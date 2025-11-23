"use client"

import { cn } from "@/lib/utils"

interface CircuitBackgroundProps {
  className?: string
}

export function CircuitBackground({ className }: CircuitBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      {/* Circuit board pattern background */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.03 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Circuit traces */}
            <path
              d="M 0 50 L 25 50 L 25 25 L 50 25 L 50 75 L 75 75 L 75 50 L 100 50"
              stroke="#33cccc"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M 25 0 L 25 25 L 50 25 L 50 50 L 25 50 L 25 100"
              stroke="#33cccc"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M 75 0 L 75 25 L 50 25 L 50 50 L 75 50 L 75 100"
              stroke="#33cccc"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Circuit nodes */}
            <circle cx="25" cy="25" r="2" fill="#33cccc" />
            <circle cx="50" cy="25" r="2" fill="#33cccc" />
            <circle cx="75" cy="25" r="2" fill="#33cccc" />
            <circle cx="25" cy="50" r="2" fill="#33cccc" />
            <circle cx="50" cy="50" r="2" fill="#33cccc" />
            <circle cx="75" cy="50" r="2" fill="#33cccc" />
            <circle cx="25" cy="75" r="2" fill="#33cccc" />
            <circle cx="50" cy="75" r="2" fill="#33cccc" />
            <circle cx="75" cy="75" r="2" fill="#33cccc" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(51, 204, 204, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(51, 204, 204, 0.05) 0%, transparent 50%)",
        }}
      />
    </div>
  )
}

