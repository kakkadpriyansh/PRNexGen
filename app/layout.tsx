import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "@/components/landing-page/styles.css"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PRNexGen — Web Development, App Development, AI & Digital Marketing",
  description:
    "PRNexGen is a premium IT agency offering website development, app development, hosting, AI-based product shoots, Meta Ads & SEO, and graphic designing. Build your digital future with us.",
  keywords: [
    "web development", "app development", "website maintenance", "hosting services",
    "AI product shoot", "Meta Ads", "SEO marketing", "graphic designing",
    "IT agency", "digital agency", "PRNexGen", "Rajkot", "Gujarat",
  ],
  authors: [{ name: "PRNexGen" }],
  creator: "PRNexGen",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prnexgen.com",
    title: "PRNexGen — Premium IT Agency",
    description: "We build digital experiences that grow your business.",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRNexGen — Premium IT Agency",
    description: "We build digital experiences that grow your business.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('prnexgen-theme')||'light';document.documentElement.classList.add(t)}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
