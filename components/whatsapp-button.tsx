"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi NAS IT Smart Solutions, I'm interested in your refurbished IT devices and services.")
    window.open(`https://wa.me/60162313385?text=${message}`, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsApp}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group"
      style={{ backgroundColor: "#33cccc", color: "#091010" }}
      aria-label="Contact via WhatsApp"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.5 
      }}
      whileHover={{ 
        scale: 1.15, 
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ 
          background: "linear-gradient(to right, rgba(28, 252, 252, 0.3), rgba(51, 204, 204, 0.5), rgba(28, 252, 252, 0.3))",
          zIndex: -1 
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        whileHover={{ rotate: [0, -15, 15, -15, 0] }}
        transition={{ duration: 0.5 }}
      >
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.div>
    </motion.button>
  )
}
