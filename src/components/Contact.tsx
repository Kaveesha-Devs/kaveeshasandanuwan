'use client'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useRef } from 'react'

const contactItems = [
  { label: 'Email', value: 'kaveeshasandanuwan@gmail.com', href: 'mailto:kaveeshasandanuwan@gmail.com', color: '#0AFFA3', img: '/logos/email.png' },
  { label: 'Phone', value: '0760263586', href: 'tel:0760263586', color: '#00C4FF', img: '/logos/call.png' },
  { label: 'LinkedIn', value: 'kaveesha-sandanuwan', href: 'https://www.linkedin.com/in/kaveesha-sandanuwan-72268a254', color: '#A78BFA', img: '/logos/linkedIn.png' },
  { label: 'GitHub', value: 'Kaveesha-Devs', href: 'https://github.com/Kaveesha-Devs', color: '#F59E0B', img: '/logos/github.png' },
  { label: 'Location', value: 'Negombo, Sri Lanka', href: null, color: '#FF3D6B', img: '/logos/location.png' },
]

function Card3D({ item, delay }: { item: typeof contactItems[0], delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const content = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl p-6 text-center cursor-pointer transition-colors duration-300 group"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transformStyle: 'preserve-3d' } as React.CSSProperties}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${item.color}15` }} />

      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-4 relative" style={{ transform: 'translateZ(20px)' }}>
        <Image src={item.img} alt={item.label} width={56} height={56} className="object-contain w-full h-full" />
      </div>
      <p className="font-mono text-xs text-white/30 uppercase tracking-wider mb-2">{item.label}</p>
      <p className="text-sm font-semibold break-all" style={{ color: item.color, transform: 'translateZ(10px)' }}>
        {item.value}
      </p>
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{ perspective: 800 }}
    >
      {item.href ? (
        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
          {content}
        </a>
      ) : content}
    </motion.div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden" style={{ background: '#050A12' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/4 blur-[160px] pointer-events-none" />

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-3"
          >
            06 / Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl text-white lg:text-6xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-white/50"
          >
            Looking for internship opportunities. Open to exciting projects, collaborations, or just a friendly chat about tech!
          </motion.p>
        </div>

        {/* 3D Contact Cards */}
        {inView && (
          <div className="grid max-w-5xl gap-5 mx-auto mb-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {contactItems.map((item, i) => (
              <Card3D key={item.label} item={item} delay={0.3 + i * 0.08} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="mailto:kaveeshasandanuwan@gmail.com"
            className="inline-block px-12 py-4 rounded-full font-bold text-dark bg-gradient-to-r from-primary to-cyan-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(10,255,163,0.4)] transition-all duration-300 text-sm uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Send a Message →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
