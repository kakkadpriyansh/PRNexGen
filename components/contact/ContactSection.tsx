"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  HiMail, HiPhone, HiLocationMarker, HiCheck,
} from "react-icons/hi"
import {
  FiClock, FiChevronDown,
} from "react-icons/fi"
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa"

/* ── contact meta ─────────────────────────────────────────────── */
const contactInfo = [
  {
    icon: HiLocationMarker,
    label: "Office Address",
    value: "Rajkot, Gujarat, India",
    href: "https://maps.google.com/?q=Rajkot,Gujarat,India",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HiMail,
    label: "Email Address",
    value: "prnexgen@yahoo.com",
    href: "mailto:prnexgen@yahoo.com",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: HiPhone,
    label: "Phone Number",
    value: "+91 84016 61887",
    href: "tel:+918401661887",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: FiClock,
    label: "Business Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM IST",
    href: null,
    color: "from-indigo-500 to-indigo-600",
  },
]

const socials = [
  { icon: FaLinkedin,  href: "https://www.linkedin.com/company/prnexgen", label: "LinkedIn",  color: "hover:bg-blue-600" },
  { icon: FaInstagram, href: "https://www.instagram.com/prnexgen",        label: "Instagram", color: "hover:bg-pink-500" },
  { icon: FaTwitter,   href: "https://twitter.com/prnexgen",              label: "Twitter",   color: "hover:bg-sky-500" },
  { icon: FaFacebook,  href: "https://www.facebook.com/prnexgen",         label: "Facebook",  color: "hover:bg-blue-700" },
  { icon: FaWhatsapp,  href: "https://wa.me/918401661887",                label: "WhatsApp",  color: "hover:bg-green-500" },
]

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Education App Development",
  "AI Solutions",
  "Meta Ads & SEO",
  "Hosting & Maintenance",
  "Other",
]

const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "₹10,00,000+",
  "Prefer not to say",
]

/* ── shared input style ────────────────────────────────────────── */
const inputCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white transition-all"
const labelCls = "block text-sm font-semibold text-gray-700 mb-1.5"

/* ── SelectField ───────────────────────────────────────────────── */
function SelectField({ label, options, required = false, placeholder }: {
  label: string; options: string[]; required?: boolean; placeholder: string
}) {
  return (
    <div>
      <label className={labelCls}>
        {label} {required && <span className="text-red-500">*</span>}
        {!required && <span className="text-gray-400 font-normal"> (Optional)</span>}
      </label>
      <div className="relative">
        <select required={required} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════ */
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1800)
  }

  return (
    <section id="contact-section" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Fill in the form and our team will get back to you within 24 hours — no obligation, no spam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="glass-card rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5"
                >
                  <HiCheck className="text-green-500" size={40} />
                </motion.div>
                <h3 className="font-black text-gray-900 text-2xl mb-3">Message Sent!</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                  Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gradient px-8 py-3 rounded-xl font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-black text-gray-900 text-xl mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Full Name <span className="text-red-500">*</span></label>
                      <input required type="text" placeholder="Rahul Sharma" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" placeholder="rahul@company.com" className={inputCls} />
                    </div>
                  </div>

                  {/* Row: Phone + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Phone Number <span className="text-red-500">*</span></label>
                      <input required type="tel" placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                      <input type="text" placeholder="Your Company" className={inputCls} />
                    </div>
                  </div>

                  {/* Row: Service + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectField
                      label="Service Required"
                      options={services}
                      required
                      placeholder="Select a service"
                    />
                    <SelectField
                      label="Project Budget"
                      options={budgets}
                      placeholder="Select budget range"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelCls}>Message <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project — goals, timeline, tech stack preferences, or anything you'd like us to know…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-gradient py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Send Message →"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* ── RIGHT: Info + Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-2xl border border-gray-100 p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-3 shadow-md`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors leading-snug block">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-gray-800 leading-snug block">{value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card rounded-2xl border border-gray-100 p-5"
            >
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Follow Us</div>
              <div className="flex gap-2.5">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 ${color} hover:text-white transition-all duration-200`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Google Map embed */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}
              className="glass-card rounded-2xl border border-gray-100 overflow-hidden shadow-md"
            >
              <div className="px-4 pt-4 pb-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Our Location</div>
                <div className="text-sm font-bold text-gray-800">Rajkot, Gujarat, India</div>
              </div>
              <iframe
                title="PRNexGen Office Location — Rajkot, Gujarat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118647.86679670988!2d70.75144!3d22.30193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2c60000001%3A0x27ec5e0a0e960e04!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
