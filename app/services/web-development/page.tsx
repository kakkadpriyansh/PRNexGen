import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import WebDevContent from "@/components/services/WebDevContent"
import JsonLd from "@/components/shared/JsonLd"

export const metadata: Metadata = {
  title: "Web Development Services — PRNexGen | Next.js & React Experts",
  description:
    "Custom web development services using Next.js, React, and modern cloud infrastructure. Build fast, scalable, and SEO-optimized web applications with PRNexGen.",
  keywords: [
    "web development India", "Next.js development", "React development",
    "custom web application", "SEO website development", "PRNexGen web development",
    "full stack web development", "web development Rajkot",
  ],
  openGraph: {
    type: "website",
    title: "Web Development Services — PRNexGen",
    description:
      "Custom web apps built with Next.js, React, and modern cloud infrastructure — fast, scalable, and SEO-optimized.",
    url: "https://prnexgen.in/services/web-development",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services — PRNexGen",
    description:
      "Next.js, React, and full-stack web development for startups and enterprises. Fast, scalable, SEO-ready.",
  },
  alternates: { canonical: "/services/web-development" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a web project take?",
      acceptedAnswer: { "@type": "Answer", text: "A standard website takes 2–4 weeks. A complex web application with custom features typically takes 6–12 weeks depending on scope." },
    },
    {
      "@type": "Question",
      name: "Do you build e-commerce websites?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We build custom e-commerce solutions with payment integration, inventory management, and admin dashboards." },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Every website we build is fully responsive and tested across all major devices and browsers." },
    },
    {
      "@type": "Question",
      name: "Do you provide CMS integration?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We integrate with headless CMS platforms like Contentful, Sanity, or Strapi so you can manage content without touching code." },
    },
    {
      "@type": "Question",
      name: "What about website maintenance?",
      acceptedAnswer: { "@type": "Answer", text: "We offer monthly maintenance plans covering security updates, performance monitoring, backups, and content updates." },
    },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our Web Development Process",
  description: "PRNexGen's 7-step web development process from discovery to post-launch support.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Discovery",              text: "Deep-dive into your goals, audience, and technical landscape to define the perfect solution." },
    { "@type": "HowToStep", position: 2, name: "Planning",               text: "Translate insights into a concrete roadmap with milestones, timelines, and resource allocation." },
    { "@type": "HowToStep", position: 3, name: "UI/UX Design",           text: "Craft pixel-perfect wireframes, design systems, and interactive prototypes before any code is written." },
    { "@type": "HowToStep", position: 4, name: "Development",            text: "Agile sprints with weekly demos, code reviews, and continuous integration across the full stack." },
    { "@type": "HowToStep", position: 5, name: "Testing & QA",           text: "Rigorous multi-layer testing to ensure your product is fast, secure, and bug-free before launch." },
    { "@type": "HowToStep", position: 6, name: "Deployment",             text: "Zero-downtime production deployment with cloud configuration, CI/CD pipelines, and server hardening." },
    { "@type": "HowToStep", position: 7, name: "Support & Maintenance",  text: "Dedicated post-launch support, performance monitoring, and iterative improvements." },
  ],
}

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <Navbar />
      <main>
        <WebDevContent />
      </main>
      <Footer />
    </>
  )
}

