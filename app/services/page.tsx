"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroGeometric } from "@/components/ui/hero-geometric"
import { GravityStarsBackground } from "@/components/ui/gravity-stars-background"
import { FAQSection } from "@/components/faq-section"
import { TrustBadges } from "@/components/trust-badges"
import { AnimatedStats } from "@/components/animated-stats"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Microscope,
  Settings,
  HardDrive,
  CheckSquare,
  Zap,
  Shield,
  BarChart3,
  Truck,
  Cpu,
  Server,
  Wifi,
  Monitor,
  Network,
  Database,
  Lock,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function Services() {

  const refurbishingSteps = [
    {
      step: 1,
      title: "Intake & Diagnosis",
      description: "Each device is logged, catalogued, and thoroughly inspected for functionality and condition.",
      icon: Microscope,
    },
    {
      step: 2,
      title: "Component Testing",
      description: "All hardware components are tested individually using enterprise-grade diagnostic tools.",
      icon: Settings,
    },
    {
      step: 3,
      title: "Data Wiping",
      description: "Complete secure data removal following industry standards (NIST, DoD 5220.22-M).",
      icon: HardDrive,
    },
    {
      step: 4,
      title: "Refurbishment",
      description: "Professional repairs, cleaning, and replacement of faulty components when needed.",
      icon: Zap,
    },
    {
      step: 5,
      title: "Software Installation",
      description: "Fresh OS installation with latest patches and security updates pre-configured.",
      icon: CheckSquare,
    },
    {
      step: 6,
      title: "Final QA Testing",
      description: "Comprehensive testing to ensure the device meets our strict quality standards.",
      icon: Shield,
    },
    {
      step: 7,
      title: "Certification",
      description: "Device receives our warranty certificate and detailed condition report.",
      icon: BarChart3,
    },
    {
      step: 8,
      title: "Delivery & Support",
      description: "Secure shipping with setup assistance and ongoing technical support included.",
      icon: Truck,
    },
  ]

  const serviceCategories = [
    {
      icon: Cpu,
      title: "Laptops",
      description: "Enterprise-grade refurbished laptops from Dell, HP, Lenovo, and Apple",
      features: ["Core i5-i7 Processors", "8-16GB RAM", "SSD Storage", "Full Warranty", "Certified Refurbished"],
      color: "#33cccc",
    },
    {
      icon: Server,
      title: "Servers",
      description: "High-performance refurbished servers for data centers and enterprise infrastructure",
      features: ["Dual Processors", "32GB+ RAM", "RAID Storage", "Enterprise Support", "Rack Mount Options"],
      color: "#1cfcfc",
    },
    {
      icon: Monitor,
      title: "Desktops & Workstations",
      description: "Professional desktops and workstations for business and creative professionals",
      features: ["GPU Options", "Multi-core CPUs", "Expandable RAM", "Specialized Support", "Custom Configurations"],
      color: "#33cccc",
    },
    {
      icon: Network,
      title: "Network Equipment",
      description: "Complete networking solutions including switches, routers, and access points",
      features: ["Switches & Routers", "Access Points", "Firewalls", "Technical Setup", "Managed Services"],
      color: "#1cfcfc",
    },
    {
      icon: Database,
      title: "Storage Solutions",
      description: "Enterprise storage systems and NAS devices for data management",
      features: ["NAS Systems", "SAN Storage", "RAID Configurations", "Backup Solutions", "Cloud Integration"],
      color: "#33cccc",
    },
    {
      icon: Lock,
      title: "Security Appliances",
      description: "Firewalls and security devices to protect your network infrastructure",
      features: ["Firewall Solutions", "UTM Devices", "VPN Gateways", "Security Monitoring", "Compliance Ready"],
      color: "#1cfcfc",
    },
  ]

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
        badge="Our Expertise"
        title1="Comprehensive"
        title2="IT Solutions"
        description="From device refurbishment to enterprise solutions, we provide complete IT support across Malaysia. Serving SMEs, educational institutions, and large corporations with affordable, high-quality refurbished devices."
      />

      {/* Refurbishing Process - Enhanced with Timeline */}
      <section className="relative z-20 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block glass-neon px-4 py-2 rounded-full mb-6">
                <p style={{ color: "#33cccc" }} className="font-bold text-xs uppercase tracking-widest">
                  Our Process
                </p>
              </div>
              <h2 style={{ color: "#1cfcfc" }} className="text-5xl md:text-6xl font-bold mb-4 neon-text-glow">
                8-Step Refurbishment
              </h2>
              <p style={{ color: "#6b7e85" }} className="text-lg max-w-3xl mx-auto mt-4">
                Every device undergoes our rigorous quality assurance process to ensure reliability and performance
              </p>
            </motion.div>
          </div>

          {/* Timeline Style Layout */}
          <div className="relative">
            {/* Connection Line (Hidden on mobile, visible on desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2" style={{ background: "linear-gradient(90deg, transparent, #33cccc 20%, #33cccc 80%, transparent)", opacity: 0.2 }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {refurbishingSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative"
                  >
                    <Card className="glass-neon border border-[#33cccc]/20 overflow-hidden h-full">
                      <CardContent className="p-6">
                        {/* Step Number Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                            className="glass-neon-active rounded-full w-12 h-12 flex items-center justify-center"
                            style={{ backgroundColor: "rgba(51, 204, 204, 0.1)" }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon style={{ color: "#33cccc" }} className="w-6 h-6" />
                          </motion.div>
                          <div className="glass-neon px-3 py-1 rounded-full">
                            <span style={{ color: "#33cccc" }} className="font-bold text-sm">
                              Step {step.step}
                            </span>
                          </div>
                        </div>
                        <h3 style={{ color: "#1cfcfc" }} className="font-bold text-lg mb-3">
                          {step.title}
                        </h3>
                        <p style={{ color: "#eceded" }} className="opacity-75 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 pt-20 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
          >
            <AnimatedStats
              stats={[
                { number: "5-7", label: "Days Average Turnaround", icon: Clock },
                { number: "99.9%", label: "Quality Pass Rate", icon: CheckCircle2 },
                { number: "10,000+", label: "Devices Refurbished", icon: Award },
                { number: "6", label: "Month Warranty", icon: Shield },
              ]}
              duration={2}
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Service Details */}
      <section className="relative z-20 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-block glass-neon px-4 py-2 rounded-full mb-6">
              <p style={{ color: "#33cccc" }} className="font-bold text-xs uppercase tracking-widest">
                Additional Services
              </p>
            </div>
            <h2 style={{ color: "#1cfcfc" }} className="text-5xl md:text-6xl font-bold mb-4 neon-text-glow">
              Comprehensive IT Support
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-2xl mx-auto">
              Beyond refurbishment, we offer complete IT lifecycle support services tailored to Malaysian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Bulk Procurement",
                description:
                  "Specialized solutions for large-scale deployments with volume discounts and customized configurations. Perfect for government agencies, universities, and large corporations.",
                features: ["Volume Pricing", "Custom Configurations", "Phased Rollout", "Dedicated Account Manager"],
              },
              {
                icon: HardDrive,
                title: "IT Asset Disposal",
                description:
                  "Secure and environmentally responsible disposal of outdated IT equipment. We ensure proper data destruction and environmental compliance following Malaysian regulations.",
                features: ["Data Destruction", "Environmental Compliance", "Certification", "Pickup Service"],
              },
              {
                icon: Award,
                title: "Technical Training",
                description:
                  "Comprehensive training programs for IT staff on device management, maintenance, and troubleshooting. Available in Bahasa Malaysia and English.",
                features: ["On-Site Training", "Online Courses", "Multi-Language", "Certification Programs"],
              },
              {
                icon: Settings,
                title: "Remote Monitoring",
                description:
                  "24/7 remote monitoring and management of your IT infrastructure. Proactive issue detection and resolution to minimize downtime.",
                features: ["24/7 Monitoring", "Proactive Alerts", "Performance Tracking", "Regular Reports"],
              },
              {
                icon: Zap,
                title: "Custom Solutions",
                description:
                  "Tailored IT solutions designed for specific industry requirements. Healthcare, finance, education, and government sectors.",
                features: ["Industry-Specific", "Compliance Ready", "Scalable Design", "Integration Support"],
              },
              {
                icon: Clock,
                title: "Leasing Options",
                description:
                  "Flexible leasing arrangements for businesses that prefer operational expenses over capital expenditure. Terms ranging from 12 to 36 months.",
                features: ["Flexible Terms", "OPEX Benefits", "Upgrade Options", "Quick Approval"],
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="glass-neon border border-[#33cccc]/20 h-full overflow-hidden group">
                    <CardContent className="p-6">
                      <motion.div
                        className="glass-neon-active w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: "rgba(51, 204, 204, 0.1)" }}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon style={{ color: "#33cccc" }} className="w-6 h-6" />
                      </motion.div>
                      <h3 style={{ color: "#1cfcfc" }} className="text-xl font-bold mb-3 group-hover:text-[#33cccc] transition-colors">
                        {service.title}
                      </h3>
                      <p style={{ color: "#6b7e85" }} className="text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + i * 0.05 }}
                          >
                            <CheckCircle2 style={{ color: "#33cccc" }} className="w-4 h-4 flex-shrink-0" />
                            <span style={{ color: "#eceded" }} className="text-xs">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full group-hover:bg-[#33cccc] group-hover:text-[#091010] transition-colors"
                        animated
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Categories - Enhanced */}
      <section className="relative z-20 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block glass-neon px-4 py-2 rounded-full mb-6">
              <p style={{ color: "#33cccc" }} className="font-bold text-xs uppercase tracking-widest">
                What We Offer
              </p>
            </div>
            <h2 style={{ color: "#1cfcfc" }} className="text-5xl md:text-6xl font-bold mb-4 neon-text-glow">
              Service Categories
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-3xl mx-auto mt-4">
              Comprehensive IT hardware solutions for every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <Card className="glass-neon border border-[#33cccc]/20 h-full overflow-hidden group cursor-pointer">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${category.color}15` }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon style={{ color: category.color }} className="w-8 h-8" />
                      </motion.div>
                      <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-3 group-hover:text-[#33cccc] transition-colors">
                        {category.title}
                      </h3>
                      <p style={{ color: "#6b7e85" }} className="text-sm mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {category.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + i * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: category.color }} />
                            <span style={{ color: "#eceded" }} className="text-sm">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      <Button
                        variant="secondary"
                        className="w-full group-hover:bg-[#33cccc] group-hover:text-[#091010] transition-colors"
                        animated
                      >
                        Explore {category.title}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ color: "#eceded" }} className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p style={{ color: "#6b7e85" }} className="text-lg max-w-2xl mx-auto">
              Trusted certifications and industry recognition across Malaysia
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* FAQ Section for Services */}
      <FAQSection
        title="Services FAQ"
        description="Common questions about our refurbishment process, services, and support in Malaysia."
        faqs={[
          {
            question: "What is included in your refurbishment process?",
            answer:
              "Our comprehensive 8-step refurbishment process includes intake and diagnosis, component testing with enterprise-grade diagnostic tools, secure data wiping following NIST and DoD standards, professional refurbishment and repairs, fresh OS installation with latest security updates, final QA testing, certification with warranty documentation, and delivery with setup assistance. Every device is thoroughly tested and documented before delivery.",
          },
          {
            question: "How long does the refurbishment process take?",
            answer:
              "Standard refurbishment typically takes 5-7 business days from intake to delivery. For bulk orders, we can process devices in batches with staggered delivery schedules. Rush orders can be completed in 2-3 business days for an additional fee. We'll provide you with a detailed timeline during the quotation process, including pickup and delivery dates.",
          },
          {
            question: "Can you refurbish custom or specialized equipment?",
            answer:
              "Yes, we handle custom and specialized equipment including industrial PCs, medical devices, point-of-sale systems, and specialized workstations. Our team has experience refurbishing equipment from various manufacturers including Dell, HP, Lenovo, and Apple. We can also source specific models upon request. Contact us to discuss your specialized equipment requirements.",
          },
          {
            question: "What training services do you offer?",
            answer:
              "We offer comprehensive technical training programs covering device management, troubleshooting, preventive maintenance, and best practices for IT asset management. Training is available on-site at your location, online via video conferencing, or at our facility in Kuala Lumpur. Programs are available in Bahasa Malaysia, English, Mandarin, and Tamil. We also provide training materials and certification upon completion.",
          },
          {
            question: "Do you provide IT asset disposal services?",
            answer:
              "Yes, we offer secure IT asset disposal services including certified data destruction, environmental compliance documentation, and proper recycling. All data storage devices are securely wiped using DoD standards or physically destroyed. We provide disposal certificates and ensure compliance with Malaysian environmental regulations. We can arrange pickup from your location throughout Malaysia.",
          },
          {
            question: "What ongoing support do you provide after deployment?",
            answer:
              "Our ongoing support includes 24/7 technical assistance via phone and email, remote troubleshooting and resolution, on-site service for enterprise clients, quarterly preventive maintenance visits, regular performance monitoring, and quarterly business reviews. We also offer extended warranty options and maintenance contracts to ensure your IT infrastructure continues operating optimally.",
          },
        ]}
      />

      <Footer />
      <WhatsAppButton />
      </div>
    </main>
  )
}
