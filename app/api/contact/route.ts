import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
}

// Configure your email service here
// For Gmail, you'll need to use an App Password: https://support.google.com/accounts/answer/185833
// For other services, update the transporter configuration accordingly

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Create HTML email content
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #1a7c4f; color: white; padding: 20px; margin-bottom: 20px; }
            .container { max-width: 600px; margin: 0 auto; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a7c4f; }
            .value { margin-top: 5px; padding: 10px; background-color: #f5f5f5; border-radius: 4px; }
            .footer { border-top: 1px solid #ddd; margin-top: 20px; padding-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>From SmartCity Tech Website</p>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${formData.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
            </div>
            
            ${formData.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
            </div>
            ` : ""}
            
            ${formData.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${formData.company}</div>
            </div>
            ` : ""}
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${formData.subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value" style="white-space: pre-wrap;">${formData.message}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your SmartCity Tech website contact form.</p>
              <p>Please reply directly to this email or contact the sender at ${formData.email}</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Create plain text version
    const textContent = `
New Contact Form Submission
From SmartCity Tech Website

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}
${formData.company ? `Company: ${formData.company}` : ""}
Subject: ${formData.subject}

Message:
${formData.message}

---
This email was sent from your SmartCity Tech website contact form.
Please reply directly to this email or contact the sender at ${formData.email}
    `

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@smartcitytech.ng",
      replyTo: formData.email,
      subject: `New Contact Form: ${formData.subject}`,
      text: textContent,
      html: htmlContent,
    })

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
