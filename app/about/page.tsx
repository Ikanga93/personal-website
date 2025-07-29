import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me - Gilchrist Ekuke',
  description: 'Learn more about Gilchrist Ekuke, an AI-first product engineer who builds functional products using intelligent AI collaboration and rapid iteration.',
  keywords: 'about Gilchrist Ekuke, AI-first product engineer, vibe coder, AI-assisted development, product engineering, rapid prototyping',
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