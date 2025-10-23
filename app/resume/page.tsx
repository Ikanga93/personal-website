'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Share2, Copy, Check, Download } from 'lucide-react'
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
      {/* Header with back button, download and share buttons */}
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <motion.a
              href="/assets/resume/pm-gie-orig-cv.pdf"
              download="Gilchrist_Ekuke_Resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all text-sm sm:text-base w-full sm:w-auto justify-center shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Download PDF</span>
            </motion.a>
            
            <motion.button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center shadow-md hover:shadow-lg"
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
                  <span>Share</span>
                </>
              )}
            </motion.button>
          </div>
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
                <span>301 W Curtis Rd, Savoy, IL</span>
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
                Product Manager & Startup Founder with 4 years of experience building and launching user-focused products. Skilled in product strategy, user research, roadmap planning, and metrics-driven decision-making, delivering solutions that impact hundreds of users and improve business metrics.
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
                Portfolio Product
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Ritt — AI-powered Citizenship Test Web App (2025)
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    <li>Designed and executed the product roadmap and go-to-market strategy for an AI-driven citizenship study platform, outperforming competitors in user satisfaction.</li>
                    <li>Conducted user research, usability testing, and implemented data analytics to inform continuous feature iteration.</li>
                    <li>Leveraged Python and SQL for backend integration and product analytics, achieving rapid growth to 481 users and 25+ daily active users within the first 14 days (20% avg. daily growth).</li>
                    <li>Applied KPI tracking to optimize retention and user learning outcomes.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Ofele — Church Program Management Web App (2024)
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    <li>Identified operational inefficiencies and defined product requirements for scheduling, events, and electronic prayer requests.</li>
                    <li>Designed and tested user-centric workflows that achieved 100% adoption among 12 department members, with plans to expand usage to the broader church community.</li>
                    <li>Collected user feedback and applied UI/UX improvements, resulting in measurable usability gains.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Wepyk — Schedule-Based Rideshare Platform (2021–2023)
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    <li>Led a cross-functional team of engineers and designers, managing the full product lifecycle from concept to launch using Agile principles and Git-based CI/CD workflows. This platform addressed rideshare commuters' cost and convenience challenges.</li>
                    <li>Conducted over 1,000 user interviews to inform product requirements, product-market fit, prioritize features, and refine data-driven decision-making.</li>
                    <li>Delivered MVP that attracted hundreds of sign-ups and four paying customers.</li>
                  </ul>
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
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Wepyk — Founder & Product Manager</h3>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">11/2021–03/2023</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    <li>Defined product vision, roadmap, and feature prioritization aligned with user needs and business goals.</li>
                    <li>Collaborated with engineering, design, and marketing teams to deliver a scalable MVP, using Python APIs and Dockerized environments.</li>
                    <li>Led engineering team to deliver MVP and iterated based on user feedback and metrics.</li>
                    <li>Measured success through key product metrics (conversion rate, number of riders, bookings, retention, and engagement), ensuring each iteration was validated by data and user testing.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Independent Contractor (Driver)</h3>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">04/2018–Present</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    <li>Delivered excellent service with reliability and consistency, demonstrating problem-solving, adaptability, and user empathy — all critical PM traits.</li>
                    <li>Resolved customer issues with a focus on communication, efficiency, and user satisfaction.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Legal Inter. Services — French Linguist Specialist</h3>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">04/12/2024–12/15/2024</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    <li>Facilitated sensitive communication between unaccompanied immigrant minors and staff at HHS facilities.</li>
                    <li>Applied analytical thinking and cultural intelligence to ensure clear, accurate, and empathetic interpretation across languages.</li>
                  </ul>
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
                Certificate
              </h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Product Management (Udemy / Microsoft PM)</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'JavaScript', 'HTML/CSS'].map((cert) => (
                    <span key={cert} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg font-medium text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
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
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Parkland College</h3>
                  <p className="text-gray-600">Coursework in Information Systems</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">University of Kinshasa (Abroad)</h3>
                  <p className="text-gray-600">Coursework in Oil & Gas Engineering — May 2016</p>
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
