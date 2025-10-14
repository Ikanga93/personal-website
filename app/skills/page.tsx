import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import SkillsDetailed from '@/components/SkillsDetailed'

export const metadata: Metadata = {
  title: 'Skills & Expertise - Gilchrist Ekuke',
  description: 'Product management and technical skills. From user research and product strategy to hands-on development with React, Next.js, Node.js, and modern web technologies.',
  keywords: 'skills, expertise, product management, user research, product strategy, React, Next.js, Node.js, TypeScript, Python, technical product manager',
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <SkillsDetailed />
      </div>
      <Footer />
    </main>
  )
} 