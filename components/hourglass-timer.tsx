"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface HourglassTimerProps {
  targetDate: Date
}

export function HourglassTimer({ targetDate }: HourglassTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [sandLevel, setSandLevel] = useState(100)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })

        // Calculate sand level (100% to 0% as we approach target date)
        const totalDuration = targetDate.getTime() - (now.getTime() - difference)
        const remainingPercentage = (difference / totalDuration) * 100
        setSandLevel(remainingPercentage)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-20">
        {/* Hourglass container with glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full rounded-full bg-gold/5 blur-xl"></div>
        </div>

        <svg viewBox="0 0 100 160" className="relative h-full w-full">
          <defs>
            <linearGradient id="sandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            d="M20,10 L80,10 L80,60 L50,80 L80,100 L80,150 L20,150 L20,100 L50,80 L20,60 Z"
            fill="none"
            stroke="url(#sandGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Top sand */}
          <motion.path
            d="M25,15 L75,15 L75,55 L50,75 L25,55 Z"
            fill="url(#sandGradient)"
            initial={{ opacity: 1 }}
            animate={{ opacity: sandLevel / 100 }}
          />

          {/* Bottom sand */}
          <motion.path
            d="M25,145 L75,145 L75,105 L50,85 L25,105 Z"
            fill="url(#sandGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - sandLevel / 100 }}
          />

          {/* Falling sand particles */}
          <motion.circle
            cx="50"
            cy="80"
            r="1.5"
            fill="#D4AF37"
            animate={{
              y: [0, 20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
          <motion.circle
            cx="48"
            cy="80"
            r="1"
            fill="#D4AF37"
            animate={{
              y: [0, 15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
          <motion.circle
            cx="52"
            cy="80"
            r="1"
            fill="#D4AF37"
            animate={{
              y: [0, 18, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.8,
              delay: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </svg>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 text-center">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Mins" },
          { value: timeLeft.seconds, label: "Secs" },
        ].map((item, index) => (
          <div key={item.label} className="flex flex-col">
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-midnight/80 to-sapphire/30 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 border border-gold/20 rounded-lg"></div>
              <div className="absolute inset-0 bg-[url('/arabic-pattern.svg')] bg-[length:100px_100px] bg-repeat opacity-5"></div>
              <span className="relative z-10 font-inter text-2xl font-bold text-gold">{item.value}</span>
            </div>
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-sand/70">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
