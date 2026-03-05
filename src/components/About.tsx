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
    <section id="about" ref={ref} className="relative flex items-center justify-center min-h-screen overflow-hidden" style={{ background: '#050A12' }}>
      {/* Network bg */}
      <NetworkCanvas />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,40,120,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Photo — absolute right, behind text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 right-0 z-0 hidden pointer-events-none lg:block"
      >
        <img
          src="/my22.png"
          alt="Kaveesha Sandanuwan"
          className="object-cover object-top"
          style={{
            width: '650px',
            height: '950px',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Overlay to darken photo area slightly */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(5,10,18,0.6)_30%,transparent_100%)] pointer-events-none z-[1]" />

      {/* CENTER TEXT */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-24 mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <span className="text-lg">👋</span>
            <span className="text-sm font-medium text-white/80">About Me</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl lg:text-7xl font-bold text-white/90 mb-6 leading-[1.1]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Transforming Ideas Into <span className="gradient-text">Scalable Solutions</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-16 h-px mx-auto mb-10 bg-white/30"
        />

        {/* Name/Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-2xl text-white"
        >
          <span className="font-bold">Hi, I'm Kaveesha</span>
          <span className="mx-3 text-white/40">|</span>
          <span className="font-semibold text-purple-400">Software Engineer</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-5 text-xl leading-relaxed text-white/60"
        >
          Motivated and detail-oriented Software Engineering undergraduate at CINEC Campus.
          Proficient in front-end and back-end technologies including React, Next.js, Flutter, PHP, Java, and Python.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-white/60"
        >
          Experienced in software testing using Selenium WebDriver and JMeter, with expertise in UI/UX design using Figma.
          Currently enhancing skills through Machine Learning. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-16 h-px mx-auto mb-10 bg-white/20"
        />

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-medium transition-all duration-300 border rounded-full border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white backdrop-blur"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}