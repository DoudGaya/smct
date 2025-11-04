"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTime = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl md:text-4xl font-light mb-2 text-muted animate-pulse">00</div>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Unit</p>
          </div>
        ))}
      </div>
    )
  }

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-6">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="text-4xl md:text-6xl font-bold tracking-tight text-accent mb-3 tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </div>
          <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-wider font-medium">{unit.label}</p>
        </div>
      ))}
    </div>
  )
}
