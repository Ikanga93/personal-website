'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const CumulativeGrowthChart = ({ data, maxUsers }: { data: any[], maxUsers: number }) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const chartHeight = 350
  const chartWidth = 900
  const padding = 60

  // Convert to weekly data with cumulative users and growth percentages
  const weeklyData = [
    { week: 'Aug 11', signups: 1, cumulative: 1, growth: null },
    { week: 'Aug 18', signups: 8, cumulative: 9, growth: 700.00 },
    { week: 'Sep 22', signups: 1, cumulative: 10, growth: -87.50 },
    { week: 'Sep 29', signups: 67, cumulative: 77, growth: 6600.00 },
    { week: 'Oct 6', signups: 329, cumulative: 406, growth: 391.04 },
    { week: 'Oct 13', signups: 68, cumulative: 474, growth: -79.33 },
    { week: 'Oct 20', signups: 8, cumulative: 482, growth: -88.24 }
  ]

  const maxCumulative = Math.max(...weeklyData.map(d => d.cumulative))

  const points = weeklyData.map((d, i) => {
    const x = padding + (i / (weeklyData.length - 1)) * (chartWidth - 2 * padding)
    const y = chartHeight - padding - ((d.cumulative / maxCumulative) * (chartHeight - 2 * padding))
    return { x, y, cumulative: d.cumulative, week: d.week, signups: d.signups, growth: d.growth }
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="w-full overflow-x-auto relative">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{maxCumulative}</div>
          <div className="text-xs text-blue-700">Total Users</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {Math.round(weeklyData.reduce((sum, d) => sum + d.signups, 0) / weeklyData.length)}
          </div>
          <div className="text-xs text-green-700">Avg Weekly Signups</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{weeklyData.length}</div>
          <div className="text-xs text-purple-700">Weeks Tracked</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            x2={chartWidth - padding}
            y2={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Area under curve */}
        <path
          d={`${pathD} L ${chartWidth - padding} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`}
          fill="url(#gradient)"
          opacity="0.3"
        />

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interactive Points */}
        {points.map((p, i) => (
          <g key={i}>
            {/* Invisible larger hit area */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r="15" 
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {/* Visible point */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r={hoveredPoint === i ? "7" : "5"} 
              fill="#2563eb"
              style={{ transition: 'all 0.2s ease' }}
            />
            <circle 
              cx={p.x} 
              cy={p.y} 
              r={hoveredPoint === i ? "4" : "3"} 
              fill="white"
              style={{ transition: 'all 0.2s ease' }}
            />
            {/* Hover effect ring */}
            {hoveredPoint === i && (
              <circle 
                cx={p.x} 
                cy={p.y} 
                r="10" 
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                opacity="0.3"
              />
            )}
          </g>
        ))}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <text
            key={i}
            x={padding - 10}
            y={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            textAnchor="end"
            fontSize="12"
            fill="#6b7280"
            dominantBaseline="middle"
            fontWeight="500"
          >
            {Math.round(maxCumulative * ratio)}
          </text>
        ))}

        {/* X-axis labels (show all weeks) */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={chartHeight - padding + 20}
            textAnchor="middle"
            fontSize="11"
            fill="#6b7280"
            fontWeight="500"
          >
            {p.week}
          </text>
        ))}

        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
      </svg>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            className="absolute bg-gradient-to-br from-gray-900 to-gray-800 text-white px-5 py-4 rounded-xl shadow-2xl pointer-events-none z-20 border border-gray-700"
            style={{
              left: `${(points[hoveredPoint].x / chartWidth) * 100}%`,
              top: `${(points[hoveredPoint].y / chartHeight) * 100 - 15}%`,
              transform: 'translate(-50%, -100%)',
              minWidth: '200px'
            }}
          >
            <div className="text-xs text-gray-400 mb-1">
              Week of {points[hoveredPoint].week}, 2025
            </div>
            <div className="font-bold text-2xl mb-2 text-blue-400">{points[hoveredPoint].cumulative} users</div>
            
            <div className="flex items-center justify-between text-xs border-t border-gray-700 pt-2 mt-2">
              <span className="text-gray-400">New signups:</span>
              <span className="text-green-400 font-bold">+{points[hoveredPoint].signups}</span>
            </div>
            {points[hoveredPoint].growth !== null && (
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">WoW Growth:</span>
                <span className={`font-bold ${points[hoveredPoint].growth! > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {points[hoveredPoint].growth! > 0 ? '+' : ''}{points[hoveredPoint].growth!.toFixed(1)}%
                </span>
              </div>
            )}
            
            {/* Arrow pointer */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-6">
        <div className="text-sm font-bold text-gray-900 mb-1">Weekly Cumulative User Growth</div>
        <div className="text-xs text-gray-500">Hover over data points to see week-over-week growth percentages</div>
      </div>
    </div>
  )
}

export const DailySignupsChart = ({ data, maxNewUsers }: { data: any[], maxNewUsers: number }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const chartHeight = 350
  const chartWidth = 900
  const padding = 60

  // Convert to weekly data
  const weeklyData = [
    { week: 'Aug 11', signups: 1, growth: null },
    { week: 'Aug 18', signups: 8, growth: 700.00 },
    { week: 'Sep 22', signups: 1, growth: -87.50 },
    { week: 'Sep 29', signups: 67, growth: 6600.00 },
    { week: 'Oct 6', signups: 329, growth: 391.04 },
    { week: 'Oct 13', signups: 68, growth: -79.33 },
    { week: 'Oct 20', signups: 8, growth: -88.24 }
  ]

  const barWidth = (chartWidth - 2 * padding) / weeklyData.length * 0.7
  const totalSignups = weeklyData.reduce((sum, d) => sum + d.signups, 0)
  const avgSignups = Math.round(totalSignups / weeklyData.length)
  const peakWeek = weeklyData.reduce((max, d) => d.signups > max.signups ? d : max, weeklyData[0])
  const maxWeeklySignups = Math.max(...weeklyData.map(d => d.signups))

  return (
    <div className="w-full overflow-x-auto relative">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{totalSignups}</div>
          <div className="text-xs text-purple-700">Total Signups</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">{peakWeek.signups}</div>
          <div className="text-xs text-orange-700">Peak Week</div>
        </div>
        <div className="text-center p-3 bg-teal-50 rounded-lg">
          <div className="text-2xl font-bold text-teal-600">{avgSignups}</div>
          <div className="text-xs text-teal-700">Weekly Average</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            x2={chartWidth - padding}
            y2={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Average line */}
        <line
          x1={padding}
          y1={chartHeight - padding - (avgSignups / maxWeeklySignups) * (chartHeight - 2 * padding)}
          x2={chartWidth - padding}
          y2={chartHeight - padding - (avgSignups / maxWeeklySignups) * (chartHeight - 2 * padding)}
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="8 4"
          opacity="0.6"
        />
        <text
          x={chartWidth - padding - 5}
          y={chartHeight - padding - (avgSignups / maxWeeklySignups) * (chartHeight - 2 * padding) - 5}
          textAnchor="end"
          fontSize="11"
          fill="#f59e0b"
          fontWeight="bold"
        >
          Avg: {avgSignups}
        </text>

        {/* Bars */}
        {weeklyData.map((d, i) => {
          const x = padding + (i / weeklyData.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / weeklyData.length * 0.15
          const barHeight = (d.signups / maxWeeklySignups) * (chartHeight - 2 * padding)
          const y = chartHeight - padding - barHeight
          const isHovered = hoveredBar === i
          const isPeak = d.signups === peakWeek.signups
          const isAboveAvg = d.signups > avgSignups

          return (
            <g key={i}>
              {/* Invisible larger hit area */}
              <rect
                x={x - 5}
                y={y - 10}
                width={barWidth + 10}
                height={barHeight + 10}
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              {/* Visible bar with gradient */}
              <defs>
                <linearGradient id={`barGradient${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={isPeak ? "#f59e0b" : isAboveAvg ? "#8b5cf6" : "#a78bfa"} />
                  <stop offset="100%" stopColor={isPeak ? "#fbbf24" : isAboveAvg ? "#a78bfa" : "#c4b5fd"} />
                </linearGradient>
              </defs>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={isHovered ? `url(#barGradient${i})` : `url(#barGradient${i})`}
                rx="4"
                style={{ transition: 'all 0.2s ease' }}
                opacity={isHovered ? 1 : 0.85}
              />
              {/* Highlight on hover */}
              {isHovered && (
                <>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill="none"
                    stroke={isPeak ? "#f59e0b" : "#7c3aed"}
                    strokeWidth="3"
                    rx="4"
                    opacity="0.7"
                  />
                  {/* Glow effect */}
                  <rect
                    x={x - 2}
                    y={y - 2}
                    width={barWidth + 4}
                    height={barHeight + 4}
                    fill="none"
                    stroke={isPeak ? "#f59e0b" : "#7c3aed"}
                    strokeWidth="1"
                    rx="6"
                    opacity="0.3"
                  />
                </>
              )}
              {/* Value label */}
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize={isHovered ? "13" : "11"}
                fill={isHovered ? (isPeak ? "#f59e0b" : "#7c3aed") : "#6b7280"}
                fontWeight="bold"
                style={{ transition: 'all 0.2s ease' }}
              >
                {d.signups}
              </text>
              {/* Peak indicator */}
              {isPeak && !isHovered && (
                <text
                  x={x + barWidth / 2}
                  y={y - 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#f59e0b"
                  fontWeight="bold"
                >
                  ⭐
                </text>
              )}
            </g>
          )
        })}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <text
            key={i}
            x={padding - 10}
            y={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            textAnchor="end"
            fontSize="12"
            fill="#6b7280"
            dominantBaseline="middle"
            fontWeight="500"
          >
            {Math.round(maxWeeklySignups * ratio)}
          </text>
        ))}

        {/* X-axis labels */}
        {weeklyData.map((d, i) => {
          const x = padding + (i / weeklyData.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / weeklyData.length * 0.5
          return (
            <text
              key={i}
              x={x}
              y={chartHeight - padding + 20}
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              fontWeight="500"
            >
              {d.week}
            </text>
          )
        })}
      </svg>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {hoveredBar !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            className="absolute bg-gradient-to-br from-gray-900 to-gray-800 text-white px-5 py-4 rounded-xl shadow-2xl pointer-events-none z-20 border border-gray-700"
            style={{
              left: `${((padding + (hoveredBar / weeklyData.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / weeklyData.length * 0.5) / chartWidth) * 100}%`,
              top: `${((chartHeight - padding - (weeklyData[hoveredBar].signups / maxWeeklySignups) * (chartHeight - 2 * padding)) / chartHeight) * 100 - 15}%`,
              transform: 'translate(-50%, -100%)',
              minWidth: '220px'
            }}
          >
            <div className="text-xs text-gray-400 mb-1">
              Week of {weeklyData[hoveredBar].week}, 2025
            </div>
            <div className="font-bold text-2xl mb-2 text-purple-400">
              {weeklyData[hoveredBar].signups} signups
            </div>
            
            <div className="space-y-1 border-t border-gray-700 pt-2 mt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">vs Average:</span>
                <span className={`font-bold ${weeklyData[hoveredBar].signups > avgSignups ? 'text-green-400' : 'text-orange-400'}`}>
                  {weeklyData[hoveredBar].signups > avgSignups ? '+' : ''}{weeklyData[hoveredBar].signups - avgSignups}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">% of Peak:</span>
                <span className="text-blue-400 font-bold">
                  {((weeklyData[hoveredBar].signups / peakWeek.signups) * 100).toFixed(0)}%
                </span>
              </div>
              {weeklyData[hoveredBar].growth !== null && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">WoW Growth:</span>
                  <span className={`font-bold ${weeklyData[hoveredBar].growth! > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {weeklyData[hoveredBar].growth! > 0 ? '+' : ''}{weeklyData[hoveredBar].growth!.toFixed(1)}%
                  </span>
                </div>
              )}
            </div>
            
            {/* Arrow pointer */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-6">
        <div className="text-sm font-bold text-gray-900 mb-1">Weekly New User Signups</div>
        <div className="text-xs text-gray-500">
          <span className="inline-block w-3 h-3 bg-gradient-to-b from-purple-500 to-purple-300 rounded mr-1"></span>
          Above average
          <span className="inline-block w-3 h-3 bg-gradient-to-b from-purple-300 to-purple-200 rounded mx-1 ml-3"></span>
          Below average
          <span className="ml-3">⭐ Peak week</span>
        </div>
      </div>
    </div>
  )
}

export const GrowthRateChart = ({ data, maxRate }: { data: any[], maxRate: number }) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const chartHeight = 300
  const chartWidth = 800
  const padding = 40

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (chartWidth - 2 * padding)
    const y = chartHeight - padding - ((d.rate / maxRate) * (chartHeight - 2 * padding))
    return { x, y, rate: d.rate, date: d.date }
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="w-full overflow-x-auto relative">
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            x2={chartWidth - padding}
            y2={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Area under curve */}
        <path
          d={`${pathD} L ${chartWidth - padding} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`}
          fill="url(#gradientGreen)"
          opacity="0.3"
        />

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interactive Points */}
        {points.map((p, i) => (
          <g key={i}>
            {/* Invisible larger hit area */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r="15" 
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {/* Visible point */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r={hoveredPoint === i ? "7" : "5"} 
              fill="#10b981"
              style={{ transition: 'all 0.2s ease' }}
            />
            <circle 
              cx={p.x} 
              cy={p.y} 
              r={hoveredPoint === i ? "4" : "3"} 
              fill="white"
              style={{ transition: 'all 0.2s ease' }}
            />
            {/* Hover effect ring */}
            {hoveredPoint === i && (
              <circle 
                cx={p.x} 
                cy={p.y} 
                r="10" 
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                opacity="0.3"
              />
            )}
          </g>
        ))}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <text
            key={i}
            x={padding - 10}
            y={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
            textAnchor="end"
            fontSize="12"
            fill="#6b7280"
            dominantBaseline="middle"
            fontWeight="500"
          >
            {Math.round(maxRate * ratio)}%
          </text>
        ))}

        {/* X-axis labels */}
        {points.filter((_, i) => i % 2 === 0).map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={chartHeight - padding + 20}
            textAnchor="middle"
            fontSize="11"
            fill="#6b7280"
            fontWeight="500"
          >
            {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </text>
        ))}

        <defs>
          <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm pointer-events-none z-10"
            style={{
              left: `${(points[hoveredPoint].x / chartWidth) * 100}%`,
              top: `${(points[hoveredPoint].y / chartHeight) * 100 - 15}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="font-bold text-base mb-1">{points[hoveredPoint].rate.toFixed(1)}% growth</div>
            <div className="text-gray-300 text-xs">
              {new Date(points[hoveredPoint].date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="text-green-400 text-xs mt-1">
              Day-over-day change
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-4 text-sm text-gray-600 font-medium">
        Day-over-Day Growth Rate
      </div>
    </div>
  )
}
