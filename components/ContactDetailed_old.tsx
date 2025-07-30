'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, Target, Zap, Users, Coffee, Clock, Calendar, CheckCircle, Send, MapPin, Globe, ArrowRight, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const ContactDetailed = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: '',
    company: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '', budget: '', timeline: '', company: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "Primary Contact",
      value: "gekuke1@ritt.ai",
      link: "mailto:gekuke1@ritt.ai",
      color: "from-blue-500 to-blue-600",
      response: "~2 hours",
      availability: "24/7"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      subtitle: "Professional Network",
      value: "Connect & Message",
      link: "https://www.linkedin.com/in/gilchrist-ekuke-b5194017b/",
      color: "from-[#0077b5] to-[#00a0dc]",
      response: "~4 hours",
      availability: "Business hours"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      subtitle: "Code & Collaboration",
      value: "View Projects & Issues",
      link: "https://github.com/Ikanga93",
      color: "from-gray-700 to-gray-900",
      response: "~6 hours",
      availability: "Daily"
    },
    {
      icon: <XIcon className="w-6 h-6" />,
      title: "X (Twitter)",
      subtitle: "Follow & Message",
      value: "@GilchristEkuke",
      link: "https://x.com/gilchrist_ekuke",
      color: "from-black to-gray-800",
      response: "~2 hours",
      availability: "Daily"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      subtitle: "Schedule Meeting",
      value: "+1-217-904-2808",
      link: "#contact",
      color: "from-green-500 to-green-600",
      response: "Instant",
      availability: "24/7"
    }
  ]

  const workingProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "We discuss your project goals, requirements, and vision",
      duration: "1-2 days",
      deliverables: ["Project brief", "Technical requirements", "Timeline estimate"]
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed project plan, wireframes, and technical architecture",
      duration: "3-5 days",
      deliverables: ["Project roadmap", "UI/UX mockups", "Technical specifications"]
    },
    {
      step: "03",
      title: "Development",
      description: "Iterative development with regular updates and feedback",
      duration: "2-6 weeks",
      deliverables: ["Weekly progress reports", "Development builds", "Code reviews"]
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing, deployment, and post-launch support",
      duration: "3-5 days",
      deliverables: ["Quality assurance", "Live deployment", "Documentation"]
    }
  ]

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend",
      features: ["React/Next.js", "Node.js/Python", "Database design", "API development"],
      startingPrice: "$3,000"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Integration",
      description: "AI-powered features and intelligent applications",
      features: ["Machine learning", "Natural language processing", "Voice recognition", "Chatbots"],
      startingPrice: "$5,000"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "MVP Development",
      description: "Rapid prototyping and minimum viable products",
      features: ["Quick turnaround", "Core features", "User testing", "Scalable foundation"],
      startingPrice: "$2,000"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Consulting",
      description: "Technical guidance and code review services",
      features: ["Architecture review", "Code audits", "Performance optimization", "Best practices"],
      startingPrice: "$150/hour"
    }
  ]

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "With AI-assisted development, I can deliver functional prototypes in days, not weeks. Full projects typically take 2-6 weeks. I use rapid iteration cycles with continuous user feedback to ensure we're building the right thing fast."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am comfortable with remote collaboration. I'm in EST timezone but can accommodate different time zones for meetings and communication."
    },
    {
      question: "What's your development approach?",
      answer: "I use AI-first product engineering with intelligent collaboration. I leverage AI tools like Claude Code for rapid iteration while maintaining strong architectural decisions. Every project starts with customer interviews and ends with products people actually use."
    },
    {
      question: "What's included in your development services?",
      answer: "End-to-end product ownership from customer interviews to live, scaling solutions. Includes AI-assisted rapid prototyping, user feedback integration, deployment, and ongoing optimization. You get functional products, not just code."
    },
    {
      question: "How do you handle project communication?",
      answer: "I believe in direct user feedback and quick iteration cycles. You'll be involved in the process with working prototypes to test within days. Regular check-ins ensure we're solving the right problems with the right solutions."
    },
    {
      question: "What if I need changes after the project is complete?",
      answer: "I offer 30 days of free minor adjustments after launch. For larger changes or ongoing maintenance, I provide flexible hourly rates or monthly retainer options."
    }
  ]

  const projectTypes = [
    "AI-First Product Development",
    "Customer Onboarding Systems",
    "Rapid MVP Prototyping",
    "AI Tool Integration",
    "User Feedback Platforms",
    "Workflow Automation",
    "Product Engineering Consulting",
    "Team AI Collaboration Setup",
    "Other"
  ]

  const budgetRanges = [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+",
    "Hourly Rate",
    "Let's Discuss"
  ]

  const timelineOptions = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "3-4 weeks",
    "1-2 months",
    "3+ months",
    "Flexible"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for New Projects
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I specialize in creating high-performance web applications 
            that drive results. Let's discuss your project and explore how we can collaborate.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{method.subtitle}</p>
              <p className="text-sm font-medium text-gray-700 mb-3">{method.value}</p>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>Response: {method.response}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{method.availability}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Services & Pricing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Starting at</div>
                    <div className="text-2xl font-bold text-primary-600">{service.startingPrice}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Send className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-2xl text-gray-900">Start Your Project</h3>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you within 24 hours</p>
                </div>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Message sent successfully!</p>
                    <p className="text-sm text-green-600">I'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project goals, features needed, target audience, and any specific requirements or preferences..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Project Details
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h4 className="font-semibold text-green-900 mb-4">Current Availability</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">Available for new projects</span>
                </div>
                <p className="text-green-700">
                  <span className="font-medium">Next available:</span> This week
                </p>
                <p className="text-green-700">
                  <span className="font-medium">Typical start:</span> 3-5 days after agreement
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary-600" />
                <h4 className="font-semibold text-gray-900">Location & Hours</h4>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">EST Timezone (UTC-5)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Mon-Fri, 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">Response Times</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Initial inquiry</span>
                  <span className="font-medium text-gray-900">2-4 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Project proposal</span>
                  <span className="font-medium text-gray-900">24-48 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">During project</span>
                  <span className="font-medium text-gray-900">Same day</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Working Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            How We'll Work Together
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="text-4xl font-bold text-primary-100 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                  <div className="text-xs text-primary-600 font-medium mb-3">{step.duration}</div>
                  
                  <div className="space-y-1">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < workingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's schedule a free 30-minute consultation to discuss your project and explore how we can work together.
          </p>
          <a
            href="mailto:gekuke1@ritt.ai"
            className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors group"
          >
            <Mail size={20} />
            <span>Schedule Free Consultation</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactDetailed 