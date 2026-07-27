import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import EduAppContent from "@/components/services/EduAppContent"
import JsonLd from "@/components/shared/JsonLd"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you build a platform like Udemy or Coursera?",  acceptedAnswer: { "@type": "Answer", text: "Yes. We build custom e-learning platforms with course creation, video hosting, payments, and learner analytics — tailored to your brand and audience." } },
    { "@type": "Question", name: "Do you support live classes?",                      acceptedAnswer: { "@type": "Answer", text: "Yes. We integrate Zoom, Jitsi, or WebRTC for live sessions with recording, attendance, and chat features." } },
    { "@type": "Question", name: "Can students access content offline?",              acceptedAnswer: { "@type": "Answer", text: "Yes. Our mobile apps support offline content download so learners can study without an internet connection." } },
    { "@type": "Question", name: "Do you build for schools and coaching institutes?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We build multi-tenant platforms for schools, coaching centers, and corporate training with separate admin portals." } },
    { "@type": "Question", name: "Is payment integration included?",                  acceptedAnswer: { "@type": "Answer", text: "Yes. We integrate Stripe, Razorpay, or PayPal for one-time purchases, subscriptions, and installment plans." } },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our Education App Development Process",
  description: "PRNexGen's 7-step education app development process from discovery to post-launch support.",
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
  title: "Education App Development Services — PRNexGen | LMS & E-Learning",
  description:
    "Scalable e-learning platforms, LMS systems, and interactive educational apps built for modern learners. Gamification, video streaming, and analytics included.",
  keywords: [
    "education app development", "LMS development India", "e-learning platform",
    "online learning app", "educational software", "school app development",
    "PRNexGen education app", "EdTech development India",
  ],
  openGraph: {
    type: "website",
    title: "Education App Development — PRNexGen",
    description:
      "Scalable LMS and e-learning platforms with gamification, video streaming, and analytics — built for modern learners.",
    url: "https://prnexgen.in/services/education-app-development",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education App Development — PRNexGen",
    description:
      "Custom LMS, e-learning platforms, and educational apps for schools, colleges, and EdTech startups.",
  },
  alternates: { canonical: "/services/education-app-development" },
}


export default function EducationAppPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <Navbar />
      <main>
        <EduAppContent />
      </main>
      <Footer />
    </>
  )
}

