'use client'

import { IconCalendarWeek } from '@tabler/icons-react'
import React, { memo } from 'react'

import { ANIME_SCHEDULE_DAY } from '@/services/api'
import { useAnimeWeekSchedulesQuery } from '@/services/queries'

import { AnimeCalendarSlider } from './anime-calendar-slider'
import './anime-calendar.css'

const AnimeCalendar = () => {
  const { data } = useAnimeWeekSchedulesQuery()

  if (!data) {
    return null
  }

  return (
    <div className='anime-calendar'>
      <div className='anime-calendar__title'>
        <IconCalendarWeek />
        <p>Календарь аниме</p>
      </div>

      {Object.entries(ANIME_SCHEDULE_DAY).map(([, day]) => (
        <AnimeCalendarSlider key={day} day={day} />
      ))}
    </div>
  )
}

export default memo(AnimeCalendar)
