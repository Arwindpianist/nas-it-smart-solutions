"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  description?: string
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", description }: FAQSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 glass-neon"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          >
            <HelpCircle style={{ color: "#33cccc" }} size={32} />
          </motion.div>
          <motion.h2
            style={{ color: "#eceded" }}
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              style={{ color: "#6b7e85" }}
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
            >
              <AccordionItem
                value={`item-${idx}`}
                className="glass-neon rounded-lg px-6 border-none data-[state=open]:glass-neon-active transition-all overflow-hidden"
              >
                <AccordionTrigger
                  style={{ color: "#eceded" }}
                  className="text-left hover:no-underline py-6 group"
                >
                  <motion.span
                    className="text-lg font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {faq.question}
                  </motion.span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p
                    style={{ color: "#6b7e85" }}
                    className="leading-relaxed animate-in fade-in-0 duration-300"
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

