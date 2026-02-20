"use client"
import dynamic from "next/dynamic"
import { Play, Code, Zap, Globe } from "lucide-react"

const ContactFormButton = dynamic(() => import("./contact-form-button"), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden landing-hero" aria-label="Hero section">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 text-[hsl(var(--accent)/0.55)] hidden lg:block">
          <Code size={40} />
        </div>
        <div className="absolute top-40 right-32 text-[hsl(var(--primary)/0.5)] hidden lg:block">
          <Zap size={35} />
        </div>
        <div className="absolute bottom-32 left-32 text-[hsl(var(--foreground)/0.35)] hidden lg:block">
          <Globe size={45} />
        </div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto hero-stagger">
          {/* Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full hero-badge text-sm font-semibold mb-8 shadow-lg">
            Next-Gen Digital Solutions
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8 mt-16 sm:mt-0 hero-title" itemProp="headline">
            <span className="hero-title-accent">
              Transform
            </span>
            <br />
            <span className="hero-title-base">
              Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light hero-subtitle" itemProp="description">
            We craft{" "}
            <span className="font-semibold hero-highlight">
              cutting-edge digital solutions
            </span>{" "}
            that drive growth through AI, cloud technologies, and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <ContactFormButton />
            
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full btn-outline transition-all duration-200 backdrop-blur-sm shadow-lg">
              <Play className="w-6 h-6 group-hover:text-[hsl(var(--primary))] transition-colors" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl stat-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold stat-number mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[hsl(var(--muted-foreground))] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
