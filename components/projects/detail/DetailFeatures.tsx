"use client"

import { motion } from "framer-motion"
import { FiCheck } from "react-icons/fi"
import type { Project } from "../projects-data"

export default function DetailFeatures({ project }: { project: Project }) {
  const { detail, accentColor } = project

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
            What We Built
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Key <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Every feature was purpose-built to solve a real business need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {detail.features.map((feature, i) => {
            const [title, ...rest] = feature.split(" — ")
            const desc = rest.join(" — ")
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="glass-card rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
                >
                  <FiCheck size={16} />
                </div>
                <h3 className="font-black text-gray-900 text-sm mb-1">{title}</h3>
                {desc && <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
