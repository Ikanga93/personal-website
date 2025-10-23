'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, FileText } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Custom hook for typewriter effect
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return { displayText, isComplete }
}

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [photoOpacity, setPhotoOpacity] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { displayText: typedName, isComplete } = useTypewriter('Gilchrist Ekuke', 120)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      // Fade out photo as user scrolls down
      const fadeStart = 100
      const fadeEnd = 400
      const opacity = Math.max(0, Math.min(1, 1 - (window.scrollY - fadeStart) / (fadeEnd - fadeStart)))
      setPhotoOpacity(opacity)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20, // -10 to 10
        y: (clientY / innerHeight - 0.5) * 20  // -10 to 10
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white pt-24 sm:pt-32 md:pt-40">
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
              {typedName}
              <motion.span
                className="inline-block w-1 h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-b from-blue-600 to-purple-600 ml-1"
                animate={{
                  opacity: isComplete ? 0 : [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              />
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              Experienced Product Manager building user-driven solutions that turn real-world problems into impactful products.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0 justify-center lg:justify-start">
              <motion.button
                onClick={() => window.location.href = '/projects'}
                className="btn-primary group justify-center w-full sm:w-auto relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform"
                    whileHover={{ rotate: -45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => window.location.href = '/resume'}
                className="btn-secondary group justify-center w-full sm:w-auto relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(107, 114, 128, 0.4), 0 10px 10px -5px rgba(107, 114, 128, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <FileText size={20} />
                  Resume
                </span>
              </motion.button>

            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-500 px-4 sm:px-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -10, 0] // Floating animation
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative order-1 lg:order-2"
            style={{ 
              opacity: photoOpacity,
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          >
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-sm mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-0">
              <motion.div 
                className="aspect-square relative overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-primary-200 shadow-2xl cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-sm"
                  initial={false}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative z-10 aspect-square overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-primary-200">
                  <Image
                    src="/assets/gieprofile.jpeg"
                    alt="Gilchrist Ekuke - Full-Stack Developer"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'center 20%' }}
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 50vw"
                  />
                </div>
              </motion.div>
              
              {/* Interactive Decorative elements */}
              <motion.div 
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary-500/10 rounded-full blur-xl"
                animate={{
                  x: mousePosition.x * 0.3,
                  y: mousePosition.y * 0.3,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-gray-300/20 rounded-full blur-xl"
                animate={{
                  x: mousePosition.x * -0.2,
                  y: mousePosition.y * -0.2,
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Additional floating particles */}
              <motion.div
                className="absolute top-1/4 -left-8 w-3 h-3 bg-blue-400/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  x: mousePosition.x * 0.1
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/3 -right-6 w-2 h-2 bg-purple-400/40 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.4, 0.9, 0.4],
                  x: mousePosition.x * -0.15
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 