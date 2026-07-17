"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPostgresql, SiMongodb, SiRedis,
  SiGraphql, SiPrisma, SiVercel,
} from "react-icons/si"

/* ── AWS SVG (not available in this react-icons version) ── */
function AwsIcon() {
  return (
    <svg width="38" height="23" viewBox="0 0 256 153" xmlns="http://www.w3.org/2000/svg">
      <path d="M72.4 55.4c0 3.3.4 6 1 8 .7 2 1.7 4.2 3 6.5.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.2 4.1c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-6-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.5-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-.9-2.1-2.8v-4.4c0-1.5.2-2.6.7-3.2.5-.6 1.4-1.2 2.8-1.8 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.7 0-2.8-.3-3.6-.9-.8-.5-1.5-1.7-2.1-3.3L84.2 5.4c-.6-1.7-.9-2.8-.9-3.4 0-1.4.7-2.1 2.1-2.1h8.6c1.8 0 3 .3 3.7.9.7.6 1.3 1.7 1.9 3.3l18.5 73 17.2-73c.5-1.7 1.1-2.8 1.8-3.3.7-.5 2-.9 3.6-.9h7c1.7 0 2.9.3 3.6.9.7.6 1.3 1.7 1.8 3.3l17.4 73.9 19-73.9c.6-1.7 1.2-2.8 1.9-3.3.7-.5 1.9-.9 3.6-.9h8.2c1.4 0 2.1.7 2.1 2.1 0 .4-.1.8-.2 1.3-.1.5-.3 1.2-.7 2.2l-26.5 71.8c-.6 1.7-1.2 2.8-2 3.3-.8.5-2 .9-3.5.9h-7.5c-1.7 0-2.9-.3-3.6-.9-.7-.6-1.3-1.7-1.8-3.4l-17.2-71.6-17.1 71.5c-.5 1.7-1.1 2.8-1.8 3.4-.7.6-2 .9-3.6.9h-7.5zm141.4 3c-5 0-10-.6-14.8-1.8-4.8-1.2-8.5-2.5-11-3.9-1.5-.9-2.6-1.8-2.9-2.7-.3-.9-.5-1.8-.5-2.7v-4.6c0-1.9.7-2.8 2.1-2.8.5 0 1 .1 1.5.3.5.2 1.3.5 2.1 1 2.9 1.3 6 2.3 9.3 3 3.4.7 6.7 1 10.1 1 5.3 0 9.5-.9 12.4-2.8 2.9-1.9 4.4-4.6 4.4-8.1 0-2.4-.8-4.4-2.3-6-1.5-1.6-4.4-3.1-8.5-4.5l-12.2-3.8c-6.2-1.9-10.8-4.8-13.6-8.6-2.8-3.7-4.2-7.8-4.2-12.1 0-3.5.8-6.6 2.3-9.3 1.5-2.7 3.6-5 6.2-6.9 2.6-1.9 5.5-3.3 8.9-4.3 3.4-1 7-1.5 10.8-1.5 1.9 0 3.9.1 5.8.4 2 .3 3.8.6 5.6 1 1.7.4 3.3.9 4.8 1.4 1.5.5 2.7 1 3.5 1.5 1.2.7 2 1.4 2.5 2.1.5.7.7 1.6.7 2.8v4.2c0 1.9-.7 2.9-2.1 2.9-.7 0-1.9-.4-3.4-1.1-5.1-2.3-10.8-3.4-17.1-3.4-4.8 0-8.6.8-11.2 2.4-2.6 1.6-3.9 4.1-3.9 7.5 0 2.4.9 4.4 2.6 6 1.7 1.6 4.9 3.2 9.4 4.6l12 3.8c6.1 1.9 10.5 4.6 13.1 8 2.6 3.4 3.9 7.3 3.9 11.6 0 3.6-.7 6.8-2.2 9.6-1.5 2.8-3.6 5.3-6.3 7.3-2.7 2.1-5.9 3.6-9.6 4.7-3.9 1.1-8 1.7-12.5 1.7z" fill="#FF9900"/>
    </svg>
  )
}

