"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { projectStats } from "./projects-data"
import { FiCheckCircle, FiUsers, FiGlobe } from "react-icons/fi"

const icons = [FiCheckCircle, FiUsers, FiGlobe]
const iconColors = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-emerald-500 to-emerald-600",
]

function AnimatedValue({ raw }: { raw: string }) {
  // Extract numeric portion and suffix (e.g. "50+" → 50 + "+")
  const match = raw.match(/^(\d+)(.*)$/)
  const num = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : raw
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const step = Math.max(1, Math.ceil(num / (duration / 16)))
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, num])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function ProjectsStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Delivering <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Numbers that reflect our commitment to quality, speed, and client success.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {projectStats.map(({ value, label }, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group glass-card rounded-2xl border border-gray-100 p-6 sm:p-8 text-center overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/60 group-hover:to-purple-50/40 transition-all duration-300 pointer-events-none rounded-2xl" />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColors[i]} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  <Icon size={22} />
                </div>

                {/* Animated number */}
                <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">
                  <AnimatedValue raw={value} />
                </div>
                <p className="text-sm font-semibold text-gray-500">{label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
