"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Happy Feet Store",
    position: "E-Commerce Platform",
    content: "PRNexGen delivered a complete footwear e-commerce solution with advanced admin panel. Sales increased by 200% with their modern Next.js platform.",
    rating: 5,
    avatar: "/happyfeet-ss.png"
  },
  {
    id: 2,
    name: "Avid Explorers",
    position: "Travel Booking Platform",
    content: "Exceptional full-stack travel website with booking system and admin dashboard. Customer bookings improved dramatically with the responsive design.",
    rating: 5,
    avatar: "/avid-photo.png"
  },
  {
    id: 3,
    name: "BDVH Education",
    position: "Teacher & Education Agency",
    content: "Professional education platform with role-based access and comprehensive admin panel. Streamlined our entire teacher-student management process.",
    rating: 5,
    avatar: "/bdvh-ss.png"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" />
            Client Success Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 overflow-hidden group cursor-pointer"
          >
            {/* Floating elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${20 + (i % 2) * 40}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.h3
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300% mb-4"
              >
                Let's Build Something Amazing Together
              </motion.h3>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Transform your vision into reality with our expert team. From concept to deployment, we're here to make it happen.
              </p>
              
              <motion.a
                href="tel:+919979993097"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-full font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                Inquiry Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}