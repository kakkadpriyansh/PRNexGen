"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// Dynamic import to avoid SSR (Three.js needs browser APIs)
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false })

interface Props {
  mouseX: number
  mouseY: number
}

export default function AnimatedCircle({ mouseX, mouseY }: Props) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient outer glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.12) 40%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* Rotating conic border ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          background:
            "conic-gradient(from 0deg, transparent 0%, #6366f155 20%, #a855f755 40%, #38bdf855 60%, transparent 80%)",
          borderRadius: "50%",
        }}
      />

      {/* Static outer ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 360,
          height: 360,
          border: "1px solid rgba(99,102,241,0.2)",
        }}
      />

      {/* Middle dashed ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 310,
          height: 310,
          border: "1px dashed rgba(168,85,247,0.18)",
        }}
      />

      {/* Glass hub container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "linear-gradient(145deg, rgba(15,15,30,0.92) 0%, rgba(30,27,75,0.88) 50%, rgba(20,20,50,0.92) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(99,102,241,0.35)",
          boxShadow:
            "0 0 60px rgba(99,102,241,0.25), 0 0 120px rgba(168,85,247,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Three.js canvas */}
        <div className="absolute inset-0">
          <ThreeCanvas mouseX={mouseX} mouseY={mouseY} />
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-7 z-10 pointer-events-none">
          <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-indigo-300/70 mb-1">
            PRNexGen
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] text-emerald-400/80 font-semibold tracking-widest">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
