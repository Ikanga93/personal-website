'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Monitor, Layers, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const About = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const developmentAreas = [
    {
      id: 'fullstack',
      title: "AI-First Product Engineer",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      hoverColor: "group-hover:from-purple-600 group-hover:to-indigo-700",
      description: "End-to-end product ownership from customer interviews to live, scaling solutions using AI-powered development.",
      skills: ["Cursor", "Windsurf", "Claude Code", "Rapid Prototyping", "Customer Onboarding", "AI Tooling", "Product Intuition"],
      experience: "2+ Years",
      projects: "10+ Products"
    },
    {
      id: 'frontend',
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-700",
      description: "Quick feedback loops with AI pair programming to ship user-facing features that people actually use.",
      skills: ["React/Next.js", "AI-Assisted Development", "User Feedback Integration", "Rapid Iteration", "Product Taste"],
      experience: "2+ Years",
      projects: "5+ Live Products"
    },
    {
      id: 'backend',
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      hoverColor: "group-hover:from-green-600 group-hover:to-emerald-700",
      description: "Building scalable infrastructure and automating workflows to handle real-world edge cases at scale.",
      skills: ["Node.js/Python", "Workflow Automation", "LLM Integration", "Webhooks", "Scalable Systems"],
      experience: "2+ Years",
      projects: "5+ Systems"
    }
  ]

  const personalHighlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI-Powered Development",
      description: "Leveraging Claude Code and smart tooling for rapid iteration"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Ambiguity Navigator",
      description: "Thriving in high-ambiguity, high-agency environments"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Customer-Obsessed",
      description: "From user interviews to working prototypes in record time"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Ship Fast, Learn Fast",
      description: "Quick feedback loops with direct user validation"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm Gilchrist Ekuke, an AI-first product engineer who turns customer problems into working solutions fast. 
            I thrive in high-ambiguity environments, leveraging AI tools like Cursor to ship functional products 
            that people actually use. Think like a PM, build like an engineer.
          </p>
        </motion.div>

        {/* Interactive Development Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {developmentAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setActiveCard(area.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${area.color} ${area.hoverColor} p-8 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      {area.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="flex justify-between text-xs text-white/80 mb-4">
                    <span>{area.experience}</span>
                    <span>{area.projects}</span>
                  </div>
                  
                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1">
                    {area.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {area.skills.length > 3 && (
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                        +{area.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Story & Highlights */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              My Journey in Development
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                My passion for technology began with curiosity about how digital experiences 
                could solve real-world problems. This curiosity evolved into a deep expertise 
                in both frontend aesthetics and backend architecture.
              </p>
              
              <p>
                From AI-powered applications like <span className="font-semibold text-gray-800">Ritt.ai</span> to 
                community-focused platforms like the <span className="font-semibold text-gray-800">Ofele Nonprofit App</span>, 
                I've consistently delivered solutions that balance technical excellence with user-centered design.
              </p>
              
              <p>
                I believe in continuous learning, clean code practices, and building applications 
                that not only meet requirements but exceed expectations. Every project is an 
                opportunity to push boundaries and create lasting impact.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group relative overflow-hidden"
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {personalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-primary-600 group-hover:text-primary-700 transition-colors mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 