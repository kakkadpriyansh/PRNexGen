"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to show based on theme
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <Link href="/" className="flex items-center justify-center mb-4">
          {mounted ? (
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">PRNexGen</div>
          ) : (
            <div className="h-12 w-[200px]" />
          )}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-4">
          Innovating the Next Generation of Digital Solutions
        </p>

        <div className="text-sm text-gray-600 dark:text-gray-400 mb-6 space-y-1">
          <p>📧 prnexgen@yahoo.com</p>
          <p>📱 +91 99799 93097 | +91 84016 61887</p>
          <p>📍 Rajkot, Gujarat, India</p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 PRNexGen. All rights reserved.</p>
      </div>
    </footer>
  )
}
