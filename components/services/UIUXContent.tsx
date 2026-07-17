"use client"

import { FiLayout, FiEye, FiGrid, FiMousePointer, FiStar, FiCheckCircle } from "react-icons/fi"
import ServiceHero from "./ServiceHero"
import ServiceFeatures from "./ServiceFeatures"
import ServiceProcess from "./ServiceProcess"
import ServiceTech from "./ServiceTech"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"

const features = [
  { icon: <FiLayout size={20} />,      title: "UI Design",           desc: "Pixel-perfect interfaces with consistent spacing, typography, and color systems that reflect your brand." },
  { icon: <FiEye size={20} />,         title: "UX Research",         desc: "User interviews, journey mapping, and usability testing to design experiences users actually want." },
  { icon: <FiGrid size={20} />,        title: "Design Systems",      desc: "Scalable component libraries in Figma that keep your product consistent as it grows." },
  { icon: <FiMousePointer size={20} />,title: "Interactive Prototypes",desc: "Clickable prototypes for stakeholder sign-off and user testing before development begins." },
  { icon: <FiStar size={20} />,        title: "Brand Identity",      desc: "Logo, color palette, typography, and brand guidelines that make your product instantly recognizable." },
  { icon: <FiCheckCircle size={20} />, title: "Accessibility (WCAG)", desc: "WCAG 2.1 AA compliant designs ensuring your product is usable by everyone." },
]

const benefits = [
  "Higher user engagement",
  "Reduced development rework",
  "Consistent brand identity",
  "Faster user onboarding",
  "Improved conversion rates",
  "Accessible to all users",
  "Handoff-ready Figma files",
  "Component-based design system",
  "Mobile & desktop coverage",
]

const process = [
  { num: "01", title: "Research",    desc: "Competitor analysis, user interviews, and heuristic evaluation to understand the design space." },
  { num: "02", title: "Wireframes",  desc: "Low-fidelity wireframes to map out information architecture and user flows quickly." },
  { num: "03", title: "Visual Design",desc: "High-fidelity mockups with your brand colors, typography, and component library." },
  { num: "04", title: "Handoff",     desc: "Developer-ready Figma files with specs, assets, and a documented design system." },
]

const techs = [
  { name: "Figma",          color: "border-purple-200 text-purple-700" },
  { name: "Adobe XD",       color: "border-pink-200 text-pink-700" },
  { name: "Framer",         color: "border-blue-200 text-blue-700" },
  { name: "Storybook",      color: "border-orange-200 text-orange-700" },
  { name: "Lottie",         color: "border-green-200 text-green-700" },
  { name: "Zeplin",         color: "border-yellow-200 text-yellow-700" },
  { name: "Maze",           color: "border-red-200 text-red-700" },
  { name: "Hotjar",         color: "border-orange-300 text-orange-800" },
  { name: "Tailwind CSS",   color: "border-cyan-200 text-cyan-700" },
  { name: "Framer Motion",  color: "border-indigo-200 text-indigo-700" },
  { name: "GSAP",           color: "border-green-300 text-green-800" },
  { name: "Principle",      color: "border-gray-300 text-gray-700" },
]

const faqs = [
  { q: "Do you deliver Figma source files?",          a: "Yes. You receive fully organized Figma files with components, auto-layout, and developer handoff specs." },
  { q: "Can you redesign an existing product?",       a: "Absolutely. We audit your current UI/UX, identify pain points, and deliver a redesign that improves usability and aesthetics." },
  { q: "Do you conduct user testing?",                a: "Yes. We run usability tests with real users and iterate on designs based on findings before final delivery." },
  { q: "What is a design system?",                    a: "A design system is a library of reusable components, tokens, and guidelines that ensure consistency across your entire product." },
  { q: "Can your designs be handed off to any dev team?", a: "Yes. Our Figma files include all specs, assets, and documentation needed for any development team to implement accurately." },
]

export default function UIUXContent() {
  return (
    <>
      <ServiceHero
        badge="UI/UX Design"
        title="Design That"
        highlight="Converts & Delights"
        description="We create pixel-perfect, user-centered interfaces backed by research — design systems, prototypes, and brand identities that make your product stand out."
        icon={<FiLayout size={80} />}
        gradient="from-indigo-500 to-indigo-700"
      />
      <ServiceFeatures features={features} benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTech techs={techs} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA title="Ready to Elevate Your Design?" subtitle="Let's create a UI/UX that your users love and your business benefits from." />
    </>
  )
}
