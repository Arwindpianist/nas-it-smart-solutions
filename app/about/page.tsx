"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroGeometric } from "@/components/ui/hero-geometric"
import { GravityStarsBackground } from "@/components/ui/gravity-stars-background"
import { AnimatedNetworkBG } from "@/components/animated-network-bg"
import { InteractiveBrands } from "@/components/interactive-brands"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Award, Users, Globe } from "lucide-react"

export default function About() {
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
        badge="Our Story"
        title1="Trusted Since"
        title2="2010"
        description="15+ years of expertise in refurbished IT hardware and enterprise solutions in Malaysia. We believe in bringing reliability back to IT while helping businesses save up to 70% on their IT infrastructure costs."
      />

      {/* Story Timeline */}
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "#1cfcfc" }} className="text-4xl font-bold text-center mb-16 neon-text-glow">
            Our Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "Founded",
                description:
                  "Started with a vision to make enterprise IT accessible to all businesses, regardless of size.",
              },
              {
                year: "2014",
                title: "First Certification",
                description: "Achieved ISO 9001 and e-Stewards certification, setting industry standards for quality.",
              },
              {
                year: "2017",
                title: "Regional Expansion",
                description: "Opened regional offices and expanded our network to serve 50+ clients across the region.",
              },
              {
                year: "2021",
                title: "Digital Transform",
                description: "Launched our online platform and expanded our digital presence significantly.",
              },
              {
                year: "2024",
                title: "Market Leader",
                description: "Recognized as the leading refurbished IT solutions provider in the region.",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="glass-neon px-4 py-2 rounded-full">
                    <p style={{ color: "#33cccc" }} className="font-bold">
                      {milestone.year}
                    </p>
                  </div>
                </div>
                <div className="glass-neon p-6 rounded-xl flex-1">
                  <h3 style={{ color: "#1cfcfc" }} className="text-xl font-bold mb-2">
                    {milestone.title}
                  </h3>
                  <p style={{ color: "#eceded" }} className="opacity-75">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Director Profile - Centered */}
            <div className="lg:col-span-2 glass-neon-active p-8 md:p-12 rounded-2xl text-center lg:text-left">
              <h2 style={{ color: "#1cfcfc" }} className="text-3xl font-bold mb-4 neon-text-glow">
                Meet Our Director
              </h2>
              <p style={{ color: "#33cccc" }} className="text-lg font-semibold mb-2">
                Nora
              </p>
              <p style={{ color: "#eceded" }} className="opacity-75 mb-6">
                20+ years in IT Solutions & Enterprise Hardware
              </p>
              <p style={{ color: "#eceded" }} className="opacity-75 leading-relaxed mb-4">
                Nora founded NAS IT Smart Solutions with a mission to democratize access to enterprise-grade IT hardware in Malaysia. With deep industry expertise and a commitment to sustainability, she leads our team to deliver exceptional value and reliability to every client.
              </p>
              <p style={{ color: "#eceded" }} className="opacity-75 leading-relaxed">
                With extensive affiliations in the Malaysian IT industry and a proven track record working with major corporations, educational institutions, and government organizations, Nora brings unparalleled experience to help businesses optimize their IT infrastructure while maximizing cost efficiency.
              </p>
            </div>

            {/* Stats & Company Info - Centered */}
            <div className="space-y-6">
              {[
                { icon: Award, label: "15+ Years", value: "Industry Excellence" },
                { icon: Users, label: "500+", value: "Happy Clients" },
                { icon: CheckCircle2, label: "99.9%", value: "Customer Satisfaction" },
                { icon: Globe, label: "Regional", value: "Market Leader" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="glass-neon p-6 rounded-xl flex items-start gap-4 animate-slide-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <Icon style={{ color: "#33cccc" }} className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p style={{ color: "#1cfcfc" }} className="font-bold">
                        {item.label}
                      </p>
                      <p style={{ color: "#eceded" }} className="opacity-75 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Company Information - Centered */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="glass-neon p-8 rounded-xl text-center">
              <h3 style={{ color: "#1cfcfc" }} className="font-bold text-xl mb-6">
                Company Information
              </h3>
              <div className="space-y-3">
                <p style={{ color: "#eceded" }} className="font-semibold text-lg">
                  NAS IT SMART SOLUTIONS
                </p>
                <p style={{ color: "#6b7e85" }} className="text-sm">
                  202503193027 (KT0595180-A)
                </p>
                <p style={{ color: "#6b7e85" }} className="text-sm leading-relaxed">
                  1525, Pacific63@PJ Centre, No. 5, Jalan 13/6, Sek 13,
                  <br />
                  Petaling Jaya, Selangor, Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Carry */}
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ color: "#1cfcfc" }} className="text-4xl font-bold mb-4 neon-text-glow">
              Brand Portfolio
            </h2>
            <p style={{ color: "#eceded" }} className="text-xl opacity-75 max-w-3xl mx-auto mb-2">
              Over 70 Manufacturers Supported
            </p>
            <p style={{ color: "#33cccc" }} className="text-lg font-semibold max-w-3xl mx-auto">
              Certified Refurbished & Project-Proven Hardware
            </p>
            <p style={{ color: "#eceded" }} className="text-base opacity-75 max-w-3xl mx-auto mt-4">
              We virtually carry every possible brand in networking, computing, and enterprise hardware—from switches and access points to routers, computers, and servers.
            </p>
            <p style={{ color: "#6b7e85" }} className="text-sm mt-3 italic">
              Hover over brands to see sample models
            </p>
          </div>

          {/* Brand Categories - Tab Based */}
          <div className="glass-neon-active p-8 md:p-12 rounded-2xl">
            <Tabs defaultValue="enterprise" className="w-full">
              <TabsList 
                className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8 h-auto p-1 glass-neon"
                style={{ backgroundColor: "rgba(15, 25, 30, 0.4)" }}
              >
                <TabsTrigger 
                  value="enterprise"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Enterprise
                </TabsTrigger>
                <TabsTrigger 
                  value="networking"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Networking
                </TabsTrigger>
                <TabsTrigger 
                  value="wireless"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Wireless
                </TabsTrigger>
                <TabsTrigger 
                  value="pcs"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  PCs/Laptops
                </TabsTrigger>
                <TabsTrigger 
                  value="refurbished"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Refurbished
                </TabsTrigger>
                <TabsTrigger 
                  value="security"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="storage"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Storage
                </TabsTrigger>
                <TabsTrigger 
                  value="industrial"
                  className="text-xs md:text-sm data-[state=active]:bg-[#33cccc] data-[state=active]:text-[#091010] data-[state=active]:font-semibold"
                  style={{ color: "#eceded" }}
                >
                  Industrial
                </TabsTrigger>
              </TabsList>

              {/* Enterprise & Corporate-Grade Brands */}
              <TabsContent value="enterprise" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    🧠 Enterprise & Corporate-Grade
                  </h3>
                  <p style={{ color: "#6b7e85" }} className="text-sm uppercase tracking-wide">
                    Servers, Core Networking, Data Center
                  </p>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Cisco",
                  models: [
                    { type: "Switch", name: "Catalyst 9300 Series" },
                    { type: "Router", name: "ISR 4000 Series" },
                    { type: "Access Point", name: "Aironet 2800 Series" },
                    { type: "Server", name: "UCS C-Series" }
                  ]
                },
                {
                  name: "Juniper Networks",
                  models: [
                    { type: "Switch", name: "EX Series" },
                    { type: "Router", name: "MX Series 5G" },
                    { type: "Access Point", name: "Mist AI APs" }
                  ]
                },
                {
                  name: "HPE",
                  models: [
                    { type: "Server", name: "ProLiant DL380" },
                    { type: "Switch", name: "Aruba CX 6300" },
                    { type: "Storage", name: "StoreEasy" }
                  ]
                },
                {
                  name: "Dell EMC",
                  models: [
                    { type: "Server", name: "PowerEdge R750" },
                    { type: "Switch", name: "PowerSwitch N3200" },
                    { type: "Storage", name: "PowerVault" }
                  ]
                },
                {
                  name: "Lenovo ThinkSystem",
                  models: [
                    { type: "Server", name: "SR650" },
                    { type: "Server", name: "SR630" },
                    { type: "Server", name: "SR850" }
                  ]
                },
                {
                  name: "IBM Systems",
                  models: [
                    { type: "Server", name: "System x3650" },
                    { type: "Server", name: "System x3550" }
                  ]
                },
                {
                  name: "Fujitsu",
                  models: [
                    { type: "Server", name: "PRIMERGY RX2540" },
                    { type: "Server", name: "PRIMERGY RX4770" }
                  ]
                },
                {
                  name: "Supermicro",
                  models: [
                    { type: "Server", name: "Superserver 1U" },
                    { type: "Server", name: "Superserver 2U" }
                  ]
                },
                {
                  name: "Oracle Sun",
                  models: [
                    { type: "Server", name: "Sun Fire X4170" },
                    { type: "Server", name: "Sun Fire X4270" }
                  ]
                },
                {
                  name: "NetApp",
                  models: [
                    { type: "Storage", name: "FAS Series" },
                    { type: "Storage", name: "AFF Series" }
                  ]
                },
                {
                  name: "Brocade",
                  models: [
                    { type: "Switch", name: "ICX Series" },
                    { type: "Switch", name: "VDX Series" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* Networking & Switching */}
              <TabsContent value="networking" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    🌐 Networking & Switching
                  </h3>
                  <p style={{ color: "#6b7e85" }} className="text-sm uppercase tracking-wide">
                    SMB to Enterprise
                  </p>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Cisco",
                  models: [
                    { type: "Switch", name: "Catalyst 2960" },
                    { type: "Switch", name: "Catalyst 3750" },
                    { type: "Router", name: "ASR 1000" }
                  ]
                },
                {
                  name: "HPE Aruba",
                  models: [
                    { type: "Switch", name: "2930M Series" },
                    { type: "Switch", name: "CX 6300" },
                    { type: "Controller", name: "7000 Series" }
                  ]
                },
                {
                  name: "Aruba Networks",
                  models: [
                    { type: "Switch", name: "2930F" },
                    { type: "Access Point", name: "AP-515" }
                  ]
                },
                {
                  name: "Fortinet",
                  models: [
                    { type: "Firewall", name: "FortiGate 60F" },
                    { type: "Switch", name: "FortiSwitch 108E" }
                  ]
                },
                {
                  name: "MikroTik",
                  models: [
                    { type: "Router", name: "CCR1009" },
                    { type: "Router", name: "RB4011" },
                    { type: "AP", name: "hAP ac³" }
                  ]
                },
                {
                  name: "Ubiquiti",
                  models: [
                    { type: "Switch", name: "UniFi Switch 24" },
                    { type: "Gateway", name: "UniFi Security Gateway" },
                    { type: "AP", name: "UniFi AP AC Pro" }
                  ]
                },
                {
                  name: "Juniper",
                  models: [
                    { type: "Switch", name: "EX Series" },
                    { type: "Router", name: "MX Series" }
                  ]
                },
                {
                  name: "Extreme Networks",
                  models: [
                    { type: "Switch", name: "X460 Series" },
                    { type: "Switch", name: "X690 Series" }
                  ]
                },
                {
                  name: "TP-Link Omada",
                  models: [
                    { type: "Switch", name: "JetStream 24-Port" },
                    { type: "AP", name: "EAP225" }
                  ]
                },
                {
                  name: "NETGEAR ProSAFE",
                  models: [
                    { type: "Switch", name: "GS108" },
                    { type: "Switch", name: "GS728TP" }
                  ]
                },
                {
                  name: "D-Link",
                  models: [
                    { type: "Switch", name: "DGS-1210" },
                    { type: "Router", name: "DIR-885L" }
                  ]
                },
                {
                  name: "Zyxel",
                  models: [
                    { type: "Switch", name: "XGS1900" },
                    { type: "Firewall", name: "USG Series" }
                  ]
                },
                {
                  name: "Sophos",
                  models: [
                    { type: "Firewall", name: "XG Series" },
                    { type: "UTM", name: "SG Series" }
                  ]
                },
                {
                  name: "WatchGuard",
                  models: [
                    { type: "Firewall", name: "Firebox T Series" },
                    { type: "Firewall", name: "Firebox M Series" }
                  ]
                },
                {
                  name: "Allied Telesis",
                  models: [
                    { type: "Switch", name: "AT-x930 Series" }
                  ]
                },
                {
                  name: "EnGenius",
                  models: [
                    { type: "Switch", name: "ECS Series" },
                    { type: "AP", name: "EWS Series" }
                  ]
                },
                {
                  name: "Ruijie / Reyee",
                  models: [
                    { type: "Switch", name: "RG-S6200" }
                  ]
                },
                {
                  name: "Brocade",
                  models: [
                    { type: "Switch", name: "ICX Series" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* Wireless & Access Points */}
              <TabsContent value="wireless" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    📶 Wireless & Access Points
                  </h3>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Cisco Meraki",
                  models: [
                    { type: "AP", name: "MR Series" },
                    { type: "AP", name: "MR33" },
                    { type: "AP", name: "MR42" }
                  ]
                },
                {
                  name: "Ubiquiti UniFi",
                  models: [
                    { type: "AP", name: "UAP-AC-PRO" },
                    { type: "AP", name: "UAP-AC-LR" },
                    { type: "AP", name: "U6-Pro" }
                  ]
                },
                {
                  name: "HPE Aruba",
                  models: [
                    { type: "AP", name: "AP-515" },
                    { type: "AP", name: "AP-635" },
                    { type: "AP", name: "IAP Series" }
                  ]
                },
                {
                  name: "Ruckus Wireless",
                  models: [
                    { type: "AP", name: "R610" },
                    { type: "AP", name: "R750" },
                    { type: "AP", name: "T710" }
                  ]
                },
                {
                  name: "TP-Link Omada",
                  models: [
                    { type: "AP", name: "EAP225" },
                    { type: "AP", name: "EAP650" }
                  ]
                },
                {
                  name: "Cambium Networks",
                  models: [
                    { type: "AP", name: "ePMP Series" }
                  ]
                },
                {
                  name: "D-Link Nuclias",
                  models: [
                    { type: "AP", name: "DAP-2660" }
                  ]
                },
                {
                  name: "EnGenius",
                  models: [
                    { type: "AP", name: "EWS Series" }
                  ]
                },
                {
                  name: "Netgear Orbi Pro",
                  models: [
                    { type: "Mesh", name: "Orbi WiFi 6" },
                    { type: "Router", name: "Nighthawk AX12" }
                  ]
                },
                {
                  name: "Fortinet FortiAP",
                  models: [
                    { type: "AP", name: "FortiAP 221E" },
                    { type: "AP", name: "FortiAP 231F" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* PCs, Laptops & Workstations */}
              <TabsContent value="pcs" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    🖥️ PCs, Laptops & Workstations
                  </h3>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Lenovo",
                  models: [
                    { type: "Laptop", name: "ThinkPad X1 Carbon" },
                    { type: "Desktop", name: "ThinkCentre M920" },
                    { type: "Workstation", name: "ThinkStation P520" }
                  ]
                },
                {
                  name: "Dell",
                  models: [
                    { type: "Desktop", name: "OptiPlex 7090" },
                    { type: "Laptop", name: "Latitude 7490" },
                    { type: "Workstation", name: "Precision 5520" }
                  ]
                },
                {
                  name: "HP",
                  models: [
                    { type: "Desktop", name: "EliteDesk 800 G6" },
                    { type: "Laptop", name: "EliteBook 850" },
                    { type: "Workstation", name: "Z-Series" }
                  ]
                },
                {
                  name: "Apple",
                  models: [
                    { type: "Laptop", name: "MacBook Pro" },
                    { type: "Desktop", name: "iMac" },
                    { type: "Server", name: "Mac Mini" }
                  ]
                },
                {
                  name: "ASUS",
                  models: [
                    { type: "Laptop", name: "ZenBook Series" },
                    { type: "Desktop", name: "VivoMini" }
                  ]
                },
                {
                  name: "Acer",
                  models: [
                    { type: "Laptop", name: "Aspire Series" },
                    { type: "Desktop", name: "Veriton" }
                  ]
                },
                {
                  name: "MSI",
                  models: [
                    { type: "Laptop", name: "Prestige Series" },
                    { type: "Desktop", name: "Trident Series" }
                  ]
                },
                {
                  name: "Intel NUC",
                  models: [
                    { type: "Mini PC", name: "NUC8" },
                    { type: "Mini PC", name: "NUC10" }
                  ]
                },
                {
                  name: "Microsoft Surface",
                  models: [
                    { type: "Laptop", name: "Surface Laptop" },
                    { type: "Tablet", name: "Surface Pro" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* Refurbished Business-Class Hardware */}
              <TabsContent value="refurbished" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    💼 Refurbished Business-Class Hardware
                  </h3>
                  <p style={{ color: "#6b7e85" }} className="text-sm uppercase tracking-wide">
                    Top Resale Value
                  </p>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Dell",
                  models: [
                    { type: "Desktop", name: "OptiPlex 7090" },
                    { type: "Laptop", name: "Latitude 7490" },
                    { type: "Workstation", name: "Precision 5520" }
                  ]
                },
                {
                  name: "HP",
                  models: [
                    { type: "Desktop", name: "EliteDesk 800" },
                    { type: "Desktop", name: "ProDesk 600" },
                    { type: "Workstation", name: "Z-Series" }
                  ]
                },
                {
                  name: "Lenovo",
                  models: [
                    { type: "Laptop", name: "ThinkPad X1" },
                    { type: "Desktop", name: "ThinkCentre M920" },
                    { type: "Laptop", name: "ThinkPad T14" }
                  ]
                },
                {
                  name: "Fujitsu",
                  models: [
                    { type: "Desktop", name: "Esprimo E920" },
                    { type: "Laptop", name: "Lifebook E Series" }
                  ]
                },
                {
                  name: "Apple",
                  models: [
                    { type: "Laptop", name: "MacBook Pro 13" },
                    { type: "Desktop", name: "iMac 27" },
                    { type: "Laptop", name: "MacBook Air M1" }
                  ]
                },
                {
                  name: "Samsung",
                  models: [
                    { type: "Laptop", name: "Galaxy Book Series" },
                    { type: "Laptop", name: "Notebook Series" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* Firewalls & Security Appliances */}
              <TabsContent value="security" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    🛡️ Firewalls & Security Appliances
                  </h3>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Fortinet",
                  models: [
                    { type: "Firewall", name: "FortiGate 60F" },
                    { type: "Firewall", name: "FortiGate 100F" },
                    { type: "Firewall", name: "FortiGate 200F" }
                  ]
                },
                {
                  name: "Cisco",
                  models: [
                    { type: "Firewall", name: "ASA 5500 Series" },
                    { type: "Firewall", name: "FirePower 2100" }
                  ]
                },
                {
                  name: "Sophos",
                  models: [
                    { type: "Firewall", name: "XG Series" },
                    { type: "UTM", name: "SG Series" }
                  ]
                },
                {
                  name: "Palo Alto Networks",
                  models: [
                    { type: "Firewall", name: "PA-220" },
                    { type: "Firewall", name: "PA-500" }
                  ]
                },
                {
                  name: "SonicWall",
                  models: [
                    { type: "Firewall", name: "TZ Series" },
                    { type: "Firewall", name: "NSA Series" }
                  ]
                },
                {
                  name: "WatchGuard",
                  models: [
                    { type: "Firewall", name: "Firebox T Series" },
                    { type: "Firewall", name: "Firebox M Series" }
                  ]
                },
                {
                  name: "Check Point",
                  models: [
                    { type: "Firewall", name: "1100 Series" },
                    { type: "Firewall", name: "1500 Series" }
                  ]
                },
                {
                  name: "Juniper",
                  models: [
                    { type: "Firewall", name: "SRX Series" }
                  ]
                },
                {
                  name: "pfSense / Netgate",
                  models: [
                    { type: "Firewall", name: "SG-1100" },
                    { type: "Firewall", name: "SG-3100" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* Storage & Backup */}
              <TabsContent value="storage" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    💾 Storage & Backup
                  </h3>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Synology",
                  models: [
                    { type: "NAS", name: "DS920+" },
                    { type: "NAS", name: "DS220+" },
                    { type: "NAS", name: "DS1821+" }
                  ]
                },
                {
                  name: "QNAP",
                  models: [
                    { type: "NAS", name: "TS-873A" },
                    { type: "NAS", name: "TS-453D" },
                    { type: "NAS", name: "TS-932X" }
                  ]
                },
                {
                  name: "Dell PowerVault",
                  models: [
                    { type: "Storage", name: "MD Series" },
                    { type: "Storage", name: "NX Series" }
                  ]
                },
                {
                  name: "HPE",
                  models: [
                    { type: "Storage", name: "StoreEasy" },
                    { type: "Storage", name: "StoreOnce" }
                  ]
                },
                {
                  name: "NetApp",
                  models: [
                    { type: "Storage", name: "FAS Series" },
                    { type: "Storage", name: "AFF Series" }
                  ]
                },
                {
                  name: "Western Digital",
                  models: [
                    { type: "HDD", name: "WD Red Pro" },
                    { type: "HDD", name: "WD Gold" }
                  ]
                },
                {
                  name: "Seagate",
                  models: [
                    { type: "HDD", name: "IronWolf" },
                    { type: "HDD", name: "Exos" }
                  ]
                },
                {
                  name: "Drobo",
                  models: [
                    { type: "NAS", name: "5N2" },
                    { type: "NAS", name: "5D3" }
                  ]
                },
                {
                  name: "Buffalo",
                  models: [
                    { type: "NAS", name: "TeraStation" },
                    { type: "NAS", name: "LinkStation" }
                  ]
                }
              ]} />
              </TabsContent>

              {/* Industrial / Rugged / Special Use */}
              <TabsContent value="industrial" className="mt-6">
                <div className="text-center mb-6">
                  <h3 style={{ color: "#1cfcfc" }} className="text-2xl font-bold mb-2">
                    🏭 Industrial / Rugged / Special Use
                  </h3>
                </div>
                <InteractiveBrands brands={[
                {
                  name: "Advantech",
                  models: [
                    { type: "Industrial PC", name: "UNO Series" },
                    { type: "Embedded", name: "ARK Series" }
                  ]
                },
                {
                  name: "Siemens",
                  models: [
                    { type: "Switch", name: "RUGGEDCOM RS900" },
                    { type: "Router", name: "RUGGEDCOM RX1500" }
                  ]
                },
                {
                  name: "Moxa",
                  models: [
                    { type: "Switch", name: "EDS-518E" },
                    { type: "AP", name: "AWK-3131A" }
                  ]
                },
                {
                  name: "Cisco",
                  models: [
                    { type: "Industrial", name: "IE Series Switches" },
                    { type: "Industrial", name: "IR Series Routers" }
                  ]
                },
                {
                  name: "Allied Telesis",
                  models: [
                    { type: "Industrial", name: "AT-x930" }
                  ]
                },
                {
                  name: "Schneider Electric",
                  models: [
                    { type: "Industrial", name: "Modicon Series" }
                  ]
                }
              ]} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="glass-neon-active p-8 rounded-2xl">
              <p style={{ color: "#eceded" }} className="opacity-75 mb-4 text-lg">
                Don't see the brand you're looking for?
              </p>
              <p style={{ color: "#33cccc" }} className="font-semibold text-xl mb-2">
                We can source virtually any network hardware brand
              </p>
              <p style={{ color: "#6b7e85" }} className="text-sm">
                Contact us to check availability for your specific requirements
              </p>
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
