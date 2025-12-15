"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Code, Smartphone, Globe } from "lucide-react"
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
    gradient: "from-green-500 to-teal-500",
    icon: Code,
    fullDescription: "BDVH is a sophisticated education management platform designed to streamline academic operations. The system provides role-based access for teachers, students, and administrators, featuring comprehensive class management, assignment tracking, grade management, and communication tools. The platform enhances the educational experience through digital transformation.",
    liveUrl: "https://bdvh-education.vercel.app",
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
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <motion.div
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
                </motion.div>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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