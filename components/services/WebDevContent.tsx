"use client"

import { FiCode, FiZap, FiSearch, FiShield, FiRefreshCw, FiCloud } from "react-icons/fi"
import ServiceHero from "./ServiceHero"
import ServiceFeatures from "./ServiceFeatures"
import ServiceProcess from "./ServiceProcess"
import ServiceTech from "./ServiceTech"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"

const features = [
  { icon: <FiCode size={20} />,      title: "Custom Web Apps",       desc: "Tailored web applications built from scratch to match your exact business requirements and workflows." },
  { icon: <FiZap size={20} />,       title: "Performance Optimized", desc: "Sub-second load times with Core Web Vitals optimization, lazy loading, and CDN delivery." },
  { icon: <FiSearch size={20} />,    title: "SEO-First Architecture", desc: "Server-side rendering, structured data, and semantic HTML for maximum search engine visibility." },
  { icon: <FiShield size={20} />,    title: "Secure & Compliant",    desc: "HTTPS, CSRF protection, input sanitization, and OWASP best practices baked in from day one." },
  { icon: <FiRefreshCw size={20} />, title: "API Integrations",      desc: "Seamless integration with payment gateways, CRMs, analytics, and third-party services." },
  { icon: <FiCloud size={20} />,     title: "Cloud Deployment",      desc: "Scalable deployments on Vercel, AWS, or your preferred cloud with CI/CD pipelines." },
]

const benefits = [
  "Faster time-to-market",
  "Mobile-first responsive design",
  "99.9% uptime SLA",
  "Scalable architecture",
  "Full source code ownership",
  "Ongoing maintenance support",
  "SEO-optimized from day one",
  "Analytics & monitoring included",
  "Cross-browser compatibility",
]

const process = [
  { num: "01", title: "Discovery",    desc: "We audit your requirements, competitors, and technical constraints to define the perfect solution." },
  { num: "02", title: "Design",       desc: "Wireframes and high-fidelity mockups reviewed and approved before a single line of code is written." },
  { num: "03", title: "Development",  desc: "Agile sprints with weekly demos, code reviews, and continuous integration." },
  { num: "04", title: "Launch",       desc: "Thorough QA, performance testing, deployment, and post-launch monitoring." },
]

const techs = [
  { name: "Next.js",      color: "border-gray-300 text-gray-700" },
  { name: "React",        color: "border-blue-200 text-blue-700" },
  { name: "TypeScript",   color: "border-blue-300 text-blue-800" },
  { name: "Tailwind CSS", color: "border-cyan-200 text-cyan-700" },
  { name: "Node.js",      color: "border-green-200 text-green-700" },
  { name: "PostgreSQL",   color: "border-indigo-200 text-indigo-700" },
  { name: "MongoDB",      color: "border-green-300 text-green-800" },
  { name: "Redis",        color: "border-red-200 text-red-700" },
  { name: "GraphQL",      color: "border-pink-200 text-pink-700" },
  { name: "Prisma",       color: "border-purple-200 text-purple-700" },
  { name: "Vercel",       color: "border-gray-300 text-gray-800" },
  { name: "AWS",          color: "border-orange-200 text-orange-700" },
]

const faqs = [
  { q: "How long does a web project take?",           a: "A standard website takes 2–4 weeks. A complex web application with custom features typically takes 6–12 weeks depending on scope." },
  { q: "Do you build e-commerce websites?",           a: "Yes. We build custom e-commerce solutions with payment integration, inventory management, and admin dashboards." },
  { q: "Will my website be mobile-friendly?",         a: "Absolutely. Every website we build is fully responsive and tested across all major devices and browsers." },
  { q: "Do you provide CMS integration?",             a: "Yes. We integrate with headless CMS platforms like Contentful, Sanity, or Strapi so you can manage content without touching code." },
  { q: "What about website maintenance?",             a: "We offer monthly maintenance plans covering security updates, performance monitoring, backups, and content updates." },
]

export default function WebDevContent() {
  return (
    <>
      <ServiceHero
        badge="Web Development"
        title="Build Powerful"
        highlight="Web Applications"
        titleSuffix="That Scale"
        description="We craft high-performance, SEO-optimized web applications using Next.js, React, and modern cloud infrastructure — built to grow with your business."
        icon={<FiCode size={80} />}
        gradient="from-blue-500 to-blue-700"
      />
      <ServiceFeatures features={features} benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTech techs={techs} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA title="Ready to Build Your Web App?" subtitle="Let's discuss your project and create a web solution that drives real business results." />
    </>
  )
}
