import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Développeur Front-End',
  description: 'Portfolio moderne d\'un développeur front-end spécialisé en React, Next.js et technologies web modernes',
  keywords: ['développeur', 'front-end', 'React', 'Next.js', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votredomaine.com',
    title: 'Portfolio | Développeur Front-End',
    description: 'Portfolio moderne d\'un développeur front-end spécialisé en React, Next.js et technologies web modernes',
    siteName: 'Portfolio Dev',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}