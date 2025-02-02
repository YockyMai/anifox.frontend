import { AnimeCalendar } from '@/entities/anime/anime-calendar'
import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing/anime-catalog-landing'

import { HomeCarousel } from './ui'

export const HomeScreen = () => {
  return (
    <div>
      <div className='mb-[100px]'>
        <HomeCarousel />
      </div>

      <AnimeCatalogLanding />

      <div className='mt-[100px]'>
        <AnimeCalendar />
      </div>
    </div>
  )
}
