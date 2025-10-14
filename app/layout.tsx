import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Gilchrist Ekuke - Technical Product Manager & Builder',
  description: 'Technical product manager who builds the products I define. Combining product strategy with hands-on development to ship products people use.',
  keywords: 'technical product manager, product builder, full-stack developer, product engineering, 0-to-1 products, React, Node.js, TypeScript, Next.js, Gilchrist Ekuke',
  authors: [{ name: 'Gilchrist Ekuke' }],
  openGraph: {
    title: 'Gilchrist Ekuke - Technical Product Manager & Builder',
    description: 'Technical product manager who builds the products I define. Combining product strategy with hands-on development.',
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