"use client"

import { useState } from "react"
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
    <section id="faq" className="py-20 bg-[hsl(var(--secondary))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full section-pill text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 section-heading">
            <span className="text-[hsl(var(--foreground))]">
              Frequently Asked
            </span>
            <br />
            <span className="accent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed section-copy">
            Have questions about our services? Find answers to common questions about our IT solutions and how we can help your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="surface-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex justify-between items-center w-full text-left p-6 font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--primary)/0.08)]"
                  aria-expanded={openItem === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openItem === faq.id ? "rotate-180 text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
                    }`}
                  />
                </button>
                
                <div
                  id={`faq-answer-${faq.id}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openItem === faq.id ? "240px" : "0px", opacity: openItem === faq.id ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-animate className="text-center mt-16">
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 btn-primary shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
