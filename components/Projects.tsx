'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Zap, Heart, Code2, Users } from 'lucide-react'
import Link from 'next/link'

const Projects = () => {
  const featuredProjects = [
    {
      title: "Ritt",
      description: "AI-powered civics test app with 435 users and 418% daily growth in first week",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-500 to-purple-600",
      year: "2025"
    },
    {
      title: "Ofele",
      description: "Church management platform with 100% adoption across 12 department members",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-500 to-teal-600",
      year: "2025"
    },
    {
      title: "WePyk",
      description: "Schedule-based rideshare platform built with offshore team, validated by 1,000+ interviews",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-orange-500 to-red-600",
      year: "2022"
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-4 sm:mb-6">
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Functional products people actually use, built from customer discovery to technical execution
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg overflow-hidden group cursor-pointer`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 sm:p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-white/20 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 text-center px-4 sm:px-0"
        >
          {[
            { number: "435+", label: "Total Users" },
            { number: "1,000+", label: "User Interviews" },
            { number: "100%", label: "Team Adoption" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center px-4 sm:px-0"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 btn-primary group text-base sm:text-lg w-full sm:w-auto justify-center"
          >
            <span>Explore All Products</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 