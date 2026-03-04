'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#060c18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left — Logo + name + copyright */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
              &lt;K/&gt;
            </span>
          </div>
          <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            Kaveesha Sandanuwan
          </p>
          <p className="text-white/40 text-sm mb-4">© 2025 All rights reserved.</p>
          <p className="text-white/30 text-sm">
            Built with{' '}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Next.js</a>
            {' '}&amp;{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Tailwind CSS</a>
          </p>
        </div>

        {/* Center — Contact */}
        <div>
          <p className="text-white font-semibold text-base mb-5" style={{ fontFamily: 'var(--font-display)' }}>Contact</p>
          <div className="space-y-3">
            <a href="mailto:kaveeshasandanuwan@gmail.com" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
              <Image src="/logos/email.png" alt="Email" width={16} height={16} className="object-contain opacity-60" />
              kaveeshasandanuwan@gmail.com
            </a>
            <a href="tel:0760263586" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
              <Image src="/logos/call.png" alt="Phone" width={16} height={16} className="object-contain opacity-60" />
              0760 263 586
            </a>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Image src="/logos/location.png" alt="Location" width={16} height={16} className="object-contain opacity-60" />
              Negombo, Sri Lanka
            </div>
          </div>
        </div>

        {/* Right — Social icons */}
        <div>
          <p className="text-white font-semibold text-base mb-5" style={{ fontFamily: 'var(--font-display)' }}>Reach Me On</p>
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Kaveesha-Devs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Image src="/logos/github.png" alt="GitHub" width={22} height={22} className="object-contain" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kaveesha-sandanuwan-72268a254"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Image src="/logos/linkedIn.png" alt="LinkedIn" width={22} height={22} className="object-contain" />
            </a>
            {/* Call */}
            <a
              href="tel:0760263586"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Image src="/logos/call.png" alt="Call" width={22} height={22} className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <p className="text-white/25 text-sm font-mono">© 2025 Kaveesha Sandanuwan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
