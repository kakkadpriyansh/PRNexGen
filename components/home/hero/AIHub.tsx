"use client"

import {
  FiCode, FiSmartphone, FiBookOpen, FiLayout,
  FiServer, FiTrendingUp,
} from "react-icons/fi"
import AnimatedCircle from "./AnimatedCircle"
import ServiceCard from "./ServiceCard"
import FloatingParticles from "./FloatingParticles"

/* 6 service cards — positioned around the central hub */
const CARDS = [
  {
    icon: FiCode,
    label: "Web Development",
    gradient: "from-blue-500 to-blue-600",
    border: "rgba(99,102,241,0.35)",
    // upper-left
    style: { top: "8%", left: "0%", transform: "translate(-10px, 0)" },
    delay: 0.7,  dur: 3.6,
  },
  {
    icon: FiSmartphone,
    label: "App Development",
    gradient: "from-purple-500 to-purple-600",
    border: "rgba(168,85,247,0.35)",
    // top-right
    style: { top: "12%", right: "0%", transform: "translate(10px, 0)" },
    delay: 0.85, dur: 4.1,
  },
  {
    icon: FiBookOpen,
    label: "Education App",
    gradient: "from-cyan-500 to-cyan-600",
    border: "rgba(56,189,248,0.35)",
    // right-middle
    style: { top: "50%", right: "0%", transform: "translate(10px, -50%)" },
    delay: 1.0,  dur: 3.8,
  },
  {
    icon: FiLayout,
    label: "UI/UX Design",
    gradient: "from-indigo-500 to-indigo-600",
    border: "rgba(99,102,241,0.35)",
    // bottom-right
    style: { bottom: "12%", right: "0%", transform: "translate(10px, 0)" },
    delay: 1.15, dur: 4.3,
  },
  {
    icon: FiServer,
    label: "ERP Software",
    gradient: "from-violet-500 to-violet-600",
    border: "rgba(139,92,246,0.35)",
    // bottom-left
    style: { bottom: "12%", left: "0%", transform: "translate(-10px, 0)" },
    delay: 1.3,  dur: 3.5,
  },
  {
    icon: FiTrendingUp,
    label: "Digital Marketing",
    gradient: "from-rose-500 to-rose-600",
    border: "rgba(244,63,94,0.35)",
    // left-middle (between Web Dev top-left and ERP bottom-left)
    style: { top: "50%", left: "0%", transform: "translate(-10px, -50%)" },
    delay: 1.45, dur: 4.0,
  },
]

interface Props { mouseX: number; mouseY: number }

export default function AIHub({ mouseX, mouseY }: Props) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Floating background particles */}
      <FloatingParticles count={24} />

      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.10) 0%, rgba(168,85,247,0.07) 45%, transparent 75%)",
        }}
      />

      {/* The animated circle hub */}
      <AnimatedCircle mouseX={mouseX} mouseY={mouseY} />

      {/* Service cards */}
      {CARDS.map((c) => (
        <ServiceCard
          key={c.label}
          icon={c.icon}
          label={c.label}
          gradient={c.gradient}
          borderColor={c.border}
          style={c.style}
          delay={c.delay}
          floatDuration={c.dur}
        />
      ))}

      {/* Glowing connector lines (SVG overlay) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Cross diagonal lines */}
        <line x1="15%" y1="15%" x2="85%" y2="85%"
          stroke="url(#lineGrad1)" strokeWidth="0.8" strokeDasharray="4 6" />
        <line x1="85%" y1="15%" x2="15%" y2="85%"
          stroke="url(#lineGrad2)" strokeWidth="0.8" strokeDasharray="4 6" />
        {/* Horizontal + vertical center lines */}
        <line x1="5%" y1="50%" x2="95%" y2="50%"
          stroke="url(#lineGrad1)" strokeWidth="0.6" strokeDasharray="3 8" opacity="0.5" />
        <line x1="50%" y1="5%" x2="50%" y2="95%"
          stroke="url(#lineGrad2)" strokeWidth="0.6" strokeDasharray="3 8" opacity="0.5" />
      </svg>
    </div>
  )
}
