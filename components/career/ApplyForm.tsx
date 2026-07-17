"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiX, HiCheck } from "react-icons/hi"
import { FiUpload } from "react-icons/fi"
import { jobs } from "./career-data"

interface Props {
  defaultPosition?: string
  onClose: () => void
}

type FormState = "idle" | "submitting" | "success"

export default function ApplyForm({ defaultPosition = "", onClose }: Props) {
  const [state, setState] = useState<FormState>("idle")
  const [fileName, setFileName] = useState("")
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    setFileName(f ? f.name : "")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState("submitting")
    // Simulate async submission
    setTimeout(() => setState("success"), 1800)
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white transition-all"

  const labelCls = "block text-sm font-semibold text-gray-700 mb-1.5"

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
          className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white rounded-t-3xl px-6 sm:px-8 pt-6 pb-4 border-b border-gray-100 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-black text-gray-900 text-xl">Apply for a Position</h2>
              <p className="text-gray-500 text-sm mt-0.5">Fill in the details below and we&apos;ll get back to you within 5–7 business days.</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors flex-shrink-0 mt-0.5"
              aria-label="Close"
            >
              <HiX size={18} />
            </button>
          </div>

          {/* Success state */}
          {state === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5"
              >
                <HiCheck className="text-green-500" size={40} />
              </motion.div>
              <h3 className="font-black text-gray-900 text-2xl mb-3">Application Submitted!</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                Thank you for applying to PRNexGen. Our team will review your application and reach out within 5–7 business days.
              </p>
              <button onClick={onClose} className="btn-gradient px-8 py-3 rounded-xl font-semibold">
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Full Name <span className="text-red-500">*</span></label>
                  <input required type="text" placeholder="Rahul Sharma" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Email Address <span className="text-red-500">*</span></label>
                  <input required type="email" placeholder="rahul@example.com" className={inputCls} />
                </div>
              </div>

              {/* Row: Phone + Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Mobile Number <span className="text-red-500">*</span></label>
                  <input required type="tel" placeholder="+91 98765 43210" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Position Applying For <span className="text-red-500">*</span></label>
                  <select required defaultValue={defaultPosition} className={inputCls}>
                    <option value="" disabled>Select a position</option>
                    {jobs.map((j) => (
                      <option key={j.id} value={j.title}>{j.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row: Experience + Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Years of Experience <span className="text-red-500">*</span></label>
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select experience</option>
                    {["Fresher (0 years)", "Less than 1 year", "1 year", "2 years", "3 years", "4–5 years", "6+ years"].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Current Location <span className="text-red-500">*</span></label>
                  <input required type="text" placeholder="Rajkot, Gujarat" className={inputCls} />
                </div>
              </div>

              {/* Resume upload */}
              <div>
                <label className={labelCls}>Upload Resume <span className="text-red-500">*</span></label>
                <div
                  className="relative flex items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-blue-50/40 hover:border-blue-300 transition-all cursor-pointer"
                  onClick={() => fileRef.current?.click()}
                >
                  <FiUpload className="text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-500 font-medium">
                    {fileName ? fileName : "Click to upload — PDF, DOC, DOCX (max 5 MB)"}
                  </span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFile}
                    required
                  />
                </div>
              </div>

              {/* Optional fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>LinkedIn Profile <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="url" placeholder="https://linkedin.com/in/yourname" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Portfolio / GitHub <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="url" placeholder="https://github.com/yourname" className={inputCls} />
                </div>
              </div>

              {/* Cover letter */}
              <div>
                <label className={labelCls}>Cover Letter <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about yourself, why you want to join PRNexGen, and what makes you a great fit…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="flex-1 btn-gradient py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "submitting" ? "Submitting…" : "Submit Application"}
                </button>
                <button type="button" onClick={onClose}
                  className="px-6 py-3.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
