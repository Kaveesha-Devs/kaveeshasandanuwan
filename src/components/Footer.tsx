'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#060c18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Main footer content */}
      <div className="grid grid-cols-1 gap-12 px-6 mx-auto max-w-7xl py-14 md:grid-cols-3">

        {/* Left — Logo + name + copyright */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              &lt;K/&gt;
            </span>
          </div>
          <p className="mb-1 text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Kaveesha Sandanuwan
          </p>
          <p className="mb-4 text-sm text-white/40">© 2026 All rights reserved.</p>
          <p className="text-sm text-white/30">
            Built with{' '}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Next.js</a>
            {' '}&amp;{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Tailwind CSS</a>
          </p>
        </div>

        {/* Center — Contact */}
        <div>
          <p className="mb-5 text-base font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Contact</p>
          <div className="space-y-3">
            <a href="mailto:kaveeshasandanuwan@gmail.com" className="flex items-center gap-2 text-sm transition-colors text-white/50 hover:text-white">
              <Image src="/logos/email.png" alt="Email" width={16} height={16} className="object-contain opacity-60" />
              kaveeshasandanuwan@gmail.com
            </a>
            <a href="tel:0760263586" className="flex items-center gap-2 text-sm transition-colors text-white/50 hover:text-white">
              <Image src="/logos/call.png" alt="Phone" width={16} height={16} className="object-contain opacity-60" />
              0760 263 586
            </a>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Image src="/logos/location.png" alt="Location" width={16} height={16} className="object-contain opacity-60" />
              Negombo, Sri Lanka
            </div>
          </div>
        </div>

        {/* Right — Social icons */}
        <div>
          <p className="mb-5 text-base font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Reach Me On</p>
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Kaveesha-Devs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 rounded-full w-11 h-11 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Image src="/logos/github.png" alt="GitHub" width={22} height={22} className="object-contain" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kaveesha-sandanuwan-72268a254"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 rounded-full w-11 h-11 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Image src="/logos/linkedIn.png" alt="LinkedIn" width={22} height={22} className="object-contain" />
            </a>
            {/* Call */}
            <a
              href="tel:0760263586"
              className="flex items-center justify-center transition-all duration-300 rounded-full w-11 h-11 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Image src="/logos/call.png" alt="Call" width={22} height={22} className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="px-6 py-5 mx-auto text-center max-w-7xl">
          <p className="font-mono text-sm text-white/25">© 2026 Kaveesha Sandanuwan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
