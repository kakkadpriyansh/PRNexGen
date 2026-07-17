"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { Project } from "../projects-data"

function AnimatedStat({ raw, label, accentColor, delay }: { raw: string; label: string; accentColor: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setShown(true), delay * 1000)
      return () => clearTimeout(t)
    }
  }, [inView, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }}
      className="relative group glass-card rounded-2xl border border-gray-100 p-6 sm:p-8 text-center overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at center, ${accentColor}12 0%, transparent 70%)` }}
      />
      <div
        className="text-4xl lg:text-5xl font-black mb-2 transition-all duration-300"
        style={{ color: shown ? accentColor : "#d1d5db" }}
      >
        {raw}
      </div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
    </motion.div>
  )
}

export default function DetailStats({ project }: { project: Project }) {
  const { detail, accentColor } = project
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Project <span className="gradient-text">Statistics</span>
          </h2>
        </motion.div>

        <div className={`grid grid-cols-2 lg:grid-cols-${Math.min(detail.stats.length, 4)} gap-6 max-w-4xl mx-auto`}>
          {detail.stats.map(({ value, label }, i) => (
            <AnimatedStat
              key={label}
              raw={value}
              label={label}
              accentColor={accentColor}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
