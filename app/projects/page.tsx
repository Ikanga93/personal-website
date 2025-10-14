import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ProjectsDetailed from '@/components/ProjectsDetailed'

export const metadata: Metadata = {
  title: 'Product Portfolio - Gilchrist Ekuke',
  description: 'Products I\'ve defined and built from customer discovery to launch. AI-powered solutions, nonprofit management systems, and web apps solving real user problems.',
  keywords: 'products, portfolio, product management, 0-to-1 products, React projects, Next.js applications, AI assistant, nonprofit app, technical product manager, Ritt, Ofele, WePyk',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProjectsDetailed />
      </div>
      <Footer />
    </main>
  )
} 