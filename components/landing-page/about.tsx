"use client"

import Image from "next/image"

const stats = [
  { number: "5+", label: "Team Members" },
  { number: "15+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image Collage */}
          <div className="about-collage relative">
            {/* Main large image */}
            <div className="about-img-main relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ai-content-generation-interface.jpg"
                alt="Our team"
                width={420}
                height={300}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Bottom row — two smaller images */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/modern-ecommerce-marketplace-interface.jpg"
                  alt="Business"
                  width={200}
                  height={160}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/data-dashboard.png"
                  alt="Technology"
                  width={200}
                  height={160}
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 about-badge">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <div className="text-xs font-bold">Trusted Agency</div>
                <div className="text-[10px] text-muted-foreground">Since 2022</div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold">
              <span className="opacity-60">{"//"}</span>
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Transforming{" "}
              <span className="brand-gradient-text">Ideas</span>
              <br />
              into Digital Reality
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We&apos;re a passionate team of developers, designers, and digital strategists based in Rajkot, Gujarat. We partner with startups and businesses to build scalable, beautiful digital products that deliver real results.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 py-4">
              {stats.map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-extrabold brand-gradient-text leading-none mb-1">{number}</div>
                  <div className="text-xs text-muted-foreground font-medium leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
