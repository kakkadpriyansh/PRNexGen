import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ERPContent from "@/components/services/ERPContent"

export const metadata: Metadata = {
  title: "ERP Software Development — PRNexGen",
  description:
    "Custom ERP software development services — inventory management, HR & payroll, finance, CRM, and cloud-based enterprise solutions built for scale.",
  keywords: [
    "ERP software development", "custom ERP India", "inventory management system",
    "HR payroll software", "enterprise software development", "PRNexGen ERP",
  ],
  alternates: { canonical: "/services/erp-software-development" },
}

export default function ERPSoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <ERPContent />
      </main>
      <Footer />
    </>
  )
}
