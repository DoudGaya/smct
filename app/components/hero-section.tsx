"use client"


import Link from "next/link"
import bannerImage from '@/app/assets/images/banner.png'

interface HeroSectionProps {
  headline: string
  subheadline: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  fullHeight?: boolean
}



export default function HeroSection({
  headline,
  subheadline,
  description,
  primaryCta,
  secondaryCta,
  fullHeight = true,
}: HeroSectionProps) {





return (
    <section
      style={{
          backgroundImage: `url(${bannerImage.src})`
      }}
      className={`relative w-full ${
        fullHeight ? "min-h-screen flex backdrop-blur-md items-center bg-cover bg-center" : "min-h-[60vh] flex items-center"
      } overflow-hidden bg-no-repeat bg-cover bg-black/50 bg-blend-overlay `}
    >

      {/* Decorative background elements */}     
      <div className="mx-auto max-w-7xl text-white px-6 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-6 inline-block">
            Welcome to Smart City Tech
          </p>

          
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold tracking-tight mb-6 leading-tight">
            {headline}
          </h1>


          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
          {subheadline}
          </p>

          {description && (
            <p className="text-lg text-white mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="px-8 py-3 text-gray-100 rounded-lg bg-accent font-semibold hover:bg-accent/90 transition-all hover:shadow-lg inline-block text-center"
              >
                {primaryCta.text}
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-all inline-block text-center"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
