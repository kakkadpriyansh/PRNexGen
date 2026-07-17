"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import { FiCalendar } from "react-icons/fi"

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Start Today
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            From idea to launch, PRNexGen delivers world-class digital products. Schedule a free
            consultation or get an instant quote — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:prnexgen@yahoo.com?subject=Free Consultation Request"
              className="btn-gradient px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <FiCalendar size={18} /> Schedule a Free Consultation
            </a>
            <Link
              href="#contact-section"
              className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:border-blue-400 hover:text-blue-300 transition-all flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get a Quote <HiArrowRight />
            </Link>
          </div>

          <p className="mt-8 text-gray-600 text-sm">
            Free consultation · No contracts · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
