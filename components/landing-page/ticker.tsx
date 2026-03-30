"use client"

import { Asterisk } from "lucide-react"

const items = [
  "Website Development",
  "UX/UI Design",
  "Graphics Design",
  "App Development",
  "AI Product Shoot",
  "Meta Ads & SEO",
  "Hosting Services",
  "Website Maintenance",
]

export default function Ticker() {
  return (
    <div className="ticker-bar overflow-hidden py-4 relative">
      <div className="ticker-track flex gap-0 whitespace-nowrap">
        {/* Duplicate for seamless loop */}
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="ticker-item inline-flex items-center gap-3 px-6 text-sm font-semibold text-white uppercase tracking-wide shrink-0">
            <Asterisk size={16} className="text-white/60 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
