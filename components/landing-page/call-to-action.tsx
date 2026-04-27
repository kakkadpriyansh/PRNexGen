"use client"

import { ArrowRight, Rocket, MessageCircle } from "lucide-react"

export default function CallToAction() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 cta-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold mb-8">
          <Rocket size={15} />
          Ready to Get Started?
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Let&apos;s Build Your Next
          <br />
          <span className="text-white/80">Digital Project Together</span>
        </h2>

        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          From idea to launch — we&apos;re your end-to-end digital partner. Let&apos;s discuss your vision and create a roadmap for success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 bg-white text-primary rounded-full font-bold text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>
          <a
            href="tel:+919979993097"
            className="px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-semibold text-base hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
