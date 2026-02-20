"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Prevent flash on initial load
    document.documentElement.style.visibility = 'visible'
  }, [])

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={true}
      storageKey="prnexgen-theme"
    >
      {children}
    </NextThemesProvider>
  )
}
