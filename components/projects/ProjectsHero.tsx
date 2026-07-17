"use client"

import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"
import { FiCode, FiSmartphone, FiBookOpen, FiCpu, FiLayout } from "react-icons/fi"

const floatingBadges = [
  { icon: FiCode,      label: "Web Dev",    color: "bg-blue-500",   pos: "top-8 left-4 sm:left-10",            delay: 0 },
  { icon: FiBookOpen,  label: "Education",  color: "bg-orange-500", pos: "top-8 right-4 sm:right-10",          delay: 0.15 },
  { icon: FiLayout,    label: "Travel",     color: "bg-emerald-500",pos: "bottom-24 left-4 sm:left-10",        delay: 0.3 },
  { icon: FiCpu,       label: "CRM",        color: "bg-indigo-500", pos: "bottom-24 right-4 sm:right-10",      delay: 0.45 },
  { icon: FiSmartphone,label: "UI / UX",    color: "bg-violet-500", pos: "top-1/2 -translate-y-1/2 right-2 sm:right-6", delay: 0.6 },
]

export default function ProjectsHero() {
  const scrollToProjects = () => {
    document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-white pt-16">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-100/25 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Subtle dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Our Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-gray-900 mb-6"
            >
              Our{" "}
              <span className="gradient-text">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Explore our portfolio of innovative digital solutions delivered for businesses
              across various industries — from AI platforms to enterprise-grade web and mobile apps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="btn-gradient px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-base"
              >
                Explore Projects <HiArrowRight />
              </button>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-base hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Start Your Project
              </a>
            </motion.div>
          </div>

          {/* ── Right: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-80 lg:h-[480px]"
          >
            {/* Central orb */}
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 opacity-15 blur-3xl animate-pulse-glow" />
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-spin" style={{ animationDuration: "22s" }} />
              <div className="absolute inset-4 rounded-full border border-purple-200 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-8 rounded-full border border-dashed border-cyan-200 animate-spin" style={{ animationDuration: "30s" }} />
              {/* Core — PRNexGen logo */}
              <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 shadow-2xl flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 select-none">
                  {/* Icon mark */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg lg:text-xl leading-none">P</span>
                  </div>
                  {/* Wordmark */}
                  <span className="text-white font-black text-sm lg:text-base tracking-tight leading-none">
                    PRNexGen
                  </span>
                </div>
              </div>
            </div>

            {/* Floating category badges */}
            {floatingBadges.map(({ icon: Icon, label, color, pos, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + delay }}
                className={`absolute ${pos} glass-card rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg animate-float`}
                style={{ animationDelay: `${delay}s` }}
              >
                <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center text-white flex-shrink-0`}>
                  <Icon size={14} />
                </div>
                <span className="text-xs font-bold text-gray-700 whitespace-nowrap">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48V24C360 0 720 0 1080 24C1260 36 1380 42 1440 44V48H0Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}
