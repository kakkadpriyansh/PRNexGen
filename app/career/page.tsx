import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import CareerHero from "@/components/career/CareerHero"
import CareerOpenings from "@/components/career/CareerOpenings"
import HiringProcess from "@/components/career/HiringProcess"
import CareerFAQ from "@/components/career/CareerFAQ"
import CareerCTA from "@/components/career/CareerCTA"

export const metadata: Metadata = {
  title: "Careers — PRNexGen | Join Our Team",
  description:
    "Explore career opportunities at PRNexGen. We're hiring a Business Development Executive and Full Stack Developer. 100% remote, flexible hours, and real growth.",
  keywords: [
    "PRNexGen careers", "jobs at PRNexGen", "full stack developer job India",
    "BDE internship remote", "remote software jobs India", "work from home tech jobs",
    "PRNexGen hiring", "React developer job", "Next.js developer job",
  ],
  openGraph: {
    type: "website",
    title: "Careers — PRNexGen | Join Our Team",
    description: "Build innovative digital solutions with PRNexGen. View open positions and apply today.",
    url: "https://prnexgen.com/career",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — PRNexGen | Join Our Team",
    description: "We're hiring! Full Stack Developer & BDE roles open. 100% remote.",
  },
  alternates: { canonical: "/career" },
}

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareerHero />
        <CareerOpenings />
        <HiringProcess />
        <CareerFAQ />
        <CareerCTA />
      </main>
      <Footer />
    </>
  )
}
