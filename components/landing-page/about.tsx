"use client"
import { motion } from "framer-motion"
import { Users, Award, Clock, Target, Lightbulb, Shield, Code } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in cutting-edge technologies",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Proven Results", 
    description: "15+ successful projects delivered across various industries",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your business never stops",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable outcomes and ROI", 
    color: "from-orange-500 to-red-500"
  }
]

const stats = [
  { number: "3+", label: "Years Experience", suffix: "", icon: Clock, color: "from-blue-500 to-cyan-500" },
  { number: "15+", label: "Projects Delivered", suffix: "", icon: Code, color: "from-purple-500 to-pink-500" },
  { number: "100", label: "Client Satisfaction", suffix: "%", icon: Award, color: "from-green-500 to-teal-500" },
  { number: "5", label: "Team Members", suffix: "", icon: Users, color: "from-orange-500 to-red-500" }
]

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
            >
              <Target className="w-4 h-4" />
              Why Choose PRNexGen
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">
                Transforming Ideas Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're your strategic partner in digital transformation, combining innovation with expertise to deliver solutions that drive real business growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}