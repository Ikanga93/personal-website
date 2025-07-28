import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ProjectsDetailed from '@/components/ProjectsDetailed'

export const metadata: Metadata = {
  title: 'Projects Portfolio - Gilchrist Ekuke',
  description: 'Explore my portfolio of full-stack web applications including AI-powered solutions, nonprofit management systems, and modern web apps built with React, Next.js, and other cutting-edge technologies.',
  keywords: 'projects, portfolio, React projects, Next.js applications, AI assistant, nonprofit app, full-stack applications, web development portfolio',
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