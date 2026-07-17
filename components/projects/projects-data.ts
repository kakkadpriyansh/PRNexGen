export type ProjectCategory =
  | "All"
  | "Web Development"
  | "Travel & Tourism"
  | "CRM"
  | "Education"

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
  /**
   * Real path: "/projects/happy-feet.png"
   * Gradient fallback: "linear-gradient(135deg, #1e3a5f 0%, ...)"
   */
  image: string
  accentColor: string
  liveUrl: string
  clientName: string
  featured?: boolean
  detail: ProjectDetail
}

/* ══════════════════════════════════════════════════════════ */
export const projects: Project[] = [
  /* ── 1. Happy Feet ─────────────────────────────────────── */
  {
    id: "happy-feet",
    name: "Happy Feet",
    shortDesc:
      "A modern, fully responsive business website for Happy Feet — built for speed, SEO, and a seamless mobile experience.",
    longDesc:
      "Developed with Next.js and Tailwind CSS, the Happy Feet website delivers sub-2-second load times, structured SEO data, optimised images, and a pixel-perfect responsive layout across all devices.",
    category: "Web Development",
    tags: ["Next.js", "React", "Tailwind CSS"],
    status: "Completed",
    image: "/projects/happy-feet.png",
    accentColor: "#2563eb",
    liveUrl: "https://happy-feet.in/",
    clientName: "Happy Feet",
    featured: true,
    detail: {
      clientBackground:
        "Happy Feet is a growing footwear retail brand based in India, offering a curated collection of shoes, sandals, and sports footwear for men, women, and kids. They wanted a modern online presence to showcase their products and drive customer footfall.",
      businessProblem:
        "The client had no professional website and was losing potential customers to competitors with stronger digital presence. They needed a fast, visually appealing, and mobile-friendly website that could also rank on Google.",
      projectGoals: [
        "Build a responsive, brand-consistent website from scratch",
        "Achieve sub-2-second page load times across all devices",
        "Optimise for local SEO to drive organic traffic",
        "Create a clean product showcase with intuitive navigation",
        "Deliver a fully maintainable codebase for future updates",
      ],
      ourSolution:
        "PRNexGen built the entire website using Next.js 14 with the App Router, Tailwind CSS for rapid UI development, and next/image for automatic image optimisation. We implemented structured data, Open Graph tags, and a sitemap for SEO. The result was a pixel-perfect, brand-aligned website that loads in under 1.8 seconds.",
      finalOutcome:
        "The Happy Feet website launched on schedule and achieved a 98 Lighthouse performance score. Within 6 weeks of launch, the client reported a significant increase in online enquiries and improved Google visibility for local search terms.",
      gallery: [
        "/projects/happy-feet.png",
      ],
      features: [
        "Responsive Design — pixel-perfect on all screen sizes",
        "SEO Optimised — structured data, sitemaps, Open Graph",
        "Lightning Fast — 98 Lighthouse performance score",
        "Product Showcase — clean catalogue with hover effects",
        "Mobile Navigation — smooth hamburger menu",
        "Contact & Enquiry Form — integrated lead capture",
        "Google Maps Integration — store location finder",
        "Social Media Links — fully integrated",
      ],
      stats: [
        { value: "98",   label: "Lighthouse Score" },
        { value: "<1.8s",label: "Page Load Time" },
        { value: "3wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Performance vs Rich Visuals",
          problem:
            "The client wanted a visually rich product gallery with high-quality images, but this typically increases load time significantly.",
          solution:
            "We used Next.js automatic image optimisation with WebP conversion, lazy loading, and responsive srcsets to deliver sharp visuals without sacrificing performance.",
        },
        {
          title: "Local SEO from Scratch",
          problem:
            "Starting with zero domain authority and no existing SEO made it challenging to rank for competitive footwear keywords.",
          solution:
            "We implemented a complete on-page SEO strategy — schema markup, meta tags, semantic HTML, and a local business Google My Business integration — giving the site a strong foundation for organic growth.",
        },
      ],
      testimonial: {
        name: "Happy Feet Team",
        role: "Client",
        company: "Happy Feet",
        avatar: "H",
        review:
          "PRNexGen built us a stunning website that loads fast, looks great on mobile, and ranks well on Google. The team was professional, responsive, and delivered exactly what we needed. Highly recommended.",
        rating: 5,
      },
    },
  },

  /* ── 2. Avid Explorers ──────────────────────────────────── */
  {
    id: "avid-explorers",
    name: "Avid Explorers",
    shortDesc:
      "A visually rich travel & tourism website crafted with engaging destination visuals, responsive layouts, and an exceptional user experience.",
    longDesc:
      "Built on Next.js with React and Tailwind CSS, Avid Explorers showcases destinations with immersive imagery, smooth animations, and a clean navigation structure designed to inspire and convert travellers.",
    category: "Travel & Tourism",
    tags: ["Next.js", "React", "Tailwind CSS"],
    status: "Completed",
    image: "/projects/avid-explorers.png",
    accentColor: "#10b981",
    liveUrl: "https://avidexplorers.in/",
    clientName: "Avid Explorers",
    featured: true,
    detail: {
      clientBackground:
        "Avid Explorers is a travel and adventure company that organises group trips, treks, and travel packages across India and beyond. They cater to young travellers looking for unique, curated experiences — from Ladakh treks to Rajasthan road trips.",
      businessProblem:
        "The client was relying on Instagram and WhatsApp to attract customers, with no dedicated website. This limited their ability to showcase destinations professionally and capture leads at scale.",
      projectGoals: [
        "Create an immersive travel website that inspires visitors to book",
        "Showcase destinations with high-quality imagery and compelling copy",
        "Build an easy-to-use events/trips listing section",
        "Enable lead capture through enquiry forms",
        "Ensure seamless mobile experience for on-the-go users",
      ],
      ourSolution:
        "PRNexGen designed and developed a visually immersive travel website using Next.js and Tailwind CSS. We created a hero section with full-screen destination imagery, a destination cards grid, a trip listing page, and an enquiry form. Framer Motion was used for smooth scroll animations throughout.",
      finalOutcome:
        "Avid Explorers launched their website to strong client feedback. The website now serves as their primary lead generation channel, and the client reported a marked increase in trip enquiries within the first month of launch.",
      gallery: [
        "/projects/avid-explorers.png",
      ],
      features: [
        "Immersive Hero with Destination Photography",
        "Destination Showcase Grid — animated cards",
        "Trip / Event Listings with Detail Pages",
        "Enquiry & Booking Form",
        "Responsive Design — mobile-first layout",
        "Smooth Framer Motion Animations",
        "Fast Image Loading with Next.js Optimisation",
        "Social Media Integration",
      ],
      stats: [
        { value: "15+",  label: "Destinations Featured" },
        { value: "95",   label: "Lighthouse Score" },
        { value: "4wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Immersive Visuals vs Fast Loading",
          problem:
            "Travel websites need stunning full-screen images, but large image files can severely hurt performance.",
          solution:
            "We used Next.js Image component with priority loading for above-the-fold images and lazy loading for gallery images, achieving a 95 Lighthouse score with visually rich content.",
        },
        {
          title: "Content Architecture for Trips",
          problem:
            "The client had diverse trip types (treks, road trips, cultural tours) and needed a flexible content structure that was easy to update.",
          solution:
            "We built a data-driven trip listing system with filterable categories, enabling the client to add new destinations and trips without touching code.",
        },
      ],
      testimonial: {
        name: "Avid Explorers Team",
        role: "Founder",
        company: "Avid Explorers",
        avatar: "A",
        review:
          "Our travel website perfectly captures the spirit of exploration. The design is stunning, the animations are smooth, and the experience our visitors have is exactly what we envisioned. PRNexGen exceeded our expectations.",
        rating: 5,
      },
    },
  },

  /* ── 3. BDVH CRM ────────────────────────────────────────── */
  {
    id: "bdvh-crm",
    name: "BDVH CRM",
    shortDesc:
      "A complete CRM system for BDVH Institute — managing enquiries, admissions, student records, follow-ups, and administrative operations.",
    longDesc:
      "A full-stack web application built with Next.js, Node.js, and MongoDB. Features role-based dashboards for admin and staff, real-time follow-up tracking, admission pipeline management, analytics, and automated notification workflows.",
    category: "CRM",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    status: "Completed",
    image: "/projects/bdvh-crm.png",
    accentColor: "#4f46e5",
    liveUrl: "https://crm.bdvhinstitute.com/",
    clientName: "BDVH Institute",
    featured: true,
    detail: {
      clientBackground:
        "BDVH Institute is an established educational institution offering various courses and programs. With a growing student base and multiple staff members handling admissions, the institute needed a centralised system to manage their operations efficiently.",
      businessProblem:
        "The institute was managing enquiries, admissions, and follow-ups using spreadsheets and WhatsApp. This led to missed follow-ups, data inconsistency, and no visibility into the admission pipeline — costing them potential admissions daily.",
      projectGoals: [
        "Build a centralised CRM to manage all enquiries and leads",
        "Create role-based access for admin and counsellors",
        "Implement a follow-up tracking system with reminders",
        "Provide real-time analytics on admission pipeline",
        "Reduce manual data entry and eliminate spreadsheet chaos",
      ],
      ourSolution:
        "PRNexGen built a full-stack CRM using Next.js (frontend), Node.js/Express (backend), and MongoDB (database). The system includes role-based dashboards, an enquiry management pipeline, automated follow-up reminders, student records management, and an analytics dashboard showing revenue and admission trends.",
      finalOutcome:
        "Since deploying the CRM, BDVH Institute has seen a dramatic improvement in follow-up efficiency. Counsellors now have a clear view of their pipeline, and the admin has real-time visibility into institute performance — all from a single, secure dashboard.",
      gallery: [
        "/projects/bdvh-crm.png",
      ],
      features: [
        "Role-Based Access Control (Admin / Counsellor)",
        "Enquiry Management Pipeline",
        "Automated Follow-Up Reminders",
        "Student Records Management",
        "Admission Analytics Dashboard",
        "Revenue & Fee Tracking",
        "Real-Time Notifications",
        "Secure JWT Authentication",
      ],
      stats: [
        { value: "3",    label: "User Roles" },
        { value: "100+", label: "Daily Records" },
        { value: "6wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Complex Role-Based Access",
          problem:
            "Different staff members (admin, senior counsellors, junior staff) needed different levels of data access and edit permissions.",
          solution:
            "We implemented a granular JWT-based RBAC system where each route and UI element is conditionally rendered and API-protected based on the authenticated user's role.",
        },
        {
          title: "Real-Time Follow-Up Tracking",
          problem:
            "The client needed staff to be reminded of pending follow-ups without relying on manual checks or WhatsApp reminders.",
          solution:
            "We built an automated follow-up scheduler that highlights overdue follow-ups in red on the dashboard and sends browser notifications when a follow-up is due.",
        },
      ],
      testimonial: {
        name: "BDVH Institute Admin",
        role: "Administrator",
        company: "BDVH Institute",
        avatar: "B",
        review:
          "The CRM system completely transformed how we manage admissions and student follow-ups. It saves us hours every single day and gives us full visibility into our pipeline. PRNexGen understood exactly what we needed.",
        rating: 5,
      },
    },
  },

  /* ── 4. BDVH Institute ──────────────────────────────────── */
  {
    id: "bdvh-institute",
    name: "BDVH Institute",
    shortDesc:
      "A responsive educational institute website showcasing courses, admissions, faculty, events, and institute highlights with a modern UI.",
    longDesc:
      "Built with Next.js and Tailwind CSS, the BDVH Institute website features structured course listings, an online inquiry form, faculty profiles, event announcements, and full SEO optimisation for local and organic discovery.",
    category: "Education",
    tags: ["Next.js", "React", "Tailwind CSS"],
    status: "Completed",
    image: "/projects/bdvh-institute.png",
    accentColor: "#ea580c",
    liveUrl: "https://bdvh.prnexgen.in/",
    clientName: "BDVH Institute",
    featured: true,
    detail: {
      clientBackground:
        "BDVH Institute offers specialised educational programs including Mid Brain Activation and cognitive development courses. With a focus on transformative learning, they serve students aged 5–20 across India and work through a franchise model.",
      businessProblem:
        "The institute needed a professional website to establish credibility, explain their unique Mid Brain Activation methodology, showcase their courses, and generate online enquiries from parents and prospective franchise partners.",
      projectGoals: [
        "Create a professional, trust-building institute website",
        "Clearly communicate the Mid Brain Activation program",
        "List all courses with detailed program pages",
        "Capture leads through enquiry and franchise interest forms",
        "Support bilingual content (English and Hindi)",
        "Optimise for local SEO to attract nearby students",
      ],
      ourSolution:
        "PRNexGen designed and built a vibrant, purpose-driven educational website using Next.js and Tailwind CSS. The site features an animated hero section, course listing pages, a franchise information module, faculty profiles, and a multi-step enquiry form. Bilingual support was implemented using Next.js i18n routing.",
      finalOutcome:
        "The BDVH Institute website successfully positions the brand as a credible educational institution. The client reported increased online enquiries within weeks of launch, and the franchise enquiry form has become a key lead generation tool for their expansion plans.",
      gallery: [
        "/projects/bdvh-institute.png",
      ],
      features: [
        "Animated Hero with Programme Highlights",
        "Course Listing with Detailed Pages",
        "Franchise Information Module",
        "Faculty & Team Profiles",
        "Online Enquiry Form",
        "Bilingual Support (English / Hindi)",
        "SEO Optimised for Local Discovery",
        "Mobile-Responsive Design",
      ],
      stats: [
        { value: "8+",   label: "Course Pages" },
        { value: "2",    label: "Languages Supported" },
        { value: "4wks", label: "Delivery Time" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      challenges: [
        {
          title: "Bilingual Content Management",
          problem:
            "The client needed the website to be accessible in both English and Hindi, with seamless language switching for users across different regions.",
          solution:
            "We implemented Next.js i18n routing with a language switcher in the navbar, allowing all content to be served in the selected language while maintaining a single unified codebase.",
        },
        {
          title: "Communicating a Unique Concept",
          problem:
            "Mid Brain Activation is a specialised, lesser-known concept. The website needed to clearly explain it to sceptical parents and make it compelling enough to drive enquiries.",
          solution:
            "We created a structured content hierarchy with explainer sections, statistics, video testimonials, and a clear FAQ — building trust and reducing friction for prospective enquiries.",
        },
      ],
      testimonial: {
        name: "BDVH Institute Admin",
        role: "Director",
        company: "BDVH Institute",
        avatar: "B",
        review:
          "PRNexGen understood our institute's unique vision and translated it into a website that truly represents who we are. The design is modern, professional, and the team was incredibly supportive throughout.",
        rating: 5,
      },
    },
  },
]

/* ── Supporting exports ──────────────────────────────────── */
export const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Development",
  "Travel & Tourism",
  "CRM",
  "Education",
]

export const projectStats = [
  { value: "4", label: "Projects Completed" },
  { value: "4", label: "Happy Clients" },
  { value: "4", label: "Industries Served" },
]

export const projectTestimonials = [
  {
    name: "Happy Feet Team",
    role: "Client",
    company: "Happy Feet",
    review:
      "PRNexGen built us a stunning website that loads fast, looks great on mobile, and ranks well on Google. Highly professional team.",
    rating: 5,
    project: "Happy Feet Website",
  },
  {
    name: "Avid Explorers Team",
    role: "Client",
    company: "Avid Explorers",
    review:
      "Our travel website perfectly captures the spirit of exploration. Beautiful design, smooth animations, and an experience our visitors love.",
    rating: 5,
    project: "Avid Explorers Website",
  },
  {
    name: "BDVH Institute Admin",
    role: "Administrator",
    company: "BDVH Institute",
    review:
      "The CRM system completely transformed how we manage admissions and student follow-ups. It saves us hours every single day.",
    rating: 5,
    project: "BDVH CRM",
  },
]
