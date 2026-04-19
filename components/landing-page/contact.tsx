"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react"

type FormData = { name: string; email: string; phone: string; service: string; message: string }
type Errors = Partial<Record<keyof FormData, string>>

const services = [
  "Website Development", "Website Maintenance", "App Development",
  "Hosting Services", "AI-Based Product Shoot", "Meta Ads & SEO Marketing",
  "Graphic Designing", "Other",
]

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = "Name is required"
  if (!data.email.trim()) errors.email = "Email is required"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email"
  if (!data.message.trim()) errors.message = "Message is required"
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", service: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSuccess(true)
        setForm({ name: "", email: "", phone: "", service: "", message: "" })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-pill mb-4">Contact Us</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Let's Build Your{" "}
            <span className="brand-gradient-text">Next Project</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to take your business to the next level? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We'd love to hear about your project. Fill out the form or reach us directly through any of the channels below.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "prnexgen@yahoo.com", href: "mailto:prnexgen@yahoo.com" },
                { icon: Phone, label: "Phone", value: "8401661887 | 99799 93097", href: "tel:+918401661887" },
                { icon: MapPin, label: "Location", value: "Rajkot, Gujarat, India", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={value} className="flex items-start gap-4">
                  <div className="icon-box shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-semibold hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <span className="text-sm font-semibold">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="text-sm font-medium">We typically respond within <span className="text-primary font-bold">24 hours</span></p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-green-500/5 border border-green-500/20">
                <CheckCircle2 size={56} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5 p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={form.name}
                      onChange={set("name")}
                      placeholder="John Doe"
                      className={`contact-input ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="john@example.com"
                      className={`contact-input ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 98765 43210"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Service Needed</label>
                    <select value={form.service} onChange={set("service")} className="contact-input">
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`contact-input resize-none ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 text-base">
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
