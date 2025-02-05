import { IconCalendarWeek } from '@tabler/icons-react'
import dayjs from 'dayjs'
import React, { memo } from 'react'

import Accordion from '@/common/components/accordion/accordion'
import { ACCORDION_TYPE } from '@/common/components/accordion/accordion.const'
import { UIColors } from '@/common/types/ui-colors'
import { ANIME_SCHEDULE_DAY } from '@/services/api'
import { useAnimeSchedulesQuery } from '@/services/queries'

import { checkIsWeekday } from '../helpers'
import { AnimeCalendarContent } from './anime-calendar-content'
import { AnimeCalendarTrigger } from './anime-calendar-trigger'
import './anime-calendar.css'

const AnimeCalendar = () => {
  const { data } = useAnimeSchedulesQuery()

  const defaultValue = dayjs(new Date()).format('dddd').toLowerCase()

  if (!data) {
    return null
  }

  return (
    <div className='anime-calendar'>
      <div className='anime-calendar__title'>
        <IconCalendarWeek />
        <p>Календарь аниме</p>
      </div>

      <Accordion
        type={ACCORDION_TYPE.MULTIPLE}
        defaultValue={[defaultValue]}
        items={Object.values(ANIME_SCHEDULE_DAY).map((day) => {
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
