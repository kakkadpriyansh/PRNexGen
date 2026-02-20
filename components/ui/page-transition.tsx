"use client"
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    gsap.registerPlugin(ScrollTrigger)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      const animate = (element: Element, vars: gsap.TweenVars) => {
        if (prefersReducedMotion) {
          gsap.set(element, { opacity: 1, y: 0, scale: 1 })
          return
        }
        gsap.fromTo(
          element,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            ...vars,
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              once: true,
            },
          }
        )
      }

      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element: HTMLElement) => {
        const type = element.dataset.animate
        if (type === "stagger") {
          const items = element.querySelectorAll("[data-animate-child]")
          if (prefersReducedMotion) {
            gsap.set(items, { opacity: 1, y: 0, scale: 1 })
            return
          }
          gsap.fromTo(
            items,
            { opacity: 0, y: 28, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                once: true,
              },
            }
          )
          return
        }

        if (type === "fade-in") {
          animate(element, { y: 0, scale: 1 })
          return
        }

        if (type === "scale-in") {
          if (prefersReducedMotion) {
            gsap.set(element, { opacity: 1, scale: 1 })
            return
          }
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0.92 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
              },
            }
          )
          return
        }

        animate(element, {})
      })

      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((element: HTMLElement, index: number) => {
        if (prefersReducedMotion) {
          return
        }
        gsap.to(element, {
          y: index % 2 === 0 ? -18 : 18,
          duration: 6 + index,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      })
    }, rootRef)

    return () => {
      ctx.revert()
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={rootRef}>{children}</div>
  )
}
