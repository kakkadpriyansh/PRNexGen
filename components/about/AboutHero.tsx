"use client"

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
          <span className="opacity-60">{"//"}</span> About PRNexGen
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          We Build{" "}
          <span className="brand-gradient-text">Digital Products</span>
          <br />That Matter
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A passionate team of developers, designers, and strategists based in Rajkot, Gujarat — turning ideas into scalable digital solutions since 2022.
        </p>
      </div>
    </section>
  )
}
