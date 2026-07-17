"use client"

import { motion } from "framer-motion"
import { ArrowRight, MoveRight, Sparkles } from "lucide-react"
import Ticker from "./ticker"

const floats = [
  { label: "Web Dev",    emoji: "🌐", delay: 0,    pos: "top-[18%] right-[8%]" },
  { label: "Mobile App", emoji: "📱", delay: 0.15, pos: "top-[52%] right-[2%]" },
  { label: "AI / ML",   emoji: "🤖", delay: 0.3,  pos: "bottom-[22%] right-[14%]" },
  { label: "UI/UX",     emoji: "🎨", delay: 0.45, pos: "top-[30%] left-[2%] hidden lg:flex" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-16 bg-white"
    >
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-primary/10 via-purple-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/8 via-blue-50 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-50/60 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating service badges */}
      {floats.map(({ label, emoji, delay, pos }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + delay }}
          className={`absolute ${pos} hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-lg shadow-black/5 z-10`}
          style={{ animation: `float ${3.5 + delay}s ease-in-out infinite`, animationDelay: `${delay}s` }}
        >
          <span className="text-lg leading-none">{emoji}</span>
          <span className="text-xs font-bold text-gray-700 whitespace-nowrap">{label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-semibold mb-8"
          >
            <Sparkles size={14} />
            AI-Powered Digital Transformation
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-900 mb-6"
          >
            Build Fast.{" "}
            <span className="brand-gradient-text">Scale Smart.</span>
            <br />
            Deliver Results.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          >
            PRNexGen is a next-generation software company delivering AI solutions, web &amp; mobile app development, and world-class UI/UX design for startups and enterprises worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="hero-btn-primary w-full sm:w-auto justify-center"
            >
              Start Your Project <ArrowRight size={17} />
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all w-full sm:w-auto"
            >
              See Our Work <MoveRight size={17} />
            </button>
          </motion.div>

          {/* Trust tags */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold tracking-widest uppercase text-gray-400"
          >
            {["Performance First", "Scalable Systems", "Clean UX", "Secure Architecture"].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300" />}
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Ticker />
      </div>
    </section>
  )
}
