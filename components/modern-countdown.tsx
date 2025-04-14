"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface ModernCountdownProps {
  targetDate: Date
}

export function ModernCountdown({ targetDate }: ModernCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

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
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num.toString())

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="relative overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-b from-midnight/90 to-sapphire/20 p-4 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 15px rgba(212,175,55,0.1) inset",
            }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <img src="/arabic-pattern.svg" alt="" className="h-full w-full object-cover" />
            </div>

            {/* Corner ornaments */}
            <div className="absolute -right-3 -top-3 h-12 w-12 opacity-30">
              <img src="/corner-ornament.svg" alt="" className="rotate-0" />
            </div>
            <div className="absolute -left-3 -top-3 h-12 w-12 opacity-30">
              <img src="/corner-ornament.svg" alt="" className="rotate-90" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="relative">
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-inter text-6xl font-bold text-gold md:text-8xl lg:text-7xl"
                  style={{
                    textShadow: "0 0 10px rgba(212,175,55,0.3)",
                  }}
                >
                  {formatNumber(item.value)}
                </motion.div>
                <div className="mt-1 text-center text-xs text-sand/60 md:text-sm">{item.label}</div>
              </div>
            </div>

            {/* Bottom border glow */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
