import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ERPContent from "@/components/services/ERPContent"
import JsonLd from "@/components/shared/JsonLd"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does a custom ERP take to build?",   acceptedAnswer: { "@type": "Answer", text: "A core ERP with 4–5 modules typically takes 3–5 months. Larger enterprise systems with complex integrations can take 6–12 months." } },
    { "@type": "Question", name: "Can you migrate data from our existing system?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle complete data migration from Excel, legacy software, or any existing ERP — with validation, cleansing, and zero data loss." } },
    { "@type": "Question", name: "Will the ERP work on mobile devices?",         acceptedAnswer: { "@type": "Answer", text: "Yes. All our ERP solutions are built mobile-first with responsive web interfaces and optional native mobile apps for field staff." } },
    { "@type": "Question", name: "Can we add modules later?",                    acceptedAnswer: { "@type": "Answer", text: "Absolutely. Our modular architecture is designed for extensibility — you can add HR, CRM, manufacturing, or any custom module as your business grows." } },
    { "@type": "Question", name: "Is the ERP hosted on the cloud?",              acceptedAnswer: { "@type": "Answer", text: "Yes. We deploy on AWS or your preferred cloud provider with enterprise-grade security, automatic backups, and 99.9% uptime SLA." } },
    { "@type": "Question", name: "Do you provide training and support?",         acceptedAnswer: { "@type": "Answer", text: "Yes. We provide staff training, admin documentation, and ongoing support plans that include bug fixes, updates, and feature additions." } },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our ERP Development Process",
  description: "PRNexGen's 7-step ERP software development process from discovery to post-launch support.",
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
  title: "ERP Software Development — PRNexGen",
  description:
    "Custom ERP software development services — inventory management, HR & payroll, finance, CRM, and cloud-based enterprise solutions built for scale.",
  keywords: [
    "ERP software development", "custom ERP India", "inventory management system",
    "HR payroll software", "enterprise software development", "PRNexGen ERP",
  ],
  alternates: { canonical: "/services/erp-software-development" },
  openGraph: {
    type: "website",
    title: "ERP Software Development — PRNexGen",
    description:
      "Custom ERP solutions — inventory, HR, payroll, finance, CRM, and cloud-based enterprise platforms engineered for scale and security.",
    url: "https://prnexgen.in/services/erp-software-development",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Development — PRNexGen",
    description:
      "Custom ERP systems for inventory, HR, finance, and CRM. Built to scale. Delivered on time.",
  },
}

export default function ERPSoftwareDevelopmentPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <Navbar />
      <main>
        <ERPContent />
      </main>
      <Footer />
    </>
  )
}
