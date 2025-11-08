"use client"

import { useEffect, useState } from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import HeroSection from "@/app/components/hero-section"
import { 
  CheckCircledIcon,
  LightningBoltIcon,
  RocketIcon,
  TargetIcon,
} from "@radix-ui/react-icons"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const values = [
    {
      icon: <CheckCircledIcon className="w-6 h-6" />,
      title: "Professionalism",
      description: "Excellence in every project and interaction",
    },
    {
      icon: <LightningBoltIcon className="w-6 h-6" />,
      title: "Innovation",
      description: "Forward-thinking solutions for complex challenges",
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices",
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Client Success",
      description: "Your goals are our ultimate measure of success",
    },
  ]

  const sectors = [
    {
      number: "1",
      title: "Real Estate & Infrastructure",
      description: "Development, sales, management, and professional property decoration services.",
      points: [
        "Property Maintenance",
        "Land Development",
        "Estate Management",
        "Sales & Purchase Services",
      ],
    },
    {
      number: "2",
      title: "Engineering & Security",
      description: "Critical infrastructure solutions and electronic security systems.",
      points: [
        "Electrical Engineering",
        "Solar Energy Installation",
        "Street Lighting Systems",
        "CCTV & Surveillance",
      ],
    },
    {
      number: "3",
      title: "Information Technology",
      description: "Digital transformation and comprehensive ICT services.",
      points: [
        "Telecommunication Services",
        "Software Development",
        "Networking & Installation",
        "Web Solutions & E-commerce",
      ],
    },
    {
      number: "4",
      title: "Sustainable Ventures",
      description: "Agricultural innovation and commodity trading.",
      points: [
        "Mechanized Farming",
        "Livestock Breeding",
        "Agricultural Produce Marketing",
        "Commercial Commodities",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <HeroSection
        headline="Vision, Expertise, and Comprehensive Scope"
        subheadline="Established to be your single, reliable source for professional solutions across critical industries."
        fullHeight={false}
      />

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="p-8 rounded-xl bg-secondary/40 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <TargetIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To execute projects with professionalism, innovation, and integrity. We aim to be the industry benchmark for delivering high-value outcomes in complex, multi-sector environments while maintaining a client-centric approach.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-xl bg-secondary/40 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <RocketIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the single, reliable source for diverse professional needs operating at the intersection of critical industries. Our strength lies in our comprehensive, integrated scope, ensuring efficiency and synergy across every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Our Principles
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Core Values That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-lg bg-background border border-border/40">
                <div className="flex items-start gap-4">
                  <div className="text-accent shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Sectors */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Key Operational Sectors
            </h2>
          </div>

          <div className="space-y-12">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:[direction:rtl]" : ""
                }`}
              >
                {/* Content */}
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-4">
                    <span className="font-bold text-lg text-accent">{sector.number}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  <ul className="space-y-3">
                    {sector.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircledIcon className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground/80 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder */}
                <div className="min-h-80 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-border/40 flex items-center justify-center">
                  <div className="text-center">
                    <LightningBoltIcon className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">Visual content placeholder</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Our Commitment to You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are committed to delivering services that enhance value, promote sustainability, and ensure long-term client success. We handle the complex interplay of multiple sectors so you can focus on your core business.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
