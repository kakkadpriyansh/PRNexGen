"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi"
import type { Project } from "../projects-data"

function isImageUrl(src: string) {
  return src.startsWith("/") || src.startsWith("http")
}

export default function DetailGallery({ project }: { project: Project }) {
  const images = project.detail.gallery.filter(isImageUrl)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  if (images.length === 0) return null

  const prev = () => setLightboxIdx((i) => (i !== null ? (i - 1 + images.length) % images.length : null))
  const next = () => setLightboxIdx((i) => (i !== null ? (i + 1) % images.length : null))

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-sm font-semibold mb-4">
            Visual Showcase
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-500 text-sm">Click any image to zoom in</p>
        </motion.div>

        {/* Grid */}
        <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-zoom-in"
              style={{ aspectRatio: "16/10" }}
              onClick={() => setLightboxIdx(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.name} screenshot ${i + 1}`}
              onKeyDown={(e) => e.key === "Enter" && setLightboxIdx(i)}
            >
              <Image
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <FiZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={images[lightboxIdx]}
                  alt={`${project.name} full screenshot`}
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Controls */}
              <button
                onClick={() => setLightboxIdx(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <FiX size={18} />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg text-gray-700 hover:bg-white transition-all"
                    aria-label="Previous"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg text-gray-700 hover:bg-white transition-all"
                    aria-label="Next"
                  >
                    <FiChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                {lightboxIdx + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
