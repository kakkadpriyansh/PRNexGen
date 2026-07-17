"use client"

import { motion } from "framer-motion"
import { CATEGORIES, type ProjectCategory } from "./projects-data"

interface ProjectsFilterProps {
  active: ProjectCategory
  onChange: (cat: ProjectCategory) => void
  counts: Record<ProjectCategory, number>
}

const categoryIcons: Record<string, string> = {
  "All":              "🗂️",
  "Web Development":  "🌐",
  "Travel & Tourism": "✈️",
  "CRM":              "📊",
  "Education":        "🎓",
}

export default function ProjectsFilter({ active, onChange, counts }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
            }`}
          >
            {/* Animated gradient background for active pill */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full btn-gradient"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span>{categoryIcons[cat]}</span>
              {cat}
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {counts[cat]}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
