import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import RittProjectPage from '@/components/RittProjectPage'

export const metadata: Metadata = {
  title: 'Ritt - AI-Powered Civics Test Platform | Gilchrist Ekuke',
  description: 'Deep dive into Ritt: An AI-powered U.S. civics test study platform that achieved 418% daily growth and 471 users. Explore user growth analytics, engagement metrics, and product insights.',
  keywords: 'Ritt, AI civics test, user growth analytics, product metrics, citizenship test, AI-powered learning, Next.js, React, product management',
}

export default function RittPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <RittProjectPage />
      </div>
      <Footer />
    </main>
  )
}