const techs = [
  { id: "nextjs",     name: "Next.js",      Icon: SiNextdotjs,   color: "#000000", bg: "from-gray-50 to-slate-100",    glow: "rgba(0,0,0,0.08)" },
  { id: "react",      name: "React",        Icon: SiReact,       color: "#61DAFB", bg: "from-cyan-50 to-sky-50",       glow: "rgba(97,218,251,0.2)" },
  { id: "typescript", name: "TypeScript",   Icon: SiTypescript,  color: "#3178C6", bg: "from-blue-50 to-indigo-50",    glow: "rgba(49,120,198,0.15)" },
  { id: "tailwind",   name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", bg: "from-cyan-50 to-teal-50",      glow: "rgba(6,182,212,0.15)" },
  { id: "nodejs",     name: "Node.js",      Icon: SiNodedotjs,   color: "#339933", bg: "from-green-50 to-emerald-50",  glow: "rgba(51,153,51,0.15)" },
  { id: "postgresql", name: "PostgreSQL",   Icon: SiPostgresql,  color: "#4169E1", bg: "from-blue-50 to-indigo-50",    glow: "rgba(65,105,225,0.15)" },
  { id: "mongodb",    name: "MongoDB",      Icon: SiMongodb,     color: "#47A248", bg: "from-green-50 to-lime-50",     glow: "rgba(71,162,72,0.15)" },
  { id: "redis",      name: "Redis",        Icon: SiRedis,       color: "#DC382D", bg: "from-red-50 to-rose-50",       glow: "rgba(220,56,45,0.15)" },
  { id: "graphql",    name: "GraphQL",      Icon: SiGraphql,     color: "#E10098", bg: "from-pink-50 to-fuchsia-50",   glow: "rgba(225,0,152,0.15)" },
  { id: "prisma",     name: "Prisma",       Icon: SiPrisma,      color: "#2D3748", bg: "from-slate-50 to-gray-100",    glow: "rgba(45,55,72,0.1)" },
  { id: "vercel",     name: "Vercel",       Icon: SiVercel,      color: "#000000", bg: "from-gray-50 to-slate-100",    glow: "rgba(0,0,0,0.08)" },
  { id: "aws",        name: "AWS",          Icon: null,          color: "#FF9900", bg: "from-orange-50 to-amber-50",   glow: "rgba(255,153,0,0.2)" },
]

/* Triplicate so the CSS loop never shows a gap on any screen width */
const track = [...techs, ...techs, ...techs]

interface CardProps {
  name: string
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }> | null
  color: string
  bg: string
  glow: string
}

function TechCard({ name, Icon, color, bg, glow }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`
        flex-shrink-0 flex flex-col items-center justify-center gap-3
        w-[108px] h-[108px] sm:w-[118px] sm:h-[118px]
        rounded-2xl mx-3 cursor-default select-none
        bg-gradient-to-br ${bg}
        border border-white
        shadow-[0_2px_10px_rgba(0,0,0,0.06)]
        backdrop-blur-sm
        transition-all duration-300
      `}
      style={{
        boxShadow: `0 2px 10px rgba(0,0,0,0.06)`,
      }}
      onHoverStart={(e) => {
        ;(e.target as HTMLElement).style.boxShadow = `0 8px 28px ${glow}, 0 2px 8px rgba(0,0,0,0.06)`
      }}
      onHoverEnd={(e) => {
        ;(e.target as HTMLElement).style.boxShadow = `0 2px 10px rgba(0,0,0,0.06)`
      }}
    >
      <div className="flex items-center justify-center w-10 h-10">
        {Icon ? <Icon size={36} style={{ color }} /> : <AwsIcon />}
      </div>
      <span className="text-[11px] font-bold text-gray-600 tracking-wide text-center leading-tight px-2">
        {name}
      </span>
    </motion.div>
  )
}

interface TechCarouselProps {
  title?: string
  subtitle?: string
  sectionBg?: string
}

export default function TechCarousel({
  title = "Technologies We Use",
  subtitle = "We use the latest and most reliable technologies to build fast, scalable, and future-ready products.",
  sectionBg = "bg-white",
}: TechCarouselProps) {
  const [paused, setPaused] = useState(false)

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
            Tech Stack
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Carousel track */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Fade edge masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${sectionBg === "bg-gray-50" ? "#f9fafb" : "#ffffff"}, transparent)` }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${sectionBg === "bg-gray-50" ? "#f9fafb" : "#ffffff"}, transparent)` }}
          />

          <div className="overflow-hidden py-5">
            <div
              className="flex"
              style={{
                animation: `techScroll 32s linear infinite`,
                animationPlayState: paused ? "paused" : "running",
                width: `${track.length * 126}px`,
              }}
            >
              {track.map(({ id, name, Icon, color, bg, glow }, i) => (
                <TechCard
                  key={`${id}-${i}`}
                  name={name}
                  Icon={Icon}
                  color={color}
                  bg={bg}
                  glow={glow}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-10 mt-12 pt-10 border-t border-gray-100"
        >
          {[
            { value: "12+", label: "Core Technologies" },
            { value: "50+", label: "Projects Delivered" },
            { value: "4+",  label: "Years of Expertise" },
            { value: "99%", label: "Client Satisfaction" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
