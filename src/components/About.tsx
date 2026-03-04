'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

// Animated network/particle background (canvas)
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
    <section id="about" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32" style={{ background: '#050A12' }}>
      {/* Network background */}
      <NetworkCanvas />
      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,40,120,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur"
        >
          <span className="text-lg">👋</span>
          <span className="text-white/80 text-sm font-medium">About Me</span>
        </motion.div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl lg:text-6xl font-bold text-white/80 mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Transforming Ideas Into Scalable Solutions
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-16 h-px bg-white/30 mx-auto mb-10"
        />

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white mb-6"
        >
          <span className="font-bold">Hi, I'm Kaveesha</span>
          <span className="text-white/40 mx-2">|</span>
          <span className="text-purple-400 font-semibold">Software Engineer</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-base leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          Motivated and detail-oriented Software Engineering undergraduate at CINEC Campus.
          Proficient in front-end and back-end technologies including React, Next.js, Flutter, PHP, Java, and Python.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="text-white/60 text-base leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Experienced in software testing using Selenium WebDriver and JMeter, with expertise in UI/UX design using Figma.
          Currently enhancing skills through Machine Learning. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-16 h-px bg-white/20 mx-auto mb-10"
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm font-medium backdrop-blur"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
