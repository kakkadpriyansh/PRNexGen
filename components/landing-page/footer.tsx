"use client"

import { Mail, Phone, MapPin, ArrowUp, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Website Development",
  "Website Maintenance",
  "App Development",
  "Hosting Services",
  "AI-Based Product Shoot",
  "Meta Ads & SEO",
  "Graphic Designing",
]

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo("#home")} className="brand-mark text-2xl mb-4 block">
              PRNexGen
            </button>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Innovating the next generation of digital solutions. We transform businesses through cutting-edge technology.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} className="text-white/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/55 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-200" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/55 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-200" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:prnexgen@yahoo.com" className="flex items-start gap-3 text-white/55 hover:text-white transition-colors group">
                  <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm">prnexgen@yahoo.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919979993097" className="flex items-start gap-3 text-white/55 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm">+91 99799 93097</span>
                </a>
              </li>
              <li>
                <a href="tel:+919173473491" className="flex items-start gap-3 text-white/55 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm">+91 91734 73491</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/55">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm">Rajkot, Gujarat, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} PRNexGen. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("#home")}
            className="w-9 h-9 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
