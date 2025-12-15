"use client"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Play, Code, Zap, Globe } from "lucide-react"

const ContactFormButton = dynamic(() => import("./contact-form-button"), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-20 left-20 text-blue-500/30 hidden lg:block"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32 text-purple-500/30 hidden lg:block"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={35} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-32 text-indigo-500/30 hidden lg:block"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe size={45} />
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg">            
            Next-Gen Digital Solutions
          </div>

          {/* Main heading with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 mt-16 sm:mt-0"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="text-gray-800">
              Your Business
            </span>
          </motion.h1>

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We craft{" "}
            <span className="font-semibold text-blue-600">
              cutting-edge digital solutions
            </span>{" "}
            that drive growth through AI, cloud technologies, and innovation.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ContactFormButton />
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg"
            >
              <Play className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  )
}