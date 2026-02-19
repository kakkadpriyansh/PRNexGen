"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Code, Smartphone, Globe, ChevronLeft, ChevronRight, Layout } from "lucide-react"
import Link from "next/link"
import ProjectModal from "./project-modal"

const projects = [
  {
    id: 1,
    title: "Happy Feet E-Commerce",
    description: "Modern footwear e-commerce platform with comprehensive admin panel for products, orders, and inventory management.",
    tech: "Next.js • React • Node.js",
    image: "/happyfeet-ss.png",
    gradient: "from-blue-500 to-cyan-500",
    icon: Smartphone,
    fullDescription: "Happy Feet is a comprehensive e-commerce solution built for modern footwear retailers. The platform features a sleek customer-facing storefront with advanced filtering, wishlist functionality, and seamless checkout process. The robust admin panel provides complete control over inventory, orders, customer management, and detailed analytics to drive business growth.",
    liveUrl: "https://happy-feet.in/",
    features: [
      "Advanced Product Filtering",
      "Real-time Inventory Management",
      "Secure Payment Integration",
      "Order Tracking System",
      "Customer Analytics Dashboard",
      "Mobile-Responsive Design"
    ],
    duration: "3 months",
    team: "4 developers",
    category: "E-Commerce Platform"
  },
  {
    id: 2,
    title: "Avid Explorers Travel",
    description: "Full-stack travel booking platform with itinerary management and complete admin dashboard for packages.",
    tech: "Next.js • MongoDB • Stripe",
    image: "/avid-photo.png",
    images: [
      "/Avid Image/Screenshot 2026-02-17 171318.png",
      "/Avid Image/Screenshot 2026-02-17 171333.png",
      "/Avid Image/Screenshot 2026-02-17 171403.png",
      "/Avid Image/Screenshot 2026-02-17 171416.png"
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: Globe,
    fullDescription: "Avid Explorers is a comprehensive travel platform that connects adventure seekers with unique travel experiences. The platform features intelligent booking systems, personalized itinerary creation, and seamless payment processing. Travel agencies can manage their packages, track bookings, and analyze customer preferences through the powerful admin dashboard.",
    liveUrl: "https://dev.avidexplorers.in/",
    features: [
      "Smart Booking System",
      "Custom Itinerary Builder",
      "Multi-currency Support",
      "Real-time Availability",
      "Travel Package Management",
      "Customer Review System"
    ],
    duration: "4 months",
    team: "5 developers",
    category: "Travel Platform"
  },
  {
    id: 3,
    title: "BDVH Education Platform",
    description: "Role-based education management system with dashboards for teachers, students, and administrative staff.",
    tech: "Next.js • PostgreSQL • Auth",
    image: "/bdvh-ss.png",
    images: [
      "/BDVH Software/Screenshot 2026-02-12 131730.png",
      "/BDVH Software/Screenshot 2026-02-12 131806.png",
      "/BDVH Software/Screenshot 2026-02-12 131937.png",
      "/BDVH Software/Screenshot 2026-02-12 132011.png",
      "/BDVH Software/Screenshot 2026-02-12 132751.png"
    ],
    gradient: "from-green-500 to-teal-500",
    icon: Code,
    fullDescription: "BDVH is a sophisticated education management platform designed to streamline academic operations. The system provides role-based access for teachers, students, and administrators, featuring comprehensive class management, assignment tracking, grade management, and communication tools. The platform enhances the educational experience through digital transformation.",
    liveUrl: "https://crm.bdvhinstitute.com",
    features: [
      "Role-based Access Control",
      "Class & Assignment Management",
      "Grade Tracking System",
      "Teacher-Student Communication",
      "Attendance Management",
      "Performance Analytics"
    ],
    duration: "5 months",
    team: "6 developers",
    category: "Education Platform"
  },
  {
    id: 4,
    title: "BDVH Website CMS",
    description: "Custom CMS website with inline on-page editing, bilingual i18n (English-Hindi), role-based authentication, and type-safe full-stack architecture.",
    tech: "Next.js • i18n • CMS",
    images: [
      "/BDVH image/Screenshot 2026-02-17 171904.png",
      "/BDVH image/Screenshot 2026-02-17 171921.png",
      "/BDVH image/Screenshot 2026-02-17 171945.png",
      "/BDVH image/Screenshot 2026-02-17 172013.png"
    ],
    gradient: "from-indigo-500 to-blue-500",
    icon: Layout,
    fullDescription: "BDVH Institute's custom CMS website features advanced inline on-page editing capabilities, allowing content managers to update website content in real-time. The platform supports bilingual content management with English-Hindi internationalization, role-based authentication for secure access control, and a type-safe full-stack architecture built with Next.js App Router and REST APIs for optimal performance and maintainability.",
    liveUrl: "https://bdvh.prnexgen.in/",
    features: [
      "Inline On-Page Editing",
      "Bilingual i18n (English-Hindi)",
      "Role-based Authentication",
      "Type-safe Architecture",
      "App Router Integration",
      "REST API Backend"
    ],
    duration: "3 months",
    team: "3 developers",
    category: "CMS Platform"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>(() => {
    const initial: {[key: number]: number} = {}
    projects.forEach(project => {
      if (project.images) {
        initial[project.id] = 0
      }
    })
    return initial
  })

  useEffect(() => {
    return () => {}
  }, [])

  const handlePrevImage = (projectId: number, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }))
  }

  const handleNextImage = (projectId: number, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }))
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-5 h-5" />
            </motion.div>
            Our Portfolio
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-gray-800">
              Explore Our
            </span>
            <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
            >
              Latest Projects
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From web and mobile applications to AI automation and cloud solutions, our work helps businesses scale smarter and achieve their digital goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-80 bg-gray-50 flex items-center justify-center cursor-pointer" onClick={() => setSelectedProject(project)}>
                {project.images ? (
                  <>
                    <motion.img
                      key={currentImageIndex[project.id] || 0}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                      className="max-w-full max-h-full object-contain pointer-events-none"
                    />
                    
                    {/* Carousel Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handlePrevImage(project.id, project.images!.length)
                        }}
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleNextImage(project.id, project.images!.length)
                        }}
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                      </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === (currentImageIndex[project.id] || 0)
                              ? 'bg-white w-8'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {project.tech}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer group/btn"
                >
                  <span>View Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:text-blue-700 transition-colors" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10">View All Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}