"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Frequently Asked
          <span className="block text-blue-600 dark:text-blue-400">Questions</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Have questions about our services? Find answers to common questions about our IT solutions and how we can help
          your business.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-blue-600 dark:text-blue-400" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
