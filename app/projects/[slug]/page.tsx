import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { projects } from "@/components/projects/projects-data"

/* ── Detail sections ── */
import DetailHero        from "@/components/projects/detail/DetailHero"
import DetailOverview    from "@/components/projects/detail/DetailOverview"
import DetailGallery     from "@/components/projects/detail/DetailGallery"
import DetailTechStack   from "@/components/projects/detail/DetailTechStack"
import DetailFeatures    from "@/components/projects/detail/DetailFeatures"
import DetailStats       from "@/components/projects/detail/DetailStats"
import DetailChallenges  from "@/components/projects/detail/DetailChallenges"
import DetailTestimonial from "@/components/projects/detail/DetailTestimonial"
import DetailRelated     from "@/components/projects/detail/DetailRelated"
import DetailCTA         from "@/components/projects/detail/DetailCTA"
import ProcessTimeline   from "@/components/shared/ProcessTimeline"

/* ── Static params — pre-render all project slugs at build time ── */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

/* ── Per-page SEO metadata ── */
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) return {}

  return {
    title: `${project.name} — Case Study | PRNexGen`,
    description: project.longDesc,
    keywords: [
      project.name,
      project.category,
      ...project.tags,
      "PRNexGen portfolio",
      "software development case study",
    ],
    openGraph: {
      type: "article",
      title: `${project.name} — PRNexGen Case Study`,
      description: project.shortDesc,
      url: `https://prnexgen.com/projects/${project.id}`,
      siteName: "PRNexGen",
      images: project.image.startsWith("/") ? [{ url: project.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — PRNexGen`,
      description: project.shortDesc,
    },
    alternates: { canonical: `/projects/${project.id}` },
  }
}

/* ── Page component ── */
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main>
        <DetailHero        project={project} />
        <DetailOverview    project={project} />
        <DetailGallery     project={project} />
        <DetailTechStack   project={project} />
        <DetailFeatures    project={project} />
        <DetailStats       project={project} />
        <ProcessTimeline   sectionBg="bg-white" />
        <DetailChallenges  project={project} />
        <DetailTestimonial project={project} />
        <DetailRelated     current={project} />
        <DetailCTA />
      </main>
      <Footer />
    </>
  )
}
