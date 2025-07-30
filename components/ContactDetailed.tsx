'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const ContactDetailed = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to build something amazing together? Let's connect and discuss your next project.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{method.subtitle}</p>
                <p className="text-gray-700 font-medium mb-4">{method.value}</p>
                
                {/* Response Info */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Response: {method.response}</span>
                  <span>{method.availability}</span>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with talented people. 
              Reach out through any of the channels above, and let's start the conversation.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for Opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactDetailed
