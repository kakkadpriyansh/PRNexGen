"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const step = Math.max(1, Math.ceil(value / (duration / 16)))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref} className="text-3xl sm:text-4xl font-black gradient-text">{count}{suffix}</span>
}

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-8 border-t border-gray-100"
    >
      {STATS.map(({ value, suffix, label }) => (
        <div key={label} className="flex flex-col">
          <Counter value={value} suffix={suffix} />
          <span className="text-xs text-gray-500 font-semibold mt-0.5">{label}</span>
        </div>
      ))}
    </motion.div>
  )
}
