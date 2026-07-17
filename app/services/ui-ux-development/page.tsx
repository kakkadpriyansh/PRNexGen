import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import UIUXContent from "@/components/services/UIUXContent"

export const metadata: Metadata = {
  title: "UI/UX Development — PRNexGen",
  description:
    "Professional UI/UX design and development services — wireframing, prototyping, design systems, and pixel-perfect interfaces using Figma and modern tooling.",
  keywords: [
    "UI UX design", "UI UX development", "Figma design", "product design India",
    "web design services", "mobile app design", "PRNexGen UI UX",
  ],
  alternates: { canonical: "/services/ui-ux-development" },
}

export default function UIUXDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <UIUXContent />
      </main>
      <Footer />
    </>
  )
}
