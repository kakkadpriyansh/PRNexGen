"use client"

import {
  FiCode, FiSmartphone, FiBookOpen, FiLayout,
  FiServer, FiTrendingUp,
} from "react-icons/fi"
import AnimatedCircle from "./AnimatedCircle"
import ServiceCard from "./ServiceCard"
import FloatingParticles from "./FloatingParticles"

const CARDS = [
  {
    icon: FiCode,
    label: "Web Development",
    gradient: "from-blue-500 to-blue-600",
    border: "rgba(99,102,241,0.5)",
    style: { top: "8%", left: "0%", transform: "translate(-10px, 0)" },
    delay: 0.7,  dur: 3.6,
  },
  {
    icon: FiSmartphone,
    label: "App Development",
    gradient: "from-purple-500 to-purple-600",
    border: "rgba(168,85,247,0.5)",
    style: { top: "12%", right: "0%", transform: "translate(10px, 0)" },
    delay: 0.85, dur: 4.1,
  },
  {
    icon: FiBookOpen,
    label: "Education App",
    gradient: "from-cyan-500 to-cyan-600",
    border: "rgba(56,189,248,0.5)",
    style: { top: "50%", right: "0%", transform: "translate(10px, -50%)" },
    delay: 1.0,  dur: 3.8,
  },
  {
    icon: FiLayout,
    label: "UI/UX Design",
    gradient: "from-indigo-500 to-indigo-600",
    border: "rgba(99,102,241,0.5)",
    style: { bottom: "12%", right: "0%", transform: "translate(10px, 0)" },
    delay: 1.15, dur: 4.3,
  },
  {
    icon: FiServer,
    label: "ERP Software",
    gradient: "from-violet-500 to-violet-600",
    border: "rgba(139,92,246,0.5)",
    style: { bottom: "12%", left: "0%", transform: "translate(-10px, 0)" },
    delay: 1.3,  dur: 3.5,
  },
  {
    icon: FiTrendingUp,
    label: "Digital Marketing",
    gradient: "from-rose-500 to-rose-600",
    border: "rgba(244,63,94,0.5)",
    style: { top: "50%", left: "0%", transform: "translate(-10px, -50%)" },
    delay: 1.45, dur: 4.0,
  },
]

interface Props { mouseX: number; mouseY: number }

export default function AIHub({ mouseX, mouseY }: Props) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Floating particles */}
      <FloatingParticles count={20} />

      {/* Deep radial backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 50%, transparent 80%)",
        }}
      />

      {/* The animated 3D hub */}
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

      {/* Subtle SVG connector lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden
      >
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%"  stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lg2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%"  stopColor="#a855f7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="url(#lg1)" strokeWidth="0.8" strokeDasharray="4 8" />
        <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="url(#lg2)" strokeWidth="0.8" strokeDasharray="4 8" />
        <line x1="2%"  y1="50%" x2="98%" y2="50%" stroke="url(#lg1)" strokeWidth="0.5" strokeDasharray="3 10" opacity="0.4" />
        <line x1="50%" y1="2%"  x2="50%" y2="98%" stroke="url(#lg2)" strokeWidth="0.5" strokeDasharray="3 10" opacity="0.4" />
      </svg>
    </div>
  )
}
