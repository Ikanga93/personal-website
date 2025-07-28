'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, ArrowUp, Send, Heart, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const currentYear = new Date().getFullYear()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/gilchristekuke',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/gilchristekuke',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/gilchristekuke',
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Email', 
      url: 'mailto:hello@gilchristekuke.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-400'
    }
  ]

  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const servicesLinks = [
    { name: 'Full-Stack Development', href: '#contact' },
    { name: 'Frontend Design', href: '#contact' },
    { name: 'Backend APIs', href: '#contact' },
    { name: 'Mobile Apps', href: '#contact' }
  ]

  const recentProjects = [
    { name: 'Ofele Nonprofit App', url: 'https://ofele-nonprofit-app.vercel.app/' },
    { name: 'Ritt.ai Assistant', url: 'https://ritt.ai/' },
    { name: 'Mo\'s Burrito App', url: 'https://mo-s-burrito-app-production.up.railway.app/' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Gilchrist Ekuke
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Full-Stack Developer crafting exceptional digital experiences with modern technologies. 
                  Transforming ideas into powerful, scalable solutions.
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700 group`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="font-semibold text-white mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recent Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="font-semibold text-white mb-6">Recent Work</h4>
              <ul className="space-y-3">
                {recentProjects.map((project, index) => (
                  <li key={index}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get notified about new projects and tech insights.
              </p>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-900/30 border border-green-500/30 rounded-xl text-center"
                >
                  <div className="text-green-400 mb-2">✓</div>
                  <p className="text-green-300 text-sm">Thanks for subscribing!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Gilchrist Ekuke
              </p>
              <span className="hidden md:block">|</span>
              <p>All rights reserved</p>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500"></div>
    </footer>
  )
}

export default Footer 