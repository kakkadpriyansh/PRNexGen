"use client"

import { motion } from "framer-motion"
import type { ComponentType } from "react"

interface ServiceCardProps {
  icon: ComponentType<{ size?: number; className?: string }>
  label: string
  gradient: string
  borderColor: string
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
      initial={{ opacity: 0, scale: 0.6, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.1, y: -6 }}
      className="absolute flex items-center gap-2 cursor-default select-none"
      style={{
        ...style,
        animation: `svcFloat ${floatDuration}s ease-in-out infinite`,
        animationDelay: `${delay * 0.7}s`,
        zIndex: 10,
      }}
      aria-label={label}
    >
      {/* Glass card */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(15,15,35,0.82) 0%, rgba(25,22,60,0.78) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${borderColor}`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.05) inset, 0 0 12px ${borderColor}55`,
        }}
      >
        {/* Icon */}
        <div
          className={`w-7 h-7 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
          style={{ boxShadow: `0 0 10px ${borderColor}99` }}
        >
          <Icon size={14} />
        </div>
        <span className="text-[11px] font-semibold text-slate-200 whitespace-nowrap tracking-wide">
          {label}
        </span>
      </div>

      <style>{`
        @keyframes svcFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
      `}</style>
    </motion.div>
  )
}
