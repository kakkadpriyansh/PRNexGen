"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "next-themes"
import NavDropdown from "./nav-dropdown"
import MobileMenu from "./mobile-menu"
import { resourcesDropdownData } from "./nav-data"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

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

  // Light mode -> logo-lightmode.png; Dark/others -> logo.png
  const logoSrc = mounted && resolvedTheme === "light" ? "/logo-lightmode.png" : "/logo.png"

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={handleLogoClick}>
              {mounted ? (
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt="PRNexGen Logo"
                  width={256}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
              ) : (
                <div className="h-16 w-[256px]" />
              )}
            </Link>

            <div className="flex items-center space-x-4">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li className="hidden md:block">
                    <NavDropdown
                      trigger="Resources"
                      items={resourcesDropdownData}
                      columns={2}
                      className={pathname.startsWith("/resources") ? "text-[#7A7FEE] dark:text-[#7A7FEE]" : ""}
                    />
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`transition-colors ${
                        pathname === "/portfolio"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start"
                      className={`transition-colors ${
                        pathname === "/start"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      Start Project
                    </Link>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
