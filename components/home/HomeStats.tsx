"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const stats = [
  { value: 50,  suffix: "+", label: "Projects Delivered" },
  { value: 20,  suffix: "+", label: "Happy Clients" },
  { value: 10,  suffix: "+", label: "Expert Developers" },
  { value: 4,   suffix: "+", label: "Years Experience" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="counter-value text-4xl lg:text-5xl font-black gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function HomeStats() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <Counter value={value} suffix={suffix} />
              <p className="mt-2 text-sm font-medium text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
