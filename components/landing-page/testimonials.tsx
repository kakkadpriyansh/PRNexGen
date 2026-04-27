"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Happy Feet Store",
    role: "E-Commerce Platform",
    content: "PRNexGen delivered a complete footwear e-commerce solution with an advanced admin panel. Our sales increased by 200% with their modern Next.js platform. Exceptional work!",
    rating: 5,
    avatar: "/happyfeet-ss.png",
  },
  {
    id: 2,
    name: "Avid Explorers",
    role: "Travel Booking Platform",
    content: "Exceptional full-stack travel website with a booking system and admin dashboard. Customer bookings improved dramatically with the responsive, intuitive design they built.",
    rating: 5,
    avatar: "/avid-photo.png",
  },
  {
    id: 3,
    name: "BDVH Education",
    role: "Teacher & Education Agency",
    content: "Professional education platform with role-based access and a comprehensive admin panel. PRNexGen streamlined our entire teacher-student management process beautifully.",
    rating: 5,
    avatar: "/bdvh-ss.png",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-pill mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            What Our Clients{" "}
            <span className="brand-gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our clients have to say about working with PRNexGen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card relative">
              <Quote
                size={40}
                className="absolute top-5 right-5 text-primary/10"
                strokeWidth={1}
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-secondary border border-border shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by businesses across industries</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Happy Feet", "Avid Explorers", "BDVH Institute"].map((brand) => (
              <span key={brand} className="text-lg font-bold text-foreground/50">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
