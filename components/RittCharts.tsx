'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const CumulativeGrowthChart = ({ data, maxUsers }: { data: any[], maxUsers: number }) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const chartHeight = 350
  const chartWidth = 900
  const padding = 60

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (chartWidth - 2 * padding)
    const y = chartHeight - padding - ((d.users / maxUsers) * (chartHeight - 2 * padding))
    return { x, y, users: d.users, date: d.date, newUsers: d.newUsers }
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="w-full overflow-x-auto relative">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{maxUsers}</div>
          <div className="text-xs text-blue-700">Total Users</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {Math.round((data[data.length - 1].users - data[0].users) / data.length)}
          </div>
          <div className="text-xs text-green-700">Avg Daily Signups</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{data.length}</div>
          <div className="text-xs text-purple-700">Days Tracked</div>
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
            {Math.round(maxUsers * ratio)}
          </text>
        ))}

        {/* X-axis labels (show every 2nd date) */}
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
              {new Date(points[hoveredPoint].date).toLocaleDateString('en-US', { 
                weekday: 'short',
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="font-bold text-2xl mb-2 text-blue-400">{points[hoveredPoint].users} users</div>
            
            {hoveredPoint > 0 && (
              <>
                <div className="flex items-center justify-between text-xs border-t border-gray-700 pt-2 mt-2">
                  <span className="text-gray-400">New signups:</span>
                  <span className="text-green-400 font-bold">+{points[hoveredPoint].newUsers}</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-gray-400">Growth:</span>
                  <span className="text-green-400 font-bold">
                    +{(((points[hoveredPoint].users - points[hoveredPoint - 1].users) / points[hoveredPoint - 1].users) * 100).toFixed(1)}%
                  </span>
                </div>
              </>
            )}
            
            {/* Arrow pointer */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-6">
        <div className="text-sm font-bold text-gray-900 mb-1">Cumulative User Growth</div>
        <div className="text-xs text-gray-500">Hover over data points for detailed insights</div>
      </div>
    </div>
  )
}

export const DailySignupsChart = ({ data, maxNewUsers }: { data: any[], maxNewUsers: number }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const chartHeight = 350
  const chartWidth = 900
  const padding = 60
  const barWidth = (chartWidth - 2 * padding) / data.length * 0.7

  const totalSignups = data.reduce((sum, d) => sum + d.newUsers, 0)
  const avgSignups = Math.round(totalSignups / data.length)
  const peakDay = data.reduce((max, d) => d.newUsers > max.newUsers ? d : max, data[0])

  return (
    <div className="w-full overflow-x-auto relative">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{totalSignups}</div>
          <div className="text-xs text-purple-700">Total Signups</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">{peakDay.newUsers}</div>
          <div className="text-xs text-orange-700">Peak Day</div>
        </div>
        <div className="text-center p-3 bg-teal-50 rounded-lg">
          <div className="text-2xl font-bold text-teal-600">{avgSignups}</div>
          <div className="text-xs text-teal-700">Daily Average</div>
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
          y1={chartHeight - padding - (avgSignups / maxNewUsers) * (chartHeight - 2 * padding)}
          x2={chartWidth - padding}
          y2={chartHeight - padding - (avgSignups / maxNewUsers) * (chartHeight - 2 * padding)}
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="8 4"
          opacity="0.6"
        />
        <text
          x={chartWidth - padding - 5}
          y={chartHeight - padding - (avgSignups / maxNewUsers) * (chartHeight - 2 * padding) - 5}
          textAnchor="end"
          fontSize="11"
          fill="#f59e0b"
          fontWeight="bold"
        >
          Avg: {avgSignups}
        </text>

        {/* Bars */}
        {data.map((d, i) => {
          const x = padding + (i / data.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / data.length * 0.15
          const barHeight = (d.newUsers / maxNewUsers) * (chartHeight - 2 * padding)
          const y = chartHeight - padding - barHeight
          const isHovered = hoveredBar === i
          const isPeak = d.newUsers === peakDay.newUsers
          const isAboveAvg = d.newUsers > avgSignups

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
                {d.newUsers}
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
            {Math.round(maxNewUsers * ratio)}
          </text>
        ))}

        {/* X-axis labels */}
        {data.filter((_, i) => i % 2 === 0).map((d, i) => {
          const actualIndex = data.findIndex(item => item.date === d.date)
          const x = padding + (actualIndex / data.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / data.length * 0.5
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
              {new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
              left: `${((padding + (hoveredBar / data.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / data.length * 0.5) / chartWidth) * 100}%`,
              top: `${((chartHeight - padding - (data[hoveredBar].newUsers / maxNewUsers) * (chartHeight - 2 * padding)) / chartHeight) * 100 - 15}%`,
              transform: 'translate(-50%, -100%)',
              minWidth: '220px'
            }}
          >
            <div className="text-xs text-gray-400 mb-1">
              {new Date(data[hoveredBar].date).toLocaleDateString('en-US', { 
                weekday: 'short',
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="font-bold text-2xl mb-2 text-purple-400">
              {data[hoveredBar].newUsers} signups
            </div>
            
            <div className="space-y-1 border-t border-gray-700 pt-2 mt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">vs Average:</span>
                <span className={`font-bold ${data[hoveredBar].newUsers > avgSignups ? 'text-green-400' : 'text-orange-400'}`}>
                  {data[hoveredBar].newUsers > avgSignups ? '+' : ''}{data[hoveredBar].newUsers - avgSignups}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">% of Peak:</span>
                <span className="text-blue-400 font-bold">
                  {((data[hoveredBar].newUsers / peakDay.newUsers) * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Cumulative:</span>
                <span className="text-teal-400 font-bold">
                  {data[hoveredBar].users} total users
                </span>
              </div>
            </div>
            
            {/* Arrow pointer */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-6">
        <div className="text-sm font-bold text-gray-900 mb-1">Daily New User Signups</div>
        <div className="text-xs text-gray-500">
          <span className="inline-block w-3 h-3 bg-gradient-to-b from-purple-500 to-purple-300 rounded mr-1"></span>
          Above average
          <span className="inline-block w-3 h-3 bg-gradient-to-b from-purple-300 to-purple-200 rounded mx-1 ml-3"></span>
          Below average
          <span className="ml-3">⭐ Peak day</span>
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
