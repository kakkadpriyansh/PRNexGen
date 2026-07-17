"use client"

import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"

const testimonials = [
  { name: "Rahul Sharma",   company: "TechCorp India",    role: "CTO",             review: "PRNexGen delivered our platform 2 weeks ahead of schedule. The code quality and attention to detail was exceptional.", rating: 5 },
  { name: "Sarah Johnson",  company: "EduLearn USA",      role: "Product Manager", review: "Their education app transformed how our students learn. Intuitive design and rock-solid performance.", rating: 5 },
  { name: "Ahmed Al-Farsi", company: "NexaFlow UAE",      role: "Founder",         review: "From concept to launch in 6 weeks. PRNexGen's AI integration gave us a serious competitive edge.", rating: 5 },
  { name: "Priya Patel",    company: "SmartApps Mumbai",  role: "CEO",             review: "Best development partner we've worked with. Transparent, fast, and genuinely invested in our success.", rating: 5 },
  { name: "James Wilson",   company: "CloudBase UK",      role: "Engineering Lead", review: "The UI/UX work was stunning. Our conversion rate improved by 40% after the redesign.", rating: 5 },
  { name: "Meera Nair",     company: "DataSync Bangalore", role: "Director",       review: "Professional team, clean architecture, and excellent post-launch support. Highly recommended.", rating: 5 },
]

export default function HomeTestimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, company, role, review, rating }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <FiStar key={j} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{review}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white font-bold text-sm">
                  {name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{name}</div>
                  <div className="text-xs text-gray-400">{role} · {company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
