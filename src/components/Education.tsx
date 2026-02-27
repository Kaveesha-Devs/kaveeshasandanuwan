'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    degree: 'BSc (Hons) Software Engineering',
    school: 'Colombo International Nautical and Engineering College (CINEC)',
    period: 'Oct 2023 – Present',
    coursework: ['Data Structures & Algorithms', 'Computer Architecture', 'Operating Systems', 'Database Systems', 'OOP', 'Mobile Computing', 'Web Development', 'Computer Networking'],
    color: '#0AFFA3',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Diploma in Business Management',
    school: 'Institute of Management & Business Studies (IMBS Green Campus)',
    period: '2022 – 2023',
    coursework: ['Project Management', 'Business Development', 'Business Management', 'HR Management'],
    color: '#00C4FF',
    icon: '📊',
    current: false,
  },
  {
    degree: 'Advanced Certificate in Information Technology',
    school: 'SIBA Campus – Sri Lanka',
    period: '2022',
    coursework: [],
    color: '#A78BFA',
    icon: '💻',
    current: false,
  },
  {
    degree: 'Advanced Level Examination – Commerce Stream',
    school: 'Harischandra National College, Negombo',
    period: '2021 / 2022',
    coursework: [],
    color: '#F59E0B',
    icon: '📚',
    current: false,
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-3"
          >
            04 / Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading text-5xl lg:text-6xl text-white"
          >
            Academic <span className="gradient-text">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                className="md:pl-20 relative group"
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-4 top-6 w-9 h-9 rounded-full items-center justify-center text-lg -translate-x-1/2 border-2 transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: edu.color,
                    background: `${edu.color}15`,
                    boxShadow: edu.current ? `0 0 20px ${edu.color}40` : 'none'
                  }}
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all duration-500 hover:bg-white/[0.02] group-hover:translate-x-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-700 text-white text-lg">{edu.degree}</h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-primary/20 text-primary border border-primary/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 text-sm">{edu.school}</p>
                    </div>
                    <span
                      className="font-mono text-xs px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{ color: edu.color, background: `${edu.color}15` }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div className="mt-4">
                      <p className="font-mono text-xs text-white/30 uppercase tracking-wider mb-2">Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="px-2.5 py-1 rounded-lg text-xs text-white/50 bg-white/5 font-mono">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
