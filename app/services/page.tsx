import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ServicesMain from "@/components/services/ServicesMain"

export const metadata: Metadata = {
  title: "Software Development Services — PRNexGen",
  description:
    "Explore PRNexGen's full range of software development services: web, mobile, education apps, ERP, digital marketing, and UI/UX design.",
  keywords: [
    "software development services", "web development India", "mobile app development",
    "UI UX design services", "education app development", "digital marketing India",
    "ERP software", "PRNexGen services",
  ],
  openGraph: {
    type: "website",
    title: "Software Development Services — PRNexGen",
    description:
      "From concept to launch — web, mobile, education, ERP, digital marketing, and design services built for modern businesses.",
    url: "https://prnexgen.in/services",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services — PRNexGen",
    description:
      "End-to-end digital services: web, mobile, education apps, ERP, UI/UX, and digital marketing.",
  },
  alternates: { canonical: "/services" },
}


export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesMain />
      </main>
      <Footer />
    </>
  )
}
