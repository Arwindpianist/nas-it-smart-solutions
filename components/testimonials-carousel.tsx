"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import AutoplayPlugin from "embla-carousel-autoplay"

interface Testimonial {
  quote: string
  author: string
  role: string
  industry?: string
  rating?: number
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function TestimonialsCarousel({ testimonials, autoPlay = true, autoPlayInterval = 5000 }: TestimonialsCarouselProps) {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const autoplayPlugin = AutoplayPlugin({
    delay: autoPlayInterval,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={autoPlay ? [autoplayPlugin] : []}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <Card className="card-elevated border-none h-full">
                    <CardContent className="p-8 md:p-12 h-full flex flex-col">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <Quote style={{ color: "#33cccc" }} className="w-10 h-10 mb-6" />
                      </motion.div>
                      
                      {testimonial.rating && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex gap-1 mb-4"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 300 }}
                            >
                              <Star
                                size={16}
                                className={i < (testimonial.rating || 0) ? "fill-[#33cccc] text-[#33cccc]" : "text-[#6b7e85]"}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ color: "#eceded" }}
                        className="text-lg md:text-xl mb-8 leading-relaxed flex-grow"
                      >
                        "{testimonial.quote}"
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="border-t pt-6"
                        style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                      >
                        <p style={{ color: "#eceded" }} className="font-semibold text-lg mb-1">
                          {testimonial.author}
                        </p>
                        <p style={{ color: "#6b7e85" }} className="text-sm">
                          {testimonial.role}
                          {testimonial.industry && ` • ${testimonial.industry}`}
                        </p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="glass-neon hover:glass-neon-active border-none" />
      <CarouselNext className="glass-neon hover:glass-neon-active border-none" />
      
      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={`rounded-full transition-all ${
              idx === current ? "w-8" : "w-2"
            } h-2`}
            style={{
              backgroundColor: idx === current ? "#33cccc" : "rgba(51, 204, 204, 0.3)",
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </Carousel>
  )
}

