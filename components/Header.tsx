'use client'

import { useState, useEffect } from 'react'
import { Home, User, Code, FolderOpen, Mail, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showProfileInNav, setShowProfileInNav] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 20)
      
      // Only show animated profile on main page, always show on other pages
      if (pathname === '/') {
        // Show profile in nav when scrolled past hero section (around 400px)
        setShowProfileInNav(currentScrollY > 400)
      } else {
        // Always show profile photo on other pages
        setShowProfileInNav(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Set initial state based on current page
    if (pathname !== '/') {
      setShowProfileInNav(true)
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/skills', label: 'Skills', icon: Code },
    { href: '/projects', label: 'Projects', icon: FolderOpen },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 h-full">
            {/* Animated Profile Photo */}
            <AnimatePresence>
              {showProfileInNav && (
                <motion.div
                  initial={pathname === '/' ? { scale: 0, opacity: 0, x: -50 } : { scale: 1, opacity: 1, x: 0 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={pathname === '/' ? { scale: 0, opacity: 0, x: -50 } : { scale: 1, opacity: 1, x: 0 }}
                  transition={pathname === '/' ? { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    duration: 0.6
                  } : {
                    duration: 0
                  }}
                  className="relative flex items-center"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-200 shadow-lg mt-1 sm:mt-0">
                    <Image
                      src="/assets/gieprofile.jpeg"
                      alt="Gilchrist Ekuke"
                      width={40}
                      height={40}
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Logo Initials */}
            <Link href="/" className={`font-display font-bold hover:text-primary-600 transition-colors duration-300 flex items-center ${
              showProfileInNav ? 'text-2xl h-10' : 'text-3xl'
            }`}>
              <span className="relative">
                <span className="text-gray-800 tracking-tighter">
                  G
                </span>
                <span className="text-gray-700 -ml-1 tracking-tighter font-light">
                  E
                </span>
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-black rounded-full"></div>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Always visible on md+ screens */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon
              const isCurrentPage = isActive(link.href)
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`group relative flex flex-col items-center p-3 rounded-xl transition-all duration-300 ease-out ${
                      isCurrentPage
                        ? 'text-gray-800 bg-gray-100 border-2 border-gray-200'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200'
                    }`}
                    title={link.label}
                  >
                    {/* Icon with subtle animations */}
                    <motion.div
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent 
                        size={22} 
                        className={`transition-all duration-300 ${
                          isCurrentPage ? 'drop-shadow-sm' : ''
                        }`}
                      />
                      {/* Active indicator */}
                      {isCurrentPage && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 bg-gray-700 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Label with slide animation */}
                    <motion.span 
                      className={`text-xs mt-1.5 font-medium transition-all duration-300 ${
                        isCurrentPage ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-700'
                      }`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Modern Animated Hamburger Menu Button - Only visible on mobile */}
          <motion.button
            className="md:hidden relative p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-sm hover:shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              {/* Top line */}
              <motion.div
                className="w-5 h-0.5 bg-gray-700 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                  backgroundColor: isMobileMenuOpen ? '#000000' : '#374151'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
              {/* Middle line */}
              <motion.div
                className="w-5 h-0.5 bg-gray-700 rounded-full my-1"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scale: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              
              {/* Bottom line */}
              <motion.div
                className="w-5 h-0.5 bg-gray-700 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                  backgroundColor: isMobileMenuOpen ? '#000000' : '#374151'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gray-200/30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isMobileMenuOpen ? 1.2 : 0,
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </motion.button>

        </div>

        {/* Mobile Navigation Menu - Reveals icons vertically on the right */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-20 right-0 w-20 bg-white/95 backdrop-blur-md border-l border-gray-100 shadow-lg z-40"
            >
              <div className="py-4">
                <div className="flex flex-col items-center space-y-4">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon
                    const isCurrentPage = isActive(link.href)
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={link.href}
                          prefetch={true}
                          className={`group relative flex flex-col items-center p-3 rounded-lg transition-all duration-300 ease-out ${
                            isCurrentPage
                              ? 'text-gray-800 bg-gray-100 border-2 border-gray-200'
                              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200'
                          }`}
                          title={link.label}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {/* Icon with subtle animations */}
                          <motion.div
                            className="relative"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconComponent 
                              size={20} 
                              className={`transition-all duration-300 ${
                                isCurrentPage ? 'drop-shadow-sm' : ''
                              }`}
                            />
                            {/* Active indicator */}
                            {isCurrentPage && (
                              <motion.div
                                className="absolute -top-1 -right-1 w-2 h-2 bg-gray-700 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              />
                            )}
                          </motion.div>
                          
                          {/* Label */}
                          <motion.span 
                            className={`text-xs mt-1 font-medium transition-all duration-300 text-center ${
                              isCurrentPage ? 'text-primary-700' : 'text-gray-500 group-hover:text-primary-600'
                            }`}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header 