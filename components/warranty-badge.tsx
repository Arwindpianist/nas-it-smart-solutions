"use client"

import { Shield, Award, CheckCircle2, Clock } from "lucide-react"

export function WarrantyBadge({ 
  icon: Icon = Shield, 
  title, 
  description,
  highlight = false 
}: {
  icon?: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  title: string
  description: string
  highlight?: boolean
}) {
  return (
    <div
      className={`p-6 rounded-lg border transition-all hover:scale-105 ${
        highlight ? "glass-neon-active" : "glass-neon"
      }`}
    >
      <div
        className="w-12 h-12 rounded-md flex items-center justify-center mb-4"
        style={{ backgroundColor: "rgba(51, 204, 204, 0.15)" }}
      >
        <Icon style={{ color: "#33cccc" }} size={24} />
      </div>
      <h3 style={{ color: "#eceded" }} className="text-lg font-bold mb-2">
        {title}
      </h3>
      <p style={{ color: "#6b7e85" }} className="text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export function WarrantyBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <WarrantyBadge
        icon={Shield}
        title="6-Month Warranty"
        description="Comprehensive warranty on all refurbished devices. Peace of mind guaranteed."
        highlight
      />
      <WarrantyBadge
        icon={CheckCircle2}
        title="Quality Tested"
        description="Enterprise-grade testing ensures every device meets our strict standards."
      />
      <WarrantyBadge
        icon={Award}
        title="Certified Process"
        description="Following NIST and DoD standards for data wiping and refurbishment."
      />
      <WarrantyBadge
        icon={Clock}
        title="Fast Delivery"
        description="Quick turnaround time. Same-day shipping available for ready stock."
      />
    </div>
  )
}

