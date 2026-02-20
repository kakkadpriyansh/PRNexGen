"use client"
import { Users, Award, Clock, Target, Lightbulb, Shield, Code } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in cutting-edge technologies",
    tone: "tone-lagoon"
  },
  {
    icon: Award,
    title: "Proven Results", 
    description: "15+ successful projects delivered across various industries",
    tone: "tone-ember"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your business never stops",
    tone: "tone-olive"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable outcomes and ROI", 
    tone: "tone-cinder"
  }
]

const stats = [
  { number: "3+", label: "Years Experience", suffix: "", icon: Clock },
  { number: "15+", label: "Projects Delivered", suffix: "", icon: Code },
  { number: "100", label: "Client Satisfaction", suffix: "%", icon: Award },
  { number: "5", label: "Team Members", suffix: "", icon: Users }
]

export default function About() {
  return (
    <section className="py-20 bg-[hsl(var(--secondary))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-animate className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full section-pill text-sm font-medium">
              <Target className="w-4 h-4" />
              Why Choose PRNexGen
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-6 section-heading">
              <span className="text-[hsl(var(--foreground))]">
                Transforming Ideas Into
              </span>
              <br />
              <span className="accent">
                Digital Reality
              </span>
            </h2>

            <p className="text-xl mb-8 leading-relaxed section-copy">
              We&apos;re your strategic partner in digital transformation, combining innovation with expertise to deliver solutions that drive real business growth.
            </p>

            <div data-animate="stagger" className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-animate-child
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold stat-number mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 btn-primary shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          <div data-animate="stagger" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate-child
                className="surface-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.tone} mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-[hsl(var(--primary-foreground))]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
