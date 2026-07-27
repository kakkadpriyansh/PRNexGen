import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import DigitalMarketingContent from "@/components/services/DigitalMarketingContent"
import JsonLd from "@/components/shared/JsonLd"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How soon will I see results from SEO?",                    acceptedAnswer: { "@type": "Answer", text: "SEO is a long-term strategy. You can expect meaningful traffic improvements in 3–6 months, with compounding results over 12+ months. Paid ads deliver results from day one." } },
    { "@type": "Question", name: "What is your minimum ad spend?",                          acceptedAnswer: { "@type": "Answer", text: "We recommend a minimum ad budget of ₹15,000–₹30,000/month for meaningful results. Our management fee is separate and based on campaign scope." } },
    { "@type": "Question", name: "Do you handle content creation?",                         acceptedAnswer: { "@type": "Answer", text: "Yes. Our team handles copywriting, graphic design, video scripts, and ad creatives — everything needed to run effective campaigns." } },
    { "@type": "Question", name: "Can you manage both Google and Meta Ads?",               acceptedAnswer: { "@type": "Answer", text: "Yes. We manage multi-platform campaigns with unified tracking, cross-channel attribution, and consolidated reporting." } },
    { "@type": "Question", name: "How do you measure success?",                            acceptedAnswer: { "@type": "Answer", text: "We define KPIs upfront (CPL, ROAS, organic traffic, keyword rankings, etc.) and provide monthly reports with full transparency on what's working and what's being optimized." } },
    { "@type": "Question", name: "Do you work with local and international businesses?",   acceptedAnswer: { "@type": "Answer", text: "Yes. We run campaigns for local businesses (hyper-targeted geo ads) as well as international brands (global SEO and multi-region ad campaigns)." } },
  ],
}

export const metadata: Metadata = {
  title: "Digital Marketing Services — PRNexGen",
  description:
    "Data-driven digital marketing services — SEO, Meta Ads, Google Ads, social media marketing, email marketing, branding, and analytics for measurable ROI.",
  keywords: [
    "digital marketing India", "SEO services", "Meta Ads", "Google Ads",
    "social media marketing", "content marketing", "PRNexGen digital marketing",
  ],
  alternates: { canonical: "/services/digital-marketing" },
  openGraph: {
    type: "website",
    title: "Digital Marketing Services — PRNexGen",
    description:
      "Data-driven SEO, Meta Ads, Google Ads, and social media marketing that grow your brand and drive qualified leads consistently.",
    url: "https://prnexgen.in/services/digital-marketing",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services — PRNexGen",
    description:
      "Meta Ads, Google Ads, SEO, and social media marketing for measurable ROI. Data-driven growth strategies.",
  },
}

export default function DigitalMarketingPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Navbar />
      <main>
        <DigitalMarketingContent />
      </main>
      <Footer />
    </>
  )
}
