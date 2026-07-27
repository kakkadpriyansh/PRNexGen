import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import JsonLd from "@/components/shared/JsonLd"

export const metadata: Metadata = {
  title: "Blog & Insights — PRNexGen | Software Development Resources",
  description:
    "Expert articles on web development, mobile apps, AI, UI/UX design, and digital marketing from the PRNexGen team. Practical insights to grow your digital business.",
  keywords: [
    "software development blog", "web development tutorials", "React Next.js articles",
    "mobile app development tips", "AI solutions India", "PRNexGen blog",
  ],
  openGraph: {
    type: "website",
    title: "Blog & Insights — PRNexGen",
    description:
      "Expert articles on web development, mobile apps, AI, UI/UX design, and digital marketing from the PRNexGen team.",
    url: "https://prnexgen.in/blog",
    siteName: "PRNexGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights — PRNexGen",
    description:
      "Practical insights on web development, mobile apps, AI, and digital marketing from PRNexGen's engineering team.",
  },
  alternates: { canonical: "/blog" },
}

/* ── Placeholder articles — replace with CMS/MDX data source ── */
export const articles = [
  {
    slug: "why-nextjs-is-the-best-framework-for-seo",
    title: "Why Next.js Is the Best Framework for SEO in 2025",
    excerpt:
      "Server-side rendering, static generation, and built-in image optimisation make Next.js the clear winner for SEO-first web development.",
    date: "2025-07-15",
    author: "PRNexGen Team",
    category: "Web Development",
    readTime: "6 min read",
  },
  {
    slug: "react-native-vs-flutter-2025",
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    excerpt:
      "An honest comparison of the two leading cross-platform mobile frameworks — performance, ecosystem, hiring, and long-term viability.",
    date: "2025-07-01",
    author: "PRNexGen Team",
    category: "App Development",
    readTime: "8 min read",
  },
  {
    slug: "building-an-lms-key-features-checklist",
    title: "Building an LMS? The 12 Features Every Platform Must Have",
    excerpt:
      "From course management and video streaming to gamification and analytics — the complete checklist for a modern learning management system.",
    date: "2025-06-20",
    author: "PRNexGen Team",
    category: "Education Tech",
    readTime: "7 min read",
  },
  {
    slug: "ui-ux-design-principles-2025",
    title: "10 UI/UX Design Principles That Convert Visitors Into Customers",
    excerpt:
      "Practical design principles backed by data — from information hierarchy and micro-animations to accessibility and trust signals.",
    date: "2025-06-05",
    author: "PRNexGen Team",
    category: "UI/UX Design",
    readTime: "9 min read",
  },
  {
    slug: "meta-ads-vs-google-ads-for-small-business",
    title: "Meta Ads vs Google Ads: Which Is Right for Your Business?",
    excerpt:
      "A practical guide to deciding where to spend your ad budget — intent-based vs. interest-based advertising explained clearly.",
    date: "2025-05-22",
    author: "PRNexGen Team",
    category: "Digital Marketing",
    readTime: "5 min read",
  },
  {
    slug: "erp-implementation-guide",
    title: "ERP Implementation: A Step-by-Step Guide for Growing Businesses",
    excerpt:
      "How to plan, execute, and measure the success of an ERP rollout without disrupting daily operations.",
    date: "2025-05-10",
    author: "PRNexGen Team",
    category: "Enterprise Software",
    readTime: "10 min read",
  },
]

const categoryColors: Record<string, string> = {
  "Web Development":    "bg-blue-50 text-blue-600 border-blue-100",
  "App Development":    "bg-purple-50 text-purple-600 border-purple-100",
  "Education Tech":     "bg-cyan-50 text-cyan-600 border-cyan-100",
  "UI/UX Design":       "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Digital Marketing":  "bg-rose-50 text-rose-600 border-rose-100",
  "Enterprise Software": "bg-violet-50 text-violet-600 border-violet-100",
}

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PRNexGen Blog & Insights",
  description: "Expert articles on web development, mobile apps, AI, UI/UX design, and digital marketing from the PRNexGen team.",
  url: "https://prnexgen.in/blog",
  publisher: { "@type": "Organization", name: "PRNexGen", url: "https://prnexgen.in" },
}

export default function BlogPage() {
  return (
    <>
      <JsonLd schema={blogListSchema} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5 border border-blue-100">
              Insights &amp; Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-gray-900 mb-6">
              PRNexGen <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Expert articles on web development, mobile apps, AI, UI/UX design, and digital marketing — written by the team building real products for real businesses.
            </p>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="glass-card rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[article.category] ?? "bg-gray-50 text-gray-600 border-gray-200"}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="font-black text-gray-900 text-lg mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <span>{article.author}</span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
