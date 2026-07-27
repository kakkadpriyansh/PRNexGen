import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import CareerHero from "@/components/career/CareerHero"
import CareerOpenings from "@/components/career/CareerOpenings"
import HiringProcess from "@/components/career/HiringProcess"
import CareerFAQ from "@/components/career/CareerFAQ"
import CareerCTA from "@/components/career/CareerCTA"
import JsonLd from "@/components/shared/JsonLd"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are all positions fully remote?",        acceptedAnswer: { "@type": "Answer", text: "Yes — all current openings are 100% work-from-home. We believe great work can be done from anywhere." } },
    { "@type": "Question", name: "Do you offer internships for freshers?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Our BDE internship role is specifically designed for freshers and early-career professionals. High performers are considered for full-time roles." } },
    { "@type": "Question", name: "What is the hiring timeline?",          acceptedAnswer: { "@type": "Answer", text: "The entire process typically takes 1–2 weeks — from application to offer letter." } },
    { "@type": "Question", name: "What is the salary / stipend?",         acceptedAnswer: { "@type": "Answer", text: "Compensation is negotiable and based on your experience, skills, and the role. We aim to be competitive and fair." } },
    { "@type": "Question", name: "What tech stack does PRNexGen use?",    acceptedAnswer: { "@type": "Answer", text: "We work with Next.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, Tailwind CSS, and various AI/cloud platforms." } },
    { "@type": "Question", name: "Can I apply for multiple positions?",   acceptedAnswer: { "@type": "Answer", text: "Yes, you are welcome to apply for more than one position if you meet the requirements. Please submit a separate application for each role." } },
    { "@type": "Question", name: "How do I follow up on my application?", acceptedAnswer: { "@type": "Answer", text: "After submitting your application you will receive a confirmation email. If shortlisted, our team will reach out within 5–7 business days." } },
  ],
}

export const metadata: Metadata = {
  title: "Careers — PRNexGen | Join Our Team",
  description:
    "Explore career opportunities at PRNexGen. We're hiring a Business Development Executive and Full Stack Developer. 100% remote, flexible hours, and real growth.",
  keywords: [
    "PRNexGen careers", "jobs at PRNexGen", "full stack developer job India",
    "BDE internship remote", "remote software jobs India", "work from home tech jobs",
    "PRNexGen hiring", "React developer job", "Next.js developer job",
  ],
  openGraph: {
    type: "website",
    title: "Careers — PRNexGen | Join Our Team",
    description: "Build innovative digital solutions with PRNexGen. View open positions and apply today.",
    url: "https://prnexgen.in/career",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — PRNexGen | Join Our Team",
    description: "We're hiring! Full Stack Developer & BDE roles open. 100% remote.",
  },
  alternates: { canonical: "/career" },
}

export default function CareerPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Navbar />
      <main>
        <CareerHero />
        <CareerOpenings />
        <HiringProcess />
        <CareerFAQ />
        <CareerCTA />
      </main>
      <Footer />
    </>
  )
}
