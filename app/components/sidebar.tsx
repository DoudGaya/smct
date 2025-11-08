"use client"

import { useState } from "react"
import Link from "next/link"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Sidebar - Mobile Only */}
      <div
        className={`fixed left-0 top-0 h-full w-72 bg-background border-r border-border/40 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/40">
          <span className="font-semibold text-xl tracking-tight">Menu</span>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-secondary/50 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <Cross1Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onToggle}
              className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-accent/10 hover:text-accent transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-border/40 my-4 mx-4" />

        {/* CTA Button */}
        <div className="p-4">
          <Link
            href="/contact"
            onClick={onToggle}
            className="w-full block px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-center hover:bg-accent/90 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Company Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/40 bg-secondary/30">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Integrated solutions for property, technology, engineering, and sustainable enterprise.
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}
    </>
  )
}
