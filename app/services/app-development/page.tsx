import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import AppDevContent from "@/components/services/AppDevContent"

export const metadata: Metadata = {
  title: "App Development — PRNexGen",
  description: "Native and cross-platform mobile app development for iOS and Android using React Native and Flutter.",
}

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <AppDevContent />
      </main>
      <Footer />
    </>
  )
}
