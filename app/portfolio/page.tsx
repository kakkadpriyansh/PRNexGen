import PortfolioPage from "@/components/portfolio/portfolio-page"
import { fetchPortfolioData } from "@/utils/csv-parser"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | PRNexGen",
  description:
    "Explore our latest projects and case studies. From web & mobile apps to AI automation, our work helps businesses scale smarter.",
}

export default async function Portfolio() {
  const portfolioData = await fetchPortfolioData()

  return <PortfolioPage initialData={portfolioData} />
}
