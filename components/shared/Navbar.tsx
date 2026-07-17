"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { HiMenu, HiX, HiChevronDown, HiMail } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  { label: "Web Development",          href: "/services/web-development" },
  { label: "App Development",          href: "/services/app-development" },
  { label: "Education App Dev",        href: "/services/education-app-development" },
  { label: "UI/UX Development",        href: "/services/ui-ux-development" },
  { label: "ERP Software Development", href: "/services/erp-software-development" },
  { label: "Digital Marketing",        href: "/services/digital-marketing" },
]

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services", dropdown: services },
  { label: "Projects", href: "/projects" },
  { label: "Career",   href: "/career" },
  { label: "Contact",  href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen]     = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const pathname = usePathname()
  const dropRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // close mobile on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 shadow-sm ring-1 ring-gray-100">
                <Image
                  src="/fevilogo.jpg"
                  alt="PRNexGen Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <span
                className="font-black text-xl tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #111827 0%, #374151 60%, #9ca3af 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PRNexGen
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href} className="relative" ref={dropRef}>
                    <button
                      onClick={() => setDropOpen(!dropOpen)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {link.label}
                      <HiChevronDown className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {dropOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl overflow-hidden shadow-xl"
                        >
                          {link.dropdown.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setDropOpen(false)}
                              className={`block px-4 py-3 text-sm font-medium transition-colors ${
                                pathname === s.href
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                              }`}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="mailto:prnexgen@yahoo.com"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <HiMail className="text-blue-500" />
                prnexgen@yahoo.com
              </a>
              <Link
                href="/contact"
                className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <HiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-80 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 shadow-sm ring-1 ring-gray-100">
                    <Image
                      src="/fevilogo.jpg"
                      alt="PRNexGen Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className="font-black text-xl"
                    style={{
                      background: "linear-gradient(135deg, #030712 0%, #1f2937 60%, #6b7280 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    PRNexGen
                  </span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                  <HiX size={22} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileServOpen(!mobileServOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                      >
                        {link.label}
                        <HiChevronDown className={`transition-transform ${mobileServOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive(link.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="p-4 border-t border-gray-100 space-y-3">
                <a href="mailto:prnexgen@yahoo.com" className="flex items-center gap-2 text-sm text-gray-500">
                  <HiMail className="text-blue-500" /> prnexgen@yahoo.com
                </a>
                <Link href="/contact" className="btn-gradient w-full py-3 rounded-xl text-sm font-semibold text-center block">
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
