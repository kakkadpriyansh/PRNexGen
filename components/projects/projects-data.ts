export type ProjectCategory =
  | "All"
  | "Travel & Blog"
  | "E-commerce"
  | "Enterprise"
  | "Social Impact"
  | "AI / ML"

export type ProjectStatus = "Completed" | "Ongoing"

/* ── Detail-page only types ──────────────────────────────── */
export interface ProjectStat {
  value: string
  label: string
}

export interface Challenge {
  title: string
  problem: string
  solution: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  review: string
  rating: number
  avatar?: string  // initials fallback used when not set
}

export interface ProjectDetail {
  clientBackground: string
  businessProblem: string
  projectGoals: string[]
  ourSolution: string
  finalOutcome: string
  gallery: string[]           // image paths under /public/projects/<id>/
  features: string[]
  stats: ProjectStat[]
  challenges: Challenge[]
  testimonial: Testimonial
}

/* ── Base Project type ───────────────────────────────────── */
export interface Project {
  id: string
  name: string
  shortDesc: string
  longDesc: string
  category: Exclude<ProjectCategory, "All">
  tags: string[]
  status: ProjectStatus
  image: string
  accentColor: string
  liveUrl: string
  clientName: string
  featured?: boolean
  detail: ProjectDetail
}

/* ══════════════════════════════════════════════════════════ */
export const projects: Project[] = [
  /* ── 1. AvidExplorers ──────────────────────────────────── */
  {
    id: "avid-explorers",
    name: "AvidExplorers",
    shortDesc: "A comprehensive travel experience platform featuring dynamic trip planning, rich media blogs, and a robust admin dashboard.",
    longDesc: "Built for scalability and performance with SSR and MongoDB Atlas, Avid Explorers showcases destinations with immersive imagery, smooth animations, and a clean navigation structure designed to inspire and convert travellers.",
    category: "Travel & Blog",
    tags: ["Next.js", "MongoDB", "Node.js", "AWS", "Tailwind"],
    status: "Completed",
    image: "/projects/avid-explorers.png",
    accentColor: "#10b981",
    liveUrl: "https://avidexplorers.in/",
    clientName: "Avid Explorers",
    featured: true,
    detail: {
      clientBackground: "Avid Explorers is a travel and adventure company that organises group trips, treks, and travel packages.",
      businessProblem: "The client needed a dedicated platform to showcase destinations professionally and capture leads at scale.",
      projectGoals: [
        "Create an immersive travel website that inspires visitors to book",
        "Showcase destinations with high-quality imagery and compelling copy",
        "Build an easy-to-use dynamic trip planning system",
        "Enable lead capture through robust admin dashboard"
      ],
      ourSolution: "PRNexGen designed and developed a visually immersive travel platform using Next.js, Node.js, and MongoDB Atlas. We integrated SSR for performance and SEO, and provided a complete admin dashboard.",
      finalOutcome: "Avid Explorers launched a robust scalable platform that serves as their primary lead generation channel with highly dynamic trip planning capabilities.",
      gallery: ["/projects/avid-explorers.png"],
      features: [
        "Dynamic Trip Planning",
        "Rich Media Blogs",
        "Robust Admin Dashboard",
        "SSR Performance",
        "MongoDB Atlas Integration",
        "AWS Hosting"
      ],
      stats: [
        { value: "15+", label: "Destinations Featured" },
        { value: "95", label: "Lighthouse Score" },
        { value: "4wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Scalability and SSR",
          problem: "The platform required fast loading times with rich media and good SEO.",
          solution: "Implemented Next.js Server-Side Rendering (SSR) along with MongoDB Atlas to ensure rapid data retrieval and high performance."
        }
      ],
      testimonial: {
        name: "Avid Explorers Team",
        role: "Founder",
        company: "Avid Explorers",
        avatar: "A",
        review: "Our travel website perfectly captures the spirit of exploration. The design is stunning, and the admin dashboard is incredibly robust.",
        rating: 5,
      },
    },
  },

  /* ── 2. happy-feet.in ──────────────────────────────────── */
  {
    id: "happy-feet",
    name: "happy-feet.in",
    shortDesc: "A high-performance e-commerce platform with real-time analytics, secure payment processing via Razorpay, and a custom CMS for inventory management.",
    longDesc: "Developed with Next.js and PostgreSQL, happy-feet.in delivers sub-2-second load times, structured SEO data, optimised images, and a pixel-perfect responsive layout across all devices.",
    category: "E-commerce",
    tags: ["Next.js", "Razorpay", "Analytics", "PostgreSQL"],
    status: "Completed",
    image: "/projects/happy-feet.png",
    accentColor: "#2563eb",
    liveUrl: "https://happy-feet.in/",
    clientName: "Happy Feet",
    featured: true,
    detail: {
      clientBackground: "Happy Feet is a growing footwear retail brand based in India, offering a curated collection of footwear.",
      businessProblem: "The client needed a fast, visually appealing, and scalable e-commerce platform with integrated inventory management and secure payments.",
      projectGoals: [
        "Build a high-performance e-commerce website from scratch",
        "Integrate secure Razorpay payment gateway",
        "Provide real-time analytics and custom CMS for inventory",
        "Achieve sub-2-second page load times"
      ],
      ourSolution: "We built the platform using Next.js and PostgreSQL, providing a robust custom CMS. We seamlessly integrated Razorpay for transactions and implemented advanced real-time analytics for the admin.",
      finalOutcome: "The Happy Feet e-commerce site launched successfully with a 98 Lighthouse performance score, significantly increasing online sales and inventory tracking efficiency.",
      gallery: ["/projects/happy-feet.png"],
      features: [
        "Real-time Analytics",
        "Secure Payments via Razorpay",
        "Custom CMS for Inventory Management",
        "Responsive E-commerce Design",
        "SEO Optimised",
        "Lightning Fast Load Times"
      ],
      stats: [
        { value: "98", label: "Lighthouse Score" },
        { value: "<1.8s", label: "Page Load Time" },
        { value: "3wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Custom Inventory CMS",
          problem: "The client required a bespoke inventory system tied directly to their sales analytics.",
          solution: "Developed a tailored CMS with PostgreSQL that updates inventory in real-time alongside Razorpay transaction webhooks."
        }
      ],
      testimonial: {
        name: "Happy Feet Team",
        role: "Client",
        company: "Happy Feet",
        avatar: "H",
        review: "PRNexGen built us a stunning e-commerce platform. The custom CMS and real-time analytics have completely transformed how we manage our online store.",
        rating: 5,
      },
    },
  },

  /* ── 3. BDVH Platform ──────────────────────────────────── */
  {
    id: "bdvh-platform",
    name: "BDVH Platform",
    shortDesc: "Enterprise-grade management platform built for a mid-brain-activation training franchise network.",
    longDesc: "Automating student enrollments, commission payouts, and certification generation with queue-based processing (Redis & BullMQ) for reliability at scale.",
    category: "Enterprise",
    tags: ["Next.js", "Redis", "BullMQ", "MongoDB"],
    status: "Completed",
    image: "/projects/bdvh-crm.png",
    accentColor: "#4f46e5",
    liveUrl: "#",
    clientName: "BDVH Institute",
    featured: true,
    detail: {
      clientBackground: "BDVH is a training franchise network specializing in mid-brain activation.",
      businessProblem: "The network required an enterprise-grade system to automate their expanding franchise operations, including enrollments and commission payouts.",
      projectGoals: [
        "Automate student enrollments across franchises",
        "Systematize commission payouts",
        "Generate certifications dynamically",
        "Ensure queue-based processing for reliability"
      ],
      ourSolution: "We developed a Next.js and MongoDB platform utilizing Redis and BullMQ for robust, scalable queue-based processing of heavy tasks like certification generation and mass commission calculations.",
      finalOutcome: "A highly reliable enterprise management platform that seamlessly handles thousands of concurrent operations, drastically reducing manual administrative overhead.",
      gallery: ["/projects/bdvh-crm.png"],
      features: [
        "Franchise Management System",
        "Automated Student Enrollments",
        "Commission Payouts Automation",
        "Dynamic Certification Generation",
        "Queue-based Processing (BullMQ)",
        "Role-Based Access Control"
      ],
      stats: [
        { value: "1000+", label: "Students Managed" },
        { value: "99.9%", label: "Uptime Reliability" },
        { value: "6wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Reliable Certification & Payouts at Scale",
          problem: "Generating thousands of certificates and calculating complex commissions simultaneously caused system timeouts.",
          solution: "Implemented BullMQ with Redis to process heavy tasks asynchronously in background queues, ensuring 100% reliability."
        }
      ],
      testimonial: {
        name: "BDVH Institute Admin",
        role: "Administrator",
        company: "BDVH",
        avatar: "B",
        review: "The enterprise platform is incredibly reliable. The automated enrollments and commission payouts have saved us countless hours of manual work.",
        rating: 5,
      },
    },
  },

  /* ── 4. Gauri Siddhivinayak Temple of Houston ──────────── */
  {
    id: "gauri-siddhivinayak",
    name: "Gauri Siddhivinayak Temple",
    shortDesc: "A full-featured community and non-profit web platform for a Houston-based Hindu temple.",
    longDesc: "Features puja/service bookings with deposit-based pricing, an events calendar, blog, photo gallery, priest/about pages, and an integrated donation flow (via Zelle) supporting a $3M capital campaign for a new permanent temple in Needville, TX.",
    category: "Social Impact",
    tags: ["Next.js", "Lovable", "Zelle Integration", "CMS/Blog"],
    status: "Completed",
    image: "/gaurisiddhi/ss-1.png",
    accentColor: "#f59e0b",
    liveUrl: "https://www.gaurisiddhivinayak.org/",
    clientName: "Gauri Siddhivinayak Temple of Houston",
    featured: true,
    detail: {
      clientBackground: "A Houston-based Hindu temple (est. 2014) undergoing a $3M capital campaign for a new permanent temple in Needville, TX.",
      businessProblem: "Needed a comprehensive digital platform to manage community engagement, service bookings, and critically, a streamlined donation flow to support their capital campaign.",
      projectGoals: [
        "Create a professional community platform",
        "Implement puja/service bookings with deposit-based pricing",
        "Integrate seamless Zelle donation flow for the $3M campaign",
        "Build a CMS for events, blogs, and photo galleries"
      ],
      ourSolution: "Delivered a Next.js platform integrating Lovable and a CMS. Built an intuitive booking system for temple services and a frictionless Zelle donation portal to maximize capital campaign contributions.",
      finalOutcome: "A vibrant, fully-featured community hub that successfully streamlines bookings and actively drives donations for the temple's expansion.",
      gallery: [
        "/gaurisiddhi/ss-1.png",
        "/gaurisiddhi/ss-2.png",
        "/gaurisiddhi/ss-3.png"
      ],
      features: [
        "Puja & Service Bookings",
        "Deposit-based Pricing System",
        "Integrated Zelle Donation Flow",
        "Events Calendar & Blog CMS",
        "Photo Gallery",
        "Priest & Community Pages"
      ],
      stats: [
        { value: "$3M", label: "Campaign Supported" },
        { value: "100+", label: "Monthly Bookings" },
        { value: "4wks", label: "Delivery Time" },
        { value: "100%", label: "Satisfaction" },
      ],
      challenges: [
        {
          title: "Complex Booking & Deposit Logic",
          problem: "Different services required distinct deposit amounts and specific scheduling constraints with temple priests.",
          solution: "Engineered a flexible booking module that allows administrators to set custom deposit rules and availability schedules per service."
        }
      ],
      testimonial: {
        name: "Temple Committee",
        role: "Board Member",
        company: "Gauri Siddhivinayak Temple",
        avatar: "G",
        review: "The platform has brought our community together digitally. The booking system is flawless and the donation flow is greatly helping our new temple campaign.",
        rating: 5,
      },
    },
  },

  /* ── 5. CallUp AI ──────────────────────────────────────── */
  {
    id: "callup-ai",
    name: "CallUp AI",
    shortDesc: "A multi-tenant SaaS platform automating customer interactions through intelligent, human-like voice agents.",
    longDesc: "Combines RAG-powered knowledge bases, natural multilingual voice conversations, and real-time appointment booking. Features intelligent call transfers, post-call AI analysis, SMS/email automation, full call recording & analytics, role-based access, and Stripe subscription billing.",
    category: "AI / ML",
    tags: ["Next.js 14", "Node.js", "MongoDB", "Redis", "Twilio", "Stripe", "AWS EC2"],
    status: "Completed",
    image: "/callupia/screenshot-1.png",
    accentColor: "#8b5cf6",
    liveUrl: "#",
    clientName: "CallUp AI",
    featured: true,
    detail: {
      clientBackground: "An AI startup aiming to revolutionize customer interactions for restaurants, law firms, healthcare, real estate, salons, and e-commerce.",
      businessProblem: "Needed a robust, scalable multi-tenant SaaS architecture to handle complex AI voice interactions and seamless business onboarding.",
      projectGoals: [
        "Develop a multi-tenant AI voice platform",
        "Integrate RAG-powered knowledge bases for intelligent responses",
        "Implement real-time appointment booking and intelligent call transfers",
        "Create a comprehensive Super Admin and client dashboard",
        "Integrate Stripe for SaaS billing"
      ],
      ourSolution: "Built a state-of-the-art AI SaaS using Next.js 14, Node.js, and MongoDB. Integrated Twilio for voice, Redis for caching, and deployed on AWS EC2. Implemented sophisticated RAG pipelines for contextual, human-like voice conversations.",
      finalOutcome: "A highly advanced, production-ready enterprise AI platform capable of handling automated multilingual calls and intricate booking workflows for diverse industries.",
      gallery: ["/callupia/screenshot-1.png"],
      features: [
        "RAG-powered Knowledge Bases",
        "Natural Multilingual Voice Conversations",
        "Real-time Appointment Booking",
        "Intelligent Call Transfers",
        "Post-call AI Analysis & Recording",
        "Multi-tenant SaaS with Stripe Billing"
      ],
      stats: [
        { value: "1000+", label: "AI Calls/Day" },
        { value: "6+", label: "Industries Served" },
        { value: "8wks", label: "Development Time" },
        { value: "99.9%", label: "Uptime" },
      ],
      challenges: [
        {
          title: "Low Latency Voice AI",
          problem: "Voice agents require ultra-low latency to feel natural and human-like during phone conversations.",
          solution: "Optimized the entire pipeline utilizing Node.js streams, Redis caching for RAG context, and high-performance AWS EC2 instances, achieving seamless conversational flow."
        }
      ],
      testimonial: {
        name: "CallUp AI Founders",
        role: "Founders",
        company: "CallUp AI",
        avatar: "C",
        review: "PRNexGen engineered an absolute masterpiece. The AI voice agents are incredibly natural, and the multi-tenant architecture is perfectly primed for scale.",
        rating: 5,
      },
    },
  },

  /* ── 6. BDVH Institute ─────────────────────────────────── */
  {
    id: "bdvh-institute",
    name: "BDVH Institute",
    shortDesc: "A conversion-focused website for a Mid Brain Activation training institute, showcasing their cognitive-development curriculum.",
    longDesc: "Includes dedicated course, franchise, and contact pages to drive enrollments and franchise inquiries across its Ludhiana-based center for students aged 5–20. Features memory enhancement, focus, blindfold reading, and digital detox programs.",
    category: "Enterprise",
    tags: ["Next.js", "Tailwind CSS", "Franchise Landing Page"],
    status: "Completed",
    image: "/projects/bdvh-institute.png",
    accentColor: "#ea580c",
    liveUrl: "https://bdvh.prnexgen.in/",
    clientName: "BDVH Institute",
    featured: true,
    detail: {
      clientBackground: "BDVH Institute is a specialized educational center based in Ludhiana offering Mid Brain Activation and cognitive development programs for students.",
      businessProblem: "Needed a highly conversion-focused online presence to educate parents about their unique curriculum and drive franchise expansion.",
      projectGoals: [
        "Design a conversion-focused marketing website",
        "Highlight cognitive programs (memory enhancement, blindfold reading)",
        "Build a dedicated franchise inquiry pipeline",
        "Ensure mobile-responsive and fast performance"
      ],
      ourSolution: "Crafted a vibrant Next.js and Tailwind CSS website with clear calls-to-action, engaging program descriptions, and targeted landing pages for both student enrollments and franchise opportunities.",
      finalOutcome: "A powerful marketing asset that successfully educates prospects and captures high-quality leads for their Ludhiana center and wider franchise network.",
      gallery: ["/projects/bdvh-institute.png"],
      features: [
        "Conversion-focused Design",
        "Cognitive Curriculum Showcase",
        "Dedicated Franchise Landing Page",
        "Responsive Tailwind CSS UI",
        "Lead Generation Forms",
        "SEO Optimization"
      ],
      stats: [
        { value: "5-20", label: "Student Age Group" },
        { value: "3x", label: "Increase in Leads" },
        { value: "3wks", label: "Delivery Time" },
        { value: "100%", label: "Satisfaction" },
      ],
      challenges: [
        {
          title: "Communicating Niche Concepts",
          problem: "Concepts like 'Blindfold Reading' and 'Mid Brain Activation' needed to be presented professionally to build trust with parents.",
          solution: "Utilized clean, authoritative design patterns and structured copy to clearly explain the scientific approach and tangible benefits of the programs."
        }
      ],
      testimonial: {
        name: "BDVH Director",
        role: "Director",
        company: "BDVH Institute",
        avatar: "B",
        review: "The website perfectly balances professionalism with engaging design. It has become our most valuable tool for driving new student enrollments and franchise inquiries.",
        rating: 5,
      },
    },
  },

  /* ── 7. Zeovus ─────────────────────────────────────────── */
  {
    id: "zeovus",
    name: "Zeovus",
    shortDesc: "A multinational corporate portal showcasing global wellness, food, lifestyle, and consumer goods divisions.",
    longDesc: "Engineered for international corporate presence, Zeovus connects global footprints across the UK, India, Europe, Middle East, and Asia. Features interactive global mapping, multi-business showcases, investor relations, and sustainability standards.",
    category: "Enterprise",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Global Architecture"],
    status: "Completed",
    image: "/projects/zeovus/hero.jpg",
    accentColor: "#0284c7",
    liveUrl: "https://zeovus.com",
    clientName: "Zeovus Group",
    featured: true,
    detail: {
      clientBackground: "Zeovus is a global wellness and consumer goods corporation with multinational operations across food, personal care, and lifestyle products.",
      businessProblem: "Required an authoritative international portal to establish brand trust, display disparate business verticals, and capture cross-border B2B partnership opportunities.",
      projectGoals: [
        "Design a sophisticated corporate presence aligned with international branding",
        "Showcase diversified business verticals under one unified architectural structure",
        "Deliver multilingual & high-performance global infrastructure",
        "Integrate dynamic quality assurance certifications and career portals"
      ],
      ourSolution: "Developed a modern Next.js and Tailwind CSS portal featuring interactive visual geography, robust dynamic content modules, responsive typography, and top-tier SEO architecture.",
      finalOutcome: "A world-class digital flagship representing the Zeovus conglomerate, enhancing brand perception across overseas partners and corporate stakeholders.",
      gallery: [
        "/projects/zeovus/hero.jpg",
        "/projects/zeovus/quality-assurance.png",
      ],
      features: [
        "Global Corporate Division Showcase",
        "Interactive International Footprint",
        "Enterprise Quality Assurance Standards",
        "Dynamic News & Media Center",
        "B2B Partnership Inquiries",
        "Ultra-Fast Global Edge Performance"
      ],
      stats: [
        { value: "5+", label: "Global Regions" },
        { value: "99+", label: "Lighthouse Performance" },
        { value: "4wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Multi-Vertical Brand Harmonization",
          problem: "Displaying distinct divisions (food, cosmetics, lifestyle) without muddying the master group identity.",
          solution: "Implemented modular brand design systems with dedicated division sections and cohesive navigation flows."
        }
      ],
      testimonial: {
        name: "Zeovus Leadership",
        role: "Corporate Management",
        company: "Zeovus Group",
        avatar: "Z",
        review: "PRNexGen delivered a platform that truly matches our international aspirations. The visual hierarchy, performance, and attention to detail are exceptional.",
        rating: 5,
      },
    },
  },

  /* ── 8. Zeovus Life ────────────────────────────────────── */
  {
    id: "zeovus-life",
    name: "Zeovus Life",
    shortDesc: "A modern B2B manufacturing and formulation platform with a catalog of 260+ nutraceutical and cosmetic products.",
    longDesc: "Built for contract manufacturing and B2B formulations, Zeovus Life delivers interactive product exploration across 14 nutraceutical categories and 4 cosmetic lines, complete with detailed ingredient profiles, packaging types, and sample inquiry workflows.",
    category: "Enterprise",
    tags: ["Next.js 14", "Tailwind CSS", "TypeScript", "B2B Catalog", "CMS"],
    status: "Completed",
    image: "/projects/zeovus-life/hero.png",
    accentColor: "#15A859",
    liveUrl: "#",
    clientName: "Zeovus Life",
    featured: true,
    detail: {
      clientBackground: "Zeovus Life is a premier B2B manufacturer specializing in high-efficacy nutraceutical supplements and premium cosmetic formulations.",
      businessProblem: "Needed an organized, searchable digital catalog to demonstrate extensive manufacturing capabilities and generate B2B formulation inquiries.",
      projectGoals: [
        "Architect a catalog organizing 260+ complex SKUs across diverse dosage forms",
        "Highlight certifications (GMP, ISO, Halal) to instill trust with global distributors",
        "Streamline contract manufacturing inquiry and custom formulation requests",
        "Maintain visual synergy with the parent Zeovus brand guidelines"
      ],
      ourSolution: "Engineered a responsive Next.js 14 web platform structured into intuitive dosage categories (effervescent, capsules, gummies, creams) with instant search, category filtering, and direct quotation requests.",
      finalOutcome: "A robust digital showroom enabling overseas buyers and brand owners to review manufacturing specs and initiate bulk orders rapidly.",
      gallery: [
        "/projects/zeovus-life/hero.png",
        "/projects/zeovus-life/preview.png",
      ],
      features: [
        "260+ SKU Formulation Directory",
        "Nutraceutical & Cosmetic Categorization",
        "Contract Manufacturing Process Flow",
        "Regulatory Certification Display",
        "Custom Formulation Request Generator",
        "Clean Responsive B2B Architecture"
      ],
      stats: [
        { value: "260+", label: "Products Cataloged" },
        { value: "18", label: "Specialty Categories" },
        { value: "3wks", label: "Delivery Time" },
        { value: "100%", label: "Satisfaction" },
      ],
      challenges: [
        {
          title: "Complex High-Volume SKU Data Structuring",
          problem: "Managing hundreds of pharmaceutical and cosmetic specifications without overwhelming site visitors.",
          solution: "Structured category databases with granular filters by delivery format, benefit, and target demographic."
        }
      ],
      testimonial: {
        name: "Zeovus Life Operations",
        role: "Production & Sales Lead",
        company: "Zeovus Life",
        avatar: "ZL",
        review: "The new platform has streamlined our client discussions dramatically. Buyers can explore our exact formulas and capabilities in seconds.",
        rating: 5,
      },
    },
  },

  /* ── 9. Jeel Mobile ────────────────────────────────────── */
  {
    id: "jeel-mobile",
    name: "Jeel Mobile",
    shortDesc: "A modern omnichannel retail storefront and direct WhatsApp lead engine for pre-owned smartphones and laptops.",
    longDesc: "Engineered for conversion and trust, Jeel Mobile showcases certified pre-owned devices, clear condition grading, brand-specific filters, and direct WhatsApp negotiation flows that allow the seller to close deals seamlessly without cart friction.",
    category: "E-commerce",
    tags: ["React", "TypeScript", "Tailwind CSS", "WhatsApp Commerce", "Lucide Icons"],
    status: "Completed",
    image: "/projects/jeel-mobile/hero.png",
    accentColor: "#059669",
    liveUrl: "#",
    clientName: "Jeel Mobile",
    featured: true,
    detail: {
      clientBackground: "Jeel Mobile is a trusted regional tech retailer offering refurbished and certified pre-owned Apple, Samsung, and Android devices as well as premium laptops.",
      businessProblem: "Needed an online showroom to display rapidly changing device inventory with transparent condition ratings while directing leads to WhatsApp for rapid closure.",
      projectGoals: [
        "Build a sleek, high-trust digital storefront optimized for mobile users",
        "Implement device grading transparently (Mint, Good, Fair)",
        "Create frictionless 1-click WhatsApp enquiry buttons with pre-filled device details",
        "Include client wishlist and category filtering by brand and price"
      ],
      ourSolution: "Developed a modern, mobile-first web storefront featuring fast filtering, condition badges, instant product sharing, and deep-linked WhatsApp enquiry triggers.",
      finalOutcome: "A high-conversion digital catalog that replaced manual messaging, resulting in higher sales volume and faster customer response cycles.",
      gallery: [
        "/projects/jeel-mobile/hero.png",
        "/projects/jeel-mobile/admin-dashboard.png",
      ],
      features: [
        "Mobile-First Responsive Interface",
        "1-Click WhatsApp Direct Inquiries",
        "Multi-Tier Condition Grading Badges",
        "Device Brand & Specification Filters",
        "Local Wishlist & Sharing Support",
        "Instant Customer Conversion Flow"
      ],
      stats: [
        { value: "500+", label: "Devices Listed" },
        { value: "4x", label: "Faster Inquiries" },
        { value: "2wks", label: "Turnaround Time" },
        { value: "100%", label: "Satisfaction" },
      ],
      challenges: [
        {
          title: "Eliminating E-commerce Friction for Second-Hand Tech",
          problem: "Standard shopping carts deter buyers of second-hand electronics who demand direct negotiation and reassurance on device condition.",
          solution: "Replaced conventional checkout with automated WhatsApp messaging containing exact device specs and condition ratings."
        }
      ],
      testimonial: {
        name: "Jeel Mobile Team",
        role: "Store Manager",
        company: "Jeel Mobile",
        avatar: "JM",
        review: "Customers love browsing our inventory on their phones and messaging us directly on WhatsApp. It made our entire selling process effortless.",
        rating: 5,
      },
    },
  },
]

