"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { HiExternalLink } from "react-icons/hi"
import { FiArrowRight } from "react-icons/fi"
import type { Project } from "./projects-data"

interface ProjectCardProps {
  project: Project
  index: number
}

const categoryColors: Record<string, string> = {
  "Web Development":  "bg-blue-50 text-blue-600 border-blue-100",
  "Travel & Tourism": "bg-emerald-50 text-emerald-600 border-emerald-100",
  "CRM":              "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Education":        "bg-orange-50 text-orange-600 border-orange-100",
}

/** Returns true when the image string is a real URL / path rather than a CSS gradient */
function isImageUrl(src: string): boolean {
  return src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { name, shortDesc, category, tags, status, image, accentColor, liveUrl } = project
  const catColor = categoryColors[category] ?? "bg-gray-100 text-gray-600 border-gray-200"
  const useImg   = isImageUrl(image)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group glass-card rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
    >
      {/* ── 16 : 9 Image / Banner ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>

        {useImg ? (
          /* Real screenshot — zoom on hover */
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* CSS gradient placeholder — replace image field with a real path to upgrade */
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ background: image }}
          >
            {/* Dot-grid texture */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {/* Centred placeholder label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/60 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                Screenshot coming soon
              </span>
            </div>
          </div>
        )}

        {/* Status badge — top right */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
              status === "Completed"
                ? "bg-green-500/90 text-white"
                : "bg-amber-400/90 text-white"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status === "Completed" ? "bg-white" : "bg-white animate-pulse"
              }`}
            />
            {status}
          </span>
        </div>

        {/* Category badge — bottom left */}
        <div className="absolute bottom-3 left-3 z-10">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${catColor} backdrop-blur-sm shadow-sm`}
          >
            {category}
          </span>
        </div>

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">

        <h3 className="font-black text-gray-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
          {shortDesc}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-gray-50 border"
              style={{ borderColor: `${accentColor}30`, color: accentColor }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-blue-600 group/link transition-colors"
          >
            View Details
            <FiArrowRight
              className="group-hover/link:translate-x-1 transition-transform"
              size={15}
            />
          </Link>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold btn-gradient shadow-md hover:shadow-lg transition-shadow"
          >
            Visit Website <HiExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
