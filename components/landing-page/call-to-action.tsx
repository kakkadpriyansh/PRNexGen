"use client"
import { ArrowRight, Rocket, MessageCircle, Calendar } from "lucide-react"
import ContactFormButton from "./contact-form-button"

export default function CallToAction() {
  return (
    <section className="py-20 cta-shell relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div data-float className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div data-float className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div data-animate className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full cta-pill text-sm font-medium mb-8">
            <Rocket className="w-4 h-4" />
            Ready to Get Started?
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[hsl(var(--primary-foreground))] mb-6 leading-tight section-heading">
            Transform Your Business
            <br />
            <span className="text-[hsl(var(--primary-foreground)/0.7)]">With Technology</span>
          </h2>

          <p className="text-xl md:text-2xl cta-subtitle mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Let&apos;s discuss your project and create a roadmap for digital success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <ContactFormButton className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--primary-foreground))] text-[hsl(var(--primary))] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group" />
            
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full cta-outline hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm">
              <MessageCircle className="w-5 h-5" />
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div data-animate="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "Free Consultation",
                description: "Get expert advice on your project requirements"
              },
              {
                icon: Calendar,
                title: "Quick Response",
                description: "We respond to all inquiries within 24 hours"
              },
              {
                icon: Rocket,
                title: "Fast Delivery",
                description: "Agile development process for faster results"
              }
            ].map((feature, index) => (
              <div
                key={index}
                data-animate-child
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                  <feature.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                </div>
                <h3 className="text-lg font-semibold text-[hsl(var(--primary-foreground))] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--primary-foreground)/0.7)] text-sm">
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
