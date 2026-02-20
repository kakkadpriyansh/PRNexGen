"use client"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Happy Feet Store",
    position: "E-Commerce Platform",
    content: "PRNexGen delivered a complete footwear e-commerce solution with advanced admin panel. Sales increased by 200% with their modern Next.js platform.",
    rating: 5,
    avatar: "/happyfeet-ss.png"
  },
  {
    id: 2,
    name: "Avid Explorers",
    position: "Travel Booking Platform",
    content: "Exceptional full-stack travel website with booking system and admin dashboard. Customer bookings improved dramatically with the responsive design.",
    rating: 5,
    avatar: "/avid-photo.png"
  },
  {
    id: 3,
    name: "BDVH Education",
    position: "Teacher & Education Agency",
    content: "Professional education platform with role-based access and comprehensive admin panel. Streamlined our entire teacher-student management process.",
    rating: 5,
    avatar: "/bdvh-ss.png"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full section-pill text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 section-heading">
            <span className="text-[hsl(var(--foreground))]">
              What Our Clients
            </span>
            <br />
            <span className="accent">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed section-copy">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
          </p>
        </div>

        <div data-animate="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-animate-child
              className="group relative surface-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-[hsl(var(--accent))]" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[hsl(var(--secondary))]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[hsl(var(--foreground))]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-animate className="text-center mt-16">
          <div className="relative soft-surface rounded-3xl p-8 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold accent mb-4">
                Let&apos;s Build Something Amazing Together
              </h3>
              
              <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-2xl mx-auto">
                Transform your vision into reality with our expert team. From concept to deployment, we&apos;re here to make it happen.
              </p>
              
              <a
                href="tel:+919979993097"
                className="inline-block px-8 py-4 border-2 border-[hsl(var(--primary)/0.4)] text-[hsl(var(--primary))] rounded-full font-semibold hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] transition-all duration-300"
              >
                Inquiry Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
