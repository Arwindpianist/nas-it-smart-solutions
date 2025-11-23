"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Server, Shield } from "lucide-react"

interface Stat {
  number: string
  label: string
  suffix?: string
  icon?: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
}

interface AnimatedStatsProps {
  stats: Stat[]
  duration?: number
}

function AnimatedNumber({ value, suffix = "", duration = 2, startAnimation = false }: { value: number; suffix?: string; duration?: number; startAnimation?: boolean }) {
  // Always show the actual value - don't animate for now
  const [displayValue, setDisplayValue] = useState(value)

  // Ensure value is always correct
  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  return (
    <motion.span
      style={{ color: "#33cccc" }}
      className="text-4xl md:text-5xl font-bold"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ scale: 1.1 }}
    >
      {Math.floor(displayValue).toLocaleString()}
      {suffix && <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: duration * 0.8 }}
      >{suffix}</motion.span>}
    </motion.span>
  )
}

export function AnimatedStats({ stats, duration = 2 }: AnimatedStatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        // Extract numeric value - handle cases like "500+", "10,000+", "15+", "6"
        const numericMatch = stat.number.match(/[\d,]+/)
        const numericValue = numericMatch ? parseInt(numericMatch[0].replace(/,/g, "")) : 0
        // Extract suffix (everything after numbers) - preserve +, %, etc.
        const suffix = stat.number.replace(/[\d,]+/, "")

        return (
          <motion.div
            key={idx}
            className="text-center group"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ 
              duration: 0.5, 
              delay: idx * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            {Icon && (
              <motion.div
                className="flex justify-center mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  delay: idx * 0.1 + 0.2, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
              >
                <motion.div
                  className="glass-neon p-3 rounded-lg group-hover:glass-neon-active transition-all"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon style={{ color: "#33cccc" }} size={24} />
                </motion.div>
              </motion.div>
            )}
            {numericValue ? (
              <AnimatedNumber 
                value={numericValue} 
                suffix={suffix} 
                duration={duration}
                startAnimation={false}
              />
            ) : (
              <p style={{ color: "#33cccc" }} className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </p>
            )}
            <p style={{ color: "#6b7e85" }} className="text-sm font-medium mt-2">
              {stat.label}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

