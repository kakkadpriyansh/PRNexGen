import { Mail, Phone, MapPin } from "lucide-react"
import type { SubNavItem } from "./nav-dropdown"
import { iconColors } from "./color-utils"

export const resourcesDropdownData: SubNavItem[][] = [
  [
    {
      title: "Email",
      description: "prnexgen@yahoo.com",
      href: "mailto:prnexgen@yahoo.com",
      icon: Mail,
      color: iconColors.resources.blog,
      external: true,
    },
    {
      title: "Phone",
      description: "+91 99799 93097, +91 91734 73491",
      href: "tel:+919979993097",
      icon: Phone,
      color: iconColors.resources.tutorials,
      external: true,
    },
    {
      title: "Location",
      description: "Rajkot, Gujarat, India",
      href: "#",
      icon: MapPin,
      color: iconColors.resources.community,
      external: false,
    },
  ],
]
