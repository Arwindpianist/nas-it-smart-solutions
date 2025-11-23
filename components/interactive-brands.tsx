"use client"

import { motion } from "framer-motion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface BrandModel {
  name: string
  type?: string
}

interface Brand {
  name: string
  models: BrandModel[]
}

interface InteractiveBrandsProps {
  brands: Brand[]
}

export function InteractiveBrands({ brands }: InteractiveBrandsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {brands.map((brand, idx) => (
        <motion.div
          key={brand.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.02, duration: 0.3 }}
        >
          {brand.models.length > 0 ? (
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <motion.div
                  className="glass-neon px-4 py-3 rounded-lg text-sm font-medium cursor-pointer"
                  style={{ color: "#eceded" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{brand.name}</span>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent
                side="top"
                align="center"
                sideOffset={8}
                className="glass-neon-active border border-[#33cccc]/20 backdrop-blur-sm w-64"
                style={{
                  backgroundColor: "rgba(15, 25, 30, 0.98)",
                }}
              >
                <h4 style={{ color: "#33cccc" }} className="font-semibold mb-3 text-center text-sm">
                  Sample Models
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brand.models.map((model, modelIdx) => (
                    <div
                      key={modelIdx}
                      className="text-xs py-1"
                      style={{ color: "#eceded" }}
                    >
                      {model.type && (
                        <span style={{ color: "#6b7e85" }} className="mr-2 font-medium">
                          {model.type}:
                        </span>
                      )}
                      <span>{model.name}</span>
                    </div>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <motion.div
              className="glass-neon px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: "#eceded" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{brand.name}</span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

