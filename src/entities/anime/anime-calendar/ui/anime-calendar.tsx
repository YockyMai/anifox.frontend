'use client'

import { Provider, useAtomValue } from 'jotai'
import React, { memo } from 'react'

import { useAnimeSchedulesQuery } from '@/services/queries'

import { $animeCalendarAtoms } from '../atoms'
import { AnimeCalendarDates } from './anime-calendar-dates'
import './anime-calendar.css'

const AnimeCalendar = () => {
  const selectedDayAtom = useAtomValue($animeCalendarAtoms.selectedDayAtom)

  const { data } = useAnimeSchedulesQuery({
    day: selectedDayAtom
  })

  if (!data) {
    return null
  }

  console.log(data)

  return (
    <div className='anime-calendar'>
      <div className='anime-calendar__title'>
        <p>Календарь аниме</p>
      </div>
      <AnimeCalendarDates />
    </div>
  )
}

const Root = () => (
  <Provider>
    <AnimeCalendar />
  </Provider>
)

export default memo(Root)
