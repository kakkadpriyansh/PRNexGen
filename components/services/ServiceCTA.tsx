"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HiArrowRight, HiMail } from "react-icons/hi"

interface ServiceCTAProps {
  title?: string
  subtitle?: string
}

export default function ServiceCTA({
  title = "Ready to Start Your Project?",
  subtitle = "Let's discuss your requirements and build something amazing together.",
}: ServiceCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text">{title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gradient px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2">
              Contact Us Today <HiArrowRight />
            </Link>
            <a
              href="mailto:prnexgen@yahoo.com"
              className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:border-blue-400 hover:text-blue-300 transition-all flex items-center justify-center gap-2"
            >
              <HiMail /> prnexgen@yahoo.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
