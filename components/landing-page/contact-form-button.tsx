"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import type React from "react"

interface ContactFormButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function ContactFormButton({ className = "", children }: ContactFormButtonProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(32_88%_57%)] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
      
      <Link 
        href="/start" 
        className={className || "relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(32_88%_57%)] text-[hsl(var(--primary-foreground))] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"}
      >
        <div className="relative z-10">
          <Sparkles className="w-5 h-5" />
        </div>
        
        <span className="relative z-10">{children || "Get Started"}</span>
        
        <div className="relative z-10">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  )
}
