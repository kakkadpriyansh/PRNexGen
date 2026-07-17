import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import EduAppContent from "@/components/services/EduAppContent"

export const metadata: Metadata = {
  title: "Education App Development — PRNexGen",
  description: "Scalable e-learning platforms, LMS systems, and interactive educational apps built for modern learners.",
}

export default function EducationAppPage() {
  return (
    <>
      <Navbar />
      <main>
        <EduAppContent />
      </main>
      <Footer />
    </>
  )
}
