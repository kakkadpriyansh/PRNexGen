"use client"

import { motion } from "framer-motion"

interface Props {
  mouseX: number
  mouseY: number
}

export default function AnimatedCircle({ mouseX, mouseY }: Props) {
  const tiltX = mouseY * 10
  const tiltY = -mouseX * 10

  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1000px" }}>

      {/* Ambient radial glow */}
      <div className="absolute w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(168,85,247,0.14) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 3-D tilt wrapper */}
      <motion.div
        className="relative"
        animate={{ rotateX: tiltX, rotateY: tiltY }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* Outer orbit ring — clockwise */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[420px] h-[420px] rounded-full"
            style={{
              border: "1.5px solid rgba(99,102,241,0.3)",
              animation: "orbitCW 22s linear infinite",
              transform: "rotateX(70deg)",
            }}
          />
        </div>

        {/* Middle orbit ring — counter-clockwise */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[360px] h-[360px] rounded-full"
            style={{
              border: "1px dashed rgba(168,85,247,0.25)",
              animation: "orbitCCW 18s linear infinite",
              transform: "rotateX(70deg) rotateZ(30deg)",
            }}
          />
        </div>

        {/* Inner orbit ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] rounded-full"
            style={{
              border: "1px solid rgba(56,189,248,0.2)",
              animation: "orbitCW 28s linear infinite",
              transform: "rotateX(70deg) rotateZ(-20deg)",
            }}
          />
        </div>

        {/* Orbiting dot on outer ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ animation: "orbitCW 22s linear infinite" }}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 210,
            height: 210,
            marginLeft: -105,
            marginTop: -105,
            transform: "rotateX(70deg)",
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5,
              borderRadius: "50%",
              background: "#6366f1",
              boxShadow: "0 0 12px #6366f1, 0 0 24px #6366f199",
            }} />
          </div>
        </div>

        {/* Central hub circle */}
        <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px]">

          {/* Pulse rings */}
          {[1, 1.18, 1.36].map((scale, i) => (
            <div key={i} className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                transform: `scale(${scale})`,
                animation: `hubPulse ${2.8 + i * 0.9}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}

          {/* Glass backdrop */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(238,242,255,0.75) 50%, rgba(245,243,255,0.80) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(255,255,255,0.8)",
              boxShadow: "0 0 60px rgba(99,102,241,0.2), 0 0 120px rgba(168,85,247,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          />

          {/* Gradient ring border */}
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, #6366f1, #a855f7, #38bdf8, #6366f1)",
              padding: "2px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              animation: "orbitCW 8s linear infinite",
              opacity: 0.7,
            }}
          />

          {/* Inner SVG — neural lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-[75%] h-[75%] opacity-50">
              <defs>
                <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </radialGradient>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#nodeGrad)" />
              {/* Neural lines */}
              {[
                [100,100,100,30],[100,100,100,170],
                [100,100,30,100],[100,100,170,100],
                [100,100,50,50],[100,100,150,50],
                [100,100,50,150],[100,100,150,150],
              ].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={i % 2 === 0 ? "#6366f1" : "#a855f7"}
                  strokeWidth="0.8" strokeOpacity="0.5"
                  strokeDasharray="3 4"
                />
              ))}
              {/* Nodes */}
              {[[100,30],[100,170],[30,100],[170,100],[50,50],[150,50],[50,150],[150,150]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="4"
                  fill={i % 2 === 0 ? "#6366f1" : "#a855f7"}
                  fillOpacity="0.85" filter="url(#nodeGlow)" />
              ))}
              {/* Scanning line */}
              <line x1="20" y1="100" x2="180" y2="100"
                stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="6 3">
                <animateTransform attributeName="transform" type="rotate"
                  from="0 100 100" to="360 100 100" dur="6s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>

          {/* Hub text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-500 mb-2 opacity-80">
              PRNexGen
            </div>
            <div className="text-xl sm:text-2xl font-black leading-tight text-gray-900">
              Digital
              <br />
              <span className="gradient-text">Transformation</span>
            </div>
            <div className="mt-2 text-[9px] text-gray-400 font-medium leading-relaxed max-w-[140px]">
              AI-powered solutions that transform businesses
            </div>
            {/* Live indicator */}
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] text-green-600 font-bold tracking-wide">LIVE</span>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes orbitCW  { from{transform:rotateX(70deg) rotateZ(0deg)} to{transform:rotateX(70deg) rotateZ(360deg)} }
        @keyframes orbitCCW { from{transform:rotateX(70deg) rotateZ(30deg) rotateZ(0deg)} to{transform:rotateX(70deg) rotateZ(30deg) rotateZ(-360deg)} }
        @keyframes hubPulse {
          0%,100%{opacity:0.5;transform:scale(var(--s,1));}
          50%{opacity:1;}
        }
      `}</style>
    </div>
  )
}
