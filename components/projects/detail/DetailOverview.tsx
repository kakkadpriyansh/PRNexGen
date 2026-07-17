"use client"

import { motion } from "framer-motion"
import { FiTarget, FiCheckCircle } from "react-icons/fi"
import type { Project } from "../projects-data"

export default function DetailOverview({ project }: { project: Project }) {
  const { detail } = project

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">Project Overview</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            The <span className="gradient-text">Full Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — narrative */}
          <div className="lg:col-span-2 space-y-8">

            {[
              { label: "Client Background",  text: detail.clientBackground,  pill: "bg-blue-50 text-blue-600" },
              { label: "Business Problem",   text: detail.businessProblem,   pill: "bg-red-50 text-red-600" },
              { label: "Our Solution",       text: detail.ourSolution,       pill: "bg-green-50 text-green-600" },
              { label: "Final Outcome",      text: detail.finalOutcome,      pill: "bg-purple-50 text-purple-600" },
            ].map(({ label, text, pill }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl border border-gray-100 p-6"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${pill}`}>{label}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Right — goals */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="glass-card rounded-2xl border border-gray-100 p-6 h-fit sticky top-24"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl btn-gradient flex items-center justify-center text-white">
                <FiTarget size={18} />
              </div>
              <h3 className="font-black text-gray-900 text-base">Project Goals</h3>
            </div>
            <ul className="space-y-3">
              {detail.projectGoals.map((goal, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <FiCheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {goal}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
