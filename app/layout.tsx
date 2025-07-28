import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Gilchrist Ekuke - Full-Stack Developer',
  description: 'Full-stack web developer specializing in modern web technologies. Building exceptional digital experiences.',
  keywords: 'full-stack developer, web developer, React, Node.js, TypeScript, Next.js, Gilchrist Ekuke',
  authors: [{ name: 'Gilchrist Ekuke' }],
  openGraph: {
    title: 'Gilchrist Ekuke - Full-Stack Developer',
    description: 'Full-stack web developer specializing in modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 