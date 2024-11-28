'use client'

import { Provider } from 'jotai'
import React, { memo } from 'react'

import { useAnimeWeekSchedulesQuery } from '@/services/queries'

import { AnimeCalendarContent } from './anime-calendar-content'
import './anime-calendar.css'

const AnimeCalendar = () => {
  const { data } = useAnimeWeekSchedulesQuery()

  if (!data) {
    return null
  }
  return (
    <div className='anime-calendar'>
      <div className='anime-calendar__title'>
        <p>Календарь аниме</p>
      </div>

      <AnimeCalendarContent />
    </div>
  )
}

const Root = () => (
  <Provider>
    <AnimeCalendar />
  </Provider>
)

export default memo(Root)
