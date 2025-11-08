"use client"

import { useEffect, useState } from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import HeroSection from "@/app/components/hero-section"
import { 
  EnvelopeOpenIcon, 
  MobileIcon, 
  DimensionsIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
      setTimeout(() => setStatus("idle"), 3000)
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  if (!mounted) return null

  const contactInfo = [
    {
      icon: <DimensionsIcon className="w-6 h-6" />,
      label: "Address",
      value: "[Your Location]",
      href: "#",
    },
    {
      icon: <MobileIcon className="w-6 h-6" />,
      label: "Phone",
      value: "[Your Phone Number]",
      href: "tel:[phone]",
    },
    {
      icon: <EnvelopeOpenIcon className="w-6 h-6" />,
      label: "Email",
      value: "[Your Email]",
      href: "mailto:[email]",
    },
  ]

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <HeroSection
        headline="Partner With Us for Your Next Project"
        subheadline="Let's build integrated solutions together. Get in touch with our team of experts today."
        fullHeight={false}
      />

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-8">Get in Touch</h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-accent shrink-0">{info.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <a
                        href={info.href}
                        className="font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-80 bg-linear-to-br from-accent/10 to-accent/5 rounded-xl border border-border/40 flex items-center justify-center">
                <div className="text-center">
                  <DimensionsIcon className="w-12 h-12 text-accent/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">Map embed location</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInLogoIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterLogoIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="bg-secondary/40 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="bg-secondary/40 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="bg-secondary/40 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="bg-secondary/40 border-border placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/40 border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
                  >
                    <option value="">Select a subject...</option>
                    <option value="property">Property Services</option>
                    <option value="engineering">Engineering Solutions</option>
                    <option value="ict">ICT Services</option>
                    <option value="agro">Agro-Allied Services</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/40 border border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-muted-foreground">
                  Your information is kept confidential and will only be used to respond to your inquiry.
                  Read our <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
                </p>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  {status === "loading" && "Sending..."}
                  {status === "idle" && "Send Message"}
                  {status === "success" && "✓ Message Sent!"}
                  {status === "error" && "Error - Please Try Again"}
                </Button>

                {/* Success Message */}
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent text-accent">
                    <p className="text-sm font-medium">
                      Thank you for your message! We'll be in touch soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Typical Response Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
