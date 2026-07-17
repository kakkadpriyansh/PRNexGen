"use client"

import { motion } from "framer-motion"
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import type { Project } from "../projects-data"

export default function DetailChallenges({ project }: { project: Project }) {
  const { detail, accentColor } = project

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4">
            Problem & Solution
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Challenges &amp; <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Real problems we solved — and the technical decisions behind our solutions.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {detail.challenges.map(({ title, problem, solution }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Title bar */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)` }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
                >
                  <span className="text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-black text-gray-900 text-base">{title}</h3>
              </div>

              {/* Body */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiAlertCircle size={15} className="text-red-500 flex-shrink-0" />
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Challenge</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiCheckCircle size={15} className="text-green-500 flex-shrink-0" />
                    <span className="text-xs font-bold text-green-500 uppercase tracking-wide">Solution</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
