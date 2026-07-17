"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: "🆓",
    title: "Free Consultation",
    desc: "Get a no-obligation consultation with our experts. We listen, assess your needs, and propose the best solution — completely free.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    desc: "We respond to every enquiry within 24 hours. For urgent projects, we can often get on a call the same day.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "🧠",
    title: "Expert Team",
    desc: "Work directly with experienced developers, designers, and strategists who have shipped 50+ projects across industries.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: "🛠️",
    title: "Custom Software Solutions",
    desc: "No cookie-cutter templates. Every product is built from scratch to perfectly match your business goals and user needs.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    desc: "Post-launch, we're always available. Our support team monitors your product round the clock and resolves issues fast.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: "🤝",
    title: "Trusted Development Partner",
    desc: "We don't just deliver code — we become your long-term technology partner, invested in your growth and success.",
    color: "from-sky-500 to-sky-600",
  },
]

export default function ContactWhyUs() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Why Contact <span className="gradient-text">PRNexGen?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            We&apos;re not just a vendor — we&apos;re a partner who cares about your outcome.
            Here&apos;s what makes working with us different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
