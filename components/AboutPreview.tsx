'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Database, Layers } from 'lucide-react'
import Link from 'next/link'

const AboutPreview = () => {
  const developmentAreas = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full-Stack",
      description: "End-to-end development",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      description: "Beautiful user interfaces",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend",
      description: "Scalable server solutions",
      gradient: "from-orange-500 to-red-600"
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer with expertise in modern web technologies, 
            dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {developmentAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${area.gradient} text-white shadow-lg overflow-hidden group cursor-pointer`}
            >
              <div className="relative z-10">
                <div className="mb-4 text-white/90">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {area.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 btn-primary group"
          >
            <span>Learn More About Me</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview 