'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'
import Link from 'next/link'

const AboutPreview = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Single Engaging Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl overflow-hidden group cursor-pointer mb-6 sm:mb-8 mx-4 sm:mx-0"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Code2 size={28} className="text-white sm:w-8 sm:h-8" />
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
                Hi, I'm Gilchrist
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                A technical product manager who builds what I define—bridging strategy and execution
              </p>
              
              <div className="flex justify-center space-x-4 sm:space-x-6 text-white/80">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">10+</div>
                  <div className="text-xs sm:text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm">Users Reached</div>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          {/* Call to Action Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="px-4 sm:px-0"
          >
            <Link
              href="/about"
              className="inline-flex items-center space-x-3 btn-primary group text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <span>Discover My Story</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview 