'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, TrendingUp, Users, Calendar, Zap, Target, BarChart3, LineChart, Activity } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { processUserData } from '@/lib/rittData'
import { CumulativeGrowthChart, DailySignupsChart } from './RittCharts'

const RittProjectPage = () => {
  const data = processUserData()
  const [selectedMetric, setSelectedMetric] = useState<'cumulative' | 'daily'>('cumulative')

  // Get visible data range for charts (focus on main growth period)
  const mainGrowthData = data.cumulativeData.filter(d => d.date >= '2025-10-05')
  const maxUsers = Math.max(...mainGrowthData.map(d => d.users))
  const maxNewUsers = Math.max(...mainGrowthData.map(d => d.newUsers))
  const maxGrowthRate = Math.max(...data.growthRates.filter(d => d.date >= '2025-10-05').map(d => d.rate))

  return (
    <section className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6">
            AI-Powered Learning Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Ritt
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            AI-powered U.S. civics test study platform helping citizenship applicants 
            prepare efficiently with adaptive learning and real-time feedback
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="https://ritt.ai"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ExternalLink size={20} />
              Visit Live Site
            </motion.a>
            <motion.a
              href="https://github.com/Ikanga93/ai-civics-test.git"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Github size={20} />
              View Code
            </motion.a>
          </div>
        </motion.div>

        {/* Growth Visualization Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              User Growth Analytics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tracking user acquisition and engagement from launch through sustained growth
            </p>
          </div>

          {/* Metric Selector */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <motion.button
              onClick={() => setSelectedMetric('cumulative')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedMetric === 'cumulative'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={selectedMetric === 'cumulative' ? { boxShadow: ["0 10px 15px -3px rgba(37, 99, 235, 0.3)", "0 10px 15px -3px rgba(37, 99, 235, 0.5)", "0 10px 15px -3px rgba(37, 99, 235, 0.3)"] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <LineChart className="w-4 h-4 inline mr-2" />
              Cumulative Growth
            </motion.button>
            <motion.button
              onClick={() => setSelectedMetric('daily')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedMetric === 'daily'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={selectedMetric === 'daily' ? { boxShadow: ["0 10px 15px -3px rgba(37, 99, 235, 0.3)", "0 10px 15px -3px rgba(37, 99, 235, 0.5)", "0 10px 15px -3px rgba(37, 99, 235, 0.3)"] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BarChart3 className="w-4 h-4 inline mr-2" />
              Daily Signups
            </motion.button>
          </div>

          {/* Chart Container */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            layout
            transition={{ duration: 0.3 }}
          >
            <motion.div
              key={selectedMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {selectedMetric === 'cumulative' && (
                <CumulativeGrowthChart data={mainGrowthData} maxUsers={maxUsers} />
              )}
              {selectedMetric === 'daily' && (
                <DailySignupsChart data={mainGrowthData} maxNewUsers={maxNewUsers} />
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Key Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mb-20"
        >
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-3">
              <Users className="w-8 h-8 text-primary-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{data.totalUsers}</div>
            <div className="text-sm text-gray-600">Total Users</div>
            <div className="mt-2 text-xs text-green-600 font-medium">Since Aug 2025</div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-3">
              <Activity className="w-8 h-8 text-purple-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{data.avgDailyGrowth}%</div>
            <div className="text-sm text-gray-600">Avg Daily Growth</div>
            <div className="mt-2 text-xs text-purple-600 font-medium">Peak Period (Oct 5-9)</div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-3">
              <Zap className="w-8 h-8 text-orange-600" />
              <Calendar className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{data.peakDaySignups}</div>
            <div className="text-sm text-gray-600">Peak Day Signups</div>
            <div className="mt-2 text-xs text-orange-600 font-medium">Oct 6, 2025</div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-3">
              <Target className="w-8 h-8 text-blue-600" />
              <BarChart3 className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
            <div className="text-sm text-gray-600">Daily Active Users</div>
            <div className="mt-2 text-xs text-blue-600 font-medium">Sustained Engagement</div>
          </motion.div>
        </motion.div>


        {/* Additional Data Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
            Growth Insights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-sm font-semibold text-blue-600 mb-2">Launch Week Performance</div>
              <div className="text-3xl font-bold text-blue-900 mb-1">{data.launchWeekUsers}</div>
              <div className="text-sm text-blue-700">users in first 7 days</div>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <div className="text-xs text-blue-600 font-medium">Avg: {data.firstWeekAvg} signups/day</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-sm font-semibold text-green-600 mb-2">User Retention</div>
              <div className="text-3xl font-bold text-green-900 mb-1">{data.retentionRate}</div>
              <div className="text-sm text-green-700">daily active rate</div>
              <div className="mt-3 pt-3 border-t border-green-200">
                <div className="text-xs text-green-600 font-medium">25+ users return daily</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-sm font-semibold text-purple-600 mb-2">Average Daily Growth</div>
              <div className="text-3xl font-bold text-purple-900 mb-1">{data.avgDailySignups}</div>
              <div className="text-sm text-purple-700">new users per day</div>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <div className="text-xs text-purple-600 font-medium">Over {data.daysSinceLaunch} days</div>
              </div>
            </motion.div>
          </div>

          {/* Weekly Breakdown */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Breakdown</h3>
            <div className="space-y-4">
              {data.weeklyData.map((week, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <div className="font-bold text-gray-900">{week.week}</div>
                    <div className="text-sm text-gray-600">{week.days} days tracked</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{week.signups}</div>
                    <div className="text-sm text-gray-600">new signups</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Growth Milestones */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-orange-600 mb-1">Fastest Growth Day</div>
                  <div className="text-3xl font-bold text-orange-900">{data.peakDaySignups}</div>
                  <div className="text-sm text-orange-700">signups on Oct 6</div>
                </div>
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="text-xs text-orange-600">
                Peak viral moment during launch week
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-teal-600 mb-1">Sustained Growth</div>
                  <div className="text-3xl font-bold text-teal-900">{data.postLaunchUsers}</div>
                  <div className="text-sm text-teal-700">users after launch week</div>
                </div>
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div className="text-xs text-teal-600">
                Continued momentum beyond initial spike
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">Launch Success</h3>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Achieved viral growth within first week of launch, reaching 284 users by Oct 9th. 
              The platform's AI-powered study experience resonated strongly with citizenship applicants, 
              driving organic word-of-mouth growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">56 signups on launch day (Oct 5)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">78 signups on peak day (Oct 6)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Sustained 15-66 daily signups through Oct</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">Engagement Patterns</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Strong retention with 25+ daily active users demonstrates product-market fit. 
              Users return regularly to practice civics questions, indicating the AI-powered 
              study experience delivers real value.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">High daily active user ratio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Consistent engagement across user base</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Positive user feedback and satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12 text-center">
            Product Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Powered Practice',
                description: 'Adaptive learning system that personalizes civics test questions based on user performance',
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: 'Voice-Activated Testing',
                description: 'Practice speaking answers aloud with voice recognition, simulating real interview conditions',
                icon: <Activity className="w-6 h-6" />
              },
              {
                title: 'Progress Tracking',
                description: 'Detailed analytics showing mastery levels, weak areas, and study recommendations',
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                title: 'Real-Time Feedback',
                description: 'Instant explanations and corrections to accelerate learning and build confidence',
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: 'Mobile-Responsive',
                description: 'Study anywhere, anytime with fully responsive design optimized for all devices',
                icon: <Target className="w-6 h-6" />
              },
              {
                title: 'Interactive Sessions',
                description: 'Engaging study experience with gamification elements to maintain motivation',
                icon: <Users className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML', 'Voice Processing', 'WebSocket', 'Vercel'].map((tech, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-sm font-bold cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: '#2563eb',
                  color: '#2563eb',
                  boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Interested in Building Together?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's create innovative AI-powered solutions that solve real problems and drive meaningful growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <span>Get In Touch</span>
                <TrendingUp size={20} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center space-x-3 bg-primary-700 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-800 transition-colors border-2 border-white/20"
              >
                <span>View All Projects</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RittProjectPage
