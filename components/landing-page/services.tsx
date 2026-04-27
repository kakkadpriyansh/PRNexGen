"use client"

import { Globe, Wrench, Smartphone, Server, Camera, BarChart3, Palette, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, high-performance websites built with Next.js and React that convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces and user experiences that delight users and drive engagement.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Proactive maintenance plans with updates, security patches, backups, and 24/7 monitoring.",
  },
  {
    icon: Camera,
    title: "AI-Based Product Shoot",
    desc: "Studio-quality product photography powered by AI — stunning visuals without expensive shoots.",
  },
  {
    icon: BarChart3,
    title: "Meta Ads & SEO Marketing",
    desc: "Data-driven paid campaigns and organic SEO that put your brand in front of the right audience.",
  },
  {
    icon: Server,
    title: "Hosting Services",
    desc: "Reliable cloud hosting with 99.9% uptime, CDN, SSL, and expert DevOps management.",
  },
]

export default function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row — left title + right button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-primary text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.25em] uppercase mb-3">
              <span className="opacity-60">{'//'}</span>
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Solutions Designed to{" "}
              <span className="brand-gradient-text">Scale Your Business</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
              From MVPs to full-scale systems — we build fast, scalable, and future-ready solutions.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary shrink-0 self-start sm:self-auto"
          >
            Explore Our Solutions
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="svc-card group">
              {/* Icon box */}
              <div className="svc-icon-box mb-5">
                <Icon size={22} />
              </div>

              <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                {desc}
              </p>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
