import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me - Gilchrist Ekuke',
  description: 'Learn more about Gilchrist Ekuke, a technical product manager and builder who combines product strategy with hands-on development to ship products people use.',
  keywords: 'about Gilchrist Ekuke, technical product manager, product builder, full-stack developer, product engineering, 0-to-1 products',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
} 