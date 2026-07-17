"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; opacity: number
  color: string
  phase: number
}

const COLORS = ["#6366f1","#a855f7","#38bdf8","#818cf8","#c084fc"]

export default function FloatingParticles({ count = 28 }: { count?: number }) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const particles = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return

    // Build particles as absolutely-positioned divs
    const frag = document.createDocumentFragment()
    particles.current = Array.from({ length: count }, (_, i) => {
      const p: Particle = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.012,
        vy: (Math.random() - 0.5) * 0.012,
        r: 1.5 + Math.random() * 3,
        opacity: 0.4 + Math.random() * 0.5,
        color: COLORS[i % COLORS.length],
        phase: Math.random() * Math.PI * 2,
      }
      const dot = document.createElement("div")
      dot.style.cssText = `
        position:absolute;
        border-radius:50%;
        pointer-events:none;
        width:${p.r * 2}px;
        height:${p.r * 2}px;
        background:${p.color};
        box-shadow:0 0 ${p.r * 3}px ${p.color}99;
        left:${p.x}%;
        top:${p.y}%;
        opacity:${p.opacity};
        transition:opacity 0.3s;
      `
      dot.dataset.idx = String(i)
      frag.appendChild(dot)
      return p
    })
    el.appendChild(frag)

    const dots = el.querySelectorAll<HTMLDivElement>("[data-idx]")
    let t = 0

    const animate = () => {
      t += 0.008
      particles.current.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -2) p.x = 102
        if (p.x > 102) p.x = -2
        if (p.y < -2) p.y = 102
        if (p.y > 102) p.y = -2
        const floatY = Math.sin(t + p.phase) * 1.8
        const op = p.opacity * (0.7 + 0.3 * Math.sin(t * 1.2 + p.phase))
        const d = dots[i]
        if (d) {
          d.style.left = `${p.x}%`
          d.style.top  = `${p.y + floatY}%`
          d.style.opacity = String(op)
        }
      })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      while (el.firstChild) el.removeChild(el.firstChild)
    }
  }, [count])

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    />
  )
}
