"use client"

import TechCarousel from "@/components/shared/TechCarousel"

interface Tech {
  name: string
  color: string
}

// ServiceTech keeps its original prop signature so existing service pages
// don't need changes — we just render the full carousel instead of pills.
// The `techs` prop is accepted but the carousel always shows the full stack.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ServiceTech({ techs }: { techs: Tech[] }) {
  return (
    <TechCarousel
      sectionBg="bg-gray-50"
      title="Technologies We Use"
      subtitle="We pick the right tool for every job — battle-tested technologies that deliver performance, security, and scalability."
    />
  )
}
