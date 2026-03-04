"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timeline = [
  {
    icon: "🎓",
    iconBg: "from-purple-500 to-indigo-600",
    title: "BSc (Hons) Software Engineering Undergraduate",
    place: "CINEC Campus",
    period: "2023 - Present",
    side: "left",
    points: [
      "Pursuing a Bachelor of Science (Hons) degree in Software Engineering.",
      "Strong foundation in Data Structures & Algorithms, Computer Architecture, Operating Systems, and Database Systems.",
      "Hands-on experience in Object-Oriented Programming, Web Development, and Mobile Computing.",
      "Collaborating with peers on academic projects and group assignments.",
      "Participating in coding competitions and tech-related extracurricular activities.",
    ],
  },
  {
    icon: "⚛️",
    iconBg: "from-cyan-400 to-blue-500",
    title: "React.js Developer (Personal Projects)",
    place: "University",
    period: "2024 - Present",
    side: "right",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Built responsive user interfaces and ensured cross-browser compatibility.",
      "Implemented features based on self-driven project requirements.",
      "Practiced version control and code reviews through GitHub.",
    ],
  },
  {
    icon: "📱",
    iconBg: "from-cyan-400 to-blue-500",
    title: "Flutter Developer (Personal Projects)",
    place: "University",
    period: "2024 - Present",
    side: "left",
    points: [
      "Designing and developing cross-platform mobile applications using Flutter & Dart.",
      "Implementing clean UI designs and responsive layouts.",
      "Integrating Firebase and backend services for real-time functionality.",
      "Publishing and testing apps across Android environments.",
    ],
  },
  {
    icon: "💻",
    iconBg: "from-purple-500 to-pink-500",
    title: "Full Stack Developer (Personal Projects)",
    place: "University Projects",
    period: "2025 - Present",
    side: "right",
    points: [
      "Developing end-to-end web applications using modern frontend and backend technologies.",
      "Working with databases such as MySQL and MongoDB.",
      "Building RESTful APIs and managing server-side logic.",
      "Implementing authentication, authorization, and secure application architecture.",
    ],
  },
  {
    icon: "🚀",
    iconBg: "from-orange-400 to-pink-500",
    title: "Real-World Client Experience",
    place: "Freelance / Client Projects",
    period: "2025 - Present",
    side: "left",
    points: [
      "Delivering custom software solutions for real clients based on business requirements.",
      "Communicating with clients to gather requirements and provide technical solutions.",
      "Managing full project lifecycle from planning to deployment.",
      "Ensuring code quality, performance optimization, and client satisfaction.",
    ],
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = item.side === "left";

  return (
    <div
      ref={ref}
      className="relative flex items-start justify-center min-h-[200px] mb-4"
    >
      {/* Left card */}
      <div className="w-[calc(50%-48px)] flex justify-end pr-4">
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md"
          >
            <div
              className="relative p-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Arrow pointing right toward center */}
              <div
                className="absolute right-[-10px] top-8 w-0 h-0"
                style={{
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid rgba(255,255,255,0.08)",
                }}
              />
              <h3
                className="mb-1 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-white/40">{item.place}</p>
              <ul className="space-y-2">
                {item.points.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    {pt}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
        {!isLeft && (
          /* Date label on left side for right cards */
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="self-start pt-8 text-right"
          >
            <span className="font-mono text-sm text-white/40">
              {item.period}
            </span>
          </motion.div>
        )}
      </div>

      {/* Center icon */}
      <div className="z-10 flex flex-col items-center flex-shrink-0 w-24">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            bounce: 0.4,
          }}
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.iconBg} flex items-center justify-center text-2xl shadow-lg`}
          style={{ boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Right card */}
      <div className="w-[calc(50%-48px)] flex justify-start pl-4">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md"
          >
            <div
              className="relative p-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Arrow pointing left toward center */}
              <div
                className="absolute left-[-10px] top-8 w-0 h-0"
                style={{
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: "10px solid rgba(255,255,255,0.08)",
                }}
              />
              <h3
                className="mb-1 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-white/40">{item.place}</p>
              <ul className="space-y-2">
                {item.points.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    {pt}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
        {isLeft && (
          /* Date label on right side for left cards */
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="self-start pt-8"
          >
            <span className="font-mono text-sm text-white/40">
              {item.period}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
      style={{ background: "#050A12" }}
    >
      {/* Purple/blue glow bg — matches screenshot */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,20,120,0.25)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-6"
          >
            <span className="text-lg">🏆</span>
            <span className="text-sm font-medium text-white/80">
              My Career Overview
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold lg:text-5xl text-white/80"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I have done so far
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px -translate-x-1/2 left-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(139,92,246,0.6) 10%, rgba(139,92,246,0.3) 90%, transparent)",
            }}
          />

          {/* Items */}
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
