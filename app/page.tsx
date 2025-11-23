"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WarrantyBadges } from "@/components/warranty-badge"
import { HeroGeometric } from "@/components/ui/hero-geometric"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AnimatedStats } from "@/components/animated-stats"
import { TrustBadges } from "@/components/trust-badges"
import { FAQSection } from "@/components/faq-section"
import { GravityStarsBackground } from "@/components/ui/gravity-stars-background"
import { Server, ShieldCheck, Users, Award, ArrowRight, CheckCircle2, Award as AwardIcon, Shield, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
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
        badge="Enterprise IT Solutions"
        title1="Premium Refurbished IT"
        title2="Without the Premium Price"
        description="Save up to 70% on enterprise-grade refurbished IT devices in Malaysia. Premium laptops, servers, and workstations with 6-month warranty, quality assurance, and expert support that keeps your business running."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="px-8 py-3.5 font-semibold rounded-md inline-flex items-center gap-2"
            >
              Schedule Consultation <ArrowRight size={18} />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="secondary"
              size="lg"
              className="px-8 py-3.5 font-semibold rounded-md"
            >
              Explore Services
            </Button>
          </Link>
        </div>
      </HeroGeometric>

      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 accent-line">
            <p style={{ color: "#33cccc" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-6">
              Complete IT Solutions
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-2xl">
              From hardware procurement to ongoing support, we provide end-to-end IT services tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Refurbished Hardware",
                description:
                  "Premium laptops, servers, workstations, and network equipment tested to enterprise standards.",
                features: ["1-3 Year Warranty", "Pre-configured", "Same-day shipping"],
              },
              {
                icon: ShieldCheck,
                title: "IT Consulting",
                description: "Strategic guidance on infrastructure optimization, security, and technology roadmaps.",
                features: ["Infrastructure audit", "Cost analysis", "Security review"],
              },
              {
                icon: Users,
                title: "Managed Support",
                description: "24/7 technical assistance, maintenance, and monitoring to keep your systems running.",
                features: ["Remote support", "On-site service", "Preventive maintenance"],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="card-elevated p-8 rounded-lg group"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
              >
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(51, 204, 204, 0.1)" }}
                >
                  <service.icon style={{ color: "#33cccc" }} size={24} />
                </div>
                <h3 style={{ color: "#eceded" }} className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p style={{ color: "#6b7e85" }} className="mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} style={{ color: "#33cccc" }} />
                      <span style={{ color: "#eceded" }} className="text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty & Quality Assurance Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 accent-line">
            <p style={{ color: "#33cccc" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quality Assurance
            </p>
            <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Refurbished Devices?
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-2xl">
              Every device undergoes rigorous testing and refurbishment to ensure it meets enterprise standards. Your peace of mind is our priority.
            </p>
          </div>

          <WarrantyBadges />

          {/* Before/After Showcase */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 rounded-lg">
              <div className="mb-4">
                <h3 style={{ color: "#eceded" }} className="text-2xl font-bold mb-2">
                  Before Refurbishment
                </h3>
                <p style={{ color: "#6b7e85" }} className="text-sm mb-4">
                  Devices received from corporate IT refresh cycles
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Used enterprise devices",
                  "May have minor wear and tear",
                  "Data needs secure wiping",
                  "Requires component testing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#6b7e85" }}
                    />
                    <span style={{ color: "#6b7e85" }} className="text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated p-8 rounded-lg border-2" style={{ borderColor: "rgba(51, 204, 204, 0.3)" }}>
              <div className="mb-4">
                <h3 style={{ color: "#33cccc" }} className="text-2xl font-bold mb-2">
                  After Our Process
                </h3>
                <p style={{ color: "#6b7e85" }} className="text-sm mb-4">
                  Enterprise-ready refurbished devices
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Fully tested and certified",
                  "Professionally cleaned and restored",
                  "Secure data wiping completed",
                  "Ready for immediate deployment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} style={{ color: "#33cccc" }} />
                    <span style={{ color: "#eceded" }} className="text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <p style={{ color: "#33cccc" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              Success Stories
            </p>
            <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "TechCorp Malaysia",
                industry: "Enterprise",
                result: "70% cost reduction on hardware refresh",
                description: "Migrated 200+ workstations to refurbished devices with zero downtime.",
              },
              {
                company: "Horizon University",
                industry: "Education",
                result: "500+ devices deployed in 3 months",
                description: "Complete campus IT infrastructure overhaul within budget constraints.",
              },
              {
                company: "RetailPro Chain",
                industry: "Retail",
                result: "30% faster deployment time",
                description: "Pre-configured POS systems for 45 locations nationwide.",
              },
              {
                company: "StartupHub KL",
                industry: "Startup",
                result: "Setup in under 2 weeks",
                description: "Turnkey IT infrastructure for 50-person team with ongoing support.",
              },
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="card-elevated border-none p-8 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 style={{ color: "#eceded" }} className="text-xl font-bold mb-1">
                          {study.company}
                        </h3>
                        <p style={{ color: "#6b7e85" }} className="text-sm">
                          {study.industry}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award style={{ color: "#33cccc" }} size={24} />
                      </motion.div>
                    </div>
                    <motion.div
                      className="inline-block px-3 py-1 rounded-md mb-4"
                      style={{ backgroundColor: "rgba(51, 204, 204, 0.1)" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p style={{ color: "#33cccc" }} className="text-sm font-semibold">
                        {study.result}
                      </p>
                    </motion.div>
                    <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                      {study.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="secondary"
                className="inline-flex items-center gap-2 font-semibold"
              >
                View All Projects <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: "#33cccc" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              Client Testimonials
            </p>
            <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-2xl mx-auto">
              Real feedback from businesses and institutions across Malaysia who trust us with their IT needs.
            </p>
          </div>

          <TestimonialsCarousel
            testimonials={[
              {
                quote:
                  "NAS IT Smart Solutions transformed our IT procurement process entirely. The quality of refurbished devices is indistinguishable from new hardware, and the substantial cost savings have allowed us to invest in other critical areas of our business. Their team's professionalism and expertise made the entire process seamless.",
                author: "Sarah Chen",
                role: "IT Director",
                industry: "Enterprise",
                rating: 5,
              },
              {
                quote:
                  "Their support team is absolutely exceptional. We've deployed over 500 devices across our campus and have experienced zero technical issues. The pre-deployment training they provided to our IT staff was comprehensive, and their ongoing support ensures everything continues running smoothly.",
                author: "Dr. Ahmad Rahman",
                role: "Chief Technology Officer",
                industry: "Education",
                rating: 5,
              },
              {
                quote:
                  "As a growing startup in Cyberjaya, we needed cost-effective IT infrastructure that wouldn't compromise on quality. NAS IT delivered exactly that. Their refurbished workstations perform flawlessly, and the setup process was faster than we expected. Highly recommend for any business looking to optimize IT costs.",
                author: "Lim Wei Ming",
                role: "Co-Founder & CTO",
                industry: "Technology Startup",
                rating: 5,
              },
              {
                quote:
                  "We were hesitant about refurbished equipment initially, but NAS IT's thorough testing process and comprehensive warranty put our minds at ease. Six months later, all devices are performing excellently, and we've saved over 65% compared to buying new. The quality assurance is truly outstanding.",
                author: "Fatimah binti Hassan",
                role: "Operations Manager",
                industry: "Retail",
                rating: 5,
              },
              {
                quote:
                  "Working with NAS IT for our hospital's IT upgrade was a game-changer. They understood the unique requirements of healthcare IT systems and ensured all equipment met strict security and compliance standards. Their 24/7 support gives us peace of mind that our critical systems are always monitored.",
                author: "Dr. Tan Li Lin",
                role: "IT Systems Administrator",
                industry: "Healthcare",
                rating: 5,
              },
            ]}
            autoPlay={true}
            autoPlayInterval={6000}
          />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: "#33cccc" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              Why Trust Us
            </p>
            <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-6">
              Certifications & Trust Indicators
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-2xl mx-auto">
              We meet the highest standards for quality, security, and compliance in Malaysia.
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="py-16 border-y" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
            <AnimatedStats
              stats={[
                { number: "500+", label: "Enterprise Clients in Malaysia", icon: Users },
                { number: "10,000+", label: "Refurbished Devices Deployed", icon: Server },
                { number: "15+", label: "Years of Industry Experience", icon: AwardIcon },
                { number: "6", label: "Month Warranty Guaranteed", icon: Shield },
              ]}
              duration={2}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Get answers to common questions about our refurbished IT devices and services in Malaysia."
        faqs={[
          {
            question: "How can refurbished devices save me money compared to new equipment?",
            answer:
              "Refurbished devices typically cost 60-70% less than new equipment while maintaining enterprise-grade quality. Our rigorous testing and refurbishment process ensures devices meet the same performance standards as new hardware. This allows businesses to allocate saved funds to other critical areas like software, training, or expansion initiatives.",
          },
          {
            question: "What quality assurance processes do you follow?",
            answer:
              "Every device undergoes our comprehensive 8-step refurbishment process including intake & diagnosis, component testing, secure data wiping following NIST and DoD standards, professional refurbishment, fresh OS installation, final QA testing, certification, and delivery with setup support. We test all hardware components individually and provide detailed condition reports with every device.",
          },
          {
            question: "What warranty do you offer on refurbished devices?",
            answer:
              "We provide a comprehensive 6-month warranty on all refurbished devices, covering hardware defects and component failures. Our warranty includes parts replacement and labor costs. Additionally, we offer extended warranty options for enterprise clients. All warranty claims are processed promptly, and we maintain a stock of replacement parts for quick resolution.",
          },
          {
            question: "Are your refurbished devices suitable for enterprise use?",
            answer:
              "Absolutely. Our refurbished devices are specifically selected from corporate IT refresh cycles and enterprise-grade equipment. They undergo extensive testing to meet enterprise standards for performance, reliability, and security. We've successfully deployed thousands of refurbished devices to banks, hospitals, universities, and large corporations across Malaysia with excellent results.",
          },
          {
            question: "How do you ensure data security in refurbished devices?",
            answer:
              "Data security is paramount. We use industry-standard data wiping methods including NIST 800-88 and DoD 5220.22-M standards to ensure complete and irreversible data removal. All storage devices are wiped multiple times and verified before refurbishment. We provide data destruction certificates upon request and follow strict security protocols throughout our facility.",
          },
          {
            question: "Do you provide support and maintenance services?",
            answer:
              "Yes, we offer comprehensive support services including 24/7 technical assistance, remote support, on-site service for enterprise clients, preventive maintenance programs, and ongoing consultation. Our support team is trained on all devices we sell and can provide quick resolution to technical issues. We also offer staff training programs to help your team maximize the use of their IT equipment.",
          },
          {
            question: "Can you customize devices for specific business requirements?",
            answer:
              "Absolutely. We offer customization services including specific software pre-installation, hardware configuration adjustments, branding options, and bulk ordering with standardized configurations. For enterprise clients, we can work with you to create custom deployment packages that meet your exact specifications and integration requirements.",
          },
          {
            question: "What is your delivery timeframe in Malaysia?",
            answer:
              "Delivery times vary based on stock availability and location. For ready stock items in the Klang Valley, we typically deliver within 1-3 business days. For orders to East Malaysia or custom configurations, delivery may take 5-7 business days. We also offer same-day delivery for urgent orders in the Kuala Lumpur area. All deliveries are tracked and include setup assistance if required.",
          },
        ]}
      />

      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center card-elevated p-16 rounded-lg relative overflow-hidden">
          {/* Subtle geometric lines */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-5"
            style={{
              background: "radial-gradient(circle, #33cccc 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your IT?
          </h2>
          <p style={{ color: "#6b7e85" }} className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our IT experts in Malaysia. We'll assess your needs and provide a tailored refurbished IT solution that maximizes value and minimizes cost.
          </p>
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="px-8 py-3.5 font-semibold rounded-md inline-flex items-center gap-2"
            >
              Schedule Free Consultation <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      </div>
    </main>
  )
}
