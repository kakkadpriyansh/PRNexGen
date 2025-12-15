import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "@/components/landing-page/styles.css"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PRNexGen - Innovating the Next Generation of Digital Solutions",
  description:
    "PRNexGen is an IT startup providing web & mobile app development, AI automation, cloud & DevOps solutions, and cybersecurity consulting. We help startups, enterprises, and businesses build scalable and future-ready technology.",
  icons: {
    icon: [{ url: "/fevilogo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/fevilogo.jpg" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
