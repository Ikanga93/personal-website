'use client'

import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gradient mb-6 leading-tight">
              Gilchrist
              <br />
              Ekuke
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6">
              Full-Stack Developer
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              I craft exceptional digital experiences with modern web technologies,
              turning ideas into elegant, scalable solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary group">
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="aspect-square relative overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-primary-200 shadow-2xl">
                <Image
                  src="/assets/gieprofile.jpeg"
                  alt="Gilchrist Ekuke - Full-Stack Developer"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-300/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 