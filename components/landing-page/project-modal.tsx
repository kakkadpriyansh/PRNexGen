"use client"
import { X, ExternalLink, Calendar, Users, Code, Zap } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tech: string
  image?: string
  images?: string[]
  tone: string
  fullDescription: string
  features: string[]
  duration: string
  team: string
  category: string
  liveUrl: string
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="surface-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="h-64 overflow-hidden">
            <img
              src={project.images ? project.images[0] : project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <Code className="w-4 h-4" />
              {project.category}
            </div>
            <h2 className="text-4xl font-semibold mb-2">{project.title}</h2>
            <p className="text-lg opacity-90">{project.tech}</p>
          </div>
        </div>

        <div className="p-8 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div>
                <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-4">Project Overview</h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                <h4 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 soft-surface rounded-xl">
                      <div className={`w-2 h-2 rounded-full ${project.tone}`} />
                      <span className="text-[hsl(var(--foreground))] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="soft-surface rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">Project Details</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                    <div>
                      <div className="text-sm text-[hsl(var(--muted-foreground))]">Duration</div>
                      <div className="font-medium text-[hsl(var(--foreground))]">{project.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                    <div>
                      <div className="text-sm text-[hsl(var(--muted-foreground))]">Team Size</div>
                      <div className="font-medium text-[hsl(var(--foreground))]">{project.team}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                    <div>
                      <div className="text-sm text-[hsl(var(--muted-foreground))]">Technology</div>
                      <div className="font-medium text-[hsl(var(--foreground))]">{project.tech}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 ${project.tone} text-[hsl(var(--primary-foreground))] rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