/* ── Supporting exports ──────────────────────────────────── */
export const CATEGORIES: ProjectCategory[] = [
  "All",
  "Travel & Blog",
  "E-commerce",
  "Enterprise",
  "Social Impact",
  "AI / ML",
]

export const projectStats = [
  { value: "9", label: "Projects Completed" },
  { value: "9", label: "Happy Clients" },
  { value: "5", label: "Industries Served" },
]

export const projectTestimonials = [
  {
    name: "Avid Explorers Team",
    role: "Founder",
    company: "Avid Explorers",
    review: "Our travel website perfectly captures the spirit of exploration. Beautiful design, smooth animations, and an experience our visitors love.",
    rating: 5,
    project: "AvidExplorers",
  },
  {
    name: "Happy Feet Team",
    role: "Client",
    company: "Happy Feet",
    review: "PRNexGen built us a stunning website that loads fast, looks great on mobile, and ranks well on Google. Highly professional team.",
    rating: 5,
    project: "happy-feet.in",
  },
  {
    name: "CallUp AI Founders",
    role: "Founders",
    company: "CallUp AI",
    review: "PRNexGen engineered an absolute masterpiece. The AI voice agents are incredibly natural, and the multi-tenant architecture is perfectly primed for scale.",
    rating: 5,
    project: "CallUp AI",
  },
]
