"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import AIHub from "./hero/AIHub"
import HeroButtons from "./hero/HeroButtons"

/* ── Typewriter cycling words ── */
const WORDS = ["Web Solutions", "Mobile Apps", "AI Systems", "ERP Software", "UI/UX Design"]

export default function HomeHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  /* ── Mouse parallax ── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      setMouse({
        x: (e.clientX - rect.left)  / rect.width  - 0.5,
        y: (e.clientY - rect.top)   / rect.height - 0.5,
      })
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  /* ── Typewriter effect ── */
  useEffect(() => {
    const word = WORDS[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setWordIdx((i) => (i + 1) % WORDS.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, wordIdx])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero — AI-Powered Digital Solutions by PRNexGen"
      style={{
        background: "linear-gradient(135deg, #060612 0%, #0d0b2a 35%, #0f0b24 60%, #080618 100%)",
      }}
    >
      {/* ── Deep background glows ── */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",
          transform: "translate(25%, -30%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
          transform: "translate(-30%, 30%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
        aria-hidden
      />

      {/* ── Main content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-12 lg:gap-0 items-center min-h-[calc(100vh-4rem)]">

          {/* ════ LEFT COLUMN ════ */}
          <div className="lg:pr-10 flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-7 w-fit"
            >
              <div
                className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.35)",
                  color: "#a5b4fc",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" style={{ boxShadow: "0 0 8px #818cf8" }} />
                AI · Innovation · Digital Transformation
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-[1.08] mb-6"
              style={{ color: "#f1f5f9" }}
            >
              Building{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligent
              </span>
              <br />
              <span style={{ color: "#e2e8f0" }}>
                {/* Typewriter line */}
                <span
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {displayed}
                </span>
                <span
                  className="animate-pulse"
                  style={{ color: "#818cf8", WebkitTextFillColor: "#818cf8" }}
                >
                  |
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-[46ch]"
              style={{ color: "rgba(148,163,184,0.9)" }}
            >
              At{" "}
              <span style={{ color: "#a5b4fc", fontWeight: 600 }}>PRNexGen</span>
              , we help businesses accelerate growth through{" "}
              <span style={{ color: "#c4b5fd", fontWeight: 500 }}>AI</span>,{" "}
              <span style={{ color: "#93c5fd", fontWeight: 500 }}>custom software</span>, and{" "}
              <span style={{ color: "#86efac", fontWeight: 500 }}>digital marketing</span>{" "}
              — turning vision into scalable reality.
            </motion.p>

            {/* Buttons */}
            <HeroButtons />

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(99,102,241,0.18)" }}
            >
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #818cf8, #c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-[11px] font-medium mt-0.5" style={{ color: "rgba(148,163,184,0.7)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════ RIGHT COLUMN — 3D Hub ════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
            style={{ minHeight: "clamp(420px, 58vh, 680px)" }}
          >
            <AIHub mouseX={mouse.x} mouseY={mouse.y} />
          </motion.div>

        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(6,6,18,0.6))",
        }}
      />
    </section>
  )
}
