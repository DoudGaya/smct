"use client"

import Link from "next/link"
import Image from "next/image"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import logoLight from '@/public/logo.png'
import logoDark from '@/public/logo-dark.png'

interface HeaderProps {
  onToggleSidebar?: () => void
  theme?: "light" | "dark"
}

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

export default function Header({ onToggleSidebar, theme = "light" }: HeaderProps) {

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center w-full justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={theme === "light" ? logoLight.src : logoDark.src} 
            alt="SmartCity Logo" 
            width={50} 
            height={50} 
          />
          <span className="hidden sm:inline font-semibold text-lg tracking-tight">SMART CITY TECH</span>
        </Link>

        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          aria-label="Open menu"
        >
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>

        {/* Spacer */}
        <div className="flex-1 hidden md:flex" />

        {
          navLinks.map((link) => (
            <Link
              key={link.href} 
              href={link.href}
              className="hidden md:inline-block px-4 py-2 rounded-lg text-foreground/80 hover:bg-accent/10 hover:text-accent transition-all font-medium"
            >
              {link.label}
            </Link>
          ))
        }

        {/* Right Section - Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
