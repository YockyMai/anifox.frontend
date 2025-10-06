import { Accordion } from '@anifox/ui'
import { IconCalendarWeek } from '@tabler/icons-react'
import dayjs from 'dayjs'
import React, { memo } from 'react'

import { UIColors } from '@/common/types/ui-colors'
import { useAnimeSchedulesQuery } from '@/graphql/generated/output'

import { checkIsWeekday } from '../helpers'
import { AnimeCalendarContent } from './anime-calendar-content'
import { AnimeCalendarTrigger } from './anime-calendar-trigger'
import { ORDERED_DAYS } from './anime-calendar.const'

const AnimeCalendar = () => {
  const { data } = useAnimeSchedulesQuery()

  const defaultValue = dayjs(new Date()).format('dddd').toUpperCase()

  if (!data?.animeSchedules) {
    return null
  }

  return (
    <div className='container rounded-xl py-6 drop-shadow-xl'>
      <div className='mb-5 flex items-center gap-x-2'>
        <IconCalendarWeek />
        <p className='text-xl font-bold'>Календарь аниме</p>
      </div>

      <Accordion
        type={'multiple'}
        defaultValue={[defaultValue]}
        items={ORDERED_DAYS.map((day) => {
          const isWeekday = checkIsWeekday(day)

          return {
            id: day,
            trigger: <AnimeCalendarTrigger day={day} isWeekday={isWeekday} />,
            content: <AnimeCalendarContent day={day} isWeekday={isWeekday} />,
            color: isWeekday ? UIColors.ORANGE : UIColors.RED
          }
        })}
      />
    </div>
  )
}

export default memo(AnimeCalendar)
