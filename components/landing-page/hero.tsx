"use client"

import { ArrowRight, MoveRight } from "lucide-react"
import Image from "next/image"

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="space-y-7">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold">
              <span className="text-primary opacity-70">{'//'}</span>
              Experience The Best IT Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
              Where Creativity
              <br />
              Meets{" "}
              <span className="hero-accent-text">Cutting-Edge</span>
              <br />
              Technology
            </h1>

            <p className="text-white/60 text-base leading-relaxed max-w-md">
              We build premium digital experiences — from blazing-fast websites to AI-powered products — that help your business grow and stand out.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo("#contact")}
                className="hero-btn-primary"
              >
                Explore More
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="hero-btn-ghost"
              >
                View All Services
                <MoveRight size={17} />
              </button>
            </div>
          </div>

          {/* Right — Image Collage */}
          <div className="relative">
            {/* Desktop version */}
            <div className="hero-collage hidden lg:block">
              {/* Main large image */}
              <div className="hero-img-main">
                <Image
                  src="/modern-office.png"
                  alt="Team working"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              </div>

              {/* Top-right small */}
              <div className="hero-img-tr">
                <Image
                  src="/business-technology-innovation.jpg"
                  alt="Innovation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-left small */}
              <div className="hero-img-bl">
                <Image
                  src="/tech-digital-abstract-blue.jpg"
                  alt="Technology"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="hero-badge-float">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Satisfaction</div>
                  <div className="text-[10px] text-white/60">Guaranteed Results</div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="hero-exp-badge">
                <div className="text-2xl font-extrabold text-white leading-none">3+</div>
                <div className="text-[10px] text-white/70 font-medium">Years of<br/>Excellence</div>
              </div>
            </div>

            {/* Mobile version - Simplified single image */}
            <div className="lg:hidden relative w-full h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src="/modern-office.png"
                alt="Team working"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
              
              {/* Mobile floating badges */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">100% Satisfaction</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center px-3 py-2 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg">
                  <div className="text-xl font-extrabold text-white leading-none">3+</div>
                  <div className="text-[9px] text-white/80 font-medium text-center">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
