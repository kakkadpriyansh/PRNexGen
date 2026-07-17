"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface Props {
  mouseX: number
  mouseY: number
}

export default function ThreeCanvas({ mouseX, mouseY }: Props) {
  const mountRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: mouseX, y: mouseY })

  // Keep mouse ref in sync without re-creating scene
  useEffect(() => {
    mouseRef.current = { x: mouseX, y: mouseY }
  }, [mouseX, mouseY])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth || 340
    const H = mount.clientHeight || 340

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    /* ── Scene & Camera ── */
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
    camera.position.set(0, 0, 5.5)

    /* ── Central glowing sphere ── */
    const coreGeo = new THREE.SphereGeometry(0.9, 48, 48)
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#6366f1"),
      emissive: new THREE.Color("#4f46e5"),
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.5,
      transparent: true,
      opacity: 0.92,
    })
    const core = new THREE.Mesh(coreGeo, coreMat)
    scene.add(core)

    /* ── Wireframe shell ── */
    const shellGeo = new THREE.IcosahedronGeometry(1.18, 1)
    const shellMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#818cf8"),
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
    const shell = new THREE.Mesh(shellGeo, shellMat)
    scene.add(shell)

    /* ── Orbit rings (torus) ── */
    const ringData = [
      { r: 1.7, tube: 0.012, color: "#6366f1", tiltX: Math.PI / 3,  tiltZ: 0,             speed:  0.4 },
      { r: 2.1, tube: 0.010, color: "#a855f7", tiltX: Math.PI / 4,  tiltZ: Math.PI / 5,   speed: -0.28 },
      { r: 2.6, tube: 0.008, color: "#38bdf8", tiltX: Math.PI / 6,  tiltZ: -Math.PI / 6,  speed:  0.18 },
    ]
    const rings = ringData.map(({ r, tube, color, tiltX, tiltZ }) => {
      const geo = new THREE.TorusGeometry(r, tube, 8, 96)
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.55 })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.rotation.x = tiltX
      mesh.rotation.z = tiltZ
      scene.add(mesh)
      return mesh
    })

    /* ── Orbiting satellite dots ── */
    const satColors = ["#6366f1", "#a855f7", "#38bdf8", "#f472b6", "#34d399"]
    const satellites: { mesh: THREE.Mesh; ring: number; angle: number; speed: number }[] = []
    ;[0, 1, 2].forEach((ri) => {
      const count = 2 + ri
      for (let i = 0; i < count; i++) {
        const geo = new THREE.SphereGeometry(0.055 + ri * 0.012, 12, 12)
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(satColors[i % satColors.length]),
          emissive: new THREE.Color(satColors[i % satColors.length]),
          emissiveIntensity: 1.2,
        })
        const mesh = new THREE.Mesh(geo, mat)
        scene.add(mesh)
        satellites.push({ mesh, ring: ri, angle: (i / count) * Math.PI * 2, speed: ringData[ri].speed })
      }
    })

    /* ── Floating node particles ── */
    const nodeColors = ["#6366f1","#a855f7","#38bdf8","#818cf8","#c084fc","#f472b6"]
    const nodes: { mesh: THREE.Mesh; phase: number; radius: number; speed: number }[] = []
    for (let i = 0; i < 18; i++) {
      const geo = new THREE.SphereGeometry(0.025 + Math.random() * 0.03, 8, 8)
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(nodeColors[i % nodeColors.length]),
        emissive: new THREE.Color(nodeColors[i % nodeColors.length]),
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.7 + Math.random() * 0.3,
      })
      const mesh = new THREE.Mesh(geo, mat)
      const r = 0.4 + Math.random() * 0.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      mesh.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      )
      scene.add(mesh)
      nodes.push({ mesh, phase: Math.random() * Math.PI * 2, radius: r, speed: 0.3 + Math.random() * 0.5 })
    }

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const pt1 = new THREE.PointLight("#6366f1", 3, 8)
    pt1.position.set(2, 2, 2)
    scene.add(pt1)
    const pt2 = new THREE.PointLight("#a855f7", 2, 8)
    pt2.position.set(-2, -2, 1)
    scene.add(pt2)
    const pt3 = new THREE.PointLight("#38bdf8", 1.5, 6)
    pt3.position.set(0, 2, -2)
    scene.add(pt3)

    /* ── Spring physics for camera tilt (from 3d.md Spring pattern) ── */
    class Spring {
      stiffness: number; damping: number
      position: number; velocity: number; target: number
      constructor(s = 80, d = 12) { this.stiffness = s; this.damping = d; this.position = 0; this.velocity = 0; this.target = 0 }
      update(dt: number) {
        const force = -this.stiffness * (this.position - this.target)
        const damp  = -this.damping * this.velocity
        this.velocity += (force + damp) * dt
        this.position += this.velocity * dt
        return this.position
      }
    }
    const springX = new Spring(80, 12)
    const springY = new Spring(80, 12)

    /* ── Animation loop (clock-based delta from 3d.md) ── */
    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const elapsed = clock.getElapsedTime()

      /* Spring-follow mouse tilt */
      springX.target = mouseRef.current.y * 0.5
      springY.target = -mouseRef.current.x * 0.5
      const rx = springX.update(delta)
      const ry = springY.update(delta)

      /* Rotate the entire scene group via camera or group */
      scene.rotation.x = rx
      scene.rotation.y = ry

      /* Core pulsing oscillation (from 3d.md Oscillation pattern) */
      core.rotation.y += delta * 0.3
      core.rotation.x += delta * 0.15
      const pulse = 1 + Math.sin(elapsed * 2.2) * 0.03
      core.scale.setScalar(pulse)

      /* Shell slow rotation */
      shell.rotation.y += delta * 0.2
      shell.rotation.z += delta * 0.08

      /* Ring rotations */
      rings[0].rotation.z += delta * ringData[0].speed * 0.5
      rings[1].rotation.z += delta * ringData[1].speed * 0.5
      rings[2].rotation.z += delta * ringData[2].speed * 0.5

      /* Satellite orbital motion (circular motion from 3d.md) */
      satellites.forEach((sat) => {
        sat.angle += delta * sat.speed
        const rad = ringData[sat.ring].r
        const tiltX = ringData[sat.ring].tiltX
        const tiltZ = ringData[sat.ring].tiltZ
        // Position on a tilted circle
        const x = rad * Math.cos(sat.angle)
        const y = rad * Math.sin(sat.angle) * Math.cos(tiltX)
        const z = rad * Math.sin(sat.angle) * Math.sin(tiltX)
        // Apply ring's own z-tilt
        const cx = x * Math.cos(tiltZ) - y * Math.sin(tiltZ)
        const cy = x * Math.sin(tiltZ) + y * Math.cos(tiltZ)
        sat.mesh.position.set(cx, cy, z)
      })

      /* Floating node oscillation (from 3d.md bounce pattern) */
      nodes.forEach((n) => {
        const t = elapsed * n.speed + n.phase
        n.mesh.position.x += Math.sin(t * 1.1) * delta * 0.04
        n.mesh.position.y += Math.cos(t * 0.9) * delta * 0.04
        n.mesh.position.z += Math.sin(t * 1.3) * delta * 0.03
        // Keep within radius
        const len = n.mesh.position.length()
        if (len > 1.1) n.mesh.position.multiplyScalar(1.05 / len)
        if (len < 0.3) n.mesh.position.multiplyScalar(0.35 / len)
        // Pulse opacity
        const mat = n.mesh.material as THREE.MeshStandardMaterial
        mat.opacity = 0.5 + 0.5 * Math.abs(Math.sin(t * 0.8))
      })

      renderer.render(scene, camera)
    }
    animate()

    /* ── Resize handler ── */
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      if (!w || !h) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, []) // eslint-disable-line

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minWidth: 280, minHeight: 280 }}
    />
  )
}
