'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 flex-1 flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-6xl font-display font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 btn-primary group"
              >
                <Home size={20} />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 btn-secondary group"
              >
                <ArrowLeft size={20} />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 