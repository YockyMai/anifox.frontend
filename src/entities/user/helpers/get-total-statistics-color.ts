import { UIColors } from '@anifox/ui'

import { TotalStatisticsVariant } from '../const'

export const getTotalStatisticsColor = (variant: TotalStatisticsVariant) => {
  if (variant === TotalStatisticsVariant.TOTAL_ACTIVITY) {
    return {
      text: 'text-green-500',
      bg: 'bg-green-500',
      const: UIColors.GREEN
    }
  }
  if (variant === TotalStatisticsVariant.TOTAL_WATCHED_ANIMES) {
    return {
      text: 'text-orange-300',
      bg: 'bg-orange-300',
      const: UIColors.ORANGE
    }
  }
  if (variant === TotalStatisticsVariant.TOTAL_WATCHED_EPISODES) {
    return {
      text: 'text-red-400',
      bg: 'bg-red-500',
      const: UIColors.RED
    }
  }

  return {
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    const: UIColors.PURPLE
  }
}
