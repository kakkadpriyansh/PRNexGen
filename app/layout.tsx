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
  title: "PRNexGen - Web Development, Mobile Apps, AI Automation & Cloud Solutions",
  description:
    "Leading IT company specializing in custom web development, mobile app development, AI automation, cloud infrastructure, DevOps, and cybersecurity services. Transform your business with cutting-edge digital solutions.",
  keywords: [
    "web development",
    "mobile app development",
    "AI automation",
    "cloud solutions",
    "DevOps services",
    "cybersecurity",
    "IT consulting",
    "custom software development",
    "digital transformation",
    "enterprise solutions",
    "startup technology",
    "cloud infrastructure",
    "API development",
    "UI/UX design",
    "full stack development"
  ],
  authors: [{ name: "PRNexGen" }],
  creator: "PRNexGen",
  publisher: "PRNexGen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prnexgen.com",
    title: "PRNexGen - Web Development, Mobile Apps, AI Automation & Cloud Solutions",
    description: "Leading IT company specializing in custom web development, mobile app development, AI automation, cloud infrastructure, DevOps, and cybersecurity services.",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRNexGen - Web Development, Mobile Apps, AI Automation & Cloud Solutions",
    description: "Leading IT company specializing in custom web development, mobile app development, AI automation, cloud infrastructure, DevOps, and cybersecurity services.",
  },
  icons: {
    icon: [{ url: "/fevilogo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/fevilogo.jpg" }],
  },
  metadataBase: new URL("https://prnexgen.com"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
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
