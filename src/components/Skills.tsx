'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Tech skill icons as inline SVG/emoji — matches screenshot style cards with logo + name + level bar
const skillCategories = [
  {
    category: 'Programming Languages',
    color: '#a78bfa',
    skills: [
      { name: 'C', level: 50, label: 'Beginner', barColor: '#6b7280', icon: '🔵' },
      { name: 'Python', level: 40, label: 'Beginner', barColor: '#f6c90e', icon: '🐍' },
      { name: 'Java', level: 70, label: 'Intermediate', barColor: '#f89820', icon: '☕' },
    ],
  },
  {
    category: 'Web Development',
    color: '#a78bfa',
    skills: [
      { name: 'HTML5', level: 95, label: 'Expert', barColor: '#22d3ee', icon: '🧱' },
      { name: 'CSS3', level: 90, label: 'Expert', barColor: '#22d3ee', icon: '🎨' },
      { name: 'JavaScript', level: 75, label: 'Intermediate', barColor: '#f6c90e', icon: '⚡' },
      { name: 'React', level: 80, label: 'Advanced', barColor: '#38bdf8', icon: '⚛️' },
      { name: 'Next.js', level: 80, label: 'Advanced', barColor: '#38bdf8', icon: '▲' },
      { name: 'PHP', level: 70, label: 'Intermediate', barColor: '#818cf8', icon: '🐘' },
      { name: 'Node.js', level: 70, label: 'Intermediate', barColor: '#4ade80', icon: '🟢' },
      { name: 'TypeScript', level: 75, label: 'Intermediate', barColor: '#38bdf8', icon: '📘' },
    ],
  },
  {
    category: 'Mobile Development',
    color: '#a78bfa',
    skills: [
      { name: 'Flutter', level: 75, label: 'Intermediate', barColor: '#38bdf8', icon: '📱' },
      { name: 'Android (Java)', level: 60, label: 'Beginner', barColor: '#4ade80', icon: '🤖' },
    ],
  },
  {
    category: 'Backend & Database',
    color: '#a78bfa',
    skills: [
      { name: 'MySQL', level: 80, label: 'Advanced', barColor: '#f97316', icon: '🗄️' },
      { name: 'Firebase', level: 75, label: 'Intermediate', barColor: '#f6c90e', icon: '🔥' },
      { name: 'MongoDB', level: 70, label: 'Intermediate', barColor: '#4ade80', icon: '🍃' },
    ],
  },
  {
    category: 'Testing & QA',
    color: '#a78bfa',
    skills: [
      { name: 'Selenium', level: 75, label: 'Intermediate', barColor: '#4ade80', icon: '🧪' },
      { name: 'JMeter', level: 70, label: 'Intermediate', barColor: '#f97316', icon: '📊' },
      { name: 'Manual Testing', level: 80, label: 'Advanced', barColor: '#22d3ee', icon: '✅' },
    ],
  },
  {
    category: 'Design & Tools',
    color: '#a78bfa',
    skills: [
      { name: 'Figma', level: 80, label: 'Advanced', barColor: '#f97316', icon: '🎯' },
      { name: 'Git/GitHub', level: 85, label: 'Advanced', barColor: '#22d3ee', icon: '🐙' },
      { name: 'Postman', level: 75, label: 'Intermediate', barColor: '#f97316', icon: '📮' },
      { name: 'Jira', level: 70, label: 'Intermediate', barColor: '#38bdf8', icon: '📋' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" ref={ref} className="relative py-24 overflow-hidden" style={{ background: '#050A12' }}>
      {/* Network bg reuse */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(80,40,120,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <span className="text-lg">💡</span>
            <span className="text-sm font-medium text-white/80">My Skills</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-16 text-4xl font-bold text-center lg:text-5xl text-white/80"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tools that drive my work
        </motion.h2>

        {/* Categories */}
        <div className="space-y-14">
          {skillCategories.map((cat, catI) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + catI * 0.1 }}
            >
              {/* Category title — purple like screenshot */}
              <h3 className="mb-6 text-lg font-bold text-center" style={{ color: cat.color, fontFamily: 'var(--font-display)' }}>
                {cat.category}
              </h3>

              {/* Skill cards row */}
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill, skillI) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 + catI * 0.08 + skillI * 0.06 }}
                    className="flex flex-col items-center p-5 transition-all duration-300 rounded-xl group hover:border-white/20"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      width: '160px',
                      minWidth: '140px',
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <p className="mb-3 text-sm font-bold text-center text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {skill.name}
                    </p>

                    {/* Level label + percent */}
                    <div className="flex justify-between items-center w-full mb-1.5">
                      <span className="text-xs text-white/40">{skill.label}</span>
                      <span className="font-mono text-xs text-white/60">{skill.level}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 + catI * 0.08 + skillI * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: skill.barColor }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
