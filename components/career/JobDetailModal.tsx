"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiX } from "react-icons/hi"
import { FiMapPin, FiBriefcase, FiMonitor, FiDollarSign, FiCheck } from "react-icons/fi"
import type { Job } from "./career-data"

interface Props {
  job: Job
  onClose: () => void
  onApply: () => void
}

export default function JobDetailModal({ job, onClose, onApply }: Props) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header banner */}
          <div className="relative h-36 rounded-t-3xl overflow-hidden" style={{ background: job.gradient }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">{job.department}</span>
              <h2 className="text-white font-black text-xl sm:text-2xl leading-tight">{job.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <HiX size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Quick meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: FiBriefcase, label: "Experience", val: job.experience },
                { icon: FiMonitor,   label: "Work Mode",  val: job.workMode },
                { icon: FiMapPin,    label: "Location",   val: job.location },
                { icon: FiDollarSign,label: "Salary",     val: job.salary },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-1">
                    <Icon size={12} style={{ color: job.accentColor }} /> {label}
                  </div>
                  <div className="text-xs font-bold text-gray-800">{val}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-black text-gray-900 text-base mb-2">About This Role</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <Section title="Key Responsibilities" accentColor={job.accentColor} items={job.responsibilities} />

            {/* Qualifications */}
            <Section title="Required Qualifications" accentColor={job.accentColor} items={job.qualifications} />

            {/* Benefits */}
            <Section title="What You Get" accentColor={job.accentColor} items={job.benefits} />

            {/* Skills */}
            <div>
              <h3 className="font-black text-gray-900 text-base mb-3">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gray-50 border"
                    style={{ borderColor: `${job.accentColor}30`, color: job.accentColor }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply button */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={onApply}
                className="flex-1 btn-gradient py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
              >
                Apply Now
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Section({ title, items, accentColor }: { title: string; items: string[]; accentColor: string }) {
  return (
    <div>
      <h3 className="font-black text-gray-900 text-base mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
            <FiCheck size={14} className="mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
