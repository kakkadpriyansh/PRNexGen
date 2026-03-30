"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "What services does PRNexGen offer?",
    a: "We offer Website Development, Website Maintenance, App Development, Hosting Services, AI-Based Product Shoot, Meta Ads & SEO Marketing, and Graphic Designing — everything you need to build and grow your digital presence.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A simple website takes 2–4 weeks, a full e-commerce platform 6–10 weeks, and complex enterprise apps 3–6 months. We provide a detailed timeline during our initial consultation.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern stacks including Next.js, React, Node.js, TypeScript, React Native, Flutter, and cloud platforms like AWS and Vercel. Our stack is always chosen to best fit your project's needs.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible pricing — fixed-price for well-defined projects, time-and-materials for evolving scopes, and monthly retainers for ongoing work. Contact us for a free quote tailored to your project.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Absolutely. We offer maintenance plans that include updates, security patches, performance monitoring, and feature enhancements. We're your long-term digital partner, not just a one-time vendor.",
  },
  {
    q: "How do we get started?",
    a: "Simply fill out the contact form or call us directly. We'll schedule a free consultation to understand your requirements and provide a detailed proposal within 48 hours.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-pill mb-4">
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="brand-gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't find what you're looking for, just reach out.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/30"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-sm md:text-base">{q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180 text-primary" : ""}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0px", opacity: open === i ? 1 : 0 }}
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">Still have questions?</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
