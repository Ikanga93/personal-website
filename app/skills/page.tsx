import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import SkillsDetailed from '@/components/SkillsDetailed'

export const metadata: Metadata = {
  title: 'Skills & Expertise - Gilchrist Ekuke',
  description: 'Explore my technical skills and expertise in full-stack development, including frontend technologies, backend frameworks, databases, and development tools.',
  keywords: 'skills, expertise, React, Next.js, Node.js, TypeScript, Python, Django, PostgreSQL, MongoDB, full-stack developer',
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