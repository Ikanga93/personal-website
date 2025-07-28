import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ContactDetailed from '@/components/ContactDetailed'

export const metadata: Metadata = {
  title: 'Contact Me - Gilchrist Ekuke',
  description: 'Get in touch for your next web development project. I specialize in full-stack development, AI applications, and modern web solutions. Available for freelance and contract work.',
  keywords: 'contact, hire developer, web development services, freelance developer, React developer, full-stack developer for hire',
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