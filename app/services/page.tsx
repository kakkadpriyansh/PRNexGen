import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ServicesMain from "@/components/services/ServicesMain"

export const metadata: Metadata = {
  title: "Services — PRNexGen",
  description: "Explore PRNexGen's full range of software development services: web, mobile, education apps, and UI/UX design.",
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
