import Carousel from '@/common/components/carousel/carousel'
import { ANIME_SCHEDULE_DAY } from '@/services/api'

import { AnimeCalendarBar } from './anime-calendar-bar'

export const AnimeCalendarContent = () => {
  return (
    <Carousel
      slides={Object.entries(ANIME_SCHEDULE_DAY).map(([, day]) => ({
        content: <AnimeCalendarBar key={day} day={day} />,
        size: 287
      }))}
      align='center'
      slideSpacing={0}
      dragFree
      hideButtons
    />
  )
}
