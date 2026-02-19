"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, Users, Code, Zap } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tech: string
  image?: string
  images?: string[]
  gradient: string
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", bounce: 0.3 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <div className="h-64 overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                src={project.images ? project.images[0] : project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`} />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="absolute bottom-6 left-6 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
              >
                <Code className="w-4 h-4" />
                {project.category}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold mb-2"
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg opacity-90"
              >
                {project.tech}
              </motion.p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium text-gray-900">{project.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Team Size</div>
                        <div className="font-medium text-gray-900">{project.team}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Technology</div>
                        <div className="font-medium text-gray-900">{project.tech}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}