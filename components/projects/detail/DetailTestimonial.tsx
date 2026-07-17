"use client"

import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"
import { FaQuoteLeft } from "react-icons/fa"
import type { Project } from "../projects-data"

export default function DetailTestimonial({ project }: { project: Project }) {
  const { testimonial } = project.detail
  const { accentColor } = project

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-600 text-sm font-semibold mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
            What the Client <span className="gradient-text">Said</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Background accent */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-10"
            style={{ background: accentColor }}
          />

          {/* Stars */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
          </div>

          {/* Quote icon */}
          <FaQuoteLeft size={36} className="text-blue-100 mb-4" />

          {/* Review text */}
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium mb-8 max-w-3xl">
            &ldquo;{testimonial.review}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}bb)` }}
            >
              {testimonial.avatar ?? testimonial.name[0]}
            </div>
            <div>
              <div className="font-black text-gray-900 text-base">{testimonial.name}</div>
              <div className="text-sm text-gray-500 mt-0.5">
                {testimonial.role} &middot; {testimonial.company}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
