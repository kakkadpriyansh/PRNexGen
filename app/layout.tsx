import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "@/components/landing-page/styles.css"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PRNexGen — AI-Powered Software Development Company",
  description:
    "PRNexGen is a premium software development company specializing in AI solutions, web development, mobile app development, and UI/UX design. Build your digital future with us.",
  keywords: [
    "software development", "web development", "app development", "AI solutions",
    "UI/UX design", "education app", "digital transformation", "PRNexGen", "Rajkot", "Gujarat",
  ],
  authors: [{ name: "PRNexGen" }],
  creator: "PRNexGen",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prnexgen.com",
    title: "PRNexGen — AI-Powered Software Development",
    description: "We build intelligent digital products that transform businesses.",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRNexGen — AI-Powered Software Development",
    description: "We build intelligent digital products that transform businesses.",
  },
  icons: {
    icon: [{ url: "/fevilogo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/fevilogo.jpg" }],
  },
  metadataBase: new URL("https://prnexgen.com"),
  alternates: { canonical: "/" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
