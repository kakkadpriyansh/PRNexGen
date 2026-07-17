"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu, X, ChevronDown, Mail, Globe, Smartphone, Palette,
  Wrench, Camera, BarChart3, Server, ArrowRight, Sparkles,
} from "lucide-react"

const serviceItems = [
  { label: "Website Development",   icon: Globe,       href: "#services" },
  { label: "Mobile App Development",icon: Smartphone,  href: "#services" },
  { label: "UI/UX Design",          icon: Palette,     href: "#services" },
  { label: "Website Maintenance",   icon: Wrench,      href: "#services" },
  { label: "AI Product Shoot",      icon: Camera,      href: "#services" },
  { label: "Meta Ads & SEO",        icon: BarChart3,   href: "#services" },
  { label: "Hosting Services",      icon: Server,      href: "#services" },
]

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services", hasDropdown: true },
  { label: "Projects",     href: "#projects" },
  { label: "Plans",        href: "/plans",    external: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [dropOpen,    setDropOpen]    = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const scrollTo = (href: string, external?: boolean) => {
    setMobileOpen(false)
    setDropOpen(false)
    if (external) { window.location.href = href; return }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-light`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="brand-mark text-xl shrink-0">
              PRNexGen
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href} className="relative" ref={dropRef}>
                    <button
                      onClick={() => setDropOpen(!dropOpen)}
                      className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-150"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown */}
                    {dropOpen && (
                      <div className="nav-dropdown">
                        {serviceItems.map(({ label, icon: Icon, href }) => (
                          <button
                            key={label}
                            onClick={() => scrollTo(href)}
                            className="nav-dropdown-item w-full text-left"
                          >
                            <span className="nav-dropdown-icon">
                              <Icon size={14} />
                            </span>
                            {label}
                          </button>
                        ))}
                        <div className="mt-1 pt-1 border-t border-gray-100">
                          <button
                            onClick={() => scrollTo("#contact")}
                            className="nav-dropdown-item w-full text-left text-primary font-semibold"
                          >
                            <span className="nav-dropdown-icon bg-primary/10">
                              <ArrowRight size={14} />
                            </span>
                            Get a Free Quote
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href, link.external)}
                    className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-150"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* Right side — email + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:prnexgen@yahoo.com"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
              >
                <Mail size={14} className="text-primary" />
                prnexgen@yahoo.com
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary text-sm px-5 py-2.5 rounded-xl"
              >
                <Sparkles size={14} />
                Let&apos;s Talk
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="mobile-menu-panel flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="brand-mark text-lg">PRNexGen</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Email */}
            <div className="px-5 py-3 border-b border-gray-100">
              <a
                href="mailto:prnexgen@yahoo.com"
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <Mail size={14} className="text-primary" />
                prnexgen@yahoo.com
              </a>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-0.5">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServOpen(!mobileServOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`text-gray-400 transition-transform duration-200 ${mobileServOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServOpen && (
                      <div className="pl-4 pb-1 space-y-0.5">
                        {serviceItems.map(({ label, icon: Icon, href }) => (
                          <button
                            key={label}
                            onClick={() => scrollTo(href)}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-all"
                          >
                            <Icon size={14} className="text-primary/70" />
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href, link.external)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-all"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary w-full justify-center rounded-xl py-3"
              >
                <Sparkles size={15} />
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
