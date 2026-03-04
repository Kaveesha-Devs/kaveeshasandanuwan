"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Website for Yesho Intelligence",
    type: "Web Apps",
    description:
      "A professional website for Yesho Intelligence (Pvt) Ltd, showcasing their services, portfolio, and contact information to enhance their online presence and attract potential clients.",
    tags: ["#NextJS", "#tailwind", "#NodeMailer"],
    links: { live: "https://www.yeshoin.com/", github: null },
    media: { type: "video", src: "/projects/Yesho.mp4" },
    previewText: "Yesho Intelligence",
    previewSub: "Company Website",
  },
  {
    id: 2,
    title: "Seatify - Movie Ticket Booking System",
    type: "Web Apps",
    description:
      "A web application that allows users to book movie tickets online, view showtimes, and manage their accounts, providing a seamless and convenient movie ticket booking experience.",
    tags: [
      "#nextjs",
      "#tailwind",
      "#express",
      "#mongodb",
      "#stripe",
      "#clerk",
      "#inngest",
    ],
    links: { live: "https://seatify-client.vercel.app/", github: null },
    media: { type: "video", src: "/projects/Seatify.mp4" },
    previewText: "Seatify",
    previewSub: "Movie Booking",
  },
  {
    id: 3,
    title: "Law_Mate - Online Lawyer Connect",
    type: "Mobile Apps",
    description:
      "Online Lawyer Connect System with exclusive features including online lawyer booking, lawyer rating, and live chat between lawyers and users.",
    tags: ["#flutter", "#dart", "#firebase", "#firestore"],
    links: { live: null, github: "https://github.com/Kaveesha-Devs/Law_Mate" },
    media: { type: "image", src: "/projects/lawmate.jpeg" },
    previewText: "Law_Mate",
    previewSub: "Mobile App",
  },
  {
    id: 4,
    title: "Melody_Master - Music Instrument Shop",
    type: "Web Apps",
    description:
      "Web-based musical instrument shop with CRUD operations, shopping cart, and comprehensive inventory management system.",
    tags: ["#html", "#css", "#php", "#mysql"],
    links: {
      live: null,
      github: "https://github.com/Kaveesha-Devs/melody_master",
    },
    media: { type: "video", src: "/projects/Melody.mp4" },
    previewText: "Melody Master",
    previewSub: "Web Application",
  },
  {
    id: 5,
    title: "AI Chatbot",
    type: "AI/ML",
    description:
      "A smart chatbot built using Python Flask and OpenAI API with a clean HTML interface for natural language interaction.",
    tags: ["#python", "#flask", "#openai", "#html"],
    links: {
      live: null,
      github: "https://github.com/Kaveesha-Devs/chatbot-project",
    },
    media: { type: "image", src: "/projects/AiChatbot.jpg" },
    previewText: "AI Chatbot",
    previewSub: "AI / ML",
  },
];

const filters = ["All Projects", "Web Apps", "Mobile Apps", "AI/ML"];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = projects.filter((p) => {
    const matchFilter =
      activeFilter === "All Projects" || p.type === activeFilter;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ background: "#050A12" }}
    >
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <span className="font-mono text-sm text-white/60">&lt;/&gt;</span>
            <span className="text-sm font-medium text-white/80">
              My works &amp; projects
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-6 text-5xl font-bold text-center lg:text-6xl text-white/80"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Projects &amp; Works
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10 leading-relaxed text-center text-white/50"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="relative max-w-2xl mx-auto mb-6"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, description, or technology..."
            className="w-full bg-transparent border border-white/15 rounded-full px-6 py-3.5 text-white/70 placeholder-white/25 text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
          <svg
            className="absolute w-4 h-4 -translate-y-1/2 right-5 top-1/2 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-4"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-cyan-400 text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="mb-12 font-mono text-sm text-center text-white/30"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-white/20 transition-all duration-400 flex flex-col group"
              >
                {/* Media Preview area */}
                <div className="relative overflow-hidden bg-black h-52">
                  {/* Browser bar */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-black/60 backdrop-blur flex items-center px-3 gap-1.5 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>

                  {/* Video or Image */}
                  {project.media.type === "video" ? (
                    <video
                      src={project.media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full pt-7"
                    />
                  ) : (
                    <img
                      src={project.media.src}
                      alt={project.title}
                      className="object-cover object-top w-full h-full pt-7"
                    />
                  )}

                  {/* Hover badges */}
                  {hoveredId === project.id && project.links.github && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute z-20 flex items-center justify-center w-10 h-10 border rounded-full top-10 right-3 bg-white/10 backdrop-blur border-white/20"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                  {hoveredId === project.id &&
                    !project.links.github &&
                    project.links.live && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute z-20 px-3 py-1 font-mono text-xs border rounded-full top-10 right-3 bg-cyan-400/20 border-cyan-400/40 text-cyan-400"
                      >
                        Live
                      </motion.div>
                    )}
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3
                    className="mb-2 text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="flex-1 mb-4 text-sm leading-relaxed text-white/50">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 font-mono text-xs transition-colors border rounded-full cursor-default border-white/15 text-white/50 hover:border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit button on hover */}
                  {(project.links.live || project.links.github) && (
                    <motion.a
                      href={project.links.live || project.links.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={
                        hoveredId === project.id
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 8 }
                      }
                      className="flex items-center justify-center w-full gap-2 py-3 mt-auto text-sm font-medium text-center transition-all duration-300 border rounded-xl border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {project.links.live ? "Visit" : "View Code"}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
