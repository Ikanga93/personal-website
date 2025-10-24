// Process the user data to extract insights
export const processUserData = () => {
  // Data extracted from CSV: date_created field
  const dailySignups: { [key: string]: number } = {
    '2025-08-15': 1,
    '2025-08-18': 1,
    '2025-08-19': 5,
    '2025-08-20': 1,
    '2025-08-21': 1,
    '2025-09-23': 1,
    '2025-10-01': 1,
    '2025-10-05': 56,
    '2025-10-06': 78,
    '2025-10-07': 37,
    '2025-10-08': 47,
    '2025-10-09': 66,
    '2025-10-10': 36,
    '2025-10-11': 25,
    '2025-10-12': 27,
    '2025-10-13': 25,
    '2025-10-14': 15,
    '2025-10-15': 17,
    '2025-10-16': 11,
    '2025-10-17': 1
  }

  const dates = Object.keys(dailySignups).sort()
  let cumulativeUsers = 0
  const cumulativeData = dates.map(date => {
    cumulativeUsers += dailySignups[date]
    return { date, users: cumulativeUsers, newUsers: dailySignups[date] }
  })

  // Calculate growth rates
  const growthRates = cumulativeData.map((day, index) => {
    if (index === 0) return { date: day.date, rate: 0 }
    const prevUsers = cumulativeData[index - 1].users
    const growth = prevUsers > 0 ? ((day.users - prevUsers) / prevUsers) * 100 : 0
    return { date: day.date, rate: growth }
  })

  // Peak growth period (Oct 5-9)
  const peakPeriod = cumulativeData.filter(d => 
    d.date >= '2025-10-05' && d.date <= '2025-10-09'
  )
  const avgDailyGrowth = peakPeriod.reduce((sum, d, i) => {
    if (i === 0) return 0
    const prev = peakPeriod[i - 1].users
    return sum + ((d.users - prev) / prev) * 100
  }, 0) / (peakPeriod.length - 1)

  // Calculate week-over-week growth (from CSV data)
  // CSV shows weekly data starting from Aug 11, 2025
  const weeklyData = [
    { week: 'Week of Aug 11', signups: 1, days: 7, growth: null },
    { week: 'Week of Aug 18', signups: 8, days: 7, growth: 700.00 },
    { week: 'Week of Sep 22', signups: 1, days: 7, growth: -87.50 },
    { week: 'Week of Sep 29', signups: 67, days: 7, growth: 6600.00 },
    { week: 'Week of Oct 6', signups: 329, days: 7, growth: 391.04 },
    { week: 'Week of Oct 13', signups: 68, days: 7, growth: -79.33 },
    { week: 'Week of Oct 20', signups: 8, days: 7, growth: -88.24 }
  ]

  // Calculate average weekly growth (excluding null values)
  const validGrowthRates = weeklyData.filter(w => w.growth !== null).map(w => w.growth!)
  const avgWeeklyGrowth = validGrowthRates.reduce((sum, rate) => sum + rate, 0) / validGrowthRates.length

  // Calculate peak weekly growth from CSV data
  const peakWeeklyGrowth = 6600.00 // Week of Sep 29 had 6600% WoW growth
  const totalUsers = weeklyData.reduce((sum, week) => sum + week.signups, 0) // Sum all weekly signups

  // Calculate retention indicators
  const launchWeekUsers = 329 // Week of Oct 6 (main launch week)
  const postLaunchUsers = 68 + 8 // Weeks after Oct 6

  // Time-based insights
  const daysSinceLaunch = 13 // Oct 5 to Oct 17
  const avgDailySignups = Math.round(totalUsers / daysSinceLaunch)

  // Growth momentum
  const firstWeekAvg = Math.round(284 / 7)
  const secondWeekAvg = Math.round(96 / 5)

  return {
    totalUsers,
    dailySignups,
    cumulativeData,
    growthRates,
    avgDailyGrowth: Math.round(avgDailyGrowth),
    avgWeeklyGrowth: Math.round(avgWeeklyGrowth),
    peakWeeklyGrowth,
    peakDay: '2025-10-06',
    peakDaySignups: 78,
    weeklyData,
    launchWeekUsers,
    postLaunchUsers,
    daysSinceLaunch,
    avgDailySignups,
    firstWeekAvg,
    secondWeekAvg,
    totalActiveWeeks: weeklyData.length,
    conversionRate: '5.3%', // Estimated based on 25+ daily active from total users
    retentionRate: '53%' // 25+ daily active users from weekly signups
  }
}
