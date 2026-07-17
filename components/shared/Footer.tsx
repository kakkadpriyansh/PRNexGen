import Link from "next/link"
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const services = [
  { label: "Web Development",       href: "/services/web-development" },
  { label: "App Development",       href: "/services/app-development" },
  { label: "Education App Dev",     href: "/services/education-app-development" },
  { label: "UI/UX Design",          href: "/services/ui-ux-design" },
]

const company = [
  { label: "About Us",  href: "/about" },
  { label: "Projects",  href: "/projects" },
  { label: "Career",    href: "/career" },
  { label: "Contact",   href: "/contact" },
]

const socials = [
  { icon: FaLinkedin,  href: "#", label: "LinkedIn",  color: "hover:text-blue-600" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: FaTwitter,   href: "#", label: "Twitter",   color: "hover:text-sky-500" },
  { icon: FaFacebook,  href: "#", label: "Facebook",  color: "hover:text-blue-700" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center text-white font-black text-sm">P</div>
              <span className="font-black text-xl gradient-text">PRNexGen</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              AI-powered software development company delivering world-class digital solutions for startups and enterprises.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label}
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 ${color} transition-all hover:bg-white/20`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:prnexgen@yahoo.com" className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <HiMail className="mt-0.5 shrink-0 text-blue-500" size={16} />
                  <span className="text-sm">prnexgen@yahoo.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+918401661887" className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <HiPhone className="mt-0.5 shrink-0 text-blue-500" size={16} />
                  <span className="text-sm">+91 84016 61887</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <HiLocationMarker className="mt-0.5 shrink-0 text-blue-500" size={16} />
                  <span className="text-sm">Rajkot, Gujarat, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} PRNexGen. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Built with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )
}
