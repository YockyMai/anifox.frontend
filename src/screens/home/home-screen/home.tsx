import { AnimeCalendar } from '@/entities/anime/anime-calendar'
import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing'

import { WelcomeBlock } from './ui'

export const HomeScreen = () => {
  return (
    <div>
      <div className='mt-[150px]'>
        <WelcomeBlock />
      </div>
      <div className='mt-[150px]'>
        <AnimeCatalogLanding />
      </div>
      <div className='mt-[100px]'>
        <AnimeCalendar />
      </div>
    </div>
  )
}
