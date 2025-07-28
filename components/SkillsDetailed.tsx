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
  SiRailway,
  SiRedis,
  SiGraphql,
  SiJest,
  SiPrisma
} from 'react-icons/si'
import { Database, Users, MessageSquare, BookOpen, Target, User, Code2, Server, Wrench, Lightbulb, Star } from 'lucide-react'

const SkillsDetailed = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        {
          name: "React",
          icon: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
          level: 95,
          years: "4+",
          description: "Advanced component architecture, hooks, context, and performance optimization. Built 15+ production apps."
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-6 h-6 text-black" />,
          level: 90,
          years: "3+",
          description: "SSR, SSG, API routes, app router, and deployment optimization. Current framework of choice for modern web apps."
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
          level: 90,
          years: "3+",
          description: "Advanced type safety, generics, and enterprise-level TypeScript architecture for scalable applications."
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
          level: 95,
          years: "5+",
          description: "ES6+, async/await, closures, prototypes, and modern JavaScript patterns. Strong foundation in vanilla JS."
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
          level: 90,
          years: "3+",
          description: "Utility-first CSS framework mastery, custom component design systems, and responsive layouts."
        },
        {
          name: "HTML5 & CSS3",
          icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />,
          level: 95,
          years: "5+",
          description: "Semantic HTML, CSS Grid, Flexbox, animations, and accessibility best practices."
        }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
          level: 90,
          years: "4+",
          description: "Server-side JavaScript, event-driven architecture, microservices, and RESTful API development."
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-6 h-6 text-black" />,
          level: 85,
          years: "4+",
          description: "Middleware patterns, routing, authentication, error handling, and API security implementation."
        },
        {
          name: "Python",
          icon: <SiPython className="w-6 h-6 text-[#3776AB]" />,
          level: 85,
          years: "3+",
          description: "Backend development, data processing, automation scripts, and integration with various APIs."
        },
        {
          name: "Django",
          icon: <SiDjango className="w-6 h-6 text-[#092E20]" />,
          level: 80,
          years: "2+",
          description: "MVC architecture, ORM, admin interface, authentication systems, and rapid prototyping."
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
          level: 85,
          years: "3+",
          description: "Complex queries, indexing, performance optimization, and database design for scalable applications."
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
          level: 80,
          years: "3+",
          description: "NoSQL database design, aggregation pipelines, indexing strategies, and integration with Node.js."
        }
      ]
    },
    {
      title: "Development Tools & DevOps",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      skills: [
        {
          name: "Git & GitHub",
          icon: <SiGit className="w-6 h-6 text-[#F05032]" />,
          level: 90,
          years: "5+",
          description: "Version control mastery, branching strategies, collaborative workflows, and CI/CD pipelines."
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-6 h-6 text-[#2496ED]" />,
          level: 75,
          years: "2+",
          description: "Containerization, multi-stage builds, Docker Compose, and deployment optimization."
        },
        {
          name: "AWS",
          icon: <SiAmazon className="w-6 h-6 text-[#232F3E]" />,
          level: 70,
          years: "2+",
          description: "EC2, S3, RDS, Lambda, and basic cloud infrastructure management for web applications."
        },
        {
          name: "Vercel",
          icon: <SiVercel className="w-6 h-6 text-black" />,
          level: 90,
          years: "3+",
          description: "Deployment optimization, serverless functions, edge computing, and performance monitoring."
        },
        {
          name: "Figma",
          icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" />,
          level: 80,
          years: "3+",
          description: "UI/UX design, prototyping, design systems, and developer handoff collaboration."
        },
        {
          name: "Vite",
          icon: <SiVite className="w-6 h-6 text-[#646CFF]" />,
          level: 85,
          years: "2+",
          description: "Build tool optimization, hot module replacement, and modern frontend tooling configuration."
        }
      ]
    },
    {
      title: "Soft Skills & Leadership",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      skills: [
        {
          name: "Problem Solving",
          icon: <Target className="w-6 h-6 text-primary-600" />,
          level: 95,
          years: "5+",
          description: "Complex debugging, algorithmic thinking, performance optimization, and creative solution design."
        },
        {
          name: "Team Collaboration",
          icon: <Users className="w-6 h-6 text-primary-600" />,
          level: 90,
          years: "5+",
          description: "Agile methodologies, code reviews, pair programming, and cross-functional team leadership."
        },
        {
          name: "Technical Writing",
          icon: <BookOpen className="w-6 h-6 text-primary-600" />,
          level: 85,
          years: "4+",
          description: "Documentation, API specifications, technical blogs, and clear code commenting practices."
        },
        {
          name: "Client Communication",
          icon: <MessageSquare className="w-6 h-6 text-primary-600" />,
          level: 90,
          years: "4+",
          description: "Requirements gathering, project updates, technical explanation to non-technical stakeholders."
        },
        {
          name: "Project Management",
          icon: <Database className="w-6 h-6 text-primary-600" />,
          level: 85,
          years: "3+",
          description: "Timeline estimation, resource allocation, risk management, and delivery coordination."
        },
        {
          name: "Mentoring",
          icon: <User className="w-6 h-6 text-primary-600" />,
          level: 80,
          years: "2+",
          description: "Junior developer guidance, code review processes, and knowledge transfer methodologies."
        }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, tools, and methodologies. 
            Each skill reflects years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center mb-12">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mr-6`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {skill.icon}
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Star size={12} className="text-yellow-500" />
                        <span>{skill.years}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Redis", icon: <SiRedis className="w-5 h-5 text-[#DC382D]" /> },
              { name: "GraphQL", icon: <SiGraphql className="w-5 h-5 text-[#E10098]" /> },
              { name: "Jest", icon: <SiJest className="w-5 h-5 text-[#C21325]" /> },
              { name: "Prisma", icon: <SiPrisma className="w-5 h-5 text-[#2D3748]" /> },
              { name: "Supabase", icon: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" /> },
              { name: "Railway", icon: <SiRailway className="w-5 h-5 text-[#0B0D0E]" /> },
              { name: "Render", icon: <SiRender className="w-5 h-5 text-[#46E3B7]" /> }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {tech.icon}
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsDetailed 