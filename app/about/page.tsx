import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import AboutHero from "@/components/about/AboutHero"
import AboutMission from "@/components/about/AboutMission"
import AboutTimeline from "@/components/about/AboutTimeline"
import AboutTeam from "@/components/about/AboutTeam"
import AboutValues from "@/components/about/AboutValues"

export const metadata: Metadata = {
  title: "About Us — PRNexGen",
  description: "Learn about PRNexGen's mission, vision, team, and journey as a leading AI-powered software development company.",
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
