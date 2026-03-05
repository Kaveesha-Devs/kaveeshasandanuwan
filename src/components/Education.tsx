'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const timeline = [
  {
    img: '/logos/CINEC.jpg',
    title: 'BSc (Hons) Software Engineering Undergraduate',
    place: 'CINEC Campus',
    period: '2023 – Present',
    color: '#0AFFA3',
    current: true,
    points: [
      'Pursuing a Bachelor of Science (Hons) degree in Software Engineering.',
      'Strong foundation in Data Structures & Algorithms, Computer Architecture, Operating Systems, and Database Systems.',
      'Hands-on experience in Object-Oriented Programming, Web Development, and Mobile Computing.',
      'Engaged in academic projects, collaborative assignments, and practical software development tasks.',
    ],
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    title: 'React.js Developer',
    place: 'Personal Projects',
    period: '2024 – Present',
    color: '#00C4FF',
    current: true,
    points: [
      'Developing responsive and dynamic web applications using React.js.',
      'Building reusable components and implementing modern UI/UX practices.',
      'Integrating REST APIs and managing state effectively.',
      'Deploying projects using modern tools and version control systems.',
    ],
  },
  {
    img: '/logos/flutter1.png',
    title: 'Flutter Developer',
    place: 'Personal Projects',
    period: '2024 – Present',
    color: '#54C5F8',
    current: true,
    points: [
      'Designing and developing cross-platform mobile applications using Flutter & Dart.',
      'Implementing clean UI designs and responsive layouts.',
      'Integrating Firebase and backend services for real-time functionality.',
      'Publishing and testing apps across Android environments.',
    ],
  },
  {
    img: '/logos/next.jpg',
    title: 'Full Stack Developer',
    place: 'Personal Projects',
    period: '2025 – Present',
    color: '#A78BFA',
    current: true,
    points: [
      'Developing end-to-end web applications using modern frontend and backend technologies.',
      'Working with databases such as MySQL and MongoDB.',
      'Building RESTful APIs and managing server-side logic.',
      'Implementing authentication, authorization, and secure application architecture.',
    ],
  },
  {
    img: '/logos/github.jpg',
    title: 'Real-World Client Experience',
    place: 'Freelance / Client Projects',
    period: '2025 – Present',
    color: '#FF3D6B',
    current: true,
    points: [
      'Delivering custom software solutions for real clients based on business requirements.',
      'Communicating with clients to gather requirements and provide technical solutions.',
      'Managing full project lifecycle from planning to deployment.',
      'Ensuring code quality, performance optimization, and client satisfaction.',
    ],
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="education" ref={ref} className="relative py-32" style={{ background: '#050A12' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,20,80,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-6"
          >
            <span className="text-lg">🏅</span>
            <span className="text-sm font-medium text-white/80">My Career Overview</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold lg:text-6xl text-white/80"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What I Have <span className="gradient-text">Done So Far</span>
          </motion.h2>
        </div>

        {/* Timeline — vertical center line like dulaj */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" style={{ boxShadow: '0 0 12px rgba(10,255,163,0.3)' }} />

          <div className="space-y-20">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col lg:flex-row items-stretch gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Card side */}
                  <div className="w-full lg:w-[calc(50%-40px)]">
                    <div
                      className="rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04] group"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          {/* Circle icon */}
                          <div
                            className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-2 overflow-hidden border-2 rounded-full"
                            style={{ background: `${item.color}15`, borderColor: `${item.color}50`, boxShadow: `0 0 16px ${item.color}30` }}
                          >
                            <Image src={item.img} alt={item.title} width={36} height={36} className="object-contain w-full h-full" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold leading-snug text-white" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                            <p className="text-white/40 text-xs mt-0.5">{item.place}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                          <span className="font-mono text-xs px-2.5 py-1 rounded-full whitespace-nowrap" style={{ color: item.color, background: `${item.color}18` }}>
                            {item.period}
                          </span>
                          {item.current && (
                            <span className="flex items-center gap-1 font-mono text-xs text-primary">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {item.points.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm leading-relaxed text-white/50">
                            <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full" style={{ background: item.color }} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot — circle */}
                  <div className="relative z-10 items-center justify-center flex-shrink-0 hidden w-20 lg:flex">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 rounded-full overflow-hidden border-2 flex items-center justify-center bg-[#0A1220] p-2"
                      style={{ borderColor: item.color, boxShadow: `0 0 24px ${item.color}50` }}
                    >
                      <Image src={item.img} alt={item.title} width={40} height={40} className="object-contain w-full h-full" />
                    </motion.div>
                  </div>

                  {/* Empty side */}
                  <div className="hidden lg:block w-[calc(50%-40px)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
