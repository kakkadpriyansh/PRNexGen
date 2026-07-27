import { redirect } from "next/navigation"
import type { Metadata } from "next"

/* Belt-and-suspenders: noindex in case crawlers somehow bypass the redirect */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

/**
 * /services/ui-ux-development is a legacy duplicate of /services/ui-ux-design.
 * All internal links and the footer already point to /services/ui-ux-design.
 * This permanent redirect preserves any external links or search-engine
 * index entries and consolidates ranking signals into the canonical URL.
 */
export default function UIUXDevelopmentRedirect() {
  redirect("/services/ui-ux-design")
}
