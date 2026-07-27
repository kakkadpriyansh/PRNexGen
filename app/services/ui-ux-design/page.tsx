import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import UIUXContent from "@/components/services/UIUXContent"
import JsonLd from "@/components/shared/JsonLd"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you deliver Figma source files?",               acceptedAnswer: { "@type": "Answer", text: "Yes. You receive fully organized Figma files with components, auto-layout, and developer handoff specs." } },
    { "@type": "Question", name: "Can you redesign an existing product?",            acceptedAnswer: { "@type": "Answer", text: "Absolutely. We audit your current UI/UX, identify pain points, and deliver a redesign that improves usability and aesthetics." } },
    { "@type": "Question", name: "Do you conduct user testing?",                     acceptedAnswer: { "@type": "Answer", text: "Yes. We run usability tests with real users and iterate on designs based on findings before final delivery." } },
    { "@type": "Question", name: "What is a design system?",                         acceptedAnswer: { "@type": "Answer", text: "A design system is a library of reusable components, tokens, and guidelines that ensure consistency across your entire product." } },
    { "@type": "Question", name: "Can your designs be handed off to any dev team?",  acceptedAnswer: { "@type": "Answer", text: "Yes. Our Figma files include all specs, assets, and documentation needed for any development team to implement accurately." } },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our UI/UX Design Process",
  description: "PRNexGen's 7-step UI/UX design process from discovery to post-launch support.",
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

export const metadata: Metadata = {
  title: "UI/UX Design Services — PRNexGen",
  description:
    "Pixel-perfect, user-centered UI/UX design services. We create design systems, prototypes, and interfaces that convert — using Figma, modern tooling, and user research.",
  keywords: [
    "UI UX design", "Figma design", "product design India", "web design services",
    "mobile app design", "design systems", "prototyping", "PRNexGen UI UX",
  ],
  openGraph: {
    type: "website",
    title: "UI/UX Design Services — PRNexGen",
    description:
      "Pixel-perfect, user-centered UI/UX design. Design systems, prototypes, and interfaces built to convert.",
    url: "https://prnexgen.in/services/ui-ux-design",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services — PRNexGen",
    description:
      "User-centered UI/UX design — Figma prototypes, design systems, and pixel-perfect interfaces.",
  },
  alternates: { canonical: "/services/ui-ux-design" },
}


export default function UIUXDesignPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <Navbar />
      <main>
        <UIUXContent />
      </main>
      <Footer />
    </>
  )
}
