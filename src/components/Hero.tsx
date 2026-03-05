"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Mobile Developer",
  "QA Engineer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((c) => (c + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? role.slice(0, displayText.length - 1)
              : role.slice(0, displayText.length + 1),
          );
        },
        isDeleting ? 60 : 100,
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden">
      {/* ========= BG IMAGE ========= */}
      {/* ✅ ඔයාගේ bg image එක public/hero-bg.jpg ලෙ දාන්න (1920x1080px) */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark overlay — bg image eka too bright නම් opacity වැඩි කරන්න */}
      <div className="absolute inset-0 bg-dark/70" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-40 h-40 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 90, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute w-20 h-20 rotate-45 border bottom-1/3 right-1/3 border-secondary/10"
      />

      {/* ========= CONTENT ========= */}
      <div className="relative z-10 w-full px-6 pt-24 pb-12 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                Available for Internship
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="section-heading text-5xl lg:text-7xl text-white leading-[0.95] mb-4"
            >
              Kaveesha Sandanuwan
              <br />
              <span className="gradient-text">Muthugala</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center h-8 gap-3 mb-8"
            >
              <span className="font-mono text-sm text-white/30 uppercase tracking-[0.15em]">
                ~/
              </span>
              <span className="font-mono text-lg text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-lg mb-10 text-lg leading-relaxed text-white/60"
            >
              Software Engineering undergraduate passionate about building
              innovative digital solutions. Proficient in React, Next.js,
              Flutter, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-8"
            >
              {[
                { value: "6+", label: "Projects Built" },
                { value: "2+", label: "Years Learning" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-800 text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-xs tracking-wider uppercase text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo (no circle, natural) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative items-center justify-center hidden lg:flex"
          >
            <div className="relative">
              {/* Floating tech badges */}
              {[
                // LEFT SIDE
                { label: "React", x: -180, y: -120 },
                { label: "AI", x: -210, y: 0 },
                { label: "Python", x: -180, y: 120 },

                // RIGHT SIDE
                { label: "Next.js", x: 180, y: -120 },
                { label: "Flutter", x: 210, y: 0 },
                { label: "Node.js", x: 180, y: 120 },

                // BOTTOM (safe – below chest)
                { label: "Java", x: 0, y: 180 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  className="absolute z-20 glass-card px-3 py-1.5 rounded-full text-xs font-mono text-primary border border-primary/20"
                  style={{
                    left: `calc(50% + ${badge.x}px)`,
                    top: `calc(50% + ${badge.y}px)`,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}

              {/* Soft glow behind photo */}
              <div className="absolute bottom-0 w-64 h-32 -translate-x-1/2 rounded-full left-1/2 bg-primary/20 blur-3xl" />

              {/* ✅ Photo — public/photo.jpg ලෙ දාන්න — no frame, natural */}
              <div className="relative w-200 h-[850px]">
                <img
                  src="/my11.png"
                  alt="Kaveesha Sandanuwan Muthugala"
                  className="object-cover object-top w-full h-full"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                  }}
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const fb = t.nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="text-white font-display font-800 text-9xl">
                      K
                    </div>
                    <div className="-mt-6 font-display font-800 text-9xl text-primary">
                      M
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute z-10 flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
