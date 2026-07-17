"use client"

import { motion } from "framer-motion"
import type { Project } from "../projects-data"

const techColors: Record<string, { bg: string; text: string; border: string }> = {
  "Next.js":    { bg: "bg-gray-50",   text: "text-gray-800",   border: "border-gray-200" },
  "React":      { bg: "bg-cyan-50",   text: "text-cyan-700",   border: "border-cyan-200" },
  "Node.js":    { bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200" },
  "MongoDB":    { bg: "bg-green-50",  text: "text-green-800",  border: "border-green-300" },
  "Tailwind CSS":{ bg: "bg-cyan-50",  text: "text-cyan-800",   border: "border-cyan-300" },
  "TypeScript": { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200" },
  "Firebase":   { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "Flutter":    { bg: "bg-blue-50",   text: "text-blue-800",   border: "border-blue-300" },
  "PostgreSQL": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  "AWS":        { bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-300" },
  "Docker":     { bg: "bg-sky-50",    text: "text-sky-700",    border: "border-sky-200" },
  "Python":     { bg: "bg-yellow-50", text: "text-yellow-800", border: "border-yellow-300" },
}

export default function DetailTechStack({ project }: { project: Project }) {
  const { tags, accentColor } = project

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
            Built With
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Technologies <span className="gradient-text">Used</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Every technology was selected for a reason — performance, developer experience, and long-term maintainability.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {tags.map((tag, i) => {
            const colors = techColors[tag] ?? { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" }
            return (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border ${colors.bg} ${colors.border} shadow-sm cursor-default`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: accentColor }}
                />
                <span className={`text-sm font-bold ${colors.text}`}>{tag}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
