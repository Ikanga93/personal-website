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
import { Database, Users, MessageSquare, BookOpen, Target, User } from 'lucide-react'

const Skills = () => {
  // All skills in one array for floating layout
  const allSkills = [
    { name: "React", icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-black" />, category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />, category: "frontend" },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />, category: "frontend" },
    { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />, category: "frontend" },
    { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />, category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />, category: "frontend" },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" />, category: "backend" },
    { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-black" />, category: "backend" },
    { name: "Python", icon: <SiPython className="w-8 h-8 text-[#3776AB]" />, category: "backend" },
    { name: "Django", icon: <SiDjango className="w-8 h-8 text-[#092E20]" />, category: "backend" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#336791]" />, category: "backend" },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />, category: "backend" },
    { name: "Git", icon: <SiGit className="w-8 h-8 text-[#F05032]" />, category: "tools" },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />, category: "tools" },
    { name: "AWS", icon: <SiAmazon className="w-8 h-8 text-[#232F3E]" />, category: "tools" },
    { name: "Vercel", icon: <SiVercel className="w-8 h-8 text-black" />, category: "tools" },
    { name: "Render", icon: <SiRender className="w-8 h-8 text-[#46E3B7]" />, category: "tools" },
    { name: "Railway", icon: <SiRailway className="w-8 h-8 text-[#0B0D0E]" />, category: "tools" },
    { name: "Vite", icon: <SiVite className="w-8 h-8 text-[#646CFF]" />, category: "tools" },
    { name: "Figma", icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />, category: "tools" },
    { name: "Supabase", icon: <SiSupabase className="w-8 h-8 text-[#3ECF8E]" />, category: "tools" },
    { name: "Problem Solving", icon: <Target className="w-8 h-8 text-primary-600" />, category: "soft" },
    { name: "Team Collaboration", icon: <Users className="w-8 h-8 text-primary-600" />, category: "soft" },
    { name: "Technical Writing", icon: <BookOpen className="w-8 h-8 text-primary-600" />, category: "soft" },
    { name: "Client Communication", icon: <MessageSquare className="w-8 h-8 text-primary-600" />, category: "soft" },
    { name: "Project Management", icon: <Database className="w-8 h-8 text-primary-600" />, category: "soft" },
    { name: "Mentoring", icon: <User className="w-8 h-8 text-primary-600" />, category: "soft" }
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
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools floating in my development universe
          </p>
        </motion.div>

        {/* Floating Skills Container */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full">
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
                  className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary-300"
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
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Soft Skills</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 