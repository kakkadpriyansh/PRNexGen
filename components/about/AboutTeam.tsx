"use client"

const team = [
  { name: "Parth Rangani", role: "Founder & Full-Stack Developer", initials: "PR" },
  { name: "Neel Patel", role: "UI/UX Designer", initials: "NP" },
  { name: "Raj Shah", role: "Mobile App Developer", initials: "RS" },
  { name: "Krisha Mehta", role: "AI & Automation Engineer", initials: "KM" },
]

export default function AboutTeam() {
  return (
    <section className="py-20 bg-[#f9f8ff]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-primary text-sm font-semibold mb-3">{"//"} Our Team</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">The People Behind PRNexGen</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, initials }) => (
            <div key={name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {initials}
              </div>
              <h3 className="font-bold text-base mb-1">{name}</h3>
              <p className="text-muted-foreground text-sm">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
