"use client"

import { MessageSquare, Lightbulb, Code2, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    desc: "We listen to your goals, understand your audience, and define the project scope.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    desc: "We craft a detailed roadmap, choose the right tech stack, and set clear milestones.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Implementation",
    desc: "Our team designs and develops your product with precision, speed, and quality.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Final Result",
    desc: "We launch, test thoroughly, and provide ongoing support to ensure lasting success.",
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary text-sm font-semibold mb-3">
            <span className="opacity-60">{'//'}</span>
            Our Work Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Proven{" "}
            <span className="brand-gradient-text">Work Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-primary/30 z-0" />

          {steps.map(({ number, icon: Icon, title, desc }, i) => (
            <div key={number} className="process-step-card relative z-10 text-center">
              {/* Circle with number + icon */}
              <div className="process-circle mx-auto mb-5">
                <span className="process-step-num">{number}</span>
                <div className="process-icon-inner">
                  <Icon size={22} className="text-white" />
                </div>
              </div>

              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
