"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HiExternalLink, HiArrowLeft } from "react-icons/hi"
import { FiCheckCircle } from "react-icons/fi"
import type { Project } from "../projects-data"

const categoryColors: Record<string, string> = {
  "Web Development":  "bg-blue-50 text-blue-600 border-blue-100",
  "Travel & Tourism": "bg-emerald-50 text-emerald-600 border-emerald-100",
  "CRM":              "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Education":        "bg-orange-50 text-orange-600 border-orange-100",
}

function isImageUrl(src: string) {
  return src.startsWith("/") || src.startsWith("http")
}

export default function DetailHero({ project }: { project: Project }) {
  const { name, category, status, image, accentColor, liveUrl, clientName } = project
  const catColor = categoryColors[category] ?? "bg-gray-100 text-gray-600 border-gray-200"
  const useImg = isImageUrl(image)

  return (
    <section className="relative pt-24 pb-0 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
          >
            <HiArrowLeft size={16} /> Back to Projects
          </Link>
        </motion.div>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-5"
        >
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${catColor}`}>
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-100">
            <FiCheckCircle size={11} /> {status}
          </span>
          <span className="text-sm text-gray-400 font-medium">Client: <strong className="text-gray-700">{clientName}</strong></span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight"
        >
          {name}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8"
        >
          {project.longDesc}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gradient px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
          >
            Visit Live Website <HiExternalLink size={15} />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            Start Similar Project
          </Link>
        </motion.div>
      </div>

      {/* Full-width banner image */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          style={{ aspectRatio: "16/7" }}
        >
          {useImg ? (
            <Image
              src={image}
              alt={`${name} — project banner`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: image }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/50 font-bold text-xl tracking-widest uppercase">{name}</span>
              </div>
            </div>
          )}
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  )
}
