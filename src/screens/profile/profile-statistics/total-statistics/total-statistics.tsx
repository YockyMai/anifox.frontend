import { UIColors } from '@anifox/ui'
import React from 'react'

import { useProfile } from '@/entities/profile'
import { TotalStatisticsVariant } from '@/entities/user'
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
          variant={TotalStatisticsVariant.TOTAL_ACTIVITY}
          value={totalStatistics.totalActivity}
        />

        <TotalStatisticsItem
          variant={TotalStatisticsVariant.TOTAL_WATCHED_ANIMES}
          value={totalStatistics.totalWatchedAnimes}
        />

        <TotalStatisticsItem
          variant={TotalStatisticsVariant.TOTAL_WATCHED_EPISODES}
          value={totalStatistics.totalWatchedEpisodes}
        />

        <TotalStatisticsItem
          variant={TotalStatisticsVariant.TOTAL_WATCHED_SECONDS}
          value={Math.floor(totalStatistics.totalWatchedSeconds / 60)}
        />
      </div>
    </div>
  )
}
