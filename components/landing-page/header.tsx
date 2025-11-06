"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center" onClick={handleLogoClick}>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  PRNexGen
                </div>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-8">
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li className="hidden md:block">
                    <NavDropdown
                      trigger="Resources"
                      items={resourcesDropdownData}
                      columns={2}
                      className={pathname.startsWith("/resources") ? "text-blue-600 dark:text-blue-400" : ""}
                    />
                  </li>
                  <li>
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Link
                        href="/portfolio"
                        className={`font-medium transition-all duration-300 ${
                          pathname === "/portfolio"
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Link
                        href="/start"
                        className={`font-medium transition-all duration-300 ${
                          pathname === "/start"
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        Start Project
                      </Link>
                    </motion.div>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center space-x-4">
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block"
                >
                  <Link
                    href="/start"
                    className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 md:hidden transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}