import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

// Simple spam protection: check for common spam patterns
function isSpam(message: string): boolean {
  const spamPatterns = [
    /http[s]?:\/\/(?!nasitssolutions\.com)/i, // External links (except own domain)
    /\[url\]/i,
    /\bbuy\s+now\b/i,
    /\blimited\s+time\b/i,
    /\bclick\s+here\b/i,
  ]
  return spamPatterns.some((pattern) => pattern.test(message))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validation = contactSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      )
    }

    const { name, email, company, subject, message } = validation.data

    // Spam protection
    if (isSpam(message)) {
      return NextResponse.json({ error: "Message flagged as spam" }, { status: 400 })
    }

    // Rate limiting check (simple approach - in production, use Redis or similar)
    const rateLimitKey = `contact:${request.ip || "unknown"}`
    // You can implement actual rate limiting here

    // Prepare email content
    const emailContent = `
New Contact Form Submission from NAS IT Smart Solutions Website

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${subject ? `Subject: ${subject}` : ""}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
IP Address: ${request.ip || "Not available"}
    `.trim()

    // TODO: Integrate with email service (Zoho Mail, Resend API, Formspree, etc.)
    // For now, we'll return success and log the data
    // In production, send email using your preferred service:
    // - Resend API: await resend.emails.send({ ... })
    // - Zoho Mail: Use SMTP or Zoho API
    // - Formspree: Use their API endpoint

    console.log("Contact form submission:", {
      name,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending (remove in production)
    // In production, uncomment and configure your email service:
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'contact@nasitssolutions.com',
        to: ['info@nasitssolutions.com', 'sales@nasitssolutions.com'],
        subject: subject || `New Contact: ${name}`,
        text: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email')
    }
    */

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit the form." },
    { status: 200 }
  )
}

