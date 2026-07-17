"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import { FiGrid } from "react-icons/fi"

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.42 }}
      className="flex flex-col sm:flex-row gap-4 mt-2"
    >
      {/* Primary CTA */}
      <Link
        href="/contact"
        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] text-white overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
          boxShadow: "0 8px 32px rgba(99,102,241,0.45), 0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {/* Shine overlay */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />
        <span className="relative">Get Started</span>
        <HiArrowRight
          size={17}
          className="relative transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>

      {/* Secondary CTA */}
      <Link
        href="/services"
        className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(99,102,241,0.35)",
          backdropFilter: "blur(12px)",
          color: "rgba(255,255,255,0.85)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.15)"
          ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.65)"
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"
          ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)"
        }}
      >
        <FiGrid size={15} className="text-indigo-400" />
        Explore Services
      </Link>
    </motion.div>
  )
}
