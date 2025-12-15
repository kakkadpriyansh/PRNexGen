"use client"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Play, Code, Zap, Globe } from "lucide-react"

const ContactFormButton = dynamic(() => import("./contact-form-button"), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" aria-label="Hero section">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 text-blue-500/40 hidden lg:block">
          <Code size={40} />
        </div>
        <div className="absolute top-40 right-32 text-purple-500/40 hidden lg:block">
          <Zap size={35} />
        </div>
        <div className="absolute bottom-32 left-32 text-indigo-500/40 hidden lg:block">
          <Globe size={45} />
        </div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg">            
            Next-Gen Digital Solutions
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 mt-16 sm:mt-0" itemProp="headline">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="text-gray-800">
              Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light" itemProp="description">
            We craft{" "}
            <span className="font-semibold text-blue-600">
              cutting-edge digital solutions
            </span>{" "}
            that drive growth through AI, cloud technologies, and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <ContactFormButton />
            
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-lg">
              <Play className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}