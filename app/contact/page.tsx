"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroGeometric } from "@/components/ui/hero-geometric"
import { GravityStarsBackground } from "@/components/ui/gravity-stars-background"
import { Mail, Phone, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main style={{ backgroundColor: "#091010" }} className="min-h-screen relative">
      <GravityStarsBackground
        starsCount={30}
        starsSize={2}
        starsOpacity={0.3}
        glowIntensity={8}
        movementSpeed={0.5}
        mouseInfluence={120}
        mouseGravity="attract"
        className="fixed inset-0 -z-0 pointer-events-none"
      />
      <div className="relative z-10">
      <Navbar />

      <HeroGeometric
        badge="Get In Touch"
        title1="We're Here to"
        title2="Help"
        description="Have questions about our services? Let's connect and discuss how we can support your IT infrastructure."
      />

      {/* Contact Section */}
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, label: "Email", value: "info@nasitssolutions.com" },
              { icon: Phone, label: "Phone", value: "+60 16 231 3385" },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <div
                  key={idx}
                  className="glass-neon p-8 rounded-xl text-center animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon style={{ color: "#33cccc" }} className="w-8 h-8 mx-auto mb-4" />
                  <p style={{ color: "#1cfcfc" }} className="font-bold mb-2">
                    {contact.label}
                  </p>
                  <p style={{ color: "#eceded" }} className="opacity-75 text-sm leading-relaxed">
                    {contact.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-neon-active p-8 rounded-2xl">
              <h2 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-6 neon-text-glow">
                Send us a Message
              </h2>

              {submitted && (
                <div
                  className="mb-6 p-4 rounded-lg flex items-start gap-3"
                  style={{
                    backgroundColor: "rgba(51, 204, 204, 0.1)",
                    borderColor: "rgba(51, 204, 204, 0.3)",
                    border: "1px solid rgba(51, 204, 204, 0.3)",
                  }}
                >
                  <CheckCircle2 style={{ color: "#33cccc" }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p style={{ color: "#33cccc" }} className="text-sm">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}

              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="w-5 h-5" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "#eceded" }}>Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            style={{
                              backgroundColor: "rgba(9, 16, 16, 0.5)",
                              borderColor: "#33cccc",
                              color: "#eceded",
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "#eceded" }}>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            {...field}
                            style={{
                              backgroundColor: "rgba(9, 16, 16, 0.5)",
                              borderColor: "#33cccc",
                              color: "#eceded",
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "#eceded" }}>Company (optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Company Name"
                            {...field}
                            style={{
                              backgroundColor: "rgba(9, 16, 16, 0.5)",
                              borderColor: "#33cccc",
                              color: "#eceded",
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "#eceded" }}>Subject (optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            style={{
                              backgroundColor: "rgba(9, 16, 16, 0.5)",
                              borderColor: "#33cccc",
                              color: "#eceded",
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "#eceded" }}>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            rows={5}
                            {...field}
                            style={{
                              backgroundColor: "rgba(9, 16, 16, 0.5)",
                              borderColor: "#33cccc",
                              color: "#eceded",
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass-neon-active p-8 rounded-2xl flex flex-col justify-center">
              <MessageCircle style={{ color: "#33cccc" }} className="w-16 h-16 mb-6" />
              <h2 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-4 neon-text-glow">
                Quick Connect
              </h2>
              <p style={{ color: "#eceded" }} className="opacity-75 mb-8">
                Prefer a quick chat? Contact us directly on WhatsApp for immediate assistance and fast response times.
              </p>
              <Button
                onClick={() => {
                  const message = encodeURIComponent("Hi NAS IT Smart Solutions, I'm interested in your refurbished IT devices and services.")
                  window.open(`https://wa.me/60162313385?text=${message}`, "_blank")
                }}
                variant="primary"
                className="w-full py-4 font-bold"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      </div>
    </main>
  )
}
