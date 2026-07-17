"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, A11y } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import {
  FiSearch, FiClipboard, FiLayout, FiCode,
  FiCheckCircle, FiUploadCloud, FiHeadphones,
} from "react-icons/fi"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

/* ── Data ─────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    icon: FiSearch,
    title: "Discovery",
    desc: "Deep-dive into your goals, audience, and technical landscape to define the perfect solution.",
    tasks: ["Requirement Gathering", "Business Analysis", "Competitor Research"],
    color: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.18)",
    ring: "border-blue-200",
    badge: "bg-blue-50 text-blue-600",
  },
  {
    num: "02",
    icon: FiClipboard,
    title: "Planning",
    desc: "Translate insights into a concrete roadmap with milestones, timelines, and resource allocation.",
    tasks: ["Project Planning", "Timeline Creation", "Resource Allocation"],
    color: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.18)",
    ring: "border-violet-200",
    badge: "bg-violet-50 text-violet-600",
  },
  {
    num: "03",
    icon: FiLayout,
    title: "UI/UX Design",
    desc: "Craft pixel-perfect wireframes, design systems, and interactive prototypes before any code is written.",
    tasks: ["Wireframes", "UI Design", "Interactive Prototype"],
    color: "from-indigo-500 to-indigo-600",
    glow: "rgba(99,102,241,0.18)",
    ring: "border-indigo-200",
    badge: "bg-indigo-50 text-indigo-600",
  },
  {
    num: "04",
    icon: FiCode,
    title: "Development",
    desc: "Agile sprints with weekly demos, code reviews, and continuous integration across the full stack.",
    tasks: ["Frontend Development", "Backend Development", "API Integration"],
    color: "from-cyan-500 to-cyan-600",
    glow: "rgba(6,182,212,0.18)",
    ring: "border-cyan-200",
    badge: "bg-cyan-50 text-cyan-600",
  },
  {
    num: "05",
    icon: FiCheckCircle,
    title: "Testing & QA",
    desc: "Rigorous multi-layer testing to ensure your product is fast, secure, and bug-free before launch.",
    tasks: ["Functional Testing", "Performance Testing", "Security Testing", "Bug Fixing"],
    color: "from-emerald-500 to-emerald-600",
    glow: "rgba(16,185,129,0.18)",
    ring: "border-emerald-200",
    badge: "bg-emerald-50 text-emerald-600",
  },
  {
    num: "06",
    icon: FiUploadCloud,
    title: "Deployment",
    desc: "Zero-downtime production deployment with cloud configuration, CI/CD pipelines, and server hardening.",
    tasks: ["Production Deployment", "Cloud Configuration", "CI/CD Pipeline", "Server Setup"],
    color: "from-orange-500 to-orange-600",
    glow: "rgba(249,115,22,0.18)",
    ring: "border-orange-200",
    badge: "bg-orange-50 text-orange-600",
  },
  {
    num: "07",
    icon: FiHeadphones,
    title: "Support & Maintenance",
    desc: "Ongoing monitoring, feature updates, security patches, and dedicated technical support post-launch.",
    tasks: ["Performance Monitoring", "Feature Updates", "Security Updates", "Technical Support"],
    color: "from-rose-500 to-rose-600",
    glow: "rgba(244,63,94,0.18)",
    ring: "border-rose-200",
    badge: "bg-rose-50 text-rose-600",
  },
]

/* ── Nav Button ───────────────────────────────────────── */
function NavBtn({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next"
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.93 }}
      className={`
        relative z-10 flex items-center justify-center
        w-11 h-11 sm:w-12 sm:h-12 rounded-full
        bg-gradient-to-br from-blue-600 to-purple-600
        text-white shadow-lg
        transition-all duration-200
        ${disabled ? "opacity-30 cursor-not-allowed" : "hover:shadow-[0_6px_24px_rgba(99,102,241,0.45)] cursor-pointer"}
      `}
      aria-label={dir === "prev" ? "Previous step" : "Next step"}
    >
      {dir === "prev" ? <HiChevronLeft size={22} /> : <HiChevronRight size={22} />}
    </motion.button>
  )
}

