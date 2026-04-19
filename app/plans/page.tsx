"use client"

import { Check, Sparkles } from "lucide-react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

const plans = [
  {
    name: "Basic Plan",
    price: "₹3,000",
    description: "Best for stable websites",
    features: [
      "Bug fixes & issue resolution",
      "Technical support (working hours)",
      "Minor content updates (text/images)",
    ],
  },
  {
    name: "Standard Plan",
    price: "₹4,000",
    description: "For businesses needing small improvements",
    features: [
      "Everything in Basic Plan",
      "Up to 2 new features per month",
      "Performance optimization",
      "Monthly maintenance check",
    ],
  },
  {
    name: "Advanced Plan",
    price: "₹7,000",
    description: "For actively growing platforms",
    features: [
      "Everything in Standard Plan",
      "Up to 5 new features per month",
      "Priority support",
      "Backup management",
      "Performance improvements",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹12,000",
    description: "For complete technical + growth support",
    features: [
      "Everything in Advanced Plan",
      "Unlimited feature updates (fair usage applies)",
      "Dedicated priority support",
      "Fast turnaround time",
      "Regular system monitoring",
    ],
    bonus: [
      "Social media post guidance (2–4/month)",
      "Basic ad campaign assistance (Meta/Google setup help)",
      "Content suggestions (captions/ideas)",
      "Monthly growth/report insights",
    ],
  },
]

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      
      <section className="pt-20 pb-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--accent)/0.2)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--primary)/0.18)] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full section-pill text-sm font-semibold mb-8 shadow-lg">
              <Sparkles className="w-5 h-5" />
              Maintenance Plans
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-[hsl(var(--foreground))]">
              PRNEXGEN{" "}
              <span className="brand-gradient-text">
                Maintenance Plans
              </span>
            </h1>

            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. From basic maintenance to complete technical and growth support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="svc-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="text-2xl font-bold mb-3 text-[hsl(var(--foreground))]">{plan.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold brand-gradient-text">{plan.price}</span>
                  <span className="text-[hsl(var(--muted-foreground))]">/month</span>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">{plan.description}</p>
                
                <div className="space-y-3 mb-6">
                  <p className="font-semibold text-sm text-[hsl(var(--foreground))]">Includes:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2 text-sm text-[hsl(var(--foreground))]">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.bonus && (
                  <div className="pt-4 border-t border-[hsl(var(--border))]">
                    <p className="font-semibold text-sm mb-3 text-[hsl(var(--foreground))]">
                      + Digital Marketing Support (Basic):
                    </p>
                    <div className="space-y-2">
                      {plan.bonus.map((item, idx) => (
                        <div key={idx} className="flex gap-2 text-sm text-[hsl(var(--foreground))]">
                          <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/#contact"
              className="btn-primary text-base"
            >
              <Sparkles size={18} />
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
