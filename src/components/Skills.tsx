'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const skillCategories = [
  {
    category: 'Programming Languages',
    color: '#a78bfa',
    skills: [
      { name: 'C', level: 50, label: 'Beginner', barColor: '#6b7280', img: '/logos/C.png' },
      { name: 'Python', level: 40, label: 'Beginner', barColor: '#f6c90e', img: '/logos/python-logo.png' },
      { name: 'Java', level: 70, label: 'Intermediate', barColor: '#f89820', img: '/logos/java-logo.jpg' },
    ],
  },
  {
    category: 'Web Development',
    color: '#a78bfa',
    skills: [
      { name: 'HTML5', level: 95, label: 'Expert', barColor: '#22d3ee', img: '/logos/HTML_5.jpg' },
      { name: 'CSS3', level: 90, label: 'Expert', barColor: '#22d3ee', img: '/logos/css3-logo.png' },
      { name: 'JavaScript', level: 75, label: 'Intermediate', barColor: '#f6c90e', img: '/logos/JS.png' },
      { name: 'React', level: 80, label: 'Advanced', barColor: '#38bdf8', img: '/logos/react.png' },
      { name: 'Next.js', level: 80, label: 'Advanced', barColor: '#38bdf8', img: '/logos/next.jpg' },
      { name: 'PHP', level: 70, label: 'Intermediate', barColor: '#818cf8', img: '/logos/php.png' },
      { name: 'Node.js', level: 70, label: 'Intermediate', barColor: '#4ade80', img: '/logos/node.jpg' },
      { name: 'TypeScript', level: 75, label: 'Intermediate', barColor: '#38bdf8', img: '/logos/typescript-logo.png' },
    ],
  },
  {
    category: 'Mobile Development',
    color: '#a78bfa',
    skills: [
      { name: 'Flutter', level: 75, label: 'Intermediate', barColor: '#38bdf8', img: '/logos/flutter_logo.png' },
      { name: 'Android', level: 60, label: 'Beginner', barColor: '#4ade80', img: '/logos/android-logo-0.png' },
    ],
  },
  {
    category: 'Backend & Database',
    color: '#a78bfa',
    skills: [
      { name: 'MySQL', level: 80, label: 'Advanced', barColor: '#f97316', img: '/logos/mysql_logo.png' },
      { name: 'Firebase', level: 75, label: 'Intermediate', barColor: '#f6c90e', img: '/logos/firebase.png' },
      { name: 'MongoDB', level: 70, label: 'Intermediate', barColor: '#4ade80', img: '/logos/mongo_db.png' },
    ],
  },
  {
    category: 'Testing & QA',
    color: '#a78bfa',
    skills: [
      { name: 'Selenium', level: 75, label: 'Intermediate', barColor: '#4ade80', img: '/logos/selenium-logo.png' },
      { name: 'JMeter', level: 70, label: 'Intermediate', barColor: '#f97316', img: '/logos/jmeter-logo.png' },
      { name: 'Manual Testing', level: 80, label: 'Advanced', barColor: '#22d3ee', img: '/logos/manual_testing.png' },
    ],
  },
  {
    category: 'Design & Tools',
    color: '#a78bfa',
    skills: [
      { name: 'Figma', level: 80, label: 'Advanced', barColor: '#f97316', img: '/logos/figma.png' },
      { name: 'GitHub', level: 85, label: 'Advanced', barColor: '#22d3ee', img: '/logos/github.png' },
      { name: 'Postman', level: 75, label: 'Intermediate', barColor: '#f97316', img: '/logos/Postman-Logo.jpg' },
      { name: 'Jira', level: 70, label: 'Intermediate', barColor: '#38bdf8', img: '/logos/jira.jpg' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" ref={ref} className="relative py-24 overflow-hidden" style={{ background: '#050A12' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(80,40,120,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <span className="text-lg">💡</span>
            <span className="text-white/80 text-sm font-medium">My Skills</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white/80 text-center mb-16"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tools that drive my work
        </motion.h2>

        <div className="space-y-14">
          {skillCategories.map((cat, catI) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + catI * 0.1 }}
            >
              <h3 className="text-center text-lg font-bold mb-8" style={{ color: cat.color, fontFamily: 'var(--font-display)' }}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-5">
                {cat.skills.map((skill, skillI) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 + catI * 0.08 + skillI * 0.06 }}
                    className="rounded-xl p-5 flex flex-col items-center group hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      width: '160px',
                    }}
                  >
                    {/* Logo image */}
                    <div className="w-14 h-14 mb-3 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.img}
                        alt={skill.name}
                        width={56}
                        height={56}
                        className="object-contain w-full h-full rounded-lg"
                      />
                    </div>
                    <p className="text-white font-bold text-sm mb-3 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                      {skill.name}
                    </p>
                    <div className="flex justify-between items-center w-full mb-1.5">
                      <span className="text-white/40 text-xs">{skill.label}</span>
                      <span className="text-white/60 text-xs font-mono">{skill.level}%</span>
                    </div>
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
