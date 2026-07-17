import type { Metadata } from "next"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import ProjectsHero from "@/components/projects/ProjectsHero"
import ProjectsGrid from "@/components/projects/ProjectsGrid"
import ProjectsTechStack from "@/components/projects/ProjectsTechStack"
import ProjectsTestimonials from "@/components/projects/ProjectsTestimonials"
import ProjectsCTA from "@/components/projects/ProjectsCTA"

export const metadata: Metadata = {
  title: "Our Projects — PRNexGen | Web, Mobile & AI Solutions",
  description:
    "Explore PRNexGen's portfolio of innovative digital solutions — corporate websites, e-commerce platforms, LMS, healthcare apps, AI chatbots, and more.",
  keywords: [
    "PRNexGen projects", "web development portfolio", "mobile app portfolio",
    "AI solutions", "education app", "e-commerce platform", "LMS development",
    "healthcare app", "software portfolio India",
  ],
  openGraph: {
    type: "website",
    title: "Our Projects — PRNexGen",
    description:
      "Explore our portfolio of innovative digital solutions delivered for businesses across various industries.",
    url: "https://prnexgen.com/projects",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects — PRNexGen",
    description:
      "Web, mobile, AI, and education projects built for startups and enterprises worldwide.",
  },
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectsTechStack />
        <ProjectsTestimonials />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  )
}
