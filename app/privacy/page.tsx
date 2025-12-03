"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroGeometric } from "@/components/ui/hero-geometric"
import { GravityStarsBackground } from "@/components/ui/gravity-stars-background"
import Link from "next/link"

export default function PrivacyPolicy() {
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
        badge="Legal Information"
        title1="Privacy"
        title2="Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
        className="min-h-[60vh]"
      />

      {/* Privacy Policy Content */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12 rounded-lg space-y-8">
            <div>
              <p style={{ color: "#6b7e85" }} className="text-sm mb-4">
                Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p style={{ color: "#eceded" }} className="leading-relaxed">
                At NAS IT Smart Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>
              <p style={{ color: "#6b7e85" }} className="mb-3 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul style={{ color: "#6b7e85" }} className="list-disc list-inside space-y-2 ml-4">
                <li>Personal information such as name, email address, phone number, and company name</li>
                <li>Business information relevant to your IT requirements</li>
                <li>Website usage data and analytics information</li>
                <li>Communication records when you contact us via email, phone, or contact form</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h2>
              <p style={{ color: "#6b7e85" }} className="mb-3 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul style={{ color: "#6b7e85" }} className="list-disc list-inside space-y-2 ml-4">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process your orders and deliver services</li>
                <li>To improve our website and services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul style={{ color: "#6b7e85" }} className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                4. Data Security
              </h2>
              <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                5. Your Rights
              </h2>
              <p style={{ color: "#6b7e85" }} className="mb-3 leading-relaxed">
                You have the right to:
              </p>
              <ul style={{ color: "#6b7e85" }} className="list-disc list-inside space-y-2 ml-4">
                <li>Access and request a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                7. Third-Party Links
              </h2>
              <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                8. Children's Privacy
              </h2>
              <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p style={{ color: "#6b7e85" }} className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#eceded" }} className="text-2xl font-bold mb-4">
                10. Contact Us
              </h2>
              <p style={{ color: "#6b7e85" }} className="mb-3 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div style={{ color: "#6b7e85" }} className="ml-4 space-y-2">
                <p>
                  <strong style={{ color: "#eceded" }}>Email:</strong> info@nasitssolutions.com
                </p>
                <p>
                  <strong style={{ color: "#eceded" }}>Phone:</strong> +60 16 231 3385
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{ color: "#33cccc" }}
              >
                Contact Us →
              </Link>
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

