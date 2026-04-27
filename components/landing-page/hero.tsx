"use client"

import { ArrowRight, MoveRight } from "lucide-react"
import Ticker from "./ticker"

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero-dark relative overflow-hidden min-h-screen flex items-center pt-16">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-28 sm:py-16 lg:py-24">
        <div className="flex items-center justify-between gap-6 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase text-white/55">
          <div className="hidden sm:block">Rajkot, Gujarat</div>
          <div className="text-center">Web • Mobile • AI • Cloud</div>
          <div className="hidden sm:block">Worldwide</div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-4 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase text-white/60">
              <span className="h-px w-10 bg-primary/70" />
              Design • Build • Scale
            </div>

            <div className="mt-6 text-white/65 text-sm sm:text-base tracking-tight">
              For startups, founders, and growing businesses
            </div>

            <h1 className="mt-4 text-white font-extrabold tracking-tight leading-[0.98] sm:leading-[0.95] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Build Fast.
              <br />
              Scale Smart.
              <br />
              <span className="hero-accent-text">Deliver Results.</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <div className="max-w-md lg:ml-auto">
              <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-[42ch]">
                We design and develop high-performance web apps, AI solutions, and scalable systems that help startups and businesses grow faster.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="hero-btn-primary justify-center w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight size={17} />
                </button>

                <button
                  onClick={() => scrollTo("#projects")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:text-white hover:border-white/40 transition-all w-full sm:w-auto"
                >
                  See Our Work
                  <MoveRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.25em] uppercase text-white/45">
          <span>Performance First</span>
          <span>•</span>
          <span>Scalable Systems</span>
          <span>•</span>
          <span>Clean UX</span>
          <span>•</span>
          <span>Secure Architecture</span>
        </div>

        <div className="hidden lg:block absolute bottom-10 right-6">
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 w-[240px]">
            <div className="text-white font-extrabold text-lg leading-tight">
              50+ Projects Delivered
            </div>
            <div className="mt-4 space-y-2 text-white/70 text-sm">
              <div>10+ Industries</div>
              <div>95% Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Ticker />
      </div>
    </section>
  )
}
