import { memo } from 'react'

import { AnimeCardUpcoming } from '@/entities/anime/anime-card/ui'
import { useAnimeSchedulesQuery } from '@/services/queries'

import './anime-calendar-content.css'
import { AnimeCalendarSliderProps } from './anime-calendar-content.interface'

const AnimeCalendarContent = ({ day, isWeekday }: AnimeCalendarSliderProps) => {
  const { data } = useAnimeSchedulesQuery()

  const anime = data![day]

  if (!anime.length)
    return (
      <div className='anime-calendar-content-empty'>
        <p>В этот день не запланирован выход аниме</p>
      </div>
    )

  return (
    <div className='anime-calendar-content'>
      {anime.map((anime) => (
        <AnimeCardUpcoming anime={anime} key={anime.url} />
      ))}
    </div>
  )
}

export default memo(AnimeCalendarContent)
