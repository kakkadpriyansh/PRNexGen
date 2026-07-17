import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import WebDevContent from "@/components/services/WebDevContent"

export const metadata: Metadata = {
  title: "Web Development — PRNexGen",
  description: "Custom web development services using Next.js, React, and modern cloud infrastructure. Build fast, scalable, and SEO-optimized web applications.",
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebDevContent />
      </main>
      <Footer />
    </>
  )
}
