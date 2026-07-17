"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import type { ReactNode } from "react"

interface ServiceHeroProps {
  badge: string
  title: string
  highlight: string
  titleSuffix?: string
  description: string
  icon: ReactNode
  gradient: string
}

export default function ServiceHero({ badge, title, highlight, titleSuffix, description, icon, gradient }: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5 border border-blue-100">
              {badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-gray-900 mb-6">
              {title}{" "}
              <span className="gradient-text">{highlight}</span>
              {titleSuffix && <><br />{titleSuffix}</>}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gradient px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2">
                Start Your Project <HiArrowRight />
              </Link>
              <Link href="/portfolio" className="px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center">
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className={`w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}>
              <div className="text-white opacity-90">{icon}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
