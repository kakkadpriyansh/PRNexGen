"use client"

import { motion } from "framer-motion"
import { FiUsers, FiZap, FiCpu, FiShield, FiClock, FiHeart } from "react-icons/fi"

const features = [
  { icon: FiUsers,  title: "Experienced Team",      desc: "Senior engineers and designers with 4+ years of industry experience." },
  { icon: FiZap,    title: "Agile Development",     desc: "Rapid iterations with transparent communication and on-time delivery." },
  { icon: FiCpu,    title: "AI-Powered Solutions",  desc: "Cutting-edge AI and ML integration to automate and scale your business." },
  { icon: FiShield, title: "Secure Applications",   desc: "Enterprise-grade security practices built into every line of code." },
  { icon: FiClock,  title: "Fast Delivery",         desc: "Optimized workflows that get your product to market faster." },
  { icon: FiHeart,  title: "Long-Term Support",     desc: "Dedicated post-launch support and maintenance for your peace of mind." },
]

export default function HomeWhyUs() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">Why PRNexGen</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Why Companies <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver products that truly make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl btn-gradient flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
