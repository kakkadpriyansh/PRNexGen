"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { projects } from "../projects-data"
import type { Project } from "../projects-data"

function isImageUrl(src: string) {
  return src.startsWith("/") || src.startsWith("http")
}

export default function DetailRelated({ current }: { current: Project }) {
  const related = projects.filter((p) => p.id !== current.id).slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            More Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Related <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((project, i) => {
            const useImg = isImageUrl(project.image)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {useImg ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: project.image }} />
                  )}
                  <div className="absolute inset-0 z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                </div>

                {/* Body */}
                <div className="p-5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wide mb-2 block"
                    style={{ color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-black text-gray-900 text-base mb-1 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group/link"
                  >
                    View Details
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
