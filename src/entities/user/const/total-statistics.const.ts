export const TotalStatisticsVariant = {
  TOTAL_ACTIVITY: 'TOTAL_ACTIVITY',
  TOTAL_WATCHED_ANIMES: 'TOTAL_WATCHED_ANIMES',
  TOTAL_WATCHED_EPISODES: 'TOTAL_WATCHED_EPISODES',
  TOTAL_WATCHED_SECONDS: 'TOTAL_WATCHED_SECONDS'
} as const

export type TotalStatisticsVariant =
  (typeof TotalStatisticsVariant)[keyof typeof TotalStatisticsVariant]
