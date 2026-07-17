"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { projectTestimonials } from "./projects-data"

export default function ProjectsTestimonials() {
  const [current, setCurrent] = useState(0)
  const total = projectTestimonials.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section className="section-pad bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Hear directly from the clients whose businesses we&apos;ve helped build and grow.
          </p>
        </motion.div>

        {/* ─── Desktop: 3-column grid ─── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projectTestimonials.map(({ name, role, company, review, rating, project }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <FiStar key={j} className="text-yellow-400 fill-yellow-400" size={15} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{review}&rdquo;
              </p>

              {/* Project tag */}
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                {project}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{name}</div>
                  <div className="text-xs text-gray-400">{role} · {company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Mobile: slider ─── */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
                className="glass-card border border-gray-100 rounded-2xl p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: projectTestimonials[current].rating }).map((_, j) => (
                    <FiStar key={j} className="text-yellow-400 fill-yellow-400" size={15} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{projectTestimonials[current].review}&rdquo;
                </p>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                  {projectTestimonials[current].project}
                </span>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white font-bold text-sm">
                    {projectTestimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{projectTestimonials[current].name}</div>
                    <div className="text-xs text-gray-400">
                      {projectTestimonials[current].role} · {projectTestimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all"
              aria-label="Previous"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {projectTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === current ? "w-6 btn-gradient" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all"
              aria-label="Next"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
