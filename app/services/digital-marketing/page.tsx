import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import DigitalMarketingContent from "@/components/services/DigitalMarketingContent"

export const metadata: Metadata = {
  title: "Digital Marketing Services — PRNexGen",
  description:
    "Data-driven digital marketing services — SEO, Meta Ads, Google Ads, social media marketing, email marketing, branding, and analytics for measurable ROI.",
  keywords: [
    "digital marketing India", "SEO services", "Meta Ads", "Google Ads",
    "social media marketing", "content marketing", "PRNexGen digital marketing",
  ],
  alternates: { canonical: "/services/digital-marketing" },
}

export default function DigitalMarketingPage() {
  return (
    <>
      <Navbar />
      <main>
        <DigitalMarketingContent />
      </main>
      <Footer />
    </>
  )
}
