"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiCode, FiSmartphone, FiBookOpen, FiLayout, FiArrowRight, FiUsers, FiZap, FiShield, FiClock, FiCpu, FiHeart, FiServer, FiTrendingUp } from "react-icons/fi"
import { HiArrowRight } from "react-icons/hi"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"
import ProcessTimeline from "@/components/shared/ProcessTimeline"

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    desc: "High-performance websites and web apps built with Next.js, React, and modern cloud infrastructure.",
    href: "/services/web-development",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    icon: FiSmartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
    href: "/services/app-development",
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: FiBookOpen,
    title: "Education App Development",
    desc: "Scalable e-learning platforms, LMS systems, and interactive educational apps for modern learners.",
    href: "/services/education-app-development",
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    tags: ["LMS", "Video Streaming", "Gamification", "Analytics"],
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    desc: "Pixel-perfect, user-centered design systems that convert visitors into loyal customers.",
    href: "/services/ui-ux-development",
    gradient: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    icon: FiServer,
    title: "Enterprise Software Development",
    desc: "End-to-end custom enterprise solutions — ERPs, CRMs, SaaS platforms, and internal tools engineered for scale, security, and reliability.",
    href: "/services/erp-software-development",
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    tags: ["ERP", "CRM", "SaaS", "REST APIs", "Microservices"],
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven Meta Ads, Google Ads, SEO, and social media strategies that grow your brand visibility and drive qualified leads consistently.",
    href: "/services/digital-marketing",
    gradient: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    tags: ["Meta Ads", "Google Ads", "SEO", "Social Media", "Analytics"],
  },
]

const whyUs = [
  { icon: FiUsers,  title: "Experienced Team",     desc: "Senior engineers and designers with 4+ years of industry experience." },
  { icon: FiZap,    title: "Agile Development",    desc: "Rapid iterations with transparent communication and on-time delivery." },
  { icon: FiCpu,    title: "AI-Powered Solutions", desc: "Cutting-edge AI and ML integration to automate and scale your business." },
  { icon: FiShield, title: "Secure by Default",    desc: "Enterprise-grade security practices built into every line of code." },
  { icon: FiClock,  title: "Fast Delivery",        desc: "Optimized workflows that get your product to market faster." },
  { icon: FiHeart,  title: "Long-Term Support",    desc: "Dedicated post-launch support and maintenance for your peace of mind." },
]

const techGroups = [
  { label: "Frontend",    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Mobile",      items: ["React Native", "Flutter", "Expo", "Swift", "Kotlin"] },
  { label: "Backend",     items: ["Node.js", "Python", "FastAPI", "GraphQL", "REST APIs"] },
  { label: "Database",    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
  { label: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"] },
  { label: "Design",      items: ["Figma", "Adobe XD", "Framer", "Storybook"] },
]

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary by scope. A simple website takes 2–4 weeks, while a full-featured mobile app or platform can take 2–4 months. We provide a detailed timeline after the discovery phase." },
  { q: "Do you work with startups and small businesses?", a: "Absolutely. We work with everyone from solo founders to enterprise teams. Our flexible engagement models are designed to fit different budgets and stages." },
  { q: "What is your development process?", a: "We follow an agile process: Discovery → Design → Development → Testing → Launch → Support. You get regular updates, demos, and full transparency throughout." },
  { q: "Do you provide post-launch support?", a: "Yes. We offer ongoing maintenance, bug fixes, feature additions, and performance monitoring after launch. We're a long-term partner, not just a vendor." },
  { q: "Can you work with our existing codebase?", a: "Yes. We regularly audit, refactor, and extend existing codebases. We'll assess your current stack and recommend the best path forward." },
  { q: "How do we get started?", a: "Simply reach out via our contact page or email us at prnexgen@yahoo.com. We'll schedule a free discovery call to understand your needs and provide a proposal." },
]

export default function ServicesMain() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5 border border-blue-100">
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-gray-900 mb-6">
              End-to-End <span className="gradient-text">Digital Services</span>
              <br />Built for Growth
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
              From concept to launch — we deliver web, mobile, education, and design solutions that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gradient px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2">
                Start a Project <HiArrowRight />
              </Link>
              <Link href="/portfolio" className="px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Solutions Built for <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From MVPs to enterprise platforms — fast, scalable, and future-ready digital products.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, desc, href, gradient, border, tags }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-8 border ${border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <Link href={href} className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                  Explore Service <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PRNexGen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">Why PRNexGen</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Why Companies <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We combine technical excellence with business understanding to deliver products that truly make a difference.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl btn-gradient flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline sectionBg="bg-gray-50" />

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">Tech Stack</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Technologies <span className="gradient-text">We Use</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techGroups.map(({ label, items }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA title="Ready to Build Your Digital Product?" subtitle="Contact PRNexGen today and let's turn your vision into a world-class digital product." />
    </>
  )
}
