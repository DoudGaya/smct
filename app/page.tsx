"use client"

import { useEffect, useState } from "react"
import CountdownTimer from "./components/countdown-timer"
import EmailForm from "./components/email-form"
import ThemeSwitcher from "./components/theme-switcher"

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent"></div>
          <span className="text-lg font-semibold tracking-tight">Enterprise</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <a
            href="mailto:contact@enterprise.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 py-12 md:py-0">
        {/* Subtitle */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">Launching Soon</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">
            Professional Services Platform
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-balance leading-relaxed">
            Integrated solutions for property development, modern design, sustainable energy, advanced technology, and
            strategic commerce.
          </p>
        </div>

        {/* Countdown */}
        <div className="my-12 md:my-16">
          <CountdownTimer targetDate={new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)} />
        </div>

        {/* Email Form */}
        <div className="w-full max-w-md">
          <EmailForm />
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-border mt-12 md:mt-16"></div>

        {/* Footer Text */}
        <p className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase mt-8">
          Be among the first to access our platform
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </main>
  )
}
