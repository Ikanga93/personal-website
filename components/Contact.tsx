'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight, Coffee } from 'lucide-react'
import Link from 'next/link'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for New Projects
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-xl overflow-hidden group cursor-pointer mb-8"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <MessageCircle size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Let's Work Together
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                Ready to bring your vision to life? Let's discuss your next project
              </p>
              
              <div className="flex justify-center space-x-8 text-white/80">
                <div className="text-center">
                  <div className="text-2xl font-bold">2-4hrs</div>
                  <div className="text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">EST</div>
                  <div className="text-sm">Timezone</div>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="mailto:hello@gilchristekuke.com"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 group border border-primary-200"
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full font-medium">
              <Coffee size={18} />
              <span>Available Now</span>
            </div>
          </motion.div>

          {/* Call to Action Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 btn-primary group text-lg"
            >
              <span>View All Contact Options</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 