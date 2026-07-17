"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { jobs } from "./career-data"
import JobCard from "./JobCard"
import ApplyForm from "./ApplyForm"

export default function CareerOpenings() {
  const [showApply, setShowApply] = useState(false)

  return (
    <section id="openings" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Now Hiring
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Current <span className="gradient-text">Openings</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Explore our open positions and find the role that matches your skills and ambition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {jobs.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>

        {/* General apply CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see the right role? We&apos;re always open to talented people.
          </p>
          <button
            onClick={() => setShowApply(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            Send General Application
          </button>
        </motion.div>
      </div>

      {showApply && <ApplyForm onClose={() => setShowApply(false)} />}
    </section>
  )
}
