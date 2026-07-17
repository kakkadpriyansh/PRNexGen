export interface Job {
  id: string
  title: string
  type: "Full-Time" | "Internship" | "Part-Time" | "Contract"
  experience: string
  workMode: "Work From Home" | "On-Site" | "Hybrid"
  location: string
  department: string
  gradient: string
  accentColor: string
  skills: string[]
  description: string
  responsibilities: string[]
  qualifications: string[]
  benefits: string[]
  salary: string
}

export const jobs: Job[] = [
  {
    id: "bde",
    title: "Business Development Executive (BDE)",
    type: "Internship",
    experience: "Fresher / 0–1 Year",
    workMode: "Work From Home",
    location: "India",
    department: "Sales & Marketing",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#6366f1",
    skills: ["Communication Skills", "Lead Generation", "Sales & Marketing", "Client Relationship"],
    description:
      "We are looking for a driven and enthusiastic Business Development Executive intern to join our growing sales team. You will play a key role in identifying new business opportunities, reaching out to potential clients, and supporting our sales pipeline. This is an excellent opportunity for freshers looking to kickstart their career in tech sales.",
    responsibilities: [
      "Identify and research potential clients across various industries",
      "Reach out to prospects via email, LinkedIn, and phone",
      "Maintain and update the CRM with leads and follow-ups",
      "Assist in preparing proposals, presentations, and pitches",
      "Collaborate with the marketing team on campaigns and lead generation",
      "Build and maintain long-term client relationships",
      "Meet weekly and monthly outreach and lead targets",
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or any related field",
      "Excellent verbal and written communication skills in English",
      "Strong interpersonal and negotiation skills",
      "Self-motivated with a passion for sales and technology",
      "Basic understanding of software/IT services is a plus",
      "Ability to work independently in a remote environment",
    ],
    benefits: [
      "Work-from-home flexibility",
      "Internship certificate & letter of recommendation",
      "Performance-based incentives",
      "Mentorship from experienced professionals",
      "Opportunity for full-time conversion based on performance",
      "Exposure to a fast-growing tech startup environment",
    ],
    salary: "Negotiable / Stipend-based",
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    type: "Full-Time",
    experience: "3+ Years",
    workMode: "Work From Home",
    location: "India",
    department: "Engineering",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    accentColor: "#06b6d4",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "REST APIs"],
    description:
      "We are seeking a talented and experienced Full Stack Developer to build and maintain high-performance web applications for our clients. You will work closely with the design and product teams to ship clean, scalable code across the full stack — from pixel-perfect frontends to robust backend APIs.",
    responsibilities: [
      "Design, develop, and maintain full-stack web applications using Next.js and Node.js",
      "Build reusable, testable, and efficient code with TypeScript",
      "Develop RESTful APIs and integrate third-party services",
      "Collaborate with UI/UX designers to implement responsive interfaces",
      "Manage MongoDB databases — schema design, queries, and optimisation",
      "Participate in code reviews and maintain high code quality standards",
      "Deploy and monitor applications on cloud platforms (Vercel, AWS, etc.)",
      "Communicate technical concepts clearly to non-technical stakeholders",
    ],
    qualifications: [
      "3+ years of professional full-stack development experience",
      "Strong proficiency in React, Next.js, Node.js, and TypeScript",
      "Experience with MongoDB, PostgreSQL, or similar databases",
      "Solid understanding of RESTful API design and integration",
      "Familiarity with Git, CI/CD pipelines, and agile workflows",
      "Experience deploying on Vercel, AWS, or similar cloud platforms",
      "Strong problem-solving skills and attention to detail",
    ],
    benefits: [
      "100% remote, work-from-home role",
      "Competitive salary — negotiable based on experience",
      "Flexible working hours",
      "Work on real client projects with modern tech stacks",
      "Regular learning sessions and sponsored certifications",
      "Friendly, collaborative team culture",
      "Fast career growth in a growing startup",
    ],
    salary: "Negotiable",
  },
]

export const perks = [
  {
    icon: "🏠",
    title: "Work From Home",
    desc: "Enjoy full flexibility to work from the comfort of your home. No commute, no fixed location — just results.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    desc: "We trust our team. Set your own schedule, balance your life, and deliver great work on your terms.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Clear growth paths, regular performance reviews, and real opportunities to move up fast.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: "🎓",
    title: "Learning & Development",
    desc: "Sponsored courses, certifications, internal workshops, and a culture that values continuous learning.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: "🤝",
    title: "Friendly Team",
    desc: "Work alongside passionate, supportive, and talented people who genuinely enjoy building together.",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: "⚡",
    title: "Latest Technologies",
    desc: "Work with cutting-edge tools — Next.js, AI, TypeScript, cloud platforms, and everything modern.",
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-50",
  },
]

export const hiringSteps = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Submit your application with your resume and cover letter through our online form.",
    icon: "📝",
  },
  {
    step: "02",
    title: "Resume Screening",
    desc: "Our HR team reviews your profile and shortlists candidates matching the role.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Technical / HR Interview",
    desc: "A video call interview to assess your skills, experience, and cultural fit.",
    icon: "💬",
  },
  {
    step: "04",
    title: "Final Interview",
    desc: "Meet the leadership team for a final discussion about your role and expectations.",
    icon: "🎯",
  },
  {
    step: "05",
    title: "Offer Letter",
    desc: "Receive your official offer letter with compensation details and joining date.",
    icon: "📄",
  },
  {
    step: "06",
    title: "Join PRNexGen",
    desc: "Welcome aboard! Begin your onboarding and start building amazing products.",
    icon: "🚀",
  },
]

export const faqs = [
  {
    q: "Are all positions fully remote?",
    a: "Yes — all current openings are 100% work-from-home. We believe great work can be done from anywhere.",
  },
  {
    q: "Do you offer internships for freshers?",
    a: "Absolutely. Our BDE internship role is specifically designed for freshers and early-career professionals. High performers are considered for full-time roles.",
  },
  {
    q: "What is the hiring timeline?",
    a: "The entire process typically takes 1–2 weeks — from application to offer letter.",
  },
  {
    q: "What is the salary / stipend?",
    a: "Compensation is negotiable and based on your experience, skills, and the role. We aim to be competitive and fair.",
  },
  {
    q: "What tech stack does PRNexGen use?",
    a: "We work with Next.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, Tailwind CSS, and various AI/cloud platforms.",
  },
  {
    q: "Can I apply for multiple positions?",
    a: "Yes, you are welcome to apply for more than one position if you meet the requirements. Please submit a separate application for each role.",
  },
  {
    q: "How do I follow up on my application?",
    a: "After submitting your application you will receive a confirmation email. If shortlisted, our team will reach out within 5–7 business days.",
  },
]
