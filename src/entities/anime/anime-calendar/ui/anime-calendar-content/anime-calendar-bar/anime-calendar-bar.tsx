'use client'

import clsx from 'clsx'

import { AnimeCardUpcoming } from '@/entities/anime/anime-card/ui'
import { useAnimeWeekSchedulesQuery } from '@/services/queries'

import { checkIsWeekday } from '../../../helpers'
import { getWeekDayLabel } from '../../../helpers/getWeekDayLabel'
import './anime-calendar-bar.css'
import { AnimeCalendarBarProps } from './anime-calendar-bar.interface'

export const AnimeCalendarBar = ({ day }: AnimeCalendarBarProps) => {
  const { data } = useAnimeWeekSchedulesQuery()

  const isWeekday = checkIsWeekday(day)

  return (
    <div className='anime-calendar-bar'>
      <div
        className={clsx(
          'anime-calendar-bar__header',
          !isWeekday && 'anime-calendar-bar__header--red'
        )}
      >
        <p>{getWeekDayLabel(day)}</p>

        <div className='divide-y' />
      </div>
      <div className='flex flex-col gap-3'>
        {data![day].map((anime) => (
          <AnimeCardUpcoming anime={anime} key={anime.url} />
        ))}
      </div>
    </div>
  )
}
