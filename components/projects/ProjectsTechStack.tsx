"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiFlutter,
  SiPython, SiMongodb, SiFirebase, SiDocker,
  SiTypescript, SiTailwindcss, SiPostgresql, SiGraphql,
} from "react-icons/si"

const techs = [
  { name: "React",        Icon: SiReact,       color: "#61DAFB", bg: "from-cyan-50 to-sky-50",      glow: "rgba(97,218,251,0.25)" },
  { name: "Next.js",      Icon: SiNextdotjs,   color: "#000000", bg: "from-gray-50 to-slate-100",   glow: "rgba(0,0,0,0.1)" },
  { name: "Node.js",      Icon: SiNodedotjs,   color: "#339933", bg: "from-green-50 to-emerald-50", glow: "rgba(51,153,51,0.2)" },
  { name: "Flutter",      Icon: SiFlutter,     color: "#02569B", bg: "from-blue-50 to-cyan-50",     glow: "rgba(2,86,155,0.2)" },
  { name: "Python",       Icon: SiPython,      color: "#3776AB", bg: "from-blue-50 to-yellow-50",   glow: "rgba(55,118,171,0.2)" },
  { name: "MongoDB",      Icon: SiMongodb,     color: "#47A248", bg: "from-green-50 to-lime-50",    glow: "rgba(71,162,72,0.2)" },
  { name: "Firebase",     Icon: SiFirebase,    color: "#FFCA28", bg: "from-yellow-50 to-amber-50",  glow: "rgba(255,202,40,0.25)" },
  { name: "Docker",       Icon: SiDocker,      color: "#2496ED", bg: "from-blue-50 to-sky-50",      glow: "rgba(36,150,237,0.2)" },
  { name: "TypeScript",   Icon: SiTypescript,  color: "#3178C6", bg: "from-blue-50 to-indigo-50",   glow: "rgba(49,120,198,0.2)" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", bg: "from-cyan-50 to-teal-50",     glow: "rgba(6,182,212,0.2)" },
  { name: "PostgreSQL",   Icon: SiPostgresql,  color: "#4169E1", bg: "from-blue-50 to-indigo-50",   glow: "rgba(65,105,225,0.2)" },
  { name: "GraphQL",      Icon: SiGraphql,     color: "#E10098", bg: "from-pink-50 to-fuchsia-50",  glow: "rgba(225,0,152,0.2)" },
]

export default function ProjectsTechStack() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Technology Stack
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Built with the <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We choose technologies that are fast, scalable, and battle-tested — ensuring every project
            is built to last.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5">
          {techs.map(({ name, Icon, color, bg, glow }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onHoverStart={() => setHovered(name)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6, scale: 1.06 }}
              className={`flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${bg} border border-white cursor-default select-none transition-shadow duration-300`}
              style={{
                boxShadow: hovered === name
                  ? `0 8px 28px ${glow}, 0 2px 8px rgba(0,0,0,0.06)`
                  : "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Icon size={36} style={{ color }} />
              <span className="text-[11px] font-bold text-gray-600 tracking-wide text-center leading-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-10 mt-14 pt-10 border-t border-gray-100"
        >
          {[
            { v: "12+", l: "Core Technologies" },
            { v: "50+", l: "Projects Delivered" },
            { v: "4+",  l: "Years of Expertise" },
            { v: "99%", l: "Client Satisfaction" },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-black gradient-text">{v}</div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
