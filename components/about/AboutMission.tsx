"use client"

export default function AboutMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-primary text-sm font-semibold mb-3">{"//"} Our Mission</div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
            Empowering Businesses Through <span className="brand-gradient-text">Technology</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our mission is to deliver high-quality, scalable software solutions that help businesses grow, automate, and compete in the digital age. We combine technical excellence with creative thinking to build products that users love.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe great software is built on clear communication, deep collaboration, and a relentless focus on outcomes — not just outputs.
          </p>
        </div>
        <div>
          <div className="text-primary text-sm font-semibold mb-3">{"//"} Our Vision</div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
            The Next Generation of <span className="brand-gradient-text">Digital Innovation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We envision a world where every business — from startups to enterprises — has access to world-class digital tools that drive real impact.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            PRNexGen is committed to staying at the forefront of AI, cloud, and mobile technologies to deliver tomorrow&apos;s solutions today.
          </p>
        </div>
      </div>
    </section>
  )
}
