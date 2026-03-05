import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaveesha Sandanuwan Muthugala | Software Engineer',
  description: 'Software Engineering undergraduate at CINEC Campus. Expert in React, Next.js, Flutter, and Full Stack Development. Available for internships and freelance projects.',
  keywords: [
    'Kaveesha Sandanuwan',
    'Kaveesha Muthugala',
    'Software Engineer Sri Lanka',
    'React Developer Sri Lanka',
    'Flutter Developer',
    'Next.js Developer',
    'Full Stack Developer Sri Lanka',
    'CINEC Software Engineering',
    'Web Developer Negombo',
    'Mobile App Developer Sri Lanka',
  ],
  authors: [{ name: 'Kaveesha Sandanuwan Muthugala' }],
  creator: 'Kaveesha Sandanuwan Muthugala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaveeshasandanuwan.vercel.app',
    title: 'Kaveesha Sandanuwan Muthugala | Software Engineer',
    description: 'Software Engineering undergraduate at CINEC Campus. Expert in React, Next.js, Flutter, and Full Stack Development.',
    siteName: 'Kaveesha Sandanuwan Portfolio',
    images: [
      {
        url: '/my22.png',
        width: 1200,
        height: 630,
        alt: 'Kaveesha Sandanuwan Muthugala - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaveesha Sandanuwan Muthugala | Software Engineer',
    description: 'Software Engineering undergraduate at CINEC Campus. Expert in React, Next.js, Flutter, and Full Stack Development.',
    images: ['/my22.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: 'https://kaveeshasandanuwan.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kaveesha Sandanuwan Muthugala',
              url: 'https://kaveeshasandanuwan.vercel.app',
              image: 'https://kaveeshasandanuwan.vercel.app/my22.png',
              jobTitle: 'Software Engineer',
              alumniOf: 'CINEC Campus',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Negombo',
                addressCountry: 'Sri Lanka',
              },
              sameAs: [
                'https://github.com/Kaveesha-Devs',
                'https://www.linkedin.com/in/kaveesha-sandanuwan-72268a254',
              ],
              knowsAbout: ['React', 'Next.js', 'Flutter', 'Full Stack Development', 'UI/UX Design'],
            }),
          }}
        />
      </head>
      <body className="noise">
        {children}
      </body>
    </html>
  )
}