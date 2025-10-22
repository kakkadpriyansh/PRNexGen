import { Code2, Zap, Cloud, Shield } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Web & Mobile App Development",
    description:
      "Custom web and mobile applications built with modern technologies for optimal performance and user experience.",
    icon: Code2,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "AI and Automation Solutions",
    description:
      "Intelligent automation systems that streamline operations and unlock new possibilities for your business.",
    icon: Zap,
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Cloud & DevOps Services",
    description:
      "Scalable cloud infrastructure and DevOps solutions to ensure reliability, security, and continuous deployment.",
    icon: Cloud,
    color: "bg-blue-600",
  },
  {
    id: 4,
    title: "Cybersecurity & IT Consulting",
    description:
      "Comprehensive security assessments and consulting to protect your digital assets and ensure compliance.",
    icon: Shield,
    color: "bg-blue-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Our Services
        <span className="block text-blue-600 dark:text-blue-400">Tailored for Your Success</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        We provide comprehensive IT solutions designed to help startups, enterprises, and businesses build scalable and
        future-ready technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
