'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Share2, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Resume = () => {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gilchrist Ekuke - Resume',
          text: 'Check out my professional resume',
          url: url
        })
      } catch (err) {
        // Fallback to copy to clipboard
        copyToClipboard(url)
      }
    } else {
      copyToClipboard(url)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header with back button and share button */}
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <motion.button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <>
                <Check size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Share Resume</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 md:p-8">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Gilchrist Ekuke
            </motion.h1>
            
            <motion.div 
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-blue-100 text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href="mailto:Gekuke01@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="break-all sm:break-normal">Gekuke01@gmail.com</span>
              </a>
              <a href="tel:+12179042808" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>217-904-2808</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Illinois</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4 text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="https://github.com/Ikanga93" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/gilchrist-ekuke-b5194017b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {/* Summary */}
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                A dedicated full-stack web developer with hands-on experience building user-centric web applications, 
                many of which are currently in use by real users. Passionate about solving real-world problems through technology.
              </p>
            </motion.section>

            {/* Portfolio Projects */}
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                Portfolio Projects
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="border-l-4 border-blue-500 pl-3 sm:pl-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    AI Citizenship Test Assistant
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">
                    Building an AI-powered web app that uses a voice assistant to simulate and help users practice 
                    for the U.S. citizenship civics test in real time.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-3 sm:pl-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Church Program Management
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">
                    Developed a web app for my church's intercession department to manage programs, schedules, events, 
                    and prayer requests electronically. Fully adopted by all 12 department members for daily operations, 
                    and the department will share the app with the wider church community to submit prayer requests.
                  </p>
                  <a href="https://ofele-nonprofit-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs sm:text-sm">
                    Link to live app <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                  </a>
                </div>

                <div className="border-l-4 border-purple-500 pl-3 sm:pl-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    AI-Powered Restaurant Order Assistant
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">
                    Created an AI-powered order-taking assistant for a high-volume, late-night restaurant. 
                    The solution automates order processing and payment collection, allowing staff to focus on 
                    food preparation and improving overall efficiency.
                  </p>
                  <a href="https://ritt-ai-assistant-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs sm:text-sm">
                    Link to live app <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                  </a>
                </div>

                <div className="border-l-4 border-orange-500 pl-3 sm:pl-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Online Food Ordering System
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">
                    Developed an online food ordering system for a small restaurant, enabling direct customer engagement 
                    and reducing dependence on third-party delivery marketplaces. Currently negotiating a $3,500 sale 
                    to the business, targeted for completion by the end of the month.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
                    <a href="https://mo-s-burrito-app-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      Link to live app <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                    </a>
                    <a href="https://mo-s-burrito-app-production.up.railway.app/dashboard" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      Link to live restaurant dashboard <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                Experience
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">Independent Contractor</h3>
                    <span className="text-gray-600 text-sm">04/2018 – Present</span>
                  </div>
                  <p className="text-gray-600 mb-2 font-medium">Uber and Lyft</p>
                  <p className="text-gray-700">
                    Enhance customer satisfaction with punctual deliveries and adherence to schedules. 
                    Maintain safe driving records, highlighting reliability and attention to detail, and top-rated 
                    status for years. Deliver exceptional customer service by promptly resolving thousands of issues.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">French Linguist Specialist</h3>
                    <span className="text-gray-600 text-sm">04/12/2024 – 12/15/2024</span>
                  </div>
                  <p className="text-gray-600 mb-2 font-medium">Legal Interpreting Services</p>
                  <p className="text-gray-700">
                    Applied advanced linguistic skills at HHS to ensure clear, culturally informed communication 
                    between unaccompanied immigrant minors and care staff, bridging language and cultural gaps.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">Startup Founder & CEO</h3>
                    <span className="text-gray-600 text-sm">11/2021 - 03/2023</span>
                  </div>
                  <p className="text-gray-600 mb-2 font-medium">WePyk Inc</p>
                  <p className="text-gray-700">
                    Conducted thousands of user interviews and led a team of eight engineers to launch products 
                    to tackle problems, demonstrating leadership, management, and problem-solving. Generated $500 
                    from customers and over ten sign-ups, highlighting entrepreneurial and self-starter abilities.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Technical</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Python', 'JavaScript', 'CSS', 'HTML', 'SQL', 'Docker', 'PostgreSQL', 'SQLite', 'Web Scraping', 'ETL', 'AWS', 'Linux', 'RHEL', 'Bash', 'Version Control', 'CI/CD', 'Problem-Solving'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Business</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Product Management', 'User Interviews', 'Product Marketing', 'Business Sales', 'Product Design', 'Product Ideation', 'Communication'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Analysis</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Data Analysis', 'Market Analysis', 'Detail-Oriented', 'Data Visualization', 'Insightful', 'Critical Thinking'].map((skill) => (
                      <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Certificates */}
            <motion.section 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                Certificates
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'].map((cert) => (
                  <span key={cert} className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                Education
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Parkland College</h3>
                  <p className="text-gray-600">Some College in Information Systems</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">University of Kinshasa</h3>
                  <p className="text-gray-600">Some College in Oil & Gas Engineering | Abroad | 05/2016</p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
