import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import JsonLd from "@/components/shared/JsonLd"
import { articles } from "../page"

/* ── Static params — pre-render all article slugs at build time ── */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

/* ── Per-page SEO metadata ── */
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  return {
    title: `${article.title} — PRNexGen Blog`,
    description: article.excerpt,
    keywords: [article.category, "PRNexGen blog", "software development insights"],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `https://prnexgen.in/blog/${article.slug}`,
      siteName: "PRNexGen",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    alternates: { canonical: `/blog/${article.slug}` },
  }
}

/* ── Page component ── */
export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: `https://prnexgen.in/blog/${article.slug}`,
    datePublished: article.date,
    author: { "@type": "Organization", name: "PRNexGen", url: "https://prnexgen.in" },
    publisher: {
      "@type": "Organization",
      name: "PRNexGen",
      logo: { "@type": "ImageObject", url: "https://prnexgen.in/fevilogo.jpg" },
    },
  }

  return (
    <>
      <JsonLd schema={articleSchema} />
      <Navbar />
      <main>
        {/* Article header */}
        <section className="relative pt-28 pb-12 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/blog" className="text-sm text-blue-600 font-semibold hover:underline">
                ← Blog
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-500">{article.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-gray-900 mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-b border-gray-100 pb-6">
              <span className="font-semibold text-gray-600">{article.author}</span>
              <span>·</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article body placeholder */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro paragraph (excerpt as the opening) */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              {article.excerpt}
            </p>

            {/* Content placeholder — replace with MDX/CMS content */}
            <div className="prose prose-gray prose-lg max-w-none">
              <p className="text-gray-500 leading-relaxed">
                This article is coming soon. We are currently preparing detailed, expert-level content on{" "}
                <strong>{article.title}</strong>. Check back shortly or{" "}
                <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
                  contact us
                </Link>{" "}
                to discuss your project needs directly with our team.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-14 p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <h2 className="text-xl font-black text-gray-900 mb-3">
                Ready to work with us?
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                Let&apos;s turn your idea into a world-class digital product.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-gradient font-semibold text-sm"
              >
                Get a Free Consultation →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
