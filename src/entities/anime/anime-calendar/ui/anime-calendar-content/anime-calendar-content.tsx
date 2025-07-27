import { memo } from 'react'

import { AnimeCardUpcoming } from '@/entities/anime/anime-card/ui'
import { useAnimeSchedulesQuery } from '@/graphql/generated/output'

import './anime-calendar-content.css'
import { AnimeCalendarSliderProps } from './anime-calendar-content.interface'

const AnimeCalendarContent = ({ day, isWeekday }: AnimeCalendarSliderProps) => {
  const { data } = useAnimeSchedulesQuery()

  const daySchedule = data!.animeSchedules.filter(
    ({ dayOfWeek }) => dayOfWeek === day
  )

  if (!daySchedule.length)
    return (
      <div className='anime-calendar-content-empty'>
        <p>В этот день не запланирован выход аниме</p>
      </div>
    )

  return (
    <div className='anime-calendar-content'>
      {daySchedule.map(({ anime }) => (
        <AnimeCardUpcoming anime={anime} key={anime.url} />
      ))}
    </div>
  )
}

export default memo(AnimeCalendarContent)
