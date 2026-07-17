import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import UIUXContent from "@/components/services/UIUXContent"

export const metadata: Metadata = {
  title: "UI/UX Design — PRNexGen",
  description: "Pixel-perfect, user-centered UI/UX design services. We create design systems, prototypes, and interfaces that convert.",
}

export default function UIUXDesignPage() {
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
