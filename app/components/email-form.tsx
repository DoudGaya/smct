"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EmailForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
      }
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="bg-secondary/70 border-border border placeholder:text-foreground/50 text-foreground focus-visible:bg-secondary focus-visible:border-accent"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
      >
        {status === "loading" && "Subscribing..."}
        {status === "idle" && "Get Early Access"}
        {status === "success" && "✓ Subscribed!"}
        {status === "error" && "Please try again"}
      </Button>

      {status === "success" && (
        <p className="text-xs text-accent text-center">Check your email for exclusive updates</p>
      )}
    </form>
  )
}
