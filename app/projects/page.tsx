"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroGeometric } from "@/components/ui/hero-geometric"
import { GravityStarsBackground } from "@/components/ui/gravity-stars-background"
import { AnimatedNetworkBG } from "@/components/animated-network-bg"
import { Building2, GraduationCap, Zap, ShoppingCart, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Banking Institution IT Infrastructure Upgrade",
      category: "enterprise",
      description: "Comprehensive IT infrastructure refresh for a leading banking institution in Kuala Lumpur, deploying over 200+ refurbished workstations and enterprise servers across multiple branches throughout Peninsular Malaysia.",
      details:
        "This large-scale project involved coordinating with multiple branch locations across Selangor, Johor, Penang, and Melaka. We implemented a secure, redundant network infrastructure following Bank Negara Malaysia guidelines, ensuring 99.9% uptime during business hours. All refurbished devices underwent rigorous security testing and data encryption compliance. The project reduced infrastructure costs by 65% compared to new equipment purchases, enabling the bank to reinvest savings into digital transformation initiatives. Our team provided comprehensive staff training on the new systems and established a 24/7 support framework for seamless operations.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format",
      metrics: ["200+ Devices", "99.9% Uptime", "65% Cost Savings", "Multi-State"],
    },
    {
      id: 2,
      title: "Public University Computer Lab Modernization",
      category: "education",
      description: "Extensive refurbishment and deployment of 150 enterprise-grade computers across multiple faculty computer labs in a major public university in Malaysia, supporting thousands of students in STEM programs.",
      details:
        "Working closely with the university's IT department, we refurbished and deployed 150 high-performance workstations across engineering, computer science, and multimedia labs. Each device was equipped with specialized software for CAD, programming, and design work. The project significantly increased lab capacity by 40%, allowing more students to access technology resources. We provided comprehensive installation, configuration, and staff training sessions. Additionally, we established a quarterly maintenance schedule to ensure optimal performance throughout the academic year. The cost-effective solution enabled the university to allocate budget to other critical educational initiatives while maintaining enterprise-grade quality standards.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format",
      metrics: ["150 Devices", "40% Capacity ↑", "Multi-Lab Deployment", "Student Impact"],
    },
    {
      id: 3,
      title: "Government Hospital IT System Enhancement",
      category: "enterprise",
      description: "Complete IT infrastructure upgrade for a government hospital in Malaysia, supplying medical-grade servers, network equipment, and workstations to support patient care systems and administrative operations.",
      details:
        "This critical healthcare infrastructure project required adherence to strict Malaysian Ministry of Health guidelines and international healthcare IT standards. We deployed 50+ refurbished servers with redundant configurations to ensure zero downtime for patient management systems. All equipment underwent thorough security audits and data encryption compliance checks. The infrastructure supports Electronic Medical Records (EMR), Laboratory Information Systems (LIS), and administrative functions across multiple departments. We implemented emergency backup systems with automatic failover capabilities and provided 24/7 technical support specifically tailored for healthcare environments. The solution enabled the hospital to modernize its IT capabilities while maintaining strict budget constraints typical of public healthcare institutions.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop&auto=format",
      metrics: ["50+ Servers", "Zero Downtime", "24/7 Support", "MOH Compliant"],
    },
    {
      id: 4,
      title: "Local Retail Chain Digital Transformation",
      category: "retail",
      description: "Complete POS and office IT system upgrade for a prominent Malaysian retail chain, equipping 75 store locations nationwide with modern point-of-sale terminals and back-office equipment.",
      details:
        "This nationwide project spanned retail locations from Johor Bahru to Penang, including stores in major shopping malls and standalone outlets. We standardized hardware across all locations, deploying refurbished POS systems, receipt printers, barcode scanners, and office computers. The standardized approach reduced maintenance complexity by 60% and significantly improved operational consistency across the chain. We coordinated rollouts to minimize business disruption, typically executing installations during off-peak hours. Our team provided comprehensive training to store managers and staff on the new systems. The project also included establishing a centralized IT support system accessible from all locations, ensuring rapid response times for any technical issues. This modernization enabled the retail chain to improve transaction processing speed and customer service quality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format",
      metrics: ["75 Locations", "60% Fewer Issues", "Nationwide Rollout", "Improved Efficiency"],
    },
    {
      id: 5,
      title: "Rural School Digital Learning Initiative",
      category: "education",
      description: "Comprehensive technology deployment program supplying 200 refurbished laptops to rural primary and secondary schools across Sabah and Sarawak, bringing digital learning resources to underserved communities.",
      details:
        "In partnership with education-focused NGOs and the Ministry of Education Malaysia, we provided 200 refurbished laptops to schools in remote areas of East Malaysia. This initiative addressed the digital divide by bringing modern technology to students who previously had limited access. We pre-installed educational software in both Bahasa Malaysia and English, including e-learning platforms, digital libraries, and basic programming tools. Our team conducted extensive teacher training workshops to ensure educators could effectively integrate the devices into their curriculum. We also established a support hotline specifically for rural schools and arranged quarterly maintenance visits. The program enabled thousands of students to develop digital literacy skills and access online educational resources, contributing to Malaysia's goal of digital inclusion for all students regardless of location.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&auto=format",
      metrics: ["200 Laptops", "Rural Impact", "2 States", "Student Empowerment"],
    },
    {
      id: 6,
      title: "KL Tech Startup Office Infrastructure",
      category: "startup",
      description: "Complete IT infrastructure setup for a fast-growing fintech startup in Kuala Lumpur, providing scalable and cost-effective solutions that support rapid business expansion.",
      details:
        "Supporting a burgeoning fintech startup in the heart of KL's technology hub, we designed and deployed a complete IT infrastructure that balanced performance, cost-effectiveness, and scalability. The solution included refurbished workstations for a 50-person development team, servers for application hosting, and network equipment for secure operations. We configured cloud-integrated systems that allow seamless remote work capabilities, essential for modern Malaysian tech companies. Our cost-effective approach enabled the startup to allocate more capital to product development and talent acquisition. We established flexible upgrade pathways that allow easy expansion as the company grows. The infrastructure supports agile development workflows, version control systems, and collaboration tools. Our team provided initial setup, configuration, and training, followed by ongoing support to ensure smooth operations as the startup scales.",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop&auto=format",
      metrics: ["50 Workstations", "Scalable", "Cloud-Ready", "Cost-Effective"],
    },
    {
      id: 7,
      title: "Manufacturing Plant Automation Upgrade",
      category: "enterprise",
      description: "Large-scale IT infrastructure upgrade for a manufacturing facility in Penang, deploying industrial-grade computers and servers to support automation systems and production line monitoring.",
      details:
        "This complex project involved upgrading IT infrastructure for a major manufacturing facility in Penang's industrial area. We deployed ruggedized computers capable of operating in industrial environments, along with servers supporting Manufacturing Execution Systems (MES) and quality control databases. All equipment was configured to integrate with existing SCADA systems and automated production lines. We worked around production schedules to minimize downtime, often performing installations during maintenance windows. The refurbished industrial computers reduced costs by 50% compared to specialized new equipment while maintaining reliability standards required for 24/7 manufacturing operations. Our solution included redundant systems for critical processes and comprehensive documentation for the facility's technical team. The upgrade improved production monitoring capabilities and data collection accuracy, contributing to overall operational efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format",
      metrics: ["Industrial PCs", "24/7 Operations", "50% Cost Savings", "Penang"],
    },
    {
      id: 8,
      title: "Government Agency Digital Office Transformation",
      category: "enterprise",
      description: "Comprehensive IT modernization for a Malaysian government agency, replacing outdated systems with refurbished workstations and servers to improve public service delivery efficiency.",
      details:
        "Working with a federal government agency in Putrajaya, we executed a phased IT modernization project that replaced legacy systems with refurbished but modern equipment. The project required strict compliance with Malaysian Government ICT policies and security standards. We deployed 180+ workstations across multiple departments, each configured with government-approved software and security protocols. All servers were set up with redundancy and backup systems to ensure continuity of public services. The project included extensive user training programs to help government employees transition smoothly to the new systems. We established a dedicated support desk specifically for government operations, with guaranteed response times for critical issues. The modernization improved processing times for public services and enhanced the agency's ability to serve citizens efficiently while staying within public sector budget constraints.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format",
      metrics: ["180+ Workstations", "Putrajaya", "Public Service", "Phased Rollout"],
    },
    {
      id: 9,
      title: "Private College Library Technology Hub",
      category: "education",
      description: "Transformation of traditional library spaces into modern digital learning centers in a private college in Selangor, installing computer workstations and collaboration spaces for students.",
      details:
        "We transformed multiple library spaces in a private college into modern digital learning hubs, installing 90 refurbished workstations configured for research, study, and collaborative work. Each workstation was equipped with access to digital library resources, academic databases, and productivity software. We created different zones for quiet study, group collaboration, and multimedia projects. The project included setting up presentation systems and digital whiteboards for student presentations. Our team provided orientation sessions for students and training for library staff on managing the new facilities. We also implemented a booking system to optimize usage and ensure fair access for all students. The modernization increased library utilization by 55% and provided students with access to technology that enhances their learning experience. The cost-effective refurbished equipment allowed the college to create multiple digital hubs throughout the campus.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&auto=format",
      metrics: ["90 Workstations", "Multi-Zone Setup", "55% More Usage", "Selangor"],
    },
    {
      id: 10,
      title: "Islamic School E-Learning Platform Deployment",
      category: "education",
      description: "Complete technology deployment for Islamic schools (Sekolah Agama) in the Klang Valley, providing computers and infrastructure to support modern e-learning platforms while maintaining Islamic educational values.",
      details:
        "This culturally sensitive project involved deploying 120 refurbished computers to Islamic schools across the Klang Valley. We configured each system with e-learning platforms that support both secular and Islamic education content, respecting the schools' dual-curriculum approach. All software was configured to be culturally appropriate while providing modern educational tools. We worked closely with school administrators and Islamic education experts to ensure the technology integration aligned with Islamic educational principles. The project included comprehensive teacher training programs conducted in Bahasa Malaysia, covering both technical skills and pedagogical approaches for digital learning. We pre-installed educational software for Quranic studies, Islamic history, and Arabic language learning alongside standard academic software. The deployment significantly improved students' access to digital resources and modern learning methods, bridging the gap between traditional Islamic education and contemporary technology-enhanced learning.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&auto=format",
      metrics: ["120 Computers", "Klang Valley", "Dual Curriculum", "Cultural Integration"],
    },
    {
      id: 11,
      title: "Co-working Space Technology Infrastructure",
      category: "startup",
      description: "Complete IT infrastructure setup for a modern co-working space in Cyberjaya, providing high-speed networking, shared workstations, and meeting room technology for entrepreneurs and remote workers.",
      details:
        "We designed and deployed a comprehensive IT infrastructure for a prominent co-working space in Cyberjaya, Malaysia's Silicon Valley. The project included high-speed network infrastructure capable of supporting hundreds of concurrent users, shared workstation areas with refurbished computers, and advanced meeting room technology. We configured secure Wi-Fi networks with separate channels for guests and members, ensuring data security for businesses using the space. The meeting rooms were equipped with presentation systems, video conferencing capabilities, and smart displays. Our team set up a member portal for booking resources and accessing shared printers and scanners. We also implemented network monitoring to ensure optimal performance during peak usage times. The infrastructure supports the growing trend of remote work and flexible office arrangements popular among Malaysian tech professionals and entrepreneurs. Our cost-effective solution allowed the co-working space to offer competitive membership rates while providing enterprise-grade technology access.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format",
      metrics: ["High-Speed Network", "Cyberjaya", "Shared Workspaces", "Video Conferencing"],
    },
    {
      id: 12,
      title: "Community Digital Skills Center",
      category: "education",
      description: "Establishment of a community technology center in a low-income housing area (PPR) in Kuala Lumpur, providing refurbished computers and training programs for residents to develop digital skills.",
      details:
        "In collaboration with community organizations, we established a digital skills center in a People's Housing Project (PPR) in Kuala Lumpur. We deployed 50 refurbished computers in a dedicated learning space, creating an environment where residents of all ages could access technology and learn digital skills. The center offers free computer literacy courses, basic programming workshops, and job search assistance programs. We trained local community leaders to become digital literacy instructors, creating sustainable educational capacity within the community. The project addresses digital exclusion by providing free access to technology for families who cannot afford personal computers. Programs are offered in multiple languages (Bahasa Malaysia, English, Chinese, Tamil) to serve the diverse community. The center has become a hub for youth development, job training, and elderly digital inclusion, with evening and weekend programs to accommodate working adults and students. Our ongoing support ensures the facility remains operational and updated, contributing to Malaysia's goal of creating a digitally inclusive society.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&auto=format",
      metrics: ["50 Computers", "PPR Location", "Free Access", "Multi-Language Support"],
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Zap },
    { id: "enterprise", label: "Enterprise", icon: Building2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "retail", label: "Retail", icon: ShoppingCart },
  ]

  const filteredProjects = selectedTag === "all" ? projects : projects.filter((p) => p.category === selectedTag)

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
      <AnimatedNetworkBG />
      <div className="relative z-10">
      <Navbar />

      <HeroGeometric
        badge="Our Portfolio"
        title1="Proven"
        title2="Success Stories"
        description="Across industries and scales, we've delivered transformative IT solutions that drive results and reliability."
      />

      {/* Filter Tags */}
      <section className="relative z-20 py-12 px-4 border-b" style={{ borderColor: "rgba(51, 204, 204, 0.2)" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedTag(cat.id)}
                className="px-6 py-2 rounded-full font-semibold transition-smooth flex items-center gap-2"
                style={{
                  backgroundColor: selectedTag === cat.id ? "#33cccc" : "rgba(51, 204, 204, 0.1)",
                  color: selectedTag === cat.id ? "#091010" : "#33cccc",
                  border: selectedTag === cat.id ? "none" : "1px solid rgba(51, 204, 204, 0.3)",
                }}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <Card className="glass-neon border-none p-6 cursor-pointer hover:glass-neon-active transition-all h-full">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-full h-32 rounded-lg mb-4 overflow-hidden relative"
                  style={{ backgroundColor: "rgba(51, 204, 204, 0.1)" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        style={{ minHeight: "128px" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          // Fallback to a reliable placeholder
                          if (!target.dataset.fallback) {
                            target.dataset.fallback = "1"
                            target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format"
                          } else {
                            // If fallback also fails, show placeholder background
                            target.style.display = "none"
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 1rem;"><p style="color: #33cccc; opacity: 0.75; text-align: center; font-size: 0.875rem;">Image unavailable</p></div>`
                            }
                          }
                        }}
                      />
                    </motion.div>
                <h3
                  style={{ color: "#1cfcfc" }}
                  className="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors"
                >
                  {project.title}
                </h3>
                <p style={{ color: "#eceded" }} className="opacity-75 text-sm">
                  {project.description}
                </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-neon-active p-8 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-smooth"
            >
              <X style={{ color: "#1cfcfc" }} className="w-6 h-6" />
            </button>

            {projects.find((p) => p.id === selectedProject) && (
              <div>
                <h2 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-4 neon-text-glow">
                  {projects.find((p) => p.id === selectedProject)?.title}
                </h2>
                <p style={{ color: "#eceded" }} className="opacity-75 mb-6">
                  {projects.find((p) => p.id === selectedProject)?.details}
                </p>
                <div className="flex flex-wrap gap-3">
                  {projects
                    .find((p) => p.id === selectedProject)
                    ?.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 rounded-lg"
                        style={{ backgroundColor: "rgba(51, 204, 204, 0.2)" }}
                      >
                        <p style={{ color: "#33cccc" }} className="font-semibold text-sm">
                          {metric}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      </div>
    </main>
  )
}
