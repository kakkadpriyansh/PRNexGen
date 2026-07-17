"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  FiCode, FiSmartphone, FiBookOpen, FiLayout,
  FiArrowRight, FiChevronLeft, FiChevronRight,
  FiTrendingUp, FiServer,
} from "react-icons/fi"

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    desc: "High-performance websites and web applications built with Next.js, React, and modern cloud infrastructure that scales with your business.",
    href: "/services/web-development",
    gradient: "from-blue-500 to-blue-700",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-100",
    tag: "Next.js · React · Node.js",
    stat: "50+ Sites Delivered",
  },
  {
    icon: FiSmartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences, fast performance, and clean architecture.",
    href: "/services/app-development",
    gradient: "from-purple-500 to-purple-700",
    accentBg: "bg-purple-50",
    accentText: "text-purple-600",
    accentBorder: "border-purple-100",
    tag: "Flutter · React Native",
    stat: "iOS & Android",
  },
  {
    icon: FiBookOpen,
    title: "Education App Development",
    desc: "Scalable e-learning platforms, LMS systems, and interactive educational apps built for modern learners and institutions.",
    href: "/services/education-app-development",
    gradient: "from-cyan-500 to-cyan-700",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-600",
    accentBorder: "border-cyan-100",
    tag: "LMS · E-Learning · ERP",
    stat: "Role-based Dashboards",
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    desc: "Pixel-perfect, user-centered design systems that convert visitors into loyal customers and create memorable digital experiences.",
    href: "/services/ui-ux-design",
    gradient: "from-indigo-500 to-indigo-700",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-100",
    tag: "Figma · Tailwind · Framer",
    stat: "Premium Corporate UI",
  },
  {
    icon: FiServer,
    title: "Enterprise Software Development",
    desc: "End-to-end custom enterprise solutions — ERPs, CRMs, SaaS platforms, and internal tools engineered for scale, security, and reliability.",
    href: "/services/web-development",
    gradient: "from-violet-500 to-violet-700",
    accentBg: "bg-violet-50",
    accentText: "text-violet-600",
    accentBorder: "border-violet-100",
    tag: "ERP · CRM · SaaS · APIs",
    stat: "Enterprise-Grade Security",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven Meta Ads, Google Ads, SEO, and social media strategies that grow your brand visibility and drive qualified leads consistently.",
    href: "/services/web-development",
    gradient: "from-rose-500 to-rose-700",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-100",
    tag: "Meta Ads · SEO · Google Ads",
    stat: "Measurable ROI",
  },
]

const AUTOPLAY_DELAY = 3500
const VISIBLE = 3  // cards visible at once on desktop

export default function HomeServices() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)   // 1 = forward, -1 = back
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = services.length

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + total) % total)
  }, [total])

  /* Auto-play */
  useEffect(() => {
    if (paused) { if (timerRef.current) clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => go(1), AUTOPLAY_DELAY)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, go])

  /* Build the 3-visible window */
  const getVisible = () => {
    const indices = []
    for (let i = 0; i < VISIBLE; i++) {
      indices.push((current + i) % total)
    }
    return indices
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
  }

  return (
    <section
      className="section-pad bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Solutions Built for <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From MVPs to enterprise platforms — we deliver fast, scalable, and future-ready digital products.
          </p>
        </motion.div>

        {/* ── Slideshow wrapper ── */}
        <div className="relative">

          {/* Prev / Next arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous service"
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next service"
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <FiChevronRight size={20} />
          </button>

          {/* ── Desktop: 3-up sliding window ── */}
          <div className="hidden sm:block overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-3 gap-6"
              >
                {getVisible().map((idx) => {
                  const { icon: Icon, title, desc, href, gradient, accentBg, accentText, accentBorder, tag, stat } = services[idx]
                  return (
                    <div
                      key={`${idx}-${current}`}
                      className="glass-card rounded-2xl border border-gray-100 p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={22} />
                      </div>

                      {/* Tag */}
                      <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg ${accentBg} ${accentText} border ${accentBorder} mb-3 tracking-wide`}>
                        {tag}
                      </span>

                      <h3 className="font-black text-gray-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">
                        {title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-2">{desc}</p>

                      {/* Stat chip */}
                      <div className="flex items-center gap-1.5 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-xs font-semibold text-gray-400">{stat}</span>
                      </div>

                      <Link
                        href={href}
                        className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all mt-auto"
                      >
                        Learn More <FiArrowRight size={14} />
                      </Link>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Mobile: single card ── */}
          <div className="sm:hidden overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`mobile-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {(() => {
                  const { icon: Icon, title, desc, href, gradient, accentBg, accentText, accentBorder, tag, stat } = services[current]
                  return (
                    <div className="glass-card rounded-2xl border border-gray-100 p-6 flex flex-col">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-5 shadow-lg`}>
                        <Icon size={22} />
                      </div>
                      <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg ${accentBg} ${accentText} border ${accentBorder} mb-3 tracking-wide`}>
                        {tag}
                      </span>
                      <h3 className="font-black text-gray-900 text-lg mb-3">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-2">{desc}</p>
                      <div className="flex items-center gap-1.5 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-xs font-semibold text-gray-400">{stat}</span>
                      </div>
                      <Link href={href} className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 mt-auto">
                        Learn More <FiArrowRight size={14} />
                      </Link>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Dot indicators + progress bar ── */}
        <div className="flex flex-col items-center gap-4 mt-10">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2.5 btn-gradient shadow-md"
                    : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Auto-play progress bar */}
          <div className="w-32 h-0.5 bg-gray-100 rounded-full overflow-hidden">
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
