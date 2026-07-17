"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import { FiGrid } from "react-icons/fi"

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Link
        href="/contact"
        className="btn-gradient px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-2xl transition-shadow"
      >
        Get Started <HiArrowRight size={17} />
      </Link>
      <Link
        href="/services"
        className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-base hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/40 transition-all"
      >
        <FiGrid size={16} className="text-blue-500" /> Explore Services
      </Link>
    </motion.div>
  )
}