/* ── Step Card ────────────────────────────────────────── */
function StepCard({
  step,
  active,
}: {
  step: (typeof steps)[0]
  active: boolean
}) {
  const Icon = step.icon
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`
        relative h-full flex flex-col
        rounded-2xl p-6 sm:p-7
        bg-white/90 backdrop-blur-sm
        border-2 transition-all duration-300
        ${active ? `${step.ring} shadow-[0_8px_32px_var(--glow)]` : "border-gray-100 shadow-md hover:shadow-xl"}
      `}
      style={{ "--glow": step.glow } as React.CSSProperties}
    >
      {/* Active indicator */}
      {active && (
        <motion.div
          layoutId="activeBar"
          className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${step.color}`}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {/* Number badge */}
      <div className="flex items-start justify-between mb-5">
        <span className={`text-xs font-black tracking-widest px-2.5 py-1 rounded-full ${step.badge}`}>
          {step.num}
        </span>
        {active && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse"
          />
        )}
      </div>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-5 shadow-md`}
      >
        <Icon size={22} />
      </div>

      {/* Title + desc */}
      <h3 className="font-black text-gray-900 text-lg mb-2 leading-snug">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{step.desc}</p>

      {/* Task list */}
      <ul className="space-y-2">
        {step.tasks.map((task) => (
          <li key={task} className="flex items-center gap-2.5 text-sm text-gray-600">
            <span
              className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                <polyline points="1.5 5 4 7.5 8.5 2.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-medium">{task}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ── Progress Dots ────────────────────────────────────── */
function ProgressDots({ active, total, onDotClick }: { active: number; total: number; onDotClick: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to step ${i + 1}`}
          className="group relative flex items-center justify-center"
        >
          <motion.div
            animate={{
              width: i === active ? 28 : 8,
              backgroundColor: i === active ? "#6366f1" : "#d1d5db",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-2 rounded-full"
          />
        </button>
      ))}
    </div>
  )
}

/* ── Main Component ───────────────────────────────────── */
interface ProcessTimelineProps {
  sectionBg?: string
}

export default function ProcessTimeline({ sectionBg = "bg-gray-50" }: ProcessTimelineProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const updateState = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex ?? swiper.activeIndex)
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }, [])

  /* Pause / resume autoplay on hover */
  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper) return
    if (isHovered) {
      swiper.autoplay?.stop()
    } else {
      swiper.autoplay?.start()
    }
  }, [isHovered])

  const slidePrev = () => swiperRef.current?.slidePrev()
  const slideNext = () => swiperRef.current?.slideNext()
  const slideTo  = (i: number) => swiperRef.current?.slideTo(i)

  return (
    <section className={`py-20 lg:py-28 ${sectionBg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            How We Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A proven 7-stage process that keeps you informed, in control, and confident at every step of the journey.
          </p>
        </motion.div>

        {/* Step counter + nav row */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-sm font-semibold text-gray-400">
            Step{" "}
            <span className="text-gray-900 font-black text-base">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-1 text-gray-300">/</span>
            <span>{String(steps.length).padStart(2, "0")}</span>
          </div>

          {/* Progress bar */}
          <div className="hidden sm:flex flex-1 mx-6 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <NavBtn dir="prev" onClick={slidePrev} disabled={false} />
            <NavBtn dir="next" onClick={slideNext} disabled={false} />
          </div>
        </div>

        {/* Swiper */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateState(swiper)
            }}
            onSlideChange={updateState}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={600}
            grabCursor
            breakpoints={{
              0:    { slidesPerView: 1 },
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="!overflow-visible"
          >
            {steps.map((step, i) => (
              <SwiperSlide key={step.num} className="!h-auto">
                <AnimatePresence mode="wait">
                  <StepCard step={step} active={i === activeIndex} />
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dot navigation */}
        <ProgressDots
          active={activeIndex}
          total={steps.length}
          onDotClick={slideTo}
        />

        {/* Step label strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center gap-0 mt-10 overflow-x-auto"
        >
          {steps.map((step, i) => {
            const isActive = i === activeIndex
            const isPast   = i < activeIndex
            return (
              <button
                key={step.num}
                onClick={() => slideTo(i)}
                className="flex items-center group"
              >
                {/* Node */}
                <div className="flex flex-col items-center gap-1.5">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      backgroundColor: isActive ? "#6366f1" : isPast ? "#a5b4fc" : "#e5e7eb",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-3 h-3 rounded-full"
                  />
                  <span
                    className={`text-[11px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                      isActive ? "text-indigo-600" : isPast ? "text-indigo-400" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="w-16 xl:w-20 h-px mx-1 mb-5 relative overflow-hidden bg-gray-200 rounded-full">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                      animate={{ width: isPast ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
