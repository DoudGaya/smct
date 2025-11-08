"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"
import HeroSection from "./components/hero-section"
import FeatureCard from "./components/feature-card"
import { 
  HomeIcon, 
  LightningBoltIcon, 
  RowsIcon,
  CheckCircledIcon,
  ArrowRightIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Property & Design",
      description: "Full-spectrum property maintenance, land development, and expert interior/exterior design.",
      href: "/services#property",
    },
    {
      icon: <LightningBoltIcon className="w-8 h-8" />,
      title: "Engineering & Tech",
      description: "Electrical engineering, solar energy systems, CCTV surveillance, and IT solutions.",
      href: "/services#engineering",
      highlighted: true,
    },
    {
      icon: <RowsIcon className="w-8 h-8" />,
      title: "Sustainable Business",
      description: "Mechanized farming, livestock breeding, and commercial commodity trading.",
      href: "/services#agro",
    },
  ]

  const benefits = [
    {
      icon: <CheckCircledIcon className="w-6 h-6" />,
      title: "Integrated Approach",
      description: "Seamless coordination across all service verticals",
    },
    {
      icon: <CheckCircledIcon className="w-6 h-6" />,
      title: "Professional Excellence",
      description: "Industry-leading expertise and quality standards",
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Innovation First",
      description: "Cutting-edge solutions for modern challenges",
    },
    {
      icon: <CheckCircledIcon className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our ultimate priority",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* <Header /> */}

      {/* Hero Section */}
      <HeroSection
        headline="Integrated Solutions for a Modern World"
        subheadline="Your trusted partner in Property, Technology, Engineering, and Sustainable Enterprise."
        description="We deliver comprehensive, professional services across multiple vital sectors—from property development to cutting-edge engineering, advanced ICT, and sustainable agro-allied ventures."
        primaryCta={{ text: "Explore Our Services", href: "/services" }}
        secondaryCta={{ text: "Learn More", href: "/about" }}
        fullHeight={true}
      />

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Solutions Across Multiple Sectors
            </h2>
            <p className="text-lg text-muted-foreground">
              We operate at the intersection of critical industries, ensuring efficiency and synergy across every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Built on Integrity and Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-accent shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-10 max-w-2xl mx-auto">
            Let's discuss your unique needs in Property Development, Engineering, ICT, or Sustainable Agriculture. Our team is prepared to offer tailored solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent-foreground text-accent font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
