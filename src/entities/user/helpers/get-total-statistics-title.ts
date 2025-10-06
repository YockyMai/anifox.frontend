import { TotalStatisticsVariant } from '../const'

export const getTotalStatisticsTitle = (variant: TotalStatisticsVariant) => {
  if (variant === TotalStatisticsVariant.TOTAL_ACTIVITY) {
    return 'Активностей'
  }
  if (variant === TotalStatisticsVariant.TOTAL_WATCHED_ANIMES) {
    return 'Просмотренных аниме'
  }
  if (variant === TotalStatisticsVariant.TOTAL_WATCHED_EPISODES) {
    return 'Просмотренных серий'
  }

  return 'Просмотренных минут'
}
