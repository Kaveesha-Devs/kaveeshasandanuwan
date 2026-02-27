"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="flex flex-col items-center justify-between gap-4 px-6 mx-auto max-w-7xl md:flex-row">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rotate-45 border-2 rounded-sm border-primary" />
            <div className="absolute inset-1 bg-primary rounded-[1px] rotate-45" />
          </div>
          <span className="text-sm font-display font-700 text-white/60">
            Kaveesha Muthugala
          </span>
        </div>

        <p className="font-mono text-xs text-white/30">
          © 2025 · Built with Next.js & Framer Motion
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/Kaveesha-Devs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors text-white/30 hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="mailto:kaveeshasandanuwan@.com"
            className="font-mono text-xs transition-colors text-white/30 hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
