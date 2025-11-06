"use client"
import { motion } from "framer-motion"
import { Code2, Zap, Cloud, Shield, ArrowRight, Smartphone, Brain, Server, Lock, Star } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Web & Mobile Development",
    description: "Custom applications built with cutting-edge technologies for exceptional performance and user experience.",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-500",
    features: ["React/Next.js", "Flutter/React Native", "Progressive Web Apps", "API Integration"],
    delay: 0
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Intelligent automation and AI solutions that transform business operations and drive innovation.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    features: ["Custom AI Models", "Process Automation", "Data Analytics", "Chatbots & NLP"],
    delay: 0.1
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps practices for reliable, secure, and efficient deployments.",
    icon: Server,
    gradient: "from-green-500 to-teal-500",
    features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
    delay: 0.2
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
    icon: Lock,
    gradient: "from-red-500 to-orange-500",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
    delay: 0.3
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5" />
            </motion.div>
            Our Expertise
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8"
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Services That Drive
            </span>
            <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
            >
              Digital Transformation
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We deliver comprehensive technology solutions that empower businesses to innovate, scale, and succeed in the digital age.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: service.delay, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                    animate={{
                      y: [0, -20, 0],
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
                      top: `${20 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Icon with animation */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg relative z-10`}
              >
                <service.icon className="w-10 h-10 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <motion.h3
                whileHover={{ x: 5 }}
                className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors relative z-10"
              >
                {service.title}
              </motion.h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Features with stagger animation */}
              <div className="space-y-3 mb-6 relative z-10">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: service.delay + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm text-gray-500"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                    />
                    <span className="group-hover:text-gray-700 transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Learn More Link */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer relative z-10 group/link"
              >
                Learn More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 group-hover/link:text-blue-700 transition-colors" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
            <span className="relative z-10">Explore All Services</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}