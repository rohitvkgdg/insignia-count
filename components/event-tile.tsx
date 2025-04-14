"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface EventTileProps {
  title: string
  icon: string
  description: string
  delay?: number
}

export function EventTile({ title, icon, description, delay = 0 }: EventTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-b from-midnight/80 to-sapphire/30 p-6 transition-all hover:border-gold/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 10px 30px -10px rgba(212,175,55,0.3), 0 0 0 1px rgba(212,175,55,0.2)"
          : "0 10px 30px -15px rgba(0,0,0,0.3)",
      }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

      {/* Corner ornaments */}
      <div className="absolute -right-3 -top-3 h-12 w-12 opacity-70">
        <img src="/corner-ornament.svg" alt="" className="rotate-0" />
      </div>
      <div className="absolute -left-3 -top-3 h-12 w-12 opacity-70">
        <img src="/corner-ornament.svg" alt="" className="rotate-90" />
      </div>
      <div className="absolute -right-3 -bottom-3 h-12 w-12 opacity-70">
        <img src="/corner-ornament.svg" alt="" className="rotate-270" />
      </div>
      <div className="absolute -left-3 -bottom-3 h-12 w-12 opacity-70">
        <img src="/corner-ornament.svg" alt="" className="rotate-180" />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="/arabic-pattern.svg" alt="" className="h-full w-full object-cover" />
      </div>

      {/* Camel silhouette */}
      <motion.div
        className="absolute bottom-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        animate={isHovered ? { x: [-5, 5, -5], y: [0, -2, 0] } : {}}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <img src="/camel-silhouette.svg" alt="" className="h-20 w-20" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <motion.div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/5 text-2xl text-gold"
          style={{
            boxShadow: "0 0 20px rgba(212,175,55,0.15)",
          }}
          animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        <h3 className="font-inter text-2xl text-gold">{title}</h3>

        <motion.div
          className="mt-2 h-0.5 w-16 bg-gradient-to-r from-gold/80 to-gold/10"
          animate={isHovered ? { width: ["4rem", "5rem", "4rem"] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <p className="mt-4 text-sand/70">{description}</p>

        <motion.div
          className="mt-6 inline-flex items-center text-sm text-gold"
          whileHover={{ x: 5 }}
          animate={isHovered ? { x: [0, 3, 0] } : {}}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="font-inter">Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold/50 to-emerald/50"
        animate={isHovered ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
