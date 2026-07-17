"use client"

import { FiServer, FiPackage, FiUsers, FiDollarSign, FiShoppingCart, FiCloud } from "react-icons/fi"
import ServiceHero from "./ServiceHero"
import ServiceFeatures from "./ServiceFeatures"
import ServiceProcess from "./ServiceProcess"
import ServiceTech from "./ServiceTech"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"

const features = [
  {
    icon: <FiServer size={20} />,
    title: "Custom ERP Development",
    desc: "Fully tailored ERP systems designed around your workflows — no bloated off-the-shelf software that forces you to change your processes.",
  },
  {
    icon: <FiPackage size={20} />,
    title: "Inventory Management",
    desc: "Real-time stock tracking, multi-warehouse management, automated reorder alerts, and barcode/QR integration.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "HR & Payroll Management",
    desc: "Employee onboarding, attendance tracking, leave management, payroll processing, and compliance reporting.",
  },
  {
    icon: <FiDollarSign size={20} />,
    title: "Finance & Accounting ERP",
    desc: "General ledger, accounts payable/receivable, invoicing, GST/tax compliance, and financial reporting dashboards.",
  },
  {
    icon: <FiShoppingCart size={20} />,
    title: "Sales & Purchase Management",
    desc: "End-to-end order lifecycle — quotations, purchase orders, invoices, delivery tracking, and vendor management.",
  },
  {
    icon: <FiCloud size={20} />,
    title: "Cloud-Based ERP",
    desc: "Scalable cloud architecture with role-based access, mobile-friendly dashboards, and real-time analytics.",
  },
]

const benefits = [
  "Eliminate manual data entry",
  "Real-time business insights",
  "Role-based access control",
  "Multi-branch & multi-currency",
  "Automated reporting & compliance",
  "Seamless CRM integration",
  "Mobile-friendly dashboards",
  "Secure cloud-hosted infrastructure",
  "Scalable as your business grows",
]

const process = [
  { num: "01", title: "Business Analysis",  desc: "We map your existing workflows, pain points, and data models before designing the ERP architecture." },
  { num: "02", title: "System Design",      desc: "Module architecture, database schema, user roles, and integration points are defined and approved." },
  { num: "03", title: "Development",        desc: "Iterative module development with weekly demos and your team's continuous feedback." },
  { num: "04", title: "Migration & Launch", desc: "Data migration from legacy systems, staff training, UAT, and phased go-live with zero-downtime deployment." },
]

const techs = [
  { name: "Next.js",    color: "border-gray-300 text-gray-700" },
  { name: "React",      color: "border-blue-200 text-blue-700" },
  { name: "Node.js",    color: "border-green-200 text-green-700" },
  { name: "NestJS",     color: "border-red-200 text-red-700" },
  { name: "Python",     color: "border-yellow-200 text-yellow-700" },
  { name: "PostgreSQL", color: "border-indigo-200 text-indigo-700" },
  { name: "MongoDB",    color: "border-green-300 text-green-800" },
  { name: "Docker",     color: "border-blue-300 text-blue-800" },
  { name: "AWS",        color: "border-orange-200 text-orange-700" },
  { name: "Redis",      color: "border-red-300 text-red-800" },
  { name: "GraphQL",    color: "border-pink-200 text-pink-700" },
  { name: "TypeScript", color: "border-blue-200 text-blue-800" },
]

const faqs = [
  {
    q: "How long does a custom ERP take to build?",
    a: "A core ERP with 4–5 modules typically takes 3–5 months. Larger enterprise systems with complex integrations can take 6–12 months. We provide a detailed timeline after the discovery phase.",
  },
  {
    q: "Can you migrate data from our existing system?",
    a: "Yes. We handle complete data migration from Excel, legacy software, or any existing ERP — with validation, cleansing, and zero data loss.",
  },
  {
    q: "Will the ERP work on mobile devices?",
    a: "Yes. All our ERP solutions are built mobile-first with responsive web interfaces and optional native mobile apps for field staff.",
  },
  {
    q: "Can we add modules later?",
    a: "Absolutely. Our modular architecture is designed for extensibility — you can add HR, CRM, manufacturing, or any custom module as your business grows.",
  },
  {
    q: "Is the ERP hosted on the cloud?",
    a: "Yes. We deploy on AWS or your preferred cloud provider with enterprise-grade security, automatic backups, and 99.9% uptime SLA.",
  },
  {
    q: "Do you provide training and support?",
    a: "Yes. We provide staff training, admin documentation, and ongoing support plans that include bug fixes, updates, and feature additions.",
  },
]

export default function ERPContent() {
  return (
    <>
      <ServiceHero
        badge="ERP Software Development"
        title="Custom ERP Solutions"
        highlight="Built for Scale"
        description="We build end-to-end Enterprise Resource Planning systems that unify your operations — from inventory and HR to finance and CRM — into a single, powerful platform."
        icon={<FiServer size={80} />}
        gradient="from-violet-500 to-violet-700"
      />
      <ServiceFeatures features={features} benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTech techs={techs} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        title="Ready to Build Your ERP System?"
        subtitle="Let's automate your operations and give you the real-time visibility your business needs to grow."
      />
    </>
  )
}
