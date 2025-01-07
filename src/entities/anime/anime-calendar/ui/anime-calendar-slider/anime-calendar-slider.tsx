'use client'

import { IconHash } from '@tabler/icons-react'
import clsx from 'clsx'
import { memo } from 'react'

import { Carousel } from '@/common/components'
import { AnimeCardUpcoming } from '@/entities/anime/anime-card/ui'
import { useAnimeWeekSchedulesQuery } from '@/services/queries'

import { checkIsWeekday } from '../../helpers'
import { getWeekDayLabel } from '../../helpers/get-week-day-label'
import './anime-calendar-slider.css'
import { AnimeCalendarSliderProps } from './anime-calendar-slider.interface'
import { DayNumberIcon } from './day-number-icon/day-number-icon'

const AnimeCalendarSlider = ({ day }: AnimeCalendarSliderProps) => {
  const { data } = useAnimeWeekSchedulesQuery()

  const anime = data![day]

  const isWeekday = checkIsWeekday(day)

  if (!anime.length) return null

  return (
    <div className='anime-calendar-slider'>
      <div
        className={clsx(
          'anime-calendar-slider__header',
          !isWeekday && 'anime-calendar-slider__header--red'
        )}
      >
        <p className='anime-calendar-slider__header__number'>
          <IconHash size={18} stroke={3} /> <DayNumberIcon day={day} />
        </p>
        <p className='anime-calendar-slider__header__label'>
          {getWeekDayLabel(day)}
        </p>
      </div>
      <Carousel
        slides={anime.map((anime) => (
          <AnimeCardUpcoming anime={anime} key={anime.url} />
        ))}
        controlsSpacing={38}
        breakpoints={{
          SM: 1,
          MD: 2,
          XL: 3
        }}
        dragFree
        slideSpacing={10}
        align='end'
      />
    </div>
  )
}

export default memo(AnimeCalendarSlider)
