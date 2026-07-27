import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ContactHero from "@/components/contact/ContactHero"
import ContactSection from "@/components/contact/ContactSection"
import ContactWhyUs from "@/components/contact/ContactWhyUs"
import ContactFAQ from "@/components/contact/ContactFAQ"
import ContactCTA from "@/components/contact/ContactCTA"
import JsonLd from "@/components/shared/JsonLd"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you start on my project?",                acceptedAnswer: { "@type": "Answer", text: "We can typically start within 1–3 business days after the initial consultation and project agreement. For urgent projects, we can often begin immediately." } },
    { "@type": "Question", name: "Do you offer a free consultation?",                      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Every new project starts with a free, no-obligation consultation. We'll discuss your goals, technical requirements, timeline, and budget — with zero pressure." } },
    { "@type": "Question", name: "What information should I prepare before contacting you?", acceptedAnswer: { "@type": "Answer", text: "Any details help — a rough idea of what you want to build, your target users, timeline, and budget range. Don't worry if you don't have everything sorted; we'll guide you through the discovery process." } },
    { "@type": "Question", name: "Which services does PRNexGen offer?",                    acceptedAnswer: { "@type": "Answer", text: "We offer Web Development, Mobile App Development, UI/UX Design, Education App Development, AI Solutions, Meta Ads & SEO, and Hosting & Maintenance — end to end." } },
    { "@type": "Question", name: "How do you handle project pricing?",                     acceptedAnswer: { "@type": "Answer", text: "Pricing is project-specific and depends on scope, complexity, and timeline. After understanding your requirements, we provide a detailed, transparent quote — no hidden charges." } },
    { "@type": "Question", name: "Can you work with clients outside India?",              acceptedAnswer: { "@type": "Answer", text: "Yes — we work with clients globally. Our team is experienced in remote collaboration across different time zones, and we communicate via email, Slack, and video calls." } },
    { "@type": "Question", name: "Do you provide post-launch support?",                   acceptedAnswer: { "@type": "Answer", text: "Yes. We offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and 24/7 emergency support based on your maintenance plan." } },
    { "@type": "Question", name: "What is the typical project timeline?",                 acceptedAnswer: { "@type": "Answer", text: "Timelines vary by project type. A business website typically takes 2–4 weeks, a mobile app 6–12 weeks, and complex platforms 3–6 months." } },
  ],
}

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
    url: "https://prnexgen.in/contact",
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
      <JsonLd schema={faqSchema} />
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
