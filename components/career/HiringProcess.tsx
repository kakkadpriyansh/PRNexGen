"use client"

import { motion } from "framer-motion"
import { hiringSteps } from "./career-data"

export default function HiringProcess() {
  return (
    <section className="section-pad bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
            How We Hire
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Our <span className="gradient-text">Hiring Process</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Simple, fast, and transparent. Here&apos;s exactly what happens after you apply.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200" />

          <div className="grid grid-cols-6 gap-4">
            {hiringSteps.map(({ step, title, desc, icon }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-gray-100 shadow-lg flex flex-col items-center justify-center mb-4 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                  <span className="text-2xl">{icon}</span>
                  <span className="absolute -top-2 -right-1 w-6 h-6 rounded-full btn-gradient text-white text-[10px] font-black flex items-center justify-center shadow">
                    {step}
                  </span>
                </div>
                <h3 className="font-black text-gray-900 text-sm mb-1.5">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200" />

          <div className="space-y-8">
            {hiringSteps.map(({ step, title, desc, icon }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4"
              >
                {/* Dot */}
                <div className="absolute -left-10 w-9 h-9 rounded-full bg-white border-2 border-gray-100 shadow flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-lg">{icon}</span>
                </div>
                {/* Content */}
                <div className="glass-card rounded-2xl border border-gray-100 p-4 flex-1 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black gradient-text">{step}</span>
                    <h3 className="font-black text-gray-900 text-sm">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
