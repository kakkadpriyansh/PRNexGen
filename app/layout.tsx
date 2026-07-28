import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import JsonLd from "@/components/shared/JsonLd"
import "@/components/landing-page/styles.css"
import "./globals.css"

/* ── Display & Body — Plus Jakarta Sans (closest public match to Google Sans Flex) ── */
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

/* ── Labels & Technical metadata — JetBrains Mono ── */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
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
    url: "https://prnexgen.in",
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
  metadataBase: new URL("https://prnexgen.in"),
  alternates: { canonical: "/" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "PRNexGen",
    url: "https://prnexgen.in",
    logo: "https://prnexgen.in/fevilogo.jpg",
    description:
      "PRNexGen is an AI-powered software development company specialising in web development, mobile apps, UI/UX design, ERP software, education apps, and digital marketing.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    telephone: "+919979993097",
    email: "prnexgen@yahoo.com",
    sameAs: [
      "https://www.linkedin.com/company/prnexgen",
      "https://www.instagram.com/prnexgen",
      "https://twitter.com/prnexgen",
      "https://www.facebook.com/prnexgen",
    ],
  }

  return (
    <html lang="en" className={`${jakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className={jakartaSans.className}>
        <JsonLd schema={orgSchema} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
