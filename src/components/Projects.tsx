'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'Yesho Intelligence Website',
    type: 'Web App',
    description: 'Official company website for Yesho Intelligence (Pvt) Ltd showcasing services, team, and updates with a clean, responsive interface.',
    tags: ['Next.js', 'Tailwind CSS', 'Nodemailer'],
    links: { live: 'https://www.yeshoin.com/', github: null },
    color: '#0AFFA3',
    icon: '🌐',
    featured: true,
  },
  {
    id: 2,
    title: 'Seatify – Movie Ticket Booking',
    type: 'Web App',
    description: 'Full-stack web app for online movie ticket booking with showtimes, account management, and seamless Stripe payments.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Stripe', 'Clerk', 'Inngest'],
    links: { live: 'https://seatify-client.vercel.app/', github: null },
    color: '#FF3D6B',
    icon: '🎬',
    featured: true,
  },
  {
    id: 3,
    title: 'Law_Mate – Lawyer Connect',
    type: 'Mobile App',
    description: 'Online Lawyer Connect System with exclusive features: online booking, lawyer rating, and live chat between lawyers and users.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    links: { live: null, github: 'https://github.com/Kaveesha-Devs/Law_Mate' },
    color: '#00C4FF',
    icon: '⚖️',
    featured: true,
  },
  {
    id: 4,
    title: 'Melody_Master – Music Shop',
    type: 'Web App',
    description: 'Web-based musical instrument shop with CRUD operations, shopping cart, and comprehensive inventory management.',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    links: { live: null, github: 'https://github.com/Kaveesha-Devs/melody_master' },
    color: '#A78BFA',
    icon: '🎸',
    featured: false,
  },
  {
    id: 5,
    title: 'Ashasha Villa Website',
    type: 'Web App',
    description: 'Official villa website developed for a client, featuring responsive design and interactive elements.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: { live: 'https://ashashavilla.com/', github: 'https://github.com/Kaveesha-Devs/Ashasha_Villa_Project' },
    color: '#F59E0B',
    icon: '🏖️',
    featured: false,
  },
  {
    id: 6,
    title: 'AI Chatbot',
    type: 'AI/ML',
    description: 'Smart chatbot built using Python Flask and OpenAI API with a clean HTML interface for natural language interaction.',
    tags: ['Python', 'Flask', 'OpenAI API', 'HTML'],
    links: { live: null, github: 'https://github.com/Kaveesha-Devs/chatbot-project' },
    color: '#10B981',
    icon: '🤖',
    featured: false,
  },
]

const filters = ['All', 'Web App', 'Mobile App', 'AI/ML']

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-3"
            >
              03 / Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading text-5xl lg:text-6xl text-white"
            >
              My <span className="gradient-text">Work</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-2 flex-wrap"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-primary text-dark font-700'
                    : 'glass-card text-white/50 hover:text-primary hover:border-primary/30'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`glass-card rounded-2xl overflow-hidden group cursor-pointer relative transition-all duration-500 ${
                  hoveredId === project.id ? 'border-white/15 scale-[1.02]' : ''
                } ${project.featured ? 'lg:first:col-span-2' : ''}`}
                style={{ '--project-color': project.color } as React.CSSProperties}
              >
                {/* Gradient Top */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}33, ${project.color})` }}
                />

                <div className="p-6">
                  {/* Icon + Type */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${project.color}15` }}
                    >
                      {project.icon}
                    </div>
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{ color: project.color, background: `${project.color}15` }}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-700 text-white text-xl mb-3 group-hover:text-primary transition-colors duration-300" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>
                    <span className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono text-white/40 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-primary hover:underline transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-white/50 hover:text-white transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {!project.links.live && !project.links.github && (
                      <span className="font-mono text-xs text-white/20">Private Project</span>
                    )}
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 30px ${project.color}10` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Kaveesha-Devs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-white/50 hover:text-primary transition-colors duration-300 group"
          >
            View all projects on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
