"use client"

import { FiSearch, FiTrendingUp, FiTarget, FiMail, FiBarChart2, FiAward } from "react-icons/fi"
import ServiceHero from "./ServiceHero"
import ServiceFeatures from "./ServiceFeatures"
import ServiceProcess from "./ServiceProcess"
import ServiceTech from "./ServiceTech"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"

const features = [
  {
    icon: <FiSearch size={20} />,
    title: "Search Engine Optimization (SEO)",
    desc: "Technical SEO, on-page optimization, link building, and content strategy to rank higher and drive sustainable organic traffic.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: "Social Media Marketing",
    desc: "Data-driven content calendars, community management, and paid campaigns across Instagram, Facebook, LinkedIn, and more.",
  },
  {
    icon: <FiTarget size={20} />,
    title: "Google & Meta Ads (PPC)",
    desc: "High-ROI paid campaigns with precise audience targeting, A/B tested creatives, and continuous optimization to lower your CPL.",
  },
  {
    icon: <FiMail size={20} />,
    title: "Email Marketing",
    desc: "Automated drip campaigns, newsletters, and personalized sequences that nurture leads and increase customer lifetime value.",
  },
  {
    icon: <FiBarChart2 size={20} />,
    title: "Analytics & Reporting",
    desc: "Custom dashboards tracking CTR, conversions, ROAS, and all KPIs — with monthly strategy reviews and transparent reporting.",
  },
  {
    icon: <FiAward size={20} />,
    title: "Branding & Strategy",
    desc: "Brand identity, positioning, messaging frameworks, and go-to-market strategies that differentiate you in a crowded market.",
  },
]

const benefits = [
  "Measurable ROI on every campaign",
  "Transparent monthly reporting",
  "Dedicated account manager",
  "A/B tested ad creatives",
  "Audience research & targeting",
  "Competitor gap analysis",
  "SEO content strategy",
  "Lead generation funnels",
  "Brand awareness growth",
]

const process = [
  { num: "01", title: "Audit & Research",  desc: "We audit your current digital presence, analyse competitors, and identify your highest-value growth opportunities." },
  { num: "02", title: "Strategy",          desc: "A tailored multi-channel strategy with clear KPIs, budget allocation, and a 90-day execution roadmap." },
  { num: "03", title: "Execution",         desc: "Campaign setup, creative production, SEO implementation, and content publishing — all handled by our team." },
  { num: "04", title: "Optimise & Report", desc: "Continuous A/B testing, bid adjustments, and monthly strategy sessions with full transparency on results." },
]

const techs = [
  { name: "Google Analytics",      color: "border-orange-200 text-orange-700" },
  { name: "Google Search Console", color: "border-green-200 text-green-700" },
  { name: "Google Ads",            color: "border-blue-200 text-blue-700" },
  { name: "Meta Business Suite",   color: "border-blue-300 text-blue-800" },
  { name: "SEMrush",               color: "border-orange-300 text-orange-800" },
  { name: "Ahrefs",                color: "border-indigo-200 text-indigo-700" },
  { name: "Mailchimp",             color: "border-yellow-200 text-yellow-700" },
  { name: "HubSpot",               color: "border-orange-200 text-orange-800" },
  { name: "Canva",                 color: "border-purple-200 text-purple-700" },
  { name: "Hotjar",                color: "border-red-200 text-red-700" },
  { name: "Zapier",                color: "border-orange-200 text-orange-700" },
  { name: "Looker Studio",         color: "border-blue-200 text-blue-800" },
]

const faqs = [
  {
    q: "How soon will I see results from SEO?",
    a: "SEO is a long-term strategy. You can expect meaningful traffic improvements in 3–6 months, with compounding results over 12+ months. Paid ads deliver results from day one.",
  },
  {
    q: "What is your minimum ad spend?",
    a: "We recommend a minimum ad budget of ₹15,000–₹30,000/month for meaningful results. Our management fee is separate and based on campaign scope.",
  },
  {
    q: "Do you handle content creation?",
    a: "Yes. Our team handles copywriting, graphic design, video scripts, and ad creatives — everything needed to run effective campaigns.",
  },
  {
    q: "Can you manage both Google and Meta Ads?",
    a: "Yes. We manage multi-platform campaigns with unified tracking, cross-channel attribution, and consolidated reporting.",
  },
  {
    q: "How do you measure success?",
    a: "We define KPIs upfront (CPL, ROAS, organic traffic, keyword rankings, etc.) and provide monthly reports with full transparency on what's working and what's being optimized.",
  },
  {
    q: "Do you work with local and international businesses?",
    a: "Yes. We run campaigns for local businesses (hyper-targeted geo ads) as well as international brands (global SEO and multi-region ad campaigns).",
  },
]

export default function DigitalMarketingContent() {
  return (
    <>
      <ServiceHero
        badge="Digital Marketing"
        title="Grow Faster with"
        highlight="Data-Driven Marketing"
        description="We design and execute digital marketing strategies that generate real leads, drive brand visibility, and deliver measurable ROI across SEO, paid ads, social media, and more."
        icon={<FiTrendingUp size={80} />}
        gradient="from-rose-500 to-rose-700"
      />
      <ServiceFeatures features={features} benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTech techs={techs} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        title="Ready to Grow Your Business Online?"
        subtitle="Let's build a digital marketing strategy that drives real leads, builds your brand, and grows your revenue."
      />
    </>
  )
}
