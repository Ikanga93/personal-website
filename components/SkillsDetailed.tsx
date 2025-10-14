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
      title: "Product Management & Strategy",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        {
          name: "Product Strategy & Vision",
          icon: <Target className="w-6 h-6 text-[#4F46E5]" />,
          level: 92,
          years: "3+",
          description: "Defining product vision, roadmaps, and feature prioritization. Setting strategic direction while balancing user needs, technical feasibility, and business goals."
        },
        {
          name: "User Research & Discovery",
          icon: <Users className="w-6 h-6 text-[#10B981]" />,
          level: 95,
          years: "3+",
          description: "Conducting customer interviews, usability testing, and market research. Identifying pain points, validating assumptions, and turning insights into actionable product requirements."
        },
        {
          name: "Product Roadmapping",
          icon: <BookOpen className="w-6 h-6 text-[#8B5CF6]" />,
          level: 90,
          years: "3+",
          description: "Creating and maintaining product roadmaps. Prioritizing features based on impact, effort, and strategic alignment. Communicating timelines to stakeholders."
        },
        {
          name: "Metrics & Analytics",
          icon: <Database className="w-6 h-6 text-[#F59E0B]" />,
          level: 88,
          years: "2+",
          description: "Defining success metrics, tracking KPIs, and using data to inform product decisions. Running A/B tests and analyzing feature performance to drive iteration."
        },
        {
          name: "Stakeholder Management",
          icon: <MessageSquare className="w-6 h-6 text-[#EC4899]" />,
          level: 90,
          years: "3+",
          description: "Managing expectations across engineering, design, and business teams. Communicating product decisions clearly and building consensus around priorities."
        },
        {
          name: "Go-to-Market Strategy",
          icon: <Target className="w-6 h-6 text-[#10B981]" />,
          level: 85,
          years: "2+",
          description: "Planning product launches, defining positioning, and coordinating cross-functional teams. Ensuring successful product adoption and user onboarding."
        }
      ]
    },
    {
      title: "Technical Execution",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        {
          name: "Full-Stack Development",
          icon: <Code2 className="w-6 h-6 text-[#61DAFB]" />,
          level: 85,
          years: "3+",
          description: "Hands-on ability to build MVPs and prototypes. Proficient in modern web technologies to validate product ideas quickly and iterate based on feedback."
        },
        {
          name: "Technical Architecture",
          icon: <Server className="w-6 h-6 text-[#3178C6]" />,
          level: 80,
          years: "2+",
          description: "Understanding system design and technical tradeoffs. Making informed decisions about technology choices that align with product goals and scale requirements."
        },
        {
          name: "Prototyping & MVPs",
          icon: <Wrench className="w-6 h-6 text-[#F59E0B]" />,
          level: 90,
          years: "3+",
          description: "Rapidly building working prototypes to test hypotheses. Shipping MVPs to validate product-market fit before investing in full-scale development."
        }
      ]
    },
    {
      title: "Product Design & UX",
      icon: <SiFigma className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      skills: [
        {
          name: "User Experience Design",
          icon: <Users className="w-6 h-6 text-[#10B981]" />,
          level: 85,
          years: "3+",
          description: "Designing intuitive user flows and interfaces. Creating wireframes and prototypes to communicate product vision and validate design decisions with users."
        },
        {
          name: "Design Thinking",
          icon: <Lightbulb className="w-6 h-6 text-[#F59E0B]" />,
          level: 88,
          years: "3+",
          description: "Applying design thinking methodologies to solve user problems. Facilitating workshops and ideation sessions to generate innovative product solutions."
        },
        {
          name: "Figma & Prototyping",
          icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" />,
          level: 82,
          years: "2+",
          description: "Creating high-fidelity mockups and interactive prototypes. Collaborating with designers and using design tools to communicate product requirements visually."
        }
      ]
    },
    {
      title: "Business & Communication",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      skills: [
        {
          name: "Cross-Functional Leadership",
          icon: <Users className="w-6 h-6 text-[#8B5CF6]" />,
          level: 90,
          years: "3+",
          description: "Leading cross-functional teams including engineering, design, and marketing. Building alignment and driving execution toward shared product goals."
        },
        {
          name: "Stakeholder Communication",
          icon: <MessageSquare className="w-6 h-6 text-[#3B82F6]" />,
          level: 92,
          years: "3+",
          description: "Communicating product vision and strategy to executives, customers, and team members. Translating technical concepts for non-technical audiences."
        },
        {
          name: "Agile & Scrum",
          icon: <Target className="w-6 h-6 text-[#10B981]" />,
          level: 88,
          years: "3+",
          description: "Running agile ceremonies, managing sprints, and maintaining product backlogs. Facilitating team collaboration and continuous improvement."
        },
        {
          name: "Business Strategy",
          icon: <Lightbulb className="w-6 h-6 text-[#F59E0B]" />,
          level: 85,
          years: "2+",
          description: "Understanding business models, revenue strategies, and market dynamics. Aligning product decisions with company objectives and competitive positioning."
        }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      skills: [
        {
          name: "Product Analytics",
          icon: <Database className="w-6 h-6 text-[#6366F1]" />,
          level: 88,
          years: "2+",
          description: "Setting up analytics frameworks, tracking user behavior, and measuring product success. Using tools to understand how users interact with products."
        },
        {
          name: "Data-Driven Decision Making",
          icon: <Target className="w-6 h-6 text-[#8B5CF6]" />,
          level: 90,
          years: "3+",
          description: "Using quantitative and qualitative data to inform product decisions. Balancing data insights with user feedback and strategic intuition."
        },
        {
          name: "Experimentation & A/B Testing",
          icon: <Wrench className="w-6 h-6 text-[#EC4899]" />,
          level: 85,
          years: "2+",
          description: "Designing and running experiments to validate hypotheses. Analyzing results and making data-informed decisions about feature rollouts."
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

        {/* Additional PM Tools & Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
            Tools & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Figma", icon: <SiFigma className="w-5 h-5 text-[#F24E1E]" /> },
              { name: "User Interviews", icon: <Users className="w-5 h-5 text-[#6366F1]" /> },
              { name: "A/B Testing", icon: <Target className="w-5 h-5 text-[#10B981]" /> },
              { name: "Agile/Scrum", icon: <Wrench className="w-5 h-5 text-[#F59E0B]" /> },
              { name: "Prototyping", icon: <Code2 className="w-5 h-5 text-[#3B82F6]" /> },
              { name: "Analytics", icon: <Database className="w-5 h-5 text-[#8B5CF6]" /> }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {tool.icon}
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsDetailed 