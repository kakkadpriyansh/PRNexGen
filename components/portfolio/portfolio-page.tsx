"use client"

import { useState, useEffect } from "react"
import { Sparkles, ArrowRight } from "lucide-react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import type { PortfolioItem } from "@/utils/csv-parser"

interface PortfolioPageProps {
  initialData: PortfolioItem[]
}

const projects = [
  {
    id: 1,
    title: "Happy Feet E-Commerce",
    description: "Modern footwear e-commerce platform with comprehensive admin panel for products, orders, and inventory management.",
    tech: "Next.js • React • Node.js",
    image: "/happyfeet-ss.png",
    liveUrl: "https://happy-feet.in/",
    category: "E-Commerce"
  },
  {
    id: 2,
    title: "Avid Explorers Travel",
    description: "Full-stack travel booking platform with itinerary management and complete admin dashboard for packages.",
    tech: "Next.js • MongoDB • Stripe",
    image: "/avid-photo.png",
    liveUrl: "https://dev.avidexplorers.in/",
    category: "Travel Platform"
  },
  {
    id: 3,
    title: "BDVH Education Platform",
    description: "Role-based education management system with dashboards for teachers, students, and administrative staff.",
    tech: "Next.js • PostgreSQL • Auth",
    image: "/bdvh-ss.png",
    liveUrl: "https://bdvh-education.vercel.app",
    category: "Education"
  }
]

export default function PortfolioPage({ initialData: _initialData }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const categories = ["all", "E-Commerce", "Travel Platform", "Education"]
  const filteredProjects = activeFilter === "all" ? projects : projects.filter(project => project.category === activeFilter)

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      
      <section className="pt-20 pb-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div data-float className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--accent)/0.2)] rounded-full blur-3xl" />
          <div data-float className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--primary)/0.18)] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div data-animate className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full section-pill text-sm font-semibold mb-8 shadow-lg">
              <Sparkles className="w-5 h-5" />
              Our Work
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-[hsl(var(--foreground))]">
              Our{" "}
              <span className="accent">
                Portfolio
              </span>
            </h1>

            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and case studies. From web & mobile applications to AI automation and cloud solutions, our work helps businesses scale smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-animate className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg"
                    : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse rounded-3xl overflow-hidden bg-gray-200 h-96" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-animate="fade-in"
                  className="group relative surface-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[hsl(var(--border))] hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                        {project.tech}
                      </span>
                      
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold cursor-pointer group/btn"
                      >
                        <span>View Live</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
