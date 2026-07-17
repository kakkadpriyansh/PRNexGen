"use client"

import { motion } from "framer-motion"
import type { ComponentType } from "react"

interface ServiceCardProps {
  icon: ComponentType<{ size?: number; className?: string }>
  label: string
  gradient: string          // e.g. "from-blue-500 to-blue-600"
  borderColor: string       // e.g. "rgba(99,102,241,0.35)"
  style?: React.CSSProperties
  delay?: number
  floatDuration?: number
}

export default function ServiceCard({
  icon: Icon,
  label,
  gradient,
  borderColor,
  style,
  delay = 0,
  floatDuration = 3.8,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08, y: -5 }}
      className="absolute flex items-center gap-2.5 cursor-default select-none"
      style={{
        ...style,
        animation: `svcFloat ${floatDuration}s ease-in-out infinite`,
        animationDelay: `${delay * 0.8}s`,
      }}
      aria-label={label}
    >
      {/* Glass card body */}
      <div
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl shadow-xl"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: `1.5px solid ${borderColor}`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.1), 0 0 0 0.5px rgba(255,255,255,0.8) inset`,
        }}
      >
        {/* Icon box */}
        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
          <Icon size={16} />
        </div>
        <span className="text-xs font-bold text-gray-800 whitespace-nowrap pr-0.5">{label}</span>
      </div>

      <style>{`
        @keyframes svcFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-9px); }
        }
      `}</style>
    </motion.div>
  )
}
