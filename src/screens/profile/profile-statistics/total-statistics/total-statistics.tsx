import { UIColors } from '@anifox/ui'
import React from 'react'

import { useProfile } from '@/entities/profile'
import { useUserStatisticsQuery } from '@/graphql/generated/output'

import { TotalStatisticsItem } from './total-statistics-item/total-statistics-item'

export const TotalStatistics = () => {
  const { profile } = useProfile()

  const { data, loading, error } = useUserStatisticsQuery({
    variables: {
      userId: profile.id,
      year: new Date().getFullYear()
    }
  })

  const totalStatistics = data?.userStatistics.total

  if (!totalStatistics) {
    return
  }

  return (
    <div>
      <p className='mb-2 text-xl font-bold'>Общая статистика</p>
      <div className='flex h-[160px] items-center justify-between rounded bg-white p-6 drop-shadow-sm dark:bg-slate-800'>
        <TotalStatisticsItem
          title='Активностей'
          value={totalStatistics.totalActivity}
          color={UIColors.GREEN}
        />

        <TotalStatisticsItem
          title='Просотренных аниме'
          value={totalStatistics.totalWatchedAnimes}
          color={UIColors.ORANGE}
        />

        <TotalStatisticsItem
          title='Просотренных серий'
          value={totalStatistics.totalWatchedEpisodes}
          color={UIColors.PURPLE}
        />

        <TotalStatisticsItem
          title='Просмотренных минут'
          value={Math.floor(totalStatistics.totalWatchedSeconds / 60)}
          color={UIColors.RED}
        />
      </div>
    </div>
  )
}
