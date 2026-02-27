'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '⚡',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'C', level: 60 },
    ]
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'PHP', level: 70 },
      { name: 'Node.js', level: 75 },
    ]
  },
  {
    category: 'Mobile Development',
    icon: '📱',
    skills: [
      { name: 'Flutter (Dart)', level: 75 },
      { name: 'Android (Java)', level: 65 },
    ]
  },
  {
    category: 'Backend & Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'MongoDB', level: 70 },
    ]
  },
  {
    category: 'Testing & QA',
    icon: '🔬',
    skills: [
      { name: 'Selenium WebDriver', level: 75 },
      { name: 'Apache JMeter', level: 70 },
      { name: 'Manual Testing', level: 80 },
    ]
  },
  {
    category: 'Design & Tools',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Postman', level: 75 },
      { name: 'Jira', level: 70 },
    ]
  },
]

function SkillBar({ name, level, inView, delay }: { name: string, level: number, inView: boolean, delay: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/70 text-sm font-mono">{name}</span>
        <span className="text-primary text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #0AFFA3 0%, ${level > 80 ? '#00C4FF' : '#0AFFA3'} 100%)`
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-3"
          >
            02 / Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading text-5xl lg:text-6xl text-white"
          >
            Tools & <span className="gradient-text">Technologies</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catI) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + catI * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 hover:bg-white/[0.02] group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-lg group-hover:bg-primary/20 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-display font-700 text-white text-sm">{cat.category}</h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillI) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                    delay={0.2 + catI * 0.1 + skillI * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Tech Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 overflow-hidden border-y border-white/5 py-4"
        >
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PHP', 'Java', 'Python', 'Flutter', 'Firebase', 'MongoDB', 'MySQL', 'Figma', 'Git', 'Postman', 'Selenium', 'JMeter', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PHP', 'Java', 'Python', 'Flutter', 'Firebase', 'MongoDB', 'MySQL', 'Figma', 'Git', 'Postman', 'Selenium', 'JMeter', 'Tailwind'].map((tech, i) => (
              <span key={i} className="font-mono text-sm text-white/20 hover:text-primary transition-colors uppercase tracking-widest cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
