'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiDjango,
  SiPostgresql, 
  SiMongodb, 
  SiGit, 
  SiDocker, 
  SiAmazon, 
  SiVercel,
  SiVite, 
  SiFigma,
  SiSupabase,
  SiRender,
  SiRailway
} from 'react-icons/si'
import { Database, Users, MessageSquare, BookOpen, Target, User, ArrowRight, TrendingUp, Lightbulb, FileText, BarChart3, Layers } from 'lucide-react'
import Link from 'next/link'

const Skills = () => {
  // All skills in one array for floating layout
  const allSkills = [
    // Product Management Skills
    { name: "Product Strategy", icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "User Research", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Roadmapping", icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Stakeholder Mgmt", icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Product Analytics", icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "A/B Testing", icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Agile/Scrum", icon: <User className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Go-to-Market", icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "UX Design", icon: <SiFigma className="w-6 h-6 sm:w-8 sm:h-8 text-[#F24E1E]" />, category: "pm" },
    { name: "Figma", icon: <SiFigma className="w-6 h-6 sm:w-8 sm:h-8 text-[#F24E1E]" />, category: "pm" },
    { name: "OKRs & KPIs", icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "PRDs & Specs", icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Customer Discovery", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Feature Prioritization", icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Growth Strategy", icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    { name: "Product Vision", icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />, category: "pm" },
    
    // Technical Skills (minimal)
    { name: "React", icon: <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-[#61DAFB]" />, category: "technical" },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8 text-black" />, category: "technical" },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-[#3178C6]" />, category: "technical" },
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 sm:w-8 sm:h-8 text-[#339933]" />, category: "technical" },
    { name: "Python", icon: <SiPython className="w-6 h-6 sm:w-8 sm:h-8 text-[#3776AB]" />, category: "technical" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 sm:w-8 sm:h-8 text-[#336791]" />, category: "technical" },
    { name: "Git", icon: <SiGit className="w-6 h-6 sm:w-8 sm:h-8 text-[#F05032]" />, category: "technical" },
    { name: "Vercel", icon: <SiVercel className="w-6 h-6 sm:w-8 sm:h-8 text-black" />, category: "technical" }
  ]

  // Generate random positions for floating effect
  const getRandomPosition = (index: number) => {
    const positions = [
      { x: 10, y: 10 }, { x: 85, y: 15 }, { x: 15, y: 85 }, { x: 90, y: 80 },
      { x: 50, y: 10 }, { x: 25, y: 50 }, { x: 75, y: 45 }, { x: 40, y: 75 },
      { x: 60, y: 20 }, { x: 20, y: 30 }, { x: 80, y: 60 }, { x: 35, y: 90 },
      { x: 70, y: 25 }, { x: 45, y: 40 }, { x: 30, y: 65 }, { x: 65, y: 85 },
      { x: 55, y: 5 }, { x: 5, y: 55 }, { x: 95, y: 35 }, { x: 25, y: 20 },
      { x: 75, y: 70 }, { x: 15, y: 40 }, { x: 85, y: 50 }, { x: 50, y: 95 },
      { x: 10, y: 70 }, { x: 90, y: 10 }, { x: 30, y: 15 }, { x: 70, y: 55 }
    ]
    return positions[index % positions.length]
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 relative z-10 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Product management expertise with technical execution capabilities
          </p>
        </motion.div>

        {/* Floating Skills Container */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] w-full px-4 sm:px-0">
          {allSkills.map((skill, index) => {
            const position = getRandomPosition(index)
            return (
              <motion.div
                key={skill.name}
                className="absolute"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                variants={floatingVariants}
                animate="animate"
                whileHover={{ 
                  scale: 1.2, 
                  z: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <div 
                  className="bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary-300"
                  title={skill.name}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {skill.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-12 mb-6 sm:mb-8 px-4 sm:px-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-500 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-600">Product Management</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-600">Technical Skills</span>
          </div>
        </motion.div>

        {/* Call to Action Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center px-4 sm:px-0"
        >
          <Link
            href="/skills"
            className="inline-flex items-center space-x-3 btn-primary group text-base sm:text-lg w-full sm:w-auto justify-center"
          >
            <span>View All Skills & Expertise</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 