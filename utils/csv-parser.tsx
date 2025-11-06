export interface PortfolioItem {
  slug: string
  title: string
  logo: string
  mainImage: string
  shortDescription: string
  projectUrl: string
  content: string
  sortOrder: string
  categories?: string[] // We'll add this for filtering
}

// Add a check for client-side environment at the top of the fetchPortfolioData function

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  // Use a cache to avoid refetching the data multiple times
  if (typeof window !== "undefined" && (window as any).__portfolioCache) {
    return (window as any).__portfolioCache
  }

  try {
    // Use local sample file as primary source for template
    const response = await fetch("/data/portfolio-sample.csv", {
      cache: "force-cache",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio CSV: ${response.status}`)
    }

    const csvText = await response.text()
    const parsedData = parseCSV(csvText)

    // Cache the data on the client side
    if (typeof window !== "undefined") {
      ;(window as any).__portfolioCache = parsedData
    }

    return parsedData
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
    // Return fallback sample data if CSV fails to load
    return getFallbackPortfolioData()
  }
}

// Fallback data in case CSV file fails to load
function getFallbackPortfolioData(): PortfolioItem[] {
  return [
    {
      slug: "happy-feet-ecommerce-nextjs",
      title: "Happy Feet – E-Commerce Website (Next.js)",
      logo: "/shopconnect-logo.jpg",
      mainImage: "/happyfeet-ss.png",
      shortDescription:
        "Modern footwear e-commerce with full admin panel: products, categories, orders, customers, inventory.",
      projectUrl: "https://happy-feet.in",
      content:
        `<h3>Project Overview</h3><p>A modern e-commerce platform built with Next.js, designed for footwear product sales. Includes a full admin panel for managing products, categories, orders, customers, and inventory.</p><h3>Key Features</h3><ul><li>Product listing & category filtering</li><li>Shopping cart & secure checkout</li><li>User authentication</li><li>Admin dashboard for product, order, and customer management</li><li>Responsive UI & SEO optimized</li></ul>`,
      sortOrder: "2024-02-15",
      categories: ["all", "web"],
    },
    {
      slug: "avid-explorers-travel-nextjs",
      title: "Avid Explorers – Full Stack Travel Website (Next.js)",
      logo: "/contentai-logo.jpg",
      mainImage: "/avid-photo.png",
      shortDescription:
        "Responsive travel platform with booking, itineraries, and full admin panel for packages and content.",
      projectUrl: "https://dev.avidexplorers.in",
      content:
        `<h3>Project Overview</h3><p>A fully responsive travel website developed with Next.js, enabling users to explore destinations, book trips, and plan itineraries. Includes a full admin panel to manage travel packages, bookings, content, and user inquiries.</p><h3>Key Features</h3><ul><li>SSR & SSG with Next.js</li><li>Travel package booking system</li><li>User login/signup & dashboard</li><li>Full admin panel for package, booking, and content management</li></ul>`,
      sortOrder: "2024-02-12",
      categories: ["all", "web"],
    },
    {
      slug: "bdvh-education-platform-nextjs",
      title: "BDVH – Teacher & Education Agency Platform (Next.js)",
      logo: "/taskflow-logo.jpg",
      mainImage: "/bdvh-ss.png",
      shortDescription:
        "Role-based education platform with admin dashboard for teachers, students, classes, and applications.",
      projectUrl: "https://bdvh.example.com",
      content:
        `<h3>Project Overview</h3><p>A platform built with Next.js for teacher and education agency management. Features a full admin panel to manage teacher profiles, student applications, class schedules, and backend operations.</p><h3>Key Features</h3><ul><li>Role-based authentication (Teacher/Admin)</li><li>Admin dashboard for teacher & student management</li><li>Class scheduling & application tracking</li><li>Next.js API integration with database</li></ul>`,
      sortOrder: "2024-02-10",
      categories: ["all", "web"],
    },
  ]
}

function parseCSV(csvText: string): PortfolioItem[] {
  // Split the CSV into lines
  const lines = csvText.split("\n")

  // Extract headers (first line)
  const headers = lines[0].split(",").map((header) => header.trim().replace(/^"/, "").replace(/"$/, ""))

  // Map CSV columns to our interface properties
  const columnMap: Record<string, keyof PortfolioItem> = {
    Slug: "slug",
    Title: "title",
    Logo: "logo",
    "Main Image": "mainImage",
    "Short Description": "shortDescription",
    "Project URL": "projectUrl",
    Content: "content",
    "Sort Order": "sortOrder",
  }

  // Parse the data rows
  const items: PortfolioItem[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue // Skip empty lines

    // Handle CSV values that might contain commas within quotes
    const values: string[] = []
    let currentValue = ""
    let insideQuotes = false

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]

      if (char === '"') {
        insideQuotes = !insideQuotes
      } else if (char === "," && !insideQuotes) {
        values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))
        currentValue = ""
      } else {
        currentValue += char
      }
    }

    // Add the last value
    values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))

    // Create the portfolio item
    const item: Partial<PortfolioItem> = {}

    // Map values to properties
    headers.forEach((header, index) => {
      const key = columnMap[header]
      if (key && index < values.length) {
        item[key] = values[index]
      }
    })

    // Add categories based on content or title for filtering
    item.categories = inferCategories(item as PortfolioItem)

    items.push(item as PortfolioItem)
  }

  // Sort by sortOrder
  return items.sort((a, b) => {
    return new Date(b.sortOrder).getTime() - new Date(a.sortOrder).getTime()
  })
}

function inferCategories(item: PortfolioItem): string[] {
  const categories: string[] = ["all"]

  // Add categories based on content keywords
  const contentLower = (item.content || "").toLowerCase()
  const titleLower = (item.title || "").toLowerCase()
  const descriptionLower = (item.shortDescription || "").toLowerCase()

  if (
    contentLower.includes("web3") ||
    contentLower.includes("blockchain") ||
    titleLower.includes("web3") ||
    descriptionLower.includes("web3") ||
    contentLower.includes("crypto") ||
    titleLower.includes("crypto") ||
    titleLower.includes("blockchain")
  ) {
    categories.push("web3")
  }

  if (
    contentLower.includes("bubble") ||
    contentLower.includes("no-code") ||
    contentLower.includes("nocode") ||
    contentLower.includes("no code")
  ) {
    categories.push("bubble")
  }

  if (
    contentLower.includes("ai") ||
    contentLower.includes("artificial intelligence") ||
    titleLower.includes("ai") ||
    descriptionLower.includes("ai") ||
    titleLower.includes("content") ||
    descriptionLower.includes("ai-powered")
  ) {
    categories.push("ai")
  }

  if (
    contentLower.includes("mobile") ||
    contentLower.includes("ios") ||
    contentLower.includes("android") ||
    titleLower.includes("app")
  ) {
    categories.push("mobile")
  }

  if (
    contentLower.includes("design") ||
    contentLower.includes("ui") ||
    contentLower.includes("ux") ||
    contentLower.includes("interface")
  ) {
    categories.push("design")
  }

  // Default to "web" if no specific category is found
  if (categories.length === 1) {
    categories.push("web")
  }

  return categories
}
