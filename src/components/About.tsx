'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const softSkills = ['Problem-solving', 'Analytical thinking', 'Communication', 'Collaboration', 'Adaptability', 'Creativity', 'Time management', 'Leadership']

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-3"
            >
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">01 / About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading text-5xl lg:text-6xl text-white mb-8 leading-tight"
            >
              Crafting digital
              <br />
              <span className="gradient-text">experiences</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-6"
            >
              Motivated and detail-oriented Software Engineering undergraduate at CINEC Campus,
              seeking to apply technical skills and expand practical industry experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed mb-10"
            >
              Proficient in front-end and back-end technologies. Experienced in software testing
              using Selenium WebDriver and JMeter, with additional expertise in Flutter for mobile
              development and Figma for UI/UX design. Currently enhancing skills through a Machine Learning course.
            </motion.p>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="font-mono text-xs text-white/30 uppercase tracking-[0.15em] mb-4">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="px-3 py-1.5 glass-card rounded-full text-xs font-mono text-white/60 border border-white/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-4">
            {[
              {
                icon: '🎓',
                title: 'Education',
                value: 'BSc (Hons) Software Engineering',
                sub: 'CINEC Campus · Oct 2023 – Present',
              },
              {
                icon: '📍',
                title: 'Location',
                value: 'Negombo, Sri Lanka',
                sub: 'Open to remote & relocation',
              },
              {
                icon: '🎯',
                title: 'Goal',
                value: 'Seeking Internship Opportunity',
                sub: 'Full-Stack / Mobile Development',
              },
              {
                icon: '🤖',
                title: 'Currently Learning',
                value: 'Machine Learning',
                sub: 'Expanding into AI/ML domain',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-primary/20 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-white/30 uppercase tracking-wider mb-1">{card.title}</p>
                  <p className="font-display font-600 text-white text-sm">{card.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
