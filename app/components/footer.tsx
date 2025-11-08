"use client"

import Link from "next/link"
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import ThemeSwitcher from "./theme-switcher"
import logo from '@/public/logo.png'
import logoDark from '@/public/logo-dark.png'
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { id: "home", label: "Home", href: "/" },
      { id: "about", label: "About", href: "/about" },
      { id: "services", label: "Services", href: "/services" },
      { id: "contact", label: "Contact", href: "/contact" },
    ],
    legal: [
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "terms", label: "Terms & Conditions", href: "#" },
    ],
  }
                                                                              
  return (
    <footer className="border-t bg-gray-300 dark:bg-black border-border/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="SmartCity Logo" className=" dark:hidden block object-contain object-left h-8" />
              <Image src={logoDark} alt="SmartCity Logo" className=" hidden dark:block object-contain object-left h-8" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Integrated solutions for property, technology, engineering, and sustainable enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
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

          {/* Theme Switcher */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Appearance</h4>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/40 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SmartCity Tech. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with precision. Built with integrity by <a href="http://doudgaya.xyz" className="font-bold hover:underline" target="_blank" rel="noopener noreferrer">DoudGaya</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
