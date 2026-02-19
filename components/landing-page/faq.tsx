"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What services does PRNexGen offer?",
    answer:
      "We specialize in web & mobile app development, AI automation solutions, cloud & DevOps services, and cybersecurity consulting. Our team helps startups, enterprises, and businesses build scalable and future-ready technology.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple web applications might take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    id: 3,
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-leading technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, GCP), and AI/ML frameworks. Our tech stack is tailored to each project's specific requirements.",
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on project scope and requirements. We can work with fixed-price projects, time-and-materials engagements, or retainer-based arrangements. Contact us for a detailed quote.",
  },
  {
    id: 5,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive post-launch support including maintenance, bug fixes, performance optimization, and feature enhancements. We can establish support packages tailored to your needs.",
  },
  {
    id: 6,
    question: "How do we get started?",
    answer:
      "Simply reach out to us with your project details. We'll schedule a consultation to understand your requirements, discuss your vision, and provide a detailed proposal with timeline and cost estimates.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={false}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Find answers to common questions about our IT solutions and how we can help your business.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={false}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleItem(faq.id)}
                  className="flex justify-between items-center w-full text-left p-6 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  aria-expanded={openItem === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openItem === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 transition-colors ${
                        openItem === faq.id ? "text-blue-600 dark:text-blue-400" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      id={`faq-answer-${faq.id}`}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={false}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}