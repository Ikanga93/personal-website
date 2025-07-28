import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me - Gilchrist Ekuke',
  description: 'Learn more about Gilchrist Ekuke, a passionate full-stack developer with expertise in modern web technologies, frontend development, and backend engineering.',
  keywords: 'about Gilchrist Ekuke, full-stack developer, frontend specialist, backend engineer, web developer portfolio',
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