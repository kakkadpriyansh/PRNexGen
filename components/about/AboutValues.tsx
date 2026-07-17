"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const values = [
  {
    icon: "🤝",
    title: "Client First",
    desc: "Every decision we make is guided by what's best for our clients and their users. Your success is our success.",
    gradient: "from-blue-500 to-blue-700",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-100",
  },
  {
    icon: "⚡",
    title: "Quality Code",
    desc: "We write clean, maintainable, and scalable code that stands the test of time — no shortcuts, ever.",
    gradient: "from-purple-500 to-purple-700",
    accentBg: "bg-purple-50",
    accentText: "text-purple-600",
    accentBorder: "border-purple-100",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "Open communication and honest timelines — no surprises, ever. You always know exactly where your project stands.",
    gradient: "from-cyan-500 to-cyan-700",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-600",
    accentBorder: "border-cyan-100",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We embrace new technologies and approaches to solve problems creatively and stay ahead of the curve.",
    gradient: "from-indigo-500 to-indigo-700",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-100",
  },
  {
    icon: "🎯",
    title: "Ownership",
    desc: "We take full responsibility for our work and deliver on our commitments — no excuses, only results.",
    gradient: "from-violet-500 to-violet-700",
    accentBg: "bg-violet-50",
    accentText: "text-violet-600",
    accentBorder: "border-violet-100",
  },
  {
    icon: "📈",
    title: "Growth Mindset",
    desc: "We continuously learn, improve, and push the boundaries of what's possible — for us and for you.",
    gradient: "from-rose-500 to-rose-700",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-100",
  },
]

const AUTOPLAY_DELAY = 3200
const VISIBLE = 3

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
}

export default function AboutValues() {
  const total = values.length
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + total) % total)
  }, [total])

  useEffect(() => {
    if (paused) { if (timerRef.current) clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => go(1), AUTOPLAY_DELAY)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, go])

  const getVisible = () =>
    Array.from({ length: VISIBLE }, (_, i) => (current + i) % total)

  return (
    <section
      className="py-20 bg-[#f9f8ff] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="text-[#6366f1] text-sm font-semibold mb-3 tracking-wide">Our Values</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What <span className="gradient-text">Drives Us</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            The principles that shape how we work, how we communicate, and how we deliver.
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="relative">

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous value"
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next value"
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Desktop: 3-up */}
          <div className="hidden sm:block overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-3 gap-6"
              >
                {getVisible().map((idx) => {
                  const { icon, title, desc, gradient, accentBg, accentText, accentBorder } = values[idx]
                  return (
                    <div
                      key={`${idx}-${current}`}
                      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                      </div>
                      {/* Accent bar */}
                      <div className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg ${accentBg} ${accentText} border ${accentBorder} mb-3 tracking-wide w-fit`}>
                        Core Value
                      </div>
                      <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: single card */}
          <div className="sm:hidden overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`mobile-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {(() => {
                  const { icon, title, desc, gradient, accentBg, accentText, accentBorder } = values[current]
                  return (
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                        {icon}
                      </div>
                      <div className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg ${accentBg} ${accentText} border ${accentBorder} mb-3 tracking-wide w-fit`}>
                        Core Value
                      </div>
                      <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots + progress bar */}
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex items-center gap-2">
            {values.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2.5 btn-gradient shadow-md"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <div className="w-32 h-0.5 bg-gray-200 rounded-full overflow-hidden">
            {!paused && (
              <motion.div
                key={current}
                className="h-full btn-gradient rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
