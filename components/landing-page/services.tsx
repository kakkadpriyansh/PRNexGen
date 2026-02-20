"use client"
import { Code2, Zap, Cloud, Shield, ArrowRight, Smartphone, Brain, Server, Lock, Star } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Web & Mobile Development",
    description: "Custom applications built with cutting-edge technologies for exceptional performance and user experience.",
    icon: Smartphone,
    tone: "tone-lagoon",
    features: ["React/Next.js", "Flutter/React Native", "Progressive Web Apps", "API Integration"],
    delay: 0
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Intelligent automation and AI solutions that transform business operations and drive innovation.",
    icon: Brain,
    tone: "tone-ember",
    features: ["Custom AI Models", "Process Automation", "Data Analytics", "Chatbots & NLP"],
    delay: 0.1
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps practices for reliable, secure, and efficient deployments.",
    icon: Server,
    tone: "tone-olive",
    features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
    delay: 0.2
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
    icon: Lock,
    tone: "tone-cinder",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
    delay: 0.3
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[hsl(var(--secondary))] relative overflow-hidden">
      <div className="absolute inset-0">
        <div data-float className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--accent)/0.2)] rounded-full blur-3xl" />
        <div data-float className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--primary)/0.18)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div data-animate className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full section-pill text-sm font-semibold mb-8 shadow-lg">
            <Zap className="w-5 h-5" />
            Our Expertise
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 section-heading">
            <span className="text-[hsl(var(--foreground))]">
              Services That Drive
            </span>
            <br />
            <span className="accent">
              Digital Transformation
            </span>
          </h2>
          
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed section-copy"
          >
            We deliver comprehensive technology solutions that empower businesses to innovate, scale, and succeed in the digital age.
          </p>
        </div>

        <div data-animate="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-animate-child
              className="group relative surface-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 ${service.tone} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${service.tone} mb-6 shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                <service.icon className="w-10 h-10 text-[hsl(var(--primary-foreground))]" />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              <div className="space-y-3 mb-6 relative z-10">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[hsl(var(--muted-foreground))]"
                  >
                    <div className={`w-2 h-2 rounded-full ${service.tone}`} />
                    <span className="group-hover:text-[hsl(var(--foreground))] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold cursor-pointer relative z-10 group/link">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/link:text-[hsl(var(--accent))] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div data-animate className="text-center">
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore All Services</span>
            <ArrowRight className="w-6 h-6 relative z-10" />
          </button>
        </div>
      </div>
    </section>
  )
}
