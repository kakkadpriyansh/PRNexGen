"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"

const faqs = [
  {
    q: "How quickly can you start on my project?",
    a: "We can typically start within 1–3 business days after the initial consultation and project agreement. For urgent projects, we can often begin immediately.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Absolutely. Every new project starts with a free, no-obligation consultation. We'll discuss your goals, technical requirements, timeline, and budget — with zero pressure.",
  },
  {
    q: "What information should I prepare before contacting you?",
    a: "Any details help — a rough idea of what you want to build, your target users, timeline, and budget range. Don't worry if you don't have everything sorted; we'll guide you through the discovery process.",
  },
  {
    q: "Which services does PRNexGen offer?",
    a: "We offer Web Development, Mobile App Development, UI/UX Design, Education App Development, AI Solutions, Meta Ads & SEO, and Hosting & Maintenance — end to end.",
  },
  {
    q: "How do you handle project pricing?",
    a: "Pricing is project-specific and depends on scope, complexity, and timeline. After understanding your requirements, we provide a detailed, transparent quote — no hidden charges.",
  },
  {
    q: "Can you work with clients outside India?",
    a: "Yes — we work with clients globally. Our team is experienced in remote collaboration across different time zones, and we communicate via email, Slack, and video calls.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and 24/7 emergency support based on your maintenance plan.",
  },
  {
    q: "What is the typical project timeline?",
    a: "Timelines vary by project type. A business website typically takes 2–4 weeks, a mobile app 6–12 weeks, and complex platforms 3–6 months. We provide a detailed timeline in every proposal.",
  },
]

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Have questions before reaching out? Here are the answers to the most common ones.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 transition-colors duration-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className={`font-bold text-sm sm:text-base transition-colors ${open === i ? "text-blue-600" : "text-gray-800"}`}>
                  {q}
                </span>
                <FiChevronDown
                  size={18}
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${open === i ? "rotate-180 text-blue-500" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm mb-3">Still have questions?</p>
          <a
            href="mailto:prnexgen@yahoo.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
          >
            Email Us Directly
          </a>
        </motion.div>
      </div>
    </section>
  )
}
