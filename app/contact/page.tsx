import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ContactDetailed from '@/components/ContactDetailed'

export const metadata: Metadata = {
  title: 'Contact Me - Gilchrist Ekuke',
  description: 'Get in touch for product management and development work. I define product strategy and build it myself. Specializing in 0-to-1 products and technical execution.',
  keywords: 'contact, hire product manager, technical product manager, product builder, web development services, 0-to-1 products, React developer',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactDetailed />
      </div>
      <Footer />
    </main>
  )
} 