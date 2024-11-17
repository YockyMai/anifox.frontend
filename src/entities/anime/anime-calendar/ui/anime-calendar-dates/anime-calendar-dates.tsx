import dayjs from 'dayjs'
import { useSetAtom } from 'jotai'
import React, { useMemo } from 'react'

import { getWeekDays } from '@/common/helpers'
import { ANIME_SCHEDULE_DAY } from '@/services/api'

import { $animeCalendarAtoms } from '../../atoms'

export const AnimeCalendarDates = () => {
  const setSelectedDay = useSetAtom($animeCalendarAtoms.selectedDayAtom)

  return (
    <div className='grid grid-cols-7'>
      {Object.entries(ANIME_SCHEDULE_DAY).map(([, day]) => (
        <div key={day}>
          <div onClick={() => setSelectedDay(day)}>{day}</div>

          <div></div>
        </div>
      ))}
    </div>
  )
}
