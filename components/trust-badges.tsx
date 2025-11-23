"use client"

import { motion } from "framer-motion"
import { Award, Shield, CheckCircle2, Clock, Users, Globe } from "lucide-react"

interface TrustBadge {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  title: string
  description: string
}

const trustBadges: TrustBadge[] = [
  {
    icon: Award,
    title: "ISO Certified Process",
    description: "Following international quality standards for refurbishment",
  },
  {
    icon: Shield,
    title: "Bank Negara Compliant",
    description: "Meeting Malaysian banking security requirements",
  },
  {
    icon: CheckCircle2,
    title: "MOH Approved",
    description: "Compliant with Ministry of Health IT standards",
  },
  {
    icon: Globe,
    title: "Malaysia Based",
    description: "Local expertise with nationwide service coverage",
  },
  {
    icon: Users,
    title: "Trusted by 500+ Clients",
    description: "Serving enterprises across Malaysia since 2010",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description: "Proven track record in IT refurbishment",
  },
]

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {trustBadges.map((badge, idx) => {
        const Icon = badge.icon
        return (
          <motion.div
            key={idx}
            className="glass-neon p-6 rounded-lg text-center group hover:glass-neon-active transition-all cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <div className="glass-neon p-3 rounded-lg group-hover:glass-neon-active transition-all">
                <Icon style={{ color: "#33cccc" }} size={24} />
              </div>
            </div>
            <h3 style={{ color: "#eceded" }} className="text-sm font-bold mb-2">
              {badge.title}
            </h3>
            <p style={{ color: "#6b7e85" }} className="text-xs leading-relaxed">
              {badge.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

