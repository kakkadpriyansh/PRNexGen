import { MetadataRoute } from 'next'

const BASE = 'https://prnexgen.in'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Core pages ── */
    { url: BASE,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/career`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/projects`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/start`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    /* ── Services hub ── */
    { url: `${BASE}/services`,                         lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    /* ── Individual service pages ── */
    { url: `${BASE}/services/web-development`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/app-development`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/education-app-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/ui-ux-design`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/erp-software-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/digital-marketing`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    /* ── Blog ── */
    { url: `${BASE}/blog`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
  ]
}

