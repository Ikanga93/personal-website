'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Star, Target, TrendingUp, Zap, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const ProjectsDetailed = () => {
  const projects = [
    {
      id: 1,
      title: "Ritt.ai - AI Drive-Thru Assistant",
      shortDescription: "Revolutionary AI-powered order-taking system for drive-thru restaurants",
      longDescription: "Led product engineering for Ritt.ai, collaborating with AI specialists and restaurant partners to build a drive-thru assistant with 99.5% accuracy. Used AI-assisted development to rapidly prototype and iterate based on real customer feedback, reducing wait times by 40% through intelligent order processing.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&auto=format&q=80",
      category: "AI/ML Application",
      tech: ["React", "Next.js", "AI/ML", "Voice Processing", "Node.js", "TypeScript", "WebSocket", "Cloud APIs"],
      liveUrl: "https://ritt.ai/",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "6 months",
      role: "Product Engineer & Team Lead",
      year: "2024",
      featured: true,
      impact: {
        metric1: { value: "99.5%", label: "Order Accuracy" },
        metric2: { value: "40%", label: "Reduced Wait Time" },
        metric3: { value: "25%", label: "Increased Revenue" }
      },
      challenges: [
        "Implementing real-time voice processing with low latency",
        "Training AI model for restaurant-specific vocabulary and accents",
        "Handling complex order modifications and special requests",
        "Ensuring system reliability during peak hours"
      ],
      solutions: [
        "Optimized WebSocket connections for real-time communication",
        "Custom NLP model trained on restaurant industry data",
        "Context-aware conversation flow management",
        "Robust error handling and fallback systems"
      ],
      keyFeatures: [
        "Natural Language Processing for voice orders",
        "Intelligent upselling and cross-selling",
        "Multi-location restaurant support",
        "Real-time order tracking and analytics",
        "Integration with existing POS systems"
      ]
    },
    {
      id: 2,
      title: "Ofele Nonprofit App",
      shortDescription: "Comprehensive nonprofit management platform for community organizations",
      longDescription: "Collaborated with nonprofit stakeholders to build a community management platform serving 500+ users. Leveraged AI tools for rapid development cycles, turning user interviews into working features within days. Worked closely with the nonprofit team to ensure the platform met real community needs.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Nonprofit Management",
      tech: ["React", "Next.js", "PostgreSQL", "Tailwind CSS", "Node.js", "Express.js", "Stripe API", "Vercel"],
      liveUrl: "https://ofele-nonprofit-app.vercel.app/",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "4 months",
      role: "Product Engineer & Community Liaison",
      year: "2024",
      featured: true,
      impact: {
        metric1: { value: "500+", label: "Active Users" },
        metric2: { value: "$50K+", label: "Donations Processed" },
        metric3: { value: "15", label: "Partner Organizations" }
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
        "Secure donation processing and receipts",
        "Volunteer management and scheduling",
        "Event planning and registration",
        "Donor relationship management",
        "Financial reporting and analytics",
        "Email communication system"
      ]
    },
    {
      id: 3,
      title: "Ritt AI Assistant Frontend",
      shortDescription: "Modern frontend interface for AI-powered voice ordering system",
      longDescription: "Built the frontend interface for Ritt AI in collaboration with the backend team, using AI-assisted development to rapidly iterate on user feedback. Worked directly with restaurant staff to design intuitive interfaces, leveraging AI tools to quickly prototype and test different UX approaches.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Frontend Application",
      tech: ["React", "TypeScript", "Voice API", "Real-time Communication", "Framer Motion", "Chart.js", "WebSocket"],
      liveUrl: "https://ritt-ai-assistant-frontend.onrender.com",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "3 months",
      role: "Frontend Product Engineer",
      year: "2024",
      featured: true,
      impact: {
        metric1: { value: "98%", label: "User Satisfaction" },
        metric2: { value: "2.5s", label: "Response Time" },
        metric3: { value: "100+", label: "Restaurants Using" }
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
        "Real-time voice wave visualization",
        "Order management dashboard",
        "Analytics and reporting interface",
        "Multi-restaurant support",
        "Customizable UI themes",
        "Mobile-responsive design"
      ]
    },
    {
      id: 4,
      title: "Mo's Burrito App",
      shortDescription: "Full-stack restaurant ordering and management system",
      longDescription: "Collaborated with Mo's Burrito team to build their complete ordering system, using AI tools to accelerate development and ensure rapid delivery. Worked closely with restaurant staff to understand their workflow and built features that actually solved their daily operational challenges.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Restaurant Application",
      tech: ["React", "Node.js", "Railway", "Express.js", "MongoDB", "Socket.io", "Stripe", "JWT"],
      liveUrl: "https://mo-s-burrito-app-production.up.railway.app/",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "2 months",
      role: "Product Engineer & Restaurant Consultant",
      year: "2023",
      featured: false,
      impact: {
        metric1: { value: "95%", label: "Order Accuracy" },
        metric2: { value: "1000+", label: "Orders Processed" },
        metric3: { value: "4.8/5", label: "Customer Rating" }
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
        "Email notifications"
      ]
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      shortDescription: "Modern, responsive portfolio website built with Next.js",
      longDescription: "A comprehensive personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies and optimized for performance, accessibility, and SEO.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Portfolio Website",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "React Icons"],
      liveUrl: "/",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "1 month",
      role: "Full-Stack Developer",
      year: "2024",
      featured: false,
      impact: {
        metric1: { value: "100", label: "Lighthouse Score" },
        metric2: { value: "<1s", label: "Load Time" },
        metric3: { value: "100%", label: "Mobile Friendly" }
      },
      challenges: [
        "Creating engaging animations without performance loss",
        "Optimizing for Core Web Vitals",
        "Designing for multiple device sizes",
        "Implementing SEO best practices"
      ],
      solutions: [
        "Framer Motion with proper optimization settings",
        "Next.js Image optimization and lazy loading",
        "Responsive design with Tailwind CSS",
        "Meta tags and structured data implementation"
      ],
      keyFeatures: [
        "Responsive design across all devices",
        "Smooth animations and transitions",
        "SEO optimized with meta tags",
        "Fast loading with Next.js optimization",
        "Accessible design patterns",
        "Interactive skill demonstrations"
      ]
    },
    {
      id: 6,
      title: "Task Management API",
      shortDescription: "RESTful API for team task management and collaboration",
      longDescription: "A robust backend API for task management applications featuring user authentication, team collaboration, real-time notifications, and comprehensive project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&auto=format&q=80",
      category: "Backend API",
      tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Socket.io", "Redis", "Docker", "AWS"],
      liveUrl: "https://task-api-docs.vercel.app",
      githubUrl: "https://github.com/gilchristekuke",
      duration: "3 months",
      role: "Backend Developer",
      year: "2023",
      featured: false,
      impact: {
        metric1: { value: "99.9%", label: "Uptime" },
        metric2: { value: "50ms", label: "Avg Response" },
        metric3: { value: "10K+", label: "API Calls/Day" }
      },
      challenges: [
        "Designing scalable database architecture",
        "Implementing efficient caching strategy",
        "Creating comprehensive API documentation",
        "Handling concurrent user operations"
      ],
      solutions: [
        "Normalized PostgreSQL schema with proper indexing",
        "Redis caching for frequently accessed data",
        "Swagger/OpenAPI documentation generation",
        "Database transactions and optimistic locking"
      ],
      keyFeatures: [
        "JWT-based authentication system",
        "Real-time notifications via WebSocket",
        "Role-based access control",
        "Comprehensive API documentation",
        "Rate limiting and security headers",
        "Automated testing and CI/CD"
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