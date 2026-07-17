"use client"

import { motion } from "framer-motion"
import { projects } from "./projects-data"
import ProjectCard from "./ProjectCard"

export default function ProjectsGrid() {
  return (
    <section id="projects-grid" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Projects That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Every project is built with precision, passion, and a relentless focus on results.
          </p>
        </motion.div>

        {/* ── Projects grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
