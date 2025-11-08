"use client"

import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  highlighted?: boolean
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  highlighted = false,
}: FeatureCardProps) {
  return (
    <Link href={href}>
      <div
        className={`group h-full p-8  transition-all duration-300 cursor-pointer
          ${
            highlighted
              ? "bg-accent/10 border-y-2 border-accent hover:shadow-lg hover:shadow-accent/20"
              : "bg-secondary/40 border-y border-border hover:border-accent hover:bg-secondary/60 hover:shadow-md"
          }
        `}
      >
        {/* Icon */}
        <div className="mb-6">
          <div
            className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all ${
              highlighted
                ? "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                : "bg-accent/10 text-accent group-hover:bg-accent/20"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Link with Arrow */}
        <div className="flex items-center text-accent font-medium text-sm gap-2 group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
