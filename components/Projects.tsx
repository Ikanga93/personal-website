'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Ofele Nonprofit App",
      description: "A comprehensive nonprofit management application designed to streamline operations, donor management, and community engagement. Features modern UI/UX and robust functionality for nonprofit organizations.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&auto=format&q=80",
      tech: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://ofele-nonprofit-app.vercel.app/",
      githubUrl: "https://github.com/gilchristekuke",
      featured: true,
      imageAlt: "Nonprofit donation and management dashboard"
    },
    {
      title: "Ritt AI Assistant Frontend",
      description: "Frontend application for the Ritt AI assistant, providing a seamless voice ordering experience for customers. Built with modern web technologies for optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop&auto=format&q=80",
      tech: ["React", "TypeScript", "Voice API", "Real-time Communication"],
      liveUrl: "https://ritt-ai-assistant-frontend.onrender.com",
      githubUrl: "https://github.com/gilchristekuke",
      featured: true,
      imageAlt: "Modern voice AI assistant interface"
    },
    {
      title: "Ritt.ai - AI Drive-Thru Assistant",
      description: "Revolutionary AI-powered order-taking system for drive-thru restaurants. Features voice ordering, 99.5% accuracy, automated upselling, and reduces wait times by handling orders before customers reach the window.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format&q=80",
      tech: ["React", "Next.js", "AI/ML", "Voice Processing", "Node.js", "TypeScript"],
      liveUrl: "https://ritt.ai/",
      githubUrl: "https://github.com/gilchristekuke",
      featured: false,
      imageAlt: "AI drive-thru interface with voice ordering system"
    },
    {
      title: "Mo's Burrito App",
      description: "Full-stack restaurant application for ordering and managing burrito orders. Features real-time order tracking, menu management, and seamless payment integration for enhanced customer experience.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop&auto=format&q=80",
      tech: ["React", "Node.js", "Railway", "Express.js"],
      liveUrl: "https://mo-s-burrito-app-production.up.railway.app/",
      githubUrl: "https://github.com/gilchristekuke",
      featured: false,
      imageAlt: "Restaurant food ordering interface with burrito menu"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications that showcase my expertise in building scalable, 
            innovative solutions across various industries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  Live App
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="btn-primary text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn-secondary text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white text-gray-600 rounded text-xs border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="btn-primary group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Let's Work Together
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 