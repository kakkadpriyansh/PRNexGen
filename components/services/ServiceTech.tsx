"use client"

import TechCarousel from "@/components/shared/TechCarousel"

interface Tech {
  name: string
  color: string
}

export default function ServiceTech({ techs: _techs }: { techs: Tech[] }) {
  return (
    <TechCarousel
      sectionBg="bg-gray-50"
      title="Technologies We Use"
      subtitle="We pick the right tool for every job — battle-tested technologies that deliver performance, security, and scalability."
    />
  )
}
