'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const nodes: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))
    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(180,100,255,${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
        ctx.beginPath()
        ctx.arc(nodes[i].x, nodes[i].y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180,100,255,0.5)'
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="relative flex items-center min-h-screen py-24 overflow-hidden" style={{ background: '#050A12' }}>
      <NetworkCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,40,120,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl px-6 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur"
            >
              <span className="text-lg">👋</span>
              <span className="text-sm font-medium text-white/80">About Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 text-5xl font-bold leading-tight lg:text-6xl text-white/80"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Transforming Ideas Into <span className="gradient-text">Scalable Solutions</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-16 h-px mb-8 bg-white/30"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-5 text-xl text-white"
            >
              <span className="font-bold">Hi, I'm Kaveesha</span>
              <span className="mx-2 text-white/40">|</span>
              <span className="font-semibold text-purple-400">Software Engineer</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 text-lg leading-relaxed text-white/60"
            >
              Motivated and detail-oriented Software Engineering undergraduate at CINEC Campus.
              Proficient in front-end and back-end technologies including React, Next.js, Flutter, PHP, Java, and Python.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mb-10 text-lg leading-relaxed text-white/60"
            >
              Experienced in software testing using Selenium WebDriver and JMeter, with expertise in UI/UX design using Figma.
              Currently enhancing skills through Machine Learning. Let's work together to bring your ideas to life!
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-16 h-px mb-8 bg-white/20"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-all duration-300 border rounded-full border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white backdrop-blur"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo (no frame, natural) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="items-end justify-end hidden lg:flex"
          >
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute bottom-0 h-40 -translate-x-1/2 rounded-full left-1/2 w-72 bg-purple-500/20 blur-3xl" />

              {/* Photo — no frame, bigger */}
              <img
                src="/my22.png"
                alt="Kaveesha Sandanuwan"
                className="relative object-cover object-top"
                style={{
                  width: '500px',
                  height: '850px',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}