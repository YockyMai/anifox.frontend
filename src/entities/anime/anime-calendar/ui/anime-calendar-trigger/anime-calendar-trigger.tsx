import { IconHash } from '@tabler/icons-react'
import clsx from 'clsx'
import React from 'react'

import { getWeekDayLabel } from '../../helpers'
import './anime-calendar-trigger.css'
import { AnimeCalendarTriggerProps } from './anime-calendar-trigger.interface'
import { DayNumberIcon } from './day-number-icon/day-number-icon'

export const AnimeCalendarTrigger = ({
  day,
  isWeekday
}: AnimeCalendarTriggerProps) => {
  return (
    <div
      className={clsx(
        'anime-calendar-trigger',
        !isWeekday && 'anime-calendar-trigger--red'
      )}
    >
      <p className='anime-calendar-trigger__number'>
        <IconHash size={18} stroke={3} /> <DayNumberIcon day={day} />
      </p>
      <p className='anime-calendar-trigger__label'>{getWeekDayLabel(day)}</p>
    </div>
  )
}
