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
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white pt-16 sm:pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient mb-4 sm:mb-6 leading-tight">
              Gilchrist
              <br />
              Ekuke
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-4 sm:mb-6">
              Full-Stack Developer
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              I craft exceptional digital experiences with modern web technologies,
              turning ideas into elegant, scalable solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group justify-center w-full sm:w-auto"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary group justify-center w-full sm:w-auto">
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-500 px-4 sm:px-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-sm mx-auto">
              <div className="aspect-square relative overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-primary-200 shadow-2xl">
                <Image
                  src="/assets/gieprofile.jpeg"
                  alt="Gilchrist Ekuke - Full-Stack Developer"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 50vw"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-gray-300/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 