"use client"
import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, Code, Zap, Globe } from "lucide-react"
import ContactFormButton from "./contact-form-button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
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
        className="absolute top-20 left-20 text-blue-500/30"
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32 text-purple-500/30"
        animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Zap size={35} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-32 text-indigo-500/30"
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Globe size={45} />
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg sm:mb-8 mb-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            Next-Gen Digital Solutions
          </motion.div>

          {/* Main heading with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 mt-16 sm:mt-0"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-pulse"
            >
              Transform
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-800"
            >
              Your Business
            </motion.span>
          </motion.h1>

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We craft{" "}
            <motion.span
              animate={{ color: ["#3B82F6", "#8B5CF6", "#6366F1", "#3B82F6"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-semibold"
            >
              cutting-edge digital solutions
            </motion.span>{" "}
            that drive growth through AI, cloud technologies, and innovation.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <ContactFormButton />
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Play className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
              </motion.div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-white/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
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