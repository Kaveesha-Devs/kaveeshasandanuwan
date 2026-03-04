'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'UI/UX Designer',
  'Mobile Developer',
  'QA Engineer',
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((c) => (c + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? role.slice(0, displayText.length - 1)
            : role.slice(0, displayText.length + 1)
        )
      }, isDeleting ? 60 : 100)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden grid-bg">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/3 blur-[150px] pointer-events-none" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-40 h-40 border rounded-full top-1/4 right-1/5 border-primary/10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute w-20 h-20 rotate-45 border bottom-1/3 right-1/3 border-secondary/10"
      />

      <div className="w-full px-6 pt-24 pb-12 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                Available for Internship
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading text-6xl lg:text-8xl text-white leading-[0.9] mb-4"
            >
              Kaveesha Sandanuwan
              <br />
              <span className="gradient-text">Muthugala</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center h-8 gap-3 mb-8"
            >
              <span className="font-mono text-sm text-white/30 uppercase tracking-[0.15em]">~/</span>
              <span className="font-mono text-lg text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-lg mb-10 text-lg leading-relaxed text-white/50"
            >
              Software Engineering undergraduate passionate about building
              innovative digital solutions. Proficient in React, Next.js, Flutter,
              and modern web technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Let's Talk</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-8"
            >
              {[
                { value: '6+', label: 'Projects Built' },
                { value: '2+', label: 'Years Learning' },
                { value: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-800 text-primary">{stat.value}</div>
                  <div className="mt-1 font-mono text-xs tracking-wider uppercase text-white/40">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative items-center justify-center hidden lg:flex"
          >
            {/* Avatar Circle */}
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="border border-dashed rounded-full w-80 h-80 border-primary/20"
              />

              {/* Inner circle – Photo */}
              <div className="absolute overflow-hidden border rounded-full inset-8 border-primary/20">
                {/* ✅ ඔයාගේ photo එක public/photo.jpg ලෙ දාන්න */}
                <img
                  src="/photo.jpg"
                  alt="Kaveesha Muthugala"
                  className="object-cover object-center w-full h-full"
                  onError={(e) => {
                    // Fallback: photo නැත්නම් initials පෙන්නන්න
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const fb = t.nextElementSibling as HTMLElement
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                {/* Fallback – photo.jpg නැත්නම් මේක පෙන්නේ */}
                <div
                  className="absolute inset-0 items-center justify-center bg-gradient-to-br from-dark-2 to-dark-3"
                  style={{ display: 'none' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="relative text-center">
                    <div className="text-6xl text-white font-display font-800">K</div>
                    <div className="-mt-2 text-6xl font-display font-800 text-primary">M</div>
                  </div>
                </div>
                {/* Photo overlay glow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>

              {/* Orbiting dots */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={deg}
                  className="absolute w-3 h-3 rounded-full bg-primary"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: -(deg / 360) * 20 }}
                  initial={{ rotate: deg }}
                >
                  <div
                    className="w-3 h-3 rounded-full bg-primary"
                    style={{ transform: `rotate(-${deg}deg) translateX(155px)` }}
                  />
                </motion.div>
              ))}

              {/* Floating tech badges */}
              {[
                { label: 'React', x: -110, y: -40 },
                { label: 'Next.js', x: 80, y: -60 },
                { label: 'Flutter', x: -80, y: 80 },
                { label: 'Node.js', x: 90, y: 60 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  className="absolute glass-card px-3 py-1.5 rounded-full text-xs font-mono text-primary border border-primary/20"
                  style={{ left: `calc(50% + ${badge.x}px)`, top: `calc(50% + ${badge.y}px)` }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
