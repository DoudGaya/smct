"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import HeroSection from "@/app/components/hero-section"
import agri from '@/app/assets/images/agri.jpg'
import estate from '@/app/assets/images/realestate1.jpg'
import solar from '@/app/assets/images/solar.jpg'
import interior from '@/app/assets/images/realestate/estate-3.png'
import tech from '@/app/assets/images/tech-suppport.jpg'
import cctv from '@/app/assets/images/cctv-security-camera.jpg'
import {
  HomeIcon,
  LightningBoltIcon,
  RowsIcon,
  UpdateIcon,
  RocketIcon,
  CheckCircledIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    {
      id: "property",
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Real Estate & Property Management",
      image: estate,
      subtitle: "Comprehensive property solutions",
      description:
        "We offer comprehensive services across all ramifications of the property sector, including professional maintenance, land development, complete sales and purchase services, and expert estate management.",
      features: [
        "Property Maintenance & Repair",
        "Land Development",
        "Estate & Property Management",
        "Real Estate Agency Services",
        "Professional Design Services",
      ],
      keywords: "Property Maintenance, Land Development, Real Estate Agents",
    },
    {
      id: "design",
      icon: <RocketIcon className="w-8 h-8" />,
      title: "Interior & Exterior Design & Furnishing",
      image: interior,
      subtitle: "Transform spaces with expert design",
      description:
        "Our team specializes in transforming spaces through expert interior and exterior decoration. We handle complete decorating and rehabilitation of any premises including shops, hotels, banks, and offices.",
      features: [
        "Interior Decoration",
        "Exterior Decoration",
        "Property Rehabilitation",
        "Soft Furnishing",
        "Decorative Accessories & Ornaments",
      ],
      keywords: "Interior Decoration, Exterior Design, Property Rehabilitation",
    },
    {
      id: "engineering",
      icon: <LightningBoltIcon className="w-8 h-8" />,
      title: "Engineering, Energy & Security Solutions",
      image: solar,
      subtitle: "Critical infrastructure & safety systems",
      description:
        "We provide critical infrastructure solutions through our engineering division, focusing on electrical engineering and installation of solar energy systems, professional street lighting, and trusted electronic security services.",
      features: [
        "Electrical Engineering",
        "Solar Energy System Installation",
        "Street Lighting Solutions",
        "CCTV Camera Installation",
        "Electronic Security & Surveillance",
      ],
      keywords: "Electrical Engineering, Solar Energy, CCTV Cameras, Security",
    },
    {
      id: "ict",
      icon: <UpdateIcon className="w-8 h-8" />,
      image: tech,
      title: "Telecommunications & ICT Services",
      subtitle: "Digital transformation solutions",
      description:
        "We are at the forefront of the digital economy, offering comprehensive telecommunication services and installation of essential communication equipment with expertise in software development and web solutions.",
      features: [
        "Telecommunication Services",
        "Software Development",
        "Networking & Installation",
        "Web Solutions & E-commerce",
        "Information Systems Solutions",
      ],
      keywords: "Web Solutions, Software Development, ICT Services, Networking",
    },
    {
      id: "commercial",
      icon: <CheckCircledIcon className="w-8 h-8" />,
      title: "Commercial Agency & Sales",
      subtitle: "Business facilitation & trading",
      image: cctv,
      description:
        "As a reliable property agent and business facilitator, we carry on the business of sale and purchase of machineries, commodities, and serve as agents for buying, selling, letting, or hiring assets.",
      features: [
        "Property Agency Services",
        "Machinery Sales & Purchase",
        "Commodity Trading",
        "Asset Letting & Hiring",
        "Logistical Support",
      ],
      keywords: "Property Agent, Machinery Sales, Commodity Trading, Asset Letting",
    },
    {
      id: "agro",
      icon: <RowsIcon className="w-8 h-8" />,
      title: "Agro-Allied Services",
      image: agri,
      subtitle: "Sustainable agriculture & food security",
      description:
        "Committed to food security and sustainable development, we are involved in mechanized farming, poultry farming, and livestock breeding with expertise in processing and marketing agricultural produce.",
      features: [
        "Mechanized Farming",
        "Poultry Farming",
        "Livestock Breeding",
        "Agricultural Produce Marketing",
        "Agricultural Implements Trading",
      ],
      keywords: "Agro-Allied, Mechanized Farming, Livestock, Agricultural Produce",
    },
  ]

  return (
    <main className="min-h-screen bg-background">


      {/* Hero Section */}
      <HeroSection
        headline="Comprehensive Professional Services"
        subheadline="From property to technology to sustainability we deliver integrated solutions across vital sectors."
        fullHeight={false}
      />

      {/* Services Grid Overview */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group p-6 bg-secondary/40 border-y border-border hover:border-accent hover:bg-secondary/60 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                        Service {index + 1}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-foreground">Key Offerings</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircledIcon className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
                  >
                    Learn More About This Service
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual Placeholder */}
                <div className="min-h-80 bg-linear-to-br from-accent/10 to-accent/5 rounded-xl border border-border/40 flex items-center justify-center">
                 <Image src={service.image} alt={service.title} className="rounded-xl object-cover w-full h-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-10 max-w-2xl mx-auto">
            Let's discuss which services best fit your needs and how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent-foreground text-accent font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Get in Touch Today
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
