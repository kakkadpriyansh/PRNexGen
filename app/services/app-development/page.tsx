import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import AppDevContent from "@/components/services/AppDevContent"
import JsonLd from "@/components/shared/JsonLd"

export const metadata: Metadata = {
  title: "Mobile App Development Services — PRNexGen | iOS & Android",
  description:
    "Native and cross-platform mobile app development for iOS and Android using React Native and Flutter. Seamless user experiences for startups and enterprises.",
  keywords: [
    "mobile app development India", "React Native development", "Flutter development",
    "iOS app development", "Android app development", "cross-platform app",
    "PRNexGen app development", "mobile app Rajkot",
  ],
  openGraph: {
    type: "website",
    title: "Mobile App Development — PRNexGen",
    description:
      "iOS and Android apps built with React Native and Flutter — native performance, seamless UX, and fast delivery.",
    url: "https://prnexgen.in/services/app-development",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development — PRNexGen",
    description:
      "Cross-platform iOS & Android apps with React Native and Flutter. Built for scale, delivered fast.",
  },
  alternates: { canonical: "/services/app-development" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you build for both iOS and Android?",        acceptedAnswer: { "@type": "Answer", text: "Yes. We use React Native or Flutter to build cross-platform apps that run natively on both iOS and Android from a single codebase." } },
    { "@type": "Question", name: "How long does app development take?",           acceptedAnswer: { "@type": "Answer", text: "A simple app takes 6–10 weeks. A feature-rich app with backend integration typically takes 3–5 months." } },
    { "@type": "Question", name: "Do you handle App Store submission?",           acceptedAnswer: { "@type": "Answer", text: "Yes. We handle the full submission process for both Apple App Store and Google Play Store, including screenshots and metadata." } },
    { "@type": "Question", name: "Can you integrate with our existing backend?",  acceptedAnswer: { "@type": "Answer", text: "Absolutely. We integrate with any REST or GraphQL API, and can also build a new backend if needed." } },
    { "@type": "Question", name: "What about app updates after launch?",          acceptedAnswer: { "@type": "Answer", text: "We offer maintenance plans for bug fixes, OS compatibility updates, and new feature development post-launch." } },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our Mobile App Development Process",
  description: "PRNexGen's 7-step mobile app development process from discovery to post-launch support.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Discovery",             text: "Deep-dive into your goals, audience, and technical landscape to define the perfect solution." },
    { "@type": "HowToStep", position: 2, name: "Planning",              text: "Translate insights into a concrete roadmap with milestones, timelines, and resource allocation." },
    { "@type": "HowToStep", position: 3, name: "UI/UX Design",          text: "Craft pixel-perfect wireframes, design systems, and interactive prototypes before any code is written." },
    { "@type": "HowToStep", position: 4, name: "Development",           text: "Agile sprints with weekly demos, code reviews, and continuous integration across the full stack." },
    { "@type": "HowToStep", position: 5, name: "Testing & QA",          text: "Rigorous multi-layer testing to ensure your product is fast, secure, and bug-free before launch." },
    { "@type": "HowToStep", position: 6, name: "Deployment",            text: "Zero-downtime production deployment with cloud configuration, CI/CD pipelines, and server hardening." },
    { "@type": "HowToStep", position: 7, name: "Support & Maintenance", text: "Dedicated post-launch support, performance monitoring, and iterative improvements." },
  ],
}

export default function AppDevelopmentPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <Navbar />
      <main>
        <AppDevContent />
      </main>
      <Footer />
    </>
  )
}

