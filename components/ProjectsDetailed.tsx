'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Star, Target, TrendingUp, Zap, Heart, ShoppingCart, Play, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ProjectsDetailed = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const projects = [
    {
      id: 1,
      title: "Ritt",
      shortDescription: "AI-powered U.S. civics test study platform",
      longDescription: "Launched an AI-powered web application that enables citizenship applicants to efficiently study and practice for the U.S. civics test, outperforming existing solutions in engagement and user satisfaction. Drove rapid growth to 435 users and 25+ active users within the first 8 days, achieving 418% average daily user growth during launch week.",
      image: "/assets/IMG_0951.jpg",
      category: "AI-Powered App",
      tech: ["React", "Next.js", "AI/ML", "TypeScript", "Tailwind CSS", "Voice Processing", "WebSocket", "Vercel"],
      liveUrl: "https://ritt.ai",
      githubUrl: "https://github.com/Ikanga93/ai-civics-test.git",
      duration: "3 months",
      role: "Product Manager & AI Developer",
      year: "2025",
      featured: true,
      impact: {
        metric1: { value: "481", label: "Total Users" },
        metric2: { value: "20%", label: "Daily Growth" },
        metric3: { value: "25+", label: "Active Daily Users" }
      },
      challenges: [
        "Building engaging AI-powered study experience",
        "Achieving rapid user growth and retention",
        "Outperforming existing civics test solutions",
        "Ensuring high user satisfaction"
      ],
      solutions: [
        "AI-powered adaptive learning system",
        "User-centered design with immediate feedback",
        "Gamification and progress tracking",
        "Continuous iteration based on user feedback"
      ],
      keyFeatures: [
        "AI-powered civics test practice",
        "Interactive study sessions",
        "Progress tracking and analytics",
        "Voice-activated testing",
        "Real-time feedback",
        "Mobile-responsive design"
      ]
    },
    {
      id: 2,
      title: "Ofele",
      shortDescription: "Church department management platform",
      longDescription: "Identified an operational gap in my church department and built a management web app for programs, schedules, events, and electronic prayer requests. Achieved full adoption across all 12 department members, with plans underway to expand usage to the broader church community to streamline prayer request submissions.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Nonprofit Management",
      tech: ["React", "Next.js", "PostgreSQL", "Tailwind CSS", "Node.js", "Express.js", "Vercel"],
      liveUrl: "https://ofele-nonprofit-app.vercel.app/",
      githubUrl: "https://github.com/Ikanga93/ofele-nonprofit-app.git",
      duration: "4 months",
      role: "Product Manager & Full-Stack Developer",
      year: "2025",
      featured: true,
      impact: {
        metric1: { value: "12", label: "Active Members" },
        metric2: { value: "100%", label: "Team Adoption" },
        metric3: { value: "Church-wide", label: "Expansion Plans" }
      },
      challenges: [
        "Identifying operational gaps in church operations",
        "Building intuitive management system",
        "Achieving full team adoption",
        "Planning scalable expansion"
      ],
      solutions: [
        "User research and stakeholder interviews",
        "Iterative design with user feedback",
        "Training and onboarding support",
        "Modular architecture for expansion"
      ],
      keyFeatures: [
        "Program and schedule management",
        "Event planning and coordination",
        "Electronic prayer request system",
        "Member communication tools",
        "Analytics and reporting",
        "Role-based access control"
      ]
    },
    {
      id: 3,
      title: "WePyk",
      shortDescription: "Schedule-based rideshare platform for commuters",
      longDescription: "Led an offshore team of eight engineers to develop an innovative, schedule-based rideshare platform, informed by over 1,000 user interviews. Achieved hundreds of sign-ups and sustained four paying customers for several months, helping commuters save on rideshare costs.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop&auto=format&q=80",
      videoUrl: "https://www.youtube.com/watch?v=IiUIXPYUs8o",
      category: "Rideshare Platform",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Google Maps API", "Stripe", "Socket.io"],
      liveUrl: "https://wepyk.com",
      githubUrl: "https://github.com/Ikanga93/wepyk",
      duration: "8 months",
      role: "Product Manager & Team Lead",
      year: "2022",
      featured: true,
      impact: {
        metric1: { value: "1,000+", label: "User Interviews" },
        metric2: { value: "300+", label: "Sign-ups" },
        metric3: { value: "4", label: "Paying Customers" }
      },
      challenges: [
        "Leading offshore team of 8 engineers",
        "Conducting extensive user research",
        "Building innovative scheduling system",
        "Achieving product-market fit"
      ],
      solutions: [
        "Agile development with daily standups",
        "1,000+ user interviews for validation",
        "Schedule-based matching algorithm",
        "Iterative MVP approach"
      ],
      keyFeatures: [
        "Schedule-based ride matching",
        "Cost savings calculator",
        "Real-time ride tracking",
        "Secure payment processing",
        "Driver and rider profiles",
        "Route optimization"
      ]
    }
  ]

  const categories = [
    { name: "All Products", filter: "all", icon: <Target className="w-5 h-5" /> },
    { name: "AI/ML", filter: "AI/ML Application", icon: <Zap className="w-5 h-5" /> },
    { name: "Full-Stack", filter: "Restaurant Application", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Frontend", filter: "Frontend Application", icon: <Star className="w-5 h-5" /> },
    { name: "Nonprofit", filter: "Nonprofit Management", icon: <Heart className="w-5 h-5" /> }
  ]

  return (
    <section id="projectsdetails" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
            Product Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of full-stack applications, AI-powered solutions, and innovative web platforms. 
            Each product represents real-world impact and technical excellence.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-gray-900 mb-12 text-center"
          >
            Featured Products
          </motion.h2>

          <div className="space-y-20">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Project Image/Video */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                      {project.videoUrl && playingVideo === project.id ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${project.videoUrl.split('v=')[1]}?autoplay=1`}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <>
                          <img
                            src={project.videoUrl ? `https://img.youtube.com/vi/${project.videoUrl.split('v=')[1]}/maxresdefault.jpg` : project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {project.videoUrl && (
                            <button
                              onClick={() => setPlayingVideo(project.id)}
                              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
                              aria-label="Play video"
                            >
                              <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-12 h-12 text-primary-600 fill-primary-600" />
                              </div>
                            </button>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </>
                      )}
                    </div>
                    <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.impact).map(([key, metric]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-primary-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-primary-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 flex-wrap">
                    {project.id === 1 && (
                      <Link
                        href="/projects/ritt"
                        className="btn-primary"
                      >
                        <BarChart3 size={20} />
                        View Analytics
                      </Link>
                    )}
                    <a
                      href={project.liveUrl}
                      className={project.id === 1 ? "btn-secondary" : "btn-primary"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-gray-900 mb-12 text-center"
          >
            All Products
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-gray-700">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-600 text-white rounded-full px-3 py-1 text-xs font-bold">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-primary-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white text-gray-600 rounded text-xs border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 flex-wrap">
                    {project.id === 1 && (
                      <Link
                        href="/projects/ritt"
                        className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                      >
                        <BarChart3 size={14} />
                        <span>Analytics</span>
                      </Link>
                    )}
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create innovative solutions that make a real impact.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors group"
          >
            <span>Get In Touch</span>
            <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsDetailed 