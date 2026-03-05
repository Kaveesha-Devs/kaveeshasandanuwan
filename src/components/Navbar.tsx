'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border-2 border-primary rounded-sm rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              <div className="absolute inset-1.5 bg-primary rounded-[1px] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
            </div>
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              &lt;K/&gt;
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="items-center hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-primary font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 w-0 h-px transition-all duration-300 -bottom-1 bg-primary group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="items-center hidden gap-4 md:flex">
            <a
              href="mailto:kaveeshasandanuwan@gmail.com"
              className="text-sm btn-primary"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="text-4xl transition-colors duration-300 font-display font-800 text-white/80 hover:text-primary"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:kaveesha@example.com"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 btn-primary"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
