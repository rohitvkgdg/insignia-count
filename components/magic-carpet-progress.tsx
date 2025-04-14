"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MagicCarpetProgressProps {
  targetDate: Date
}

export function MagicCarpetProgress({ targetDate }: MagicCarpetProgressProps) {
  const [progress, setProgress] = useState(0)
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    // Calculate progress based on time remaining
    const calculateProgress = () => {
      const now = new Date()
      const totalDuration = targetDate.getTime() - now.getTime()

      // Calculate days left
      const days = Math.ceil(totalDuration / (1000 * 60 * 60 * 24))
      setDaysLeft(days)

      // For progress bar - assuming we start 100 days before the event
      const startDate = new Date(targetDate)
      startDate.setDate(startDate.getDate() - 100)

      const elapsed = now.getTime() - startDate.getTime()
      const totalPeriod = targetDate.getTime() - startDate.getTime()
      const newProgress = Math.min(Math.max(elapsed / totalPeriod, 0), 1)
      setProgress(newProgress)
    }

    calculateProgress()
    const interval = setInterval(calculateProgress, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="relative">
      <div className="mb-6 flex justify-between text-sm text-sand/70">
        <div className="flex flex-col items-center">
          <div className="h-1 w-8 bg-gradient-to-r from-gold/80 to-gold/20 rounded-full"></div>
          <span className="mt-2">Journey Begins</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-1 w-8 bg-gradient-to-r from-gold/20 to-gold/80 rounded-full"></div>
          <span className="mt-2">16 May 2025</span>
        </div>
      </div>

      <div className="relative h-20">
        {/* Glowing path */}
        <div
          className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gold/10"
          style={{ boxShadow: "0 0 10px rgba(212,175,55,0.2)" }}
        />

        {/* Progress bar */}
        <motion.div
          className="absolute inset-y-0 left-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-gold/80 to-gold/40 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ boxShadow: "0 0 10px rgba(212,175,55,0.3)" }}
        />

        {/* Magic carpet */}
        <motion.div
          className="absolute top-0 -translate-x-1/2"
          style={{ left: `${progress * 100}%` }}
          initial={{ y: 20, rotate: -5 }}
          animate={{
            y: [0, -8, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
            rotate: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" },
          }}
        >
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="carpetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B8860B" stopOpacity="0.6" />
              </linearGradient>
              <filter id="carpetGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <path
              d="M5 15C5 15 15 5 30 5C45 5 55 15 55 15C55 15 45 25 30 25C15 25 5 15 5 15Z"
              fill="url(#carpetGradient)"
              fillOpacity="0.3"
              stroke="url(#carpetGradient)"
              strokeWidth="1.5"
              filter="url(#carpetGlow)"
            />
            <path
              d="M10 15C10 15 18 10 30 10C42 10 50 15 50 15"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <path d="M15 15C15 15 20 12 30 12C40 12 45 15 45 15" stroke="#D4AF37" strokeWidth="1" />

            {/* Add a small figure sitting on the carpet */}
            <circle cx="30" cy="12" r="3" fill="#0A1929" stroke="#D4AF37" strokeWidth="0.5" />
            <line x1="30" y1="15" x2="30" y2="20" stroke="#D4AF37" strokeWidth="0.5" />
            <line x1="27" y1="17" x2="33" y2="17" stroke="#D4AF37" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* Start point */}
        <div
          className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gold bg-midnight"
          style={{ boxShadow: "0 0 10px rgba(212,175,55,0.3)" }}
        />

        {/* End point */}
        <div
          className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gold bg-midnight"
          style={{ boxShadow: "0 0 10px rgba(212,175,55,0.3)" }}
        />
      </div>

      {/* Days counter */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center rounded-full border border-gold/30 bg-midnight/50 px-4 py-2">
          <span className="font-inter text-xl text-gold">{daysLeft}</span>
          <span className="ml-2 text-sm text-sand/70">days remaining</span>
        </div>
      </div>
    </div>
  )
}
