import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "@/components/landing-page/styles.css"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/ui/page-transition"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-fraunces",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('prnexgen-theme') || 'light';
                  document.documentElement.classList.add(theme);
                  document.documentElement.style.visibility = 'visible';
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${bricolageGrotesque.className} ${bricolageGrotesque.variable} ${fraunces.variable}`}>
        <ThemeProvider>
          <Suspense fallback={null}>
            <PageTransition>{children}</PageTransition>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
