"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "AI Solutions", href: "#services" },
      { name: "Cloud Services", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/start" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="footer-shell relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div data-float className="absolute -top-40 -right-40 w-80 h-80 bg-[hsl(var(--primary)/0.25)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div data-animate>
                <Link href="/" className="inline-block mb-6">
                  <div className="text-3xl brand-mark">
                    PRNexGen
                  </div>
                </Link>

                <p className="text-[hsl(36_10%_70%)] mb-6 max-w-md leading-relaxed">
                  Innovating the Next Generation of Digital Solutions. We transform businesses through cutting-edge technology and strategic innovation.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[hsl(36_10%_70%)]">
                    <Mail className="w-5 h-5 text-[hsl(var(--primary))]" />
                    <span>prnexgen@yahoo.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-[hsl(36_10%_70%)]">
                    <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                    <span>+91 99799 93097</span>
                  </div>
                  <div className="flex items-center gap-3 text-[hsl(36_10%_70%)]">
                    <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                    <span>+91 91734 73491</span>
                  </div>
                  <div className="flex items-center gap-3 text-[hsl(36_10%_70%)]">
                    <MapPin className="w-5 h-5 text-[hsl(var(--primary))]" />
                    <span>Rajkot, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links], index) => (
              <div
                key={category}
                data-animate
              >
                <h3 className="text-lg font-semibold mb-4 text-[hsl(36_24%_92%)]">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="footer-link transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[hsl(210_16%_16%)] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p data-animate className="text-[hsl(36_10%_70%)] center text-sm">
              © 2025 PRNexGen. All rights reserved.
            </p>

            <div className="hidden flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[hsl(210_20%_12%)] hover:bg-[hsl(var(--primary))] flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
