"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HiExternalLink } from "react-icons/hi"
import { FiMapPin, FiBriefcase, FiMonitor } from "react-icons/fi"
import type { Job } from "./career-data"
import JobDetailModal from "./JobDetailModal"
import ApplyForm from "./ApplyForm"


interface Props { job: Job; index: number }

export default function JobCard({ job, index }: Props) {
  const [showDetail, setShowDetail] = useState(false)
  const [showApply,  setShowApply]  = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group glass-card rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
      >
        {/* Banner */}
        <div className="relative h-40 overflow-hidden" style={{ background: job.gradient }}>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
          {/* Shine */}
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

          {/* Department */}
          <div className="absolute bottom-3 left-4">
            <span className="text-white/80 text-xs font-semibold tracking-wide">{job.department}</span>
          </div>

          {/* Large faded title bg */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-white font-black text-5xl tracking-tighter whitespace-nowrap">{job.department}</span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <h3 className="font-black text-gray-900 text-xl leading-snug mb-4 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {[
              { icon: FiBriefcase, label: job.experience },
              { icon: FiMonitor,   label: job.workMode },
              { icon: FiMapPin,    label: job.location },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <Icon size={13} style={{ color: job.accentColor }} className="flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {job.skills.map((s) => (
              <span key={s}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-gray-50 border"
                style={{ borderColor: `${job.accentColor}30`, color: job.accentColor }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
            <button
              onClick={() => setShowDetail(true)}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              <HiExternalLink size={14} /> View Details
            </button>
            <button
              onClick={() => setShowApply(true)}
              className="flex-1 btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-shadow"
            >
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modals */}
      {showDetail && (
        <JobDetailModal
          job={job}
          onClose={() => setShowDetail(false)}
          onApply={() => { setShowDetail(false); setShowApply(true) }}
        />
      )}
      {showApply && (
        <ApplyForm
          defaultPosition={job.title}
          onClose={() => setShowApply(false)}
        />
      )}
    </>
  )
}
