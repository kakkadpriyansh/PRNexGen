"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import AIHub from "./hero/AIHub"
import HeroButtons from "./hero/HeroButtons"

export default function HomeHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  /* Mouse parallax — normalised -0.5 … +0.5 */
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
      aria-label="Hero — AI-Powered Digital Solutions"
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] bg-cyan-100/18 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        aria-hidden
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-0 items-center min-h-[calc(100vh-4rem)]">

          {/* ════════════ LEFT — 45% ════════════ */}
          <div className="lg:pr-8 flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6 w-fit tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
              AI &nbsp;•&nbsp; Innovation &nbsp;•&nbsp; Digital Transformation
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[1.1] text-gray-900 mb-5"
            >
              AI-Powered{" "}
              <span className="gradient-text">Digital Solutions</span>
              <br />
              for a Smarter Future
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-[46ch]"
            >
              At PRNexGen, we help businesses accelerate growth through{" "}
              <strong className="font-semibold text-gray-700">AI</strong>,{" "}
              <strong className="font-semibold text-gray-700">Web Development</strong>,{" "}
              <strong className="font-semibold text-gray-700">Mobile Apps</strong>,{" "}
              <strong className="font-semibold text-gray-700">ERP Software</strong>,{" "}
              <strong className="font-semibold text-gray-700">Education Platforms</strong>,{" "}
              <strong className="font-semibold text-gray-700">UI/UX Design</strong>, and{" "}
              <strong className="font-semibold text-gray-700">Digital Marketing</strong>.
            </motion.p>

            {/* Buttons */}
            <HeroButtons />
          </div>

          {/* ════════════ RIGHT — 55% ════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="relative flex items-center justify-center"
            style={{ minHeight: "clamp(380px, 54vh, 640px)" }}
          >
            <AIHub mouseX={mouse.x} mouseY={mouse.y} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
