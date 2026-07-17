"use client"

const milestones = [
  { year: "2022", title: "Founded", desc: "PRNexGen was founded in Rajkot, Gujarat with a vision to deliver world-class digital solutions." },
  { year: "2023", title: "First 10 Clients", desc: "Delivered 10+ successful projects across web, mobile, and AI automation domains." },
  { year: "2024", title: "Team Expansion", desc: "Grew our team of specialists and launched dedicated service verticals for education and enterprise." },
  { year: "2025", title: "Next Generation", desc: "Scaling globally with AI-powered products and strategic partnerships across industries." },
]

export default function AboutTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-primary text-sm font-semibold mb-3">// Our Journey</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">How We Got Here</h2>
        </div>
        <div className="relative border-l-2 border-[#e0e7ff] pl-8 space-y-10">
          {milestones.map(({ year, title, desc }) => (
            <div key={year} className="relative">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] border-4 border-white shadow" />
              <div className="text-xs font-bold text-primary mb-1">{year}</div>
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
