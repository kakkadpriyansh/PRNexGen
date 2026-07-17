import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ContactHero from "@/components/contact/ContactHero"
import ContactSection from "@/components/contact/ContactSection"
import ContactWhyUs from "@/components/contact/ContactWhyUs"
import ContactFAQ from "@/components/contact/ContactFAQ"
import ContactCTA from "@/components/contact/ContactCTA"

export const metadata: Metadata = {
  title: "Contact PRNexGen — Get a Free Consultation",
  description:
    "Contact PRNexGen for web development, mobile apps, AI solutions, and UI/UX design. Based in Rajkot, Gujarat. Free consultation, fast response, expert team.",
  keywords: [
    "contact PRNexGen", "hire web developer India", "software development company Rajkot",
    "get a quote web development", "free consultation software", "mobile app development inquiry",
    "PRNexGen contact", "IT company Gujarat", "Next.js developer contact",
  ],
  openGraph: {
    type: "website",
    title: "Contact PRNexGen — Get a Free Consultation",
    description:
      "Let's discuss your next project. Get a free consultation from PRNexGen — India's premium software development company.",
    url: "https://prnexgen.com/contact",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PRNexGen — Free Consultation",
    description:
      "Reach out to PRNexGen for web, mobile, and AI development. Based in Rajkot, Gujarat. Response within 24 hours.",
  },
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
        <ContactWhyUs />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
