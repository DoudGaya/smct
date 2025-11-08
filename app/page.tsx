"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"
import HeroSection from "./components/hero-section"
import FeatureCard from "./components/feature-card"

// Real estate Images
import image1 from '@/app/assets/images/realestate/estate-1.png'
import image2 from '@/app/assets/images/realestate/estate-2.png'
import image3 from '@/app/assets/images/realestate/estate-3.png'
import image4 from '@/app/assets/images/realestate/estate-4.png'

// 


import { 
  HomeIcon, 
  LightningBoltIcon, 
  RowsIcon,
  CheckCircledIcon,
  ArrowRightIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null


  const images = [image1, image4, image2] 

  const services = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Real Estate & Property",
      description: "Professional property maintenance, land development, estate management, and expert interior/exterior design services tailored to your vision.",
      href: "/services#property",
    },
    {
      icon: <LightningBoltIcon className="w-8 h-8" />,
      title: "Engineering & Energy",
      description: "Electrical engineering solutions, solar energy systems, street lighting, CCTV surveillance, and critical infrastructure security.",
      href: "/services#engineering",
      highlighted: true,
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: "ICT & Digital",
      description: "Comprehensive telecommunication services, software development, networking solutions, and e-commerce platforms for digital transformation.",
      href: "/services#ict",
    },
    {
      icon: <RowsIcon className="w-8 h-8" />,
      title: "Sustainable Agriculture",
      description: "Mechanized farming, livestock breeding, agricultural produce marketing, and commodity trading for food security.",
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
            <p className="text-accent dark:text-green-300 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Solutions Across Multiple Sectors
            </h2>
            <p className="text-lg text-muted-foreground">
              We operate at the intersection of critical industries, ensuring efficiency and synergy across every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <p className="text-accent dark:text-green-300 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Built on Integrity and Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-accent dark:text-green-300 shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-accent dark:text-green-300 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
                About SmartCity Tech
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Your Integrated Partner Across Critical Industries
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established to be the single, reliable source for professional solutions, SmartCity Tech operates at the intersection of property development, engineering, information technology, and sustainable agriculture. We bring together expertise across multiple sectors to deliver seamless, integrated solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircledIcon className="w-5 h-5 text-accent dark:text-green-300 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Scope</h4>
                    <p className="text-sm text-muted-foreground">From real estate to renewable energy, we handle the complex interplay of multiple sectors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircledIcon className="w-5 h-5 text-accent dark:text-green-300 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Professional Excellence</h4>
                    <p className="text-sm text-muted-foreground">Guided by professionalism, innovation, and integrity in every project we undertake.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircledIcon className="w-5 h-5 text-accent dark:text-green-300 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Client Success</h4>
                    <p className="text-sm text-muted-foreground">Your goals are our ultimate measure of success—we're committed to your long-term growth.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent dark:text-green-300 font-semibold hover:gap-3 transition-all group"
              >
                Explore Our Story
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Visual Placeholder */}
            <div className="min-h-[400px] my-20 grid gap-2.5 grid-cols-3">
             {
                images.map((img, idx) => (
                  <div key={idx} className={` ${idx === 1 ? ' -mt-20' : ' -mb-20'}`}>
                    <Image src={img} alt="Banner Image" className={` border-y-3 dark:border-white border-black object-cover h-full`} />
                  </div>
                ))
             }
            </div>
          </div>
        </div>
      </section>

      {/* Our Sectors Section */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-accent dark:text-green-300 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Operational Excellence
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              4 Key Sectors, One Unified Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Each sector brings specialized expertise while maintaining seamless integration across our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sector 1 */}
            <div className="p-8 rounded-lg bg-background border border-border/40 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent dark:text-green-300 shrink-0">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Real Estate & Infrastructure</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Property maintenance, land development, estate management, and professional design services that enhance value.
                  </p>
                  <Link href="/services#property" className="text-accent dark:text-green-300 text-sm font-medium hover:underline">
                    View Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="p-8 rounded-lg bg-background border border-border/40 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent dark:text-green-300 shrink-0">
                  <LightningBoltIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Engineering & Security</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Electrical engineering, solar energy systems, street lighting, CCTV surveillance, and critical infrastructure.
                  </p>
                  <Link href="/services#engineering" className="text-accent dark:text-green-300 text-sm font-medium hover:underline">
                    View Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="p-8 rounded-lg bg-background border border-border/40 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent dark:text-green-300 shrink-0">
                  <RocketIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Information Technology</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Telecom services, software development, networking solutions, web platforms, and digital transformation.
                  </p>
                  <Link href="/services#ict" className="text-accent dark:text-green-300 text-sm font-medium hover:underline">
                    View Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="p-8 rounded-lg bg-background border border-border/40 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent dark:text-green-300 shrink-0">
                  <RowsIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Sustainable Ventures</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mechanized farming, livestock breeding, agricultural produce marketing, and commodity trading.
                  </p>
                  <Link href="/services#agro" className="text-accent dark:text-green-300 text-sm font-medium hover:underline">
                    View Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 md:py-24 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-10 max-w-2xl mx-auto">
            Let's discuss your unique needs in Property Development, Engineering, ICT, or Sustainable Agriculture. Our team is prepared to offer tailored solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 bg-accent py-4 rounded-lg  text-white dark:text-green-300 font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
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
