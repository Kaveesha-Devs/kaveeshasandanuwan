'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const referees = [
  {
    name: 'Ms. Maduwanthi Uthpala',
    role: 'Deputy Head of Department / Lecturer',
    department: 'Faculty of Computing, CINEC Campus',
    email: 'maduwanthi.uthpala@cinec.edu',
    phone: '0776122034',
  },
  {
    name: 'Ms. Eshandi Aththanayaka',
    role: 'Senior Lecturer',
    department: 'Faculty of Computing, CINEC Campus',
    email: 'eshandi.amr@cinec.edu',
    phone: '0710960601',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* BG Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-3"
          >
            05 / Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl text-white section-heading lg:text-6xl"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-white/50"
          >
            Looking for internship opportunities. Open to exciting projects,
            collaborations, or just a friendly chat about tech!
          </motion.p>
        </div>

        {/* Contact Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid max-w-3xl gap-4 mx-auto mb-16 md:grid-cols-3"
        >
          {[
            {
              icon: "✉️",
              label: "Email",
              value: "kaveeshasandanuwan@gmail.com",
              href: "mailto:kaveeshasandanuwan@gmail.com",
              color: "#0AFFA3",
            },
            {
              icon: "💼",
              label: "GitHub",
              value: "Kaveesha-Devs",
              href: "https://github.com/Kaveesha-Devs",
              color: "#A78BFA",
            },
            {
              icon: "📍",
              label: "Location",
              value: "Negombo, Sri Lanka",
              href: null,
              color: "#FF3D6B",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-white/15 transition-all duration-300 hover:bg-white/[0.03] group"
            >
              <div
                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-2xl rounded-xl"
                style={{ background: `${item.color}15` }}
              >
                {item.icon}
              </div>
              <p className="mb-2 font-mono text-xs tracking-wider uppercase text-white/30">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 font-display font-600"
                  style={{ color: item.color }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-white font-display font-600">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-24 text-center"
        >
          <a
            href="mailto:kaveeshasandanuwan@gmail.com"
            className="inline-block px-10 py-4 text-base btn-primary glow-primary animate-glow"
          >
            Send a Message →
          </a>
        </motion.div>

        {/* Referees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-mono text-xs text-white/30 uppercase tracking-[0.2em] text-center mb-8">
            References
          </p>
          <div className="grid max-w-3xl gap-4 mx-auto md:grid-cols-2">
            {referees.map((ref, i) => (
              <motion.div
                key={ref.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="p-5 glass-card rounded-xl"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary/10 font-display font-800 text-primary">
                  {ref.name.charAt(0)}
                </div>
                <h4 className="mb-1 text-sm text-white font-display font-700">
                  {ref.name}
                </h4>
                <p className="mb-1 text-xs text-white/50">{ref.role}</p>
                <p className="mb-3 text-xs text-white/30">{ref.department}</p>
                <div className="space-y-1">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 text-xs transition-colors text-white/40 hover:text-primary"
                  >
                    <span>✉</span> {ref.email}
                  </a>
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex items-center gap-2 text-xs transition-colors text-white/40 hover:text-primary"
                  >
                    <span>📞</span> {ref.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
