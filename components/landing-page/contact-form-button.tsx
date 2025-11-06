"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import type React from "react"

interface ContactFormButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function ContactFormButton({ className = "", children }: ContactFormButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur-lg opacity-40 group-hover:opacity-60"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Link 
        href="/start" 
        className={className || "relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{ x: [-100, 300] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating sparkles */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        
        <span className="relative z-10">{children || "Get Started"}</span>
        
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative z-10"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
    </motion.div>
  )
}