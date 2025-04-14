"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Instagram, Twitter, Facebook, Youtube, Send, Calendar, MapPin, Clock } from "lucide-react"
import BlurText from "@/components/ui/BlurText/BlurText"
import ClickSpark from "@/components/ui/ClickSpark/ClickSpark"
import Image from "next/image"
import { LanternIcon } from "@/components/lantern-icon"
import { ParticleBackground } from "@/components/particle-background"
import { ModernCountdown } from "@/components/modern-countdown"
import { useWindowSize } from "@/hooks/use-window-size"
import ScrollFloat from "@/components/ui/ScrollFloat/ScrollFloat"
import CircularGallery from "@/components/ui/CircularGallery/CircularGallery"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const { width } = useWindowSize()

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300])
  const midgroundY = useTransform(scrollY, [0, 1000], [0, 150])
  const foregroundY = useTransform(scrollY, [0, 1000], [0, 50])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Calculate festival date - May 16, 2025
  const festDate = new Date("2025-05-16T00:00:00")

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-sand">
      <ClickSpark
        sparkColor="#D4AF37"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        easing="ease-out"
        extraScale={1.0}
      >
        {/* Background particles */}
        <ParticleBackground />

        {/* Loading screen */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-midnight"
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Image src={"/logo.png"} alt="" width={50} height={50} className="mx-auto h-24 w-24 text-gold" />
                <motion.h1
                  className="mt-4 font-inter text-3xl font-bold text-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  INSIGNIA'25

                </motion.h1>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/stars-bg.svg')",
              y: backgroundY,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[40vh] bg-contain bg-bottom bg-repeat-x"
            style={{
              backgroundImage: "url('/desert-far.svg')",
              y: midgroundY,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[30vh] bg-contain bg-bottom bg-repeat-x"
            style={{
              backgroundImage: "url('/desert-near.svg')",
              y: foregroundY,
            }}
          />

          {/* Animated camels */}
          <motion.div
            className="absolute bottom-[10vh] left-[10%] h-20 w-32"
            initial={{ x: -100 }}
            animate={{ x: width ? width + 100 : 0 }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Image src="/camel-caravan.svg" alt="" fill className="object-contain" />
          </motion.div>

          <motion.div
            className="absolute bottom-[12vh] left-[30%] h-16 w-24"
            initial={{ x: -100 }}
            animate={{ x: width ? width + 100 : 0 }}
            transition={{
              duration: 80,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 10,
            }}
          >
            <Image src="/camel-silhouette.svg" alt="" fill className="object-contain opacity-70" />
          </motion.div>
        </div>

        {/* Floating lanterns */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[10%] top-[15%]"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <LanternIcon className="h-16 w-16 text-gold opacity-80" />
          </motion.div>
          <motion.div
            className="absolute right-[15%] top-[25%]"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 7,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <LanternIcon className="h-12 w-12 text-gold opacity-60" />
          </motion.div>
          <motion.div
            className="absolute left-[25%] top-[40%]"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <LanternIcon className="h-10 w-10 text-gold opacity-70" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="container mx-auto flex items-center justify-between p-4">
              <div className="flex items-center">
                <Image src={"/logo.png"} alt="" width={50} height={50} className="h-12 w-12" />
              </div>

            </div>
          </motion.header>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-40 text-center md:py-64">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="font-inter py-4 text-5xl font-bold text-transparent md:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #D4AF37 0%, #FFDF00 25%, #D4AF37 50%, #B8860B 75%, #D4AF37 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  animation: "shimmer 8s ease-in-out infinite",
                  textShadow: "0 0 20px rgba(212,175,55,0.3)",
                }}
              >
                INSIGNIA'25
              </motion.h1>

              <motion.div
                className="relative mx-auto mt-5 h-0.5 w-32 bg-gold/50"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 128, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-gold"
                  animate={{ left: "100%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>

              <motion.div
                className="mx-auto mt-4 max-w-2xl font-display text-lg text-sand/80 pointer-events-none select-none flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <BlurText
                  text="A Festival of Art, Culture, and Innovation"
                  delay={50}
                  animateBy="words"
                  direction="bottom"
                  className="mx-auto mt-2 max-w-2xl md:text-2xl text:lg mb-8 text-sand/90 pointer-events-none select-none text-center"
                />
              </motion.div>

              <motion.div
                className="mx-auto flex flex-wrap items-center justify-center gap-4 text-sand/80 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
              >
                <div className="mt-4 text-center w-full">
                  <motion.div
                    className="inline-block rounded-full bg-gradient-to-r from-gold/20 to-gold/5 px-4 py-2 text-sm text-gold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Calendar className="inline-block mr-1 w-4" />
                    <span className="font-inter">May 16 - May 17, 2025</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="mx-auto mt-10 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.9 }}
              >
                <ModernCountdown targetDate={festDate} />
              </motion.div>
              <div className="mt-8 text-center">
                <motion.div
                  className="inline-block rounded-full bg-gradient-to-r from-gold/20 to-gold/5 px-4 py-2 text-sm text-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <MapPin className="inline-block mr-2 w-4" />
                  <span className="font-inter">SDM College of Engineering & Technology, Dharwad</span>
                </motion.div>
              </div>
            </motion.div>
          </section>



          {/* Festival Teaser */}
          <section className="container mx-0 min-w-full px-0 py-20">
            <div className="text-center">
              <motion.h1
                className="font-inter font-6xl text-gold font-bold md:text-7xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  textShadow: "0 0 15px rgba(212,175,55,0.3)",
                }}
              >
                <ScrollFloat
                  animationDuration={3}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                >
                  HIGHLIGHTS
                </ScrollFloat>
              </motion.h1>
              <motion.div
                className="mx-auto mt-2 h-0.5 w-40 bg-gradient-to-r from-gold/80 to-gold/20"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className="mx-4 mt-4 md:mx-auto max-w-2xl font-display text-sm text-sand/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Embark on a journey through our enchanted oasis of creativity and innovation
              </motion.p>
              <div className="relative flex flex-wrap items-center justify-center gap-4 h-[600px] w-screen ">
                <CircularGallery 
                  items={[
                    { image: "/insignia-pics/event1.jpg", text: "" },
                    { image: "/insignia-pics/event2.jpg", text: "" },
                    { image: "/insignia-pics/event3.jpg", text: "" },
                    { image: "/insignia-pics/event4.jpg", text: "" },
                    { image: "/insignia-pics/event5.jpg", text: "" },
                    { image: "/insignia-pics/event6.jpg", text: "" },
                    { image: "/insignia-pics/event7.jpg", text: "" },
                    { image: "/insignia-pics/event8.jpg", text: "" },
                    { image: "/insignia-pics/event9.jpg", text: "" },
                    { image: "/insignia-pics/event10.jpg", text: "" },
                    { image: "/insignia-pics/event11.jpg", text: "" },
                    { image: "/insignia-pics/event12.jpg", text: "" }
                  ]}
                  bend={4} 
                  textColor="#ffffff" 
                  borderRadius={0.1} 
                >
                </CircularGallery>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative mt-10 overflow-hidden border-t border-gold/20 bg-midnight/80 py-10">
            <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover opacity-30" />
            <div className="absolute inset-0 bg-[url('/arabic-pattern.svg')] bg-[length:200px_200px] bg-repeat opacity-5" />

            <div className="container relative z-10 mx-auto px-4">
              <div className="grid gap-12 mx-10 md:grid-cols-2">
                <div>
                  <h4 className="font-inter text-2xl text-gold">Contact</h4>
                  <ul className="mt-4 text-sm space-y-2">
                    <li className="text-sand/70">Email: insigniaofficial@gmail.com</li>
                    <li className="text-sand/70">Phone: +91 98765 43210</li>
                    <li className="text-sand/70">Address: SDM College of Engineering & Technology, Dhavalageri, Dharwad</li>
                  </ul>
                </div>
                <div className="w-full h-[300px] overflow-hidden rounded-lg border border-gold/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.9983227734547!2d75.01206347634312!3d15.430641885160092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d2f55d8d3f33%3A0x6f5b1e611213bba7!2sShri%20Dharmasthala%20Manjunatheshwara%20College%20of%20Engineering%20and%20Technology.!5e0!3m2!1sen!2sin!4v1744394379996!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SDM College of Engineering & Technology Location"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-between border-t border-gold/20 pt-8 md:flex-row">
                <p className="text-sm text-sand/50">© {new Date().getFullYear()} Insignia. All rights reserved.</p>

                <div className="mt-4 flex space-x-4 md:mt-0">
                  <motion.a
                    href="https://www.instagram.com/officialinsignia/"
                    target="_blank"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-midnight/50 text-gold"
                    whileHover={{ y: -5 }}
                    style={{
                      boxShadow: "0 5px 15px -5px rgba(212,175,55,0.3)",
                    }}
                  >
                    <Instagram className="h-5 w-5" />
                    <motion.span
                      className="absolute -bottom-1 h-1 w-1 rounded-full bg-gold"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/insignia.sdmcet/"
                    target="_blank"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-midnight/50 text-gold"
                    whileHover={{ y: -5 }}
                    style={{
                      boxShadow: "0 5px 15px -5px rgba(212,175,55,0.3)",
                    }}
                  >
                    <Facebook className="h-5 w-5" />
                    <motion.span
                      className="absolute -bottom-1 h-1 w-1 rounded-full bg-gold"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@InsigniaOfficial"
                    target="_blank"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-midnight/50 text-gold"
                    whileHover={{ y: -5 }}
                    style={{
                      boxShadow: "0 5px 15px -5px rgba(212,175,55,0.3)",
                    }}
                  >
                    <Youtube className="h-5 w-5" />
                    <motion.span
                      className="absolute -bottom-1 h-1 w-1 rounded-full bg-gold"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </ClickSpark>
    </div>
  )
}
