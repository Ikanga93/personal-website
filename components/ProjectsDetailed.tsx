'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Star, Target, TrendingUp, Zap, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const ProjectsDetailed = () => {
  const projects = [
    {
      id: 1,
      title: "Church Program Management System",
      shortDescription: "Web application for church intercession department program management",
      longDescription: "Created and deployed a web application for my church's intercession department to manage programs, schedules, events, and prayer requests. Fully adopted by all 12 department members and now integrated with broader church operations.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Nonprofit Management",
      tech: ["React", "Next.js", "PostgreSQL", "Tailwind CSS", "Node.js", "Express.js", "Stripe API", "Vercel"],
      liveUrl: "https://ofele-nonprofit-app.vercel.app/",
      githubUrl: "https://github.com/Ikanga93/ofele-nonprofit-app",
      duration: "4 months",
      role: "Full-Stack Developer & Community Liaison",
      year: "2025",
      featured: true,
      impact: {
        metric1: { value: "12+", label: "Active Users" },
        metric2: { value: "100%", label: "Department Adoption" }
      },
      challenges: [
        "Creating secure donation processing system",
        "Designing intuitive user interface for diverse user base",
        "Implementing role-based access control",
        "Ensuring data privacy and compliance"
      ],
      solutions: [
        "Integrated Stripe for PCI-compliant payment processing",
        "User-centered design with accessibility in mind",
        "JWT-based authentication with role management",
        "GDPR-compliant data handling and encryption"
      ],
      keyFeatures: [
        "Program and schedule management",
        "Event planning and registration",
        "Prayer request",
        //"Member communication system",
        "Financial reporting and analytics",
        //"Email notification system"
      ]
    },
    {
      id: 2,
      title: "AI Restaurant Order Assistant",
      shortDescription: "AI-powered order processing assistant for late-night restaurant operations",
      longDescription: "Built an AI-powered order processing assistant for a busy late-night restaurant. Automates order taking and payment collection, significantly boosting operational efficiency and allowing staff to focus on food prep.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop&auto=format&q=80",
      category: "AI/ML Application",
      tech: ["AI", "React", "TypeScript", "Voice API", "Real-time Communication", "Chart.js", "WebSocket"],
      liveUrl: "https://ritt-ai-assistant-frontend.onrender.com",
      githubUrl: "https://github.com/Ikanga93/ritt-ai-assistant",
      duration: "3 months",
      role: "AI-First Engineer",
      year: "2025",
      featured: true,
      impact: {
        metric1: { value: "40%", label: "Efficiency Boost" },
        metric2: { value: "24/7", label: "Operation Hours" }
      },
      challenges: [
        "Creating responsive voice visualization components",
        "Implementing real-time data synchronization",
        "Designing intuitive user experience for restaurant staff",
        "Optimizing performance for mobile devices"
      ],
      solutions: [
        "Custom React components with Canvas API for voice waves",
        "WebSocket integration for real-time updates",
        "Progressive Web App features for mobile optimization",
        "Comprehensive user testing and iteration"
      ],
      keyFeatures: [
        "Automated order taking",
        "Payment processing integration",
        "Real-time order management",
        "Staff efficiency optimization",
        "Voice recognition technology",
        "Mobile-responsive design"
      ]
    },
    {
      id: 3,
      title: "Online Food Ordering System",
      shortDescription: "Custom food ordering web app reducing third-party platform reliance",
      longDescription: "Designed a custom food ordering web app for a local restaurant, reducing reliance on third-party platforms and increasing direct sales. Currently in final negotiation for a $3,500 sale.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Restaurant Application",
      tech: ["React", "Node.js", "Railway", "Express.js", "Socket.io", "Stripe", "JWT"],
      liveUrl: "https://mo-s-burrito-app-production.up.railway.app/",
      githubUrl: "https://github.com/Ikanga93/mo-s-burrito-app",
      duration: "2 months",
      role: "Full-Stack Developer & Restaurant Consultant",
      year: "2025",
      featured: true,
      impact: {
        metric1: { value: "$3.5K", label: "Contract Value" },
        metric2: { value: "100%", label: "Direct Sales" }
      },
      challenges: [
        "Implementing real-time order tracking",
        "Creating dynamic menu management system",
        "Handling concurrent order processing",
        "Building responsive mobile-first design"
      ],
      solutions: [
        "Socket.io for real-time order status updates",
        "Dynamic React forms for menu customization",
        "MongoDB transactions for data consistency",
        "Mobile-first CSS approach with breakpoints"
      ],
      keyFeatures: [
        "Real-time order tracking",
        "Dynamic menu management",
        "Secure payment processing",
        "Customer order history",
        "Admin dashboard",
        "Third-party platform independence"
      ]
    },
    {
      id: 4,
      title: "AI Citizenship Test Assistant",
      shortDescription: "Voice-activated AI web app for U.S. citizenship civics test practice",
      longDescription: "Developing a voice-activated AI web app to simulate the U.S. citizenship civics test in real time, providing an interactive way to practice and improve test readiness.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&auto=format&q=80",
      category: "AI/ML Application",
      tech: ["Python", "React", "Next.js", "AI/ML", "Voice Processing", "Node.js", "TypeScript", "WebSocket", "Cloud APIs"],
      liveUrl: "",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "In Development",
      role: "Full-Stack Developer & AI Developer",
      year: "2025",
      featured: false,
      impact: {
        metric1: { value: "Real-time", label: "Test Simulation" },
        metric2: { value: "Voice", label: "Interactive Mode" }
      },
      challenges: [
        "Implementing real-time voice processing",
        "Creating accurate test simulation",
        "Designing intuitive user experience",
        "Ensuring accessibility compliance"
      ],
      solutions: [
        "Advanced voice recognition API integration",
        "Comprehensive civics test database",
        "User-centered design approach",
        "WCAG accessibility standards implementation"
      ],
      keyFeatures: [
        "Voice-activated test simulation",
        "Real-time feedback and scoring",
        "Interactive practice sessions",
        "Progress tracking and analytics",
        "Accessibility-first design",
        "Mobile-responsive interface"
      ]
    },
    {
      id: 5,
      title: "Diaspora Project Management Platform",
      shortDescription: "Platform for African diaspora to manage projects back home with verified inspectors",
      longDescription: "Building a platform for African diaspora to manage projects back home through connections with verified local inspectors—aimed at reducing fraud, fostering accountability, and increasing transparency in cross-border project execution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Project Management",
      tech: ["Python", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Stripe"],
      liveUrl: "",
      githubUrl: "https://github.com/Ikanga93/pofara-trustees-web-app",
      duration: "In Development",
      role: "Full-Stack Developer & Product Manager",
      year: "2025",
      featured: false,
      impact: {
        metric1: { value: "Fraud", label: "Reduction Focus" },
        metric2: { value: "Cross-border", label: "Project Management" }
      },
      challenges: [
        "Building trust in cross-border transactions",
        "Verifying local inspector credentials",
        "Creating transparent project tracking",
        "Implementing secure payment systems"
      ],
      solutions: [
        "Multi-tier verification system for inspectors",
        "Blockchain-based transparency features",
        "Real-time project monitoring dashboard",
        "Escrow-based payment protection"
      ],
      keyFeatures: [
        "Verified inspector network",
        "Real-time project monitoring",
        "Secure payment processing",
        "Transparency and accountability tools",
        "Cross-border communication platform",
        "Fraud prevention measures"
      ]
    },
    {
      id: 6,
      title: "Crowdfunding Platform for African Entrepreneurs",
      shortDescription: "Purpose-driven crowdfunding platform connecting African entrepreneurs with diaspora investors",
      longDescription: "Developed a purpose-driven crowdfunding platform connecting African entrepreneurs with diaspora investors. Several funding requests are already in progress, focused on empowering grassroots innovation in Africa.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Fintech Platform",
      tech: ["Python", "PostgreSQL", "JWT", "Stripe", "React", "JavaScript", "HTML", "CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/Ikanga93/diaspora_invest",
      duration: "6 months",
      role: "Full-Stack Developer & Platform Architect",
      year: "2025",
      featured: false,
      impact: {
        metric1: { value: "Active", label: "Funding Requests" },
        metric2: { value: "Diaspora", label: "Investor Network" }
      },
      challenges: [
        "Building trust between investors and entrepreneurs",
        "Implementing secure payment processing",
        "Creating comprehensive project vetting",
        "Ensuring regulatory compliance"
      ],
      solutions: [
        "Multi-stage project verification process",
        "Integrated Stripe for secure transactions",
        "AI-powered project assessment tools",
        "Compliance framework for multiple jurisdictions"
      ],
      keyFeatures: [
        "Entrepreneur-investor matching system",
        "Secure crowdfunding infrastructure",
        "Project vetting and verification",
        "Real-time funding progress tracking",
        "Investor dashboard and analytics",
        "Cross-border payment processing"
      ]
    }
  ]

  const categories = [
    { name: "All Projects", filter: "all", icon: <Target className="w-5 h-5" /> },
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
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of full-stack applications, AI-powered solutions, and innovative web platforms. 
            Each project represents real-world impact and technical excellence.
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
            Featured Projects
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
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="btn-primary"
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
            All Projects
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
                  
                  <div className="flex gap-3">
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