"use client"

import ProjectForm from "./project-form"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Rocket } from "lucide-react"

export default function StartProject() {
  const { resolvedTheme } = useTheme()

  // Function to load Tally embeds
  const loadTallyEmbeds = () => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds()
    }
  }

  // Load Tally embeds when component mounts or theme changes
  useEffect(() => {
    loadTallyEmbeds()

    // Add a class to the iframe's parent element based on the current theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const iframe = document.querySelector("iframe[data-tally-src]") as HTMLIFrameElement | null
          if (iframe) {
            // Set a data attribute on the iframe that can be used in CSS
            iframe.setAttribute("data-theme", resolvedTheme || "light")

            // Try to access the iframe content if possible
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
              if (iframeDoc && iframeDoc.documentElement) {
                iframeDoc.documentElement.setAttribute("data-theme", resolvedTheme || "light")
              }
            } catch (e) {
              console.log("Cannot access iframe content due to same-origin policy")
            }
          }
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [resolvedTheme])

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] relative overflow-hidden">
      <div className="absolute inset-0">
        <div data-float className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--accent)/0.2)] rounded-full blur-3xl" />
        <div data-float className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--primary)/0.18)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-animate className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full section-pill text-sm font-semibold mb-8 shadow-lg">
              <Rocket className="w-5 h-5" />
              Let&apos;s Build Together
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-[hsl(var(--foreground))]">Ready to Start</span>
              <br />
              <span className="text-[hsl(var(--foreground))]">Your Next</span>{" "}
              <span className="accent">
                Project
              </span>
              <span className="text-[hsl(var(--foreground))]">?</span>
            </h1>

            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-3xl mx-auto leading-relaxed">
              Answer some quick questions about your project and schedule a call with your dedicated project manager. Let&apos;s turn your vision into reality.
            </p>
          </div>
        </div>
      </div>
      
      <ProjectForm />
    </div>
  )
}
