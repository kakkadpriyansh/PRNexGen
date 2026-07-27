import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import AboutHero from "@/components/about/AboutHero"
import AboutMission from "@/components/about/AboutMission"
import AboutTimeline from "@/components/about/AboutTimeline"
import AboutTeam from "@/components/about/AboutTeam"
import AboutValues from "@/components/about/AboutValues"

export const metadata: Metadata = {
  title: "About Us — PRNexGen | Our Story, Mission & Team",
  description:
    "Learn about PRNexGen's mission, vision, team, and journey as a leading AI-powered software development company based in Rajkot, Gujarat.",
  keywords: [
    "PRNexGen about", "software company India", "AI development team",
    "Rajkot tech company", "PRNexGen mission", "software development Gujarat",
  ],
  openGraph: {
    type: "website",
    title: "About Us — PRNexGen | Our Story, Mission & Team",
    description:
      "Meet the team behind PRNexGen — an AI-powered software development company on a mission to build intelligent digital products that transform businesses.",
    url: "https://prnexgen.in/about",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PRNexGen — AI-Powered Software Development",
    description:
      "Our story, mission, and the team building intelligent digital solutions from Rajkot, Gujarat.",
  },
  alternates: { canonical: "/about" },
}


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam />
      </main>
      <Footer />
    </>
  )
}
