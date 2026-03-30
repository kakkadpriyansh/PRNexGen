"use client"

import { useState } from "react"
import { ExternalLink, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Happy Feet E-Commerce",
    category: "E-Commerce Platform",
    tech: ["Next.js", "React", "Node.js"],
    desc: "Modern footwear e-commerce with advanced admin panel, inventory management, and seamless checkout.",
    image: "/happyfeet-ss.png",
    liveUrl: "https://happy-feet.in/",
    features: ["Advanced Product Filtering", "Real-time Inventory", "Secure Payments", "Order Tracking", "Analytics Dashboard"],
  },
  {
    id: 2,
    title: "Avid Explorers Travel",
    category: "Travel Platform",
    tech: ["Next.js", "MongoDB", "Stripe"],
    desc: "Full-stack travel booking platform with itinerary management and complete admin dashboard.",
    images: [
      "/Avid Image/Screenshot 2026-02-17 171318.png",
      "/Avid Image/Screenshot 2026-02-17 171333.png",
      "/Avid Image/Screenshot 2026-02-17 171403.png",
      "/Avid Image/Screenshot 2026-02-17 171416.png",
    ],
    liveUrl: "https://dev.avidexplorers.in/",
    features: ["Smart Booking System", "Itinerary Builder", "Multi-currency", "Real-time Availability", "Review System"],
  },
  {
    id: 3,
    title: "BDVH Education Platform",
    category: "EdTech Platform",
    tech: ["Next.js", "PostgreSQL", "Auth"],
    desc: "Role-based education management system with dashboards for teachers, students, and admins.",
    images: [
      "/BDVH Software/Screenshot 2026-02-12 131730.png",
      "/BDVH Software/Screenshot 2026-02-12 131806.png",
      "/BDVH Software/Screenshot 2026-02-12 131937.png",
      "/BDVH Software/Screenshot 2026-02-12 132011.png",
    ],
    liveUrl: "https://crm.bdvhinstitute.com",
    features: ["Role-based Access", "Class Management", "Grade Tracking", "Attendance", "Performance Analytics"],
  },
  {
    id: 4,
    title: "BDVH Website CMS",
    category: "CMS Platform",
    tech: ["Next.js", "i18n", "REST API"],
    desc: "Custom CMS with inline on-page editing, bilingual i18n (English-Hindi), and role-based auth.",
    images: [
      "/BDVH image/Screenshot 2026-02-17 171904.png",
      "/BDVH image/Screenshot 2026-02-17 171921.png",
      "/BDVH image/Screenshot 2026-02-17 171945.png",
      "/BDVH image/Screenshot 2026-02-17 172013.png",
    ],
    liveUrl: "https://bdvh.prnexgen.in/",
    features: ["Inline Editing", "Bilingual i18n", "Role-based Auth", "Type-safe Architecture", "REST API"],
  },
]

type Project = typeof projects[0]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0)
  const images = project.images || (project.image ? [project.image] : [])

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
        >
          <X size={18} />
        </button>

        {images.length > 0 && (
          <div className="relative h-64 bg-secondary overflow-hidden rounded-t-2xl">
            <img src={images[imgIdx]} alt={project.title} className="w-full h-full object-contain" />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIdx((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setImgIdx((i) => (i + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === imgIdx ? "w-6 bg-primary" : "w-1.5 bg-white/50"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="section-pill text-xs mb-2 inline-flex">{project.category}</span>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm shrink-0"
              >
                Live Site <ExternalLink size={14} />
              </a>
            )}
          </div>
          <p className="text-muted-foreground mb-5 leading-relaxed">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                {t}
              </span>
            ))}
          </div>
          <h4 className="font-bold mb-3">Key Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [imgIndexes, setImgIndexes] = useState<Record<number, number>>({})

  const getImages = (p: Project) => p.images || (p.image ? [p.image] : [])

  const prev = (id: number, len: number) =>
    setImgIndexes((s) => ({ ...s, [id]: ((s[id] ?? 0) - 1 + len) % len }))
  const next = (id: number, len: number) =>
    setImgIndexes((s) => ({ ...s, [id]: ((s[id] ?? 0) + 1) % len }))

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-pill mb-4">Our Portfolio</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Work We're{" "}
            <span className="brand-gradient-text">Proud Of</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real projects, real results. Here's a glimpse of what we've built for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const images = getImages(project)
            const idx = imgIndexes[project.id] ?? 0
            return (
              <div key={project.id} className="project-card group">
                <div
                  className="relative h-56 bg-secondary cursor-pointer overflow-hidden"
                  onClick={() => setSelected(project)}
                >
                  {images.length > 0 && (
                    <img
                      src={images[idx]}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prev(project.id, images.length) }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-all hover:bg-background"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); next(project.id, images.length) }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-all hover:bg-background"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setImgIndexes((s) => ({ ...s, [project.id]: i })) }}
                            className={`h-1 rounded-full transition-all ${i === idx ? "w-5 bg-primary" : "w-1 bg-white/50"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/15">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelected(project)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      View Details <ArrowRight size={15} />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Live Site <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
