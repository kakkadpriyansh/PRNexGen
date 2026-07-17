"use client"

import { FiBookOpen, FiVideo, FiAward, FiBarChart2, FiUsers, FiLayers } from "react-icons/fi"
import ServiceHero from "./ServiceHero"
import ServiceFeatures from "./ServiceFeatures"
import ServiceProcess from "./ServiceProcess"
import ServiceTech from "./ServiceTech"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"

const features = [
  { icon: <FiBookOpen size={20} />, title: "LMS Platforms",          desc: "Full-featured Learning Management Systems with course creation, enrollment, and progress tracking." },
  { icon: <FiVideo size={20} />,    title: "Video Streaming",        desc: "Adaptive video delivery with HLS streaming, playback controls, and offline download support." },
  { icon: <FiAward size={20} />,    title: "Gamification",           desc: "Badges, leaderboards, streaks, and XP systems that keep learners engaged and motivated." },
  { icon: <FiBarChart2 size={20} />,title: "Analytics Dashboard",    desc: "Detailed insights on learner progress, completion rates, quiz scores, and engagement metrics." },
  { icon: <FiUsers size={20} />,    title: "Live Classes",           desc: "Integrated live sessions via Zoom or WebRTC with recording, chat, and attendance tracking." },
  { icon: <FiLayers size={20} />,   title: "Multi-Tenant Support",   desc: "White-label solutions for institutions, coaching centers, and corporate training programs." },
]

const benefits = [
  "Custom course builder",
  "Video & quiz assessments",
  "Certificate generation",
  "Payment & subscription support",
  "Mobile app included",
  "Multi-language support",
  "SCORM/xAPI compliance",
  "Parent & admin portals",
  "Offline content access",
]

const process = [
  { num: "01", title: "Curriculum Mapping", desc: "We map your learning objectives to features, user roles, and content structure." },
  { num: "02", title: "UX Design",          desc: "Learner-centric UI with intuitive navigation, accessibility, and engagement patterns." },
  { num: "03", title: "Development",        desc: "Modular development of core LMS features with continuous testing and feedback." },
  { num: "04", title: "Launch & Scale",     desc: "Deployment, content migration, instructor onboarding, and performance monitoring." },
]

const techs = [
  { name: "Next.js",       color: "border-gray-300 text-gray-700" },
  { name: "React Native",  color: "border-blue-200 text-blue-700" },
  { name: "Node.js",       color: "border-green-200 text-green-700" },
  { name: "PostgreSQL",    color: "border-indigo-200 text-indigo-700" },
  { name: "AWS S3",        color: "border-orange-200 text-orange-700" },
  { name: "HLS Streaming", color: "border-red-200 text-red-700" },
  { name: "Stripe",        color: "border-indigo-300 text-indigo-800" },
  { name: "Firebase",      color: "border-orange-300 text-orange-800" },
  { name: "Zoom SDK",      color: "border-blue-300 text-blue-800" },
  { name: "Redis",         color: "border-red-300 text-red-800" },
  { name: "Tailwind CSS",  color: "border-cyan-200 text-cyan-700" },
  { name: "TypeScript",    color: "border-blue-200 text-blue-800" },
]

const faqs = [
  { q: "Can you build a platform like Udemy or Coursera?",  a: "Yes. We build custom e-learning platforms with course creation, video hosting, payments, and learner analytics — tailored to your brand and audience." },
  { q: "Do you support live classes?",                      a: "Yes. We integrate Zoom, Jitsi, or WebRTC for live sessions with recording, attendance, and chat features." },
  { q: "Can students access content offline?",              a: "Yes. Our mobile apps support offline content download so learners can study without an internet connection." },
  { q: "Do you build for schools and coaching institutes?", a: "Absolutely. We build multi-tenant platforms for schools, coaching centers, and corporate training with separate admin portals." },
  { q: "Is payment integration included?",                  a: "Yes. We integrate Stripe, Razorpay, or PayPal for one-time purchases, subscriptions, and installment plans." },
]

export default function EduAppContent() {
  return (
    <>
      <ServiceHero
        badge="Education App Development"
        title="E-Learning Platforms"
        highlight="Built to Inspire"
        description="We build scalable LMS platforms, education apps, and interactive learning tools that engage students and empower educators."
        icon={<FiBookOpen size={80} />}
        gradient="from-cyan-500 to-cyan-700"
      />
      <ServiceFeatures features={features} benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTech techs={techs} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA title="Ready to Build Your EdTech Platform?" subtitle="Let's create an education app that transforms how your students learn and grow." />
    </>
  )
}
