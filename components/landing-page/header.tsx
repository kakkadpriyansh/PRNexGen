"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"

import NavDropdown from "./nav-dropdown"
import MobileMenu from "./mobile-menu"
import { resourcesDropdownData } from "./nav-data"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
  }

  const logoSrc = "/logo-lightmode.png"

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-[hsl(var(--background)/0.92)] backdrop-blur-md shadow-lg border-b border-[hsl(var(--border))]" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity" onClick={handleLogoClick}>
              <div className="text-3xl brand-mark">
                PRNexGen
              </div>
            </Link>

            <div className="flex items-center space-x-8">
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li className="hidden md:block">
                    <NavDropdown
                      trigger="Resources"
                      items={resourcesDropdownData}
                      columns={2}
                      className={pathname.startsWith("/resources") ? "text-[hsl(var(--primary))]" : ""}
                    />
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`font-medium transition-colors duration-200 ${
                        pathname === "/portfolio"
                          ? "text-[hsl(var(--primary))]"
                          : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start"
                      className={`font-medium transition-colors duration-200 ${
                        pathname === "/start"
                          ? "text-[hsl(var(--primary))]"
                          : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                      }`}
                    >
                      Start Project
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center space-x-4">
                
                <Link
                  href="/start"
                  className="hidden md:inline-flex items-center btn-primary shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Started
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 rounded-lg bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--muted))] md:hidden transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6 text-[hsl(var(--foreground))]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
