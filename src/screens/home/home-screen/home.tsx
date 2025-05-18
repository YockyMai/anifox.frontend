import { AnimeCalendar } from '@/entities/anime/anime-calendar'
import { $viewer } from '@/entities/viewer'
import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing'

import { HomeMetadata } from './home.metadata'
import { ContinueWatching, WelcomeBlock } from './ui'

export const HomeScreen = () => {
  const viewer = $viewer.selectors.viewer()

  return (
    <div>
      <HomeMetadata />
      <div className='mt-[150px]'>
        <WelcomeBlock />
      </div>
      {viewer && (
        <div className='mt-[100px]'>
          <ContinueWatching userId={viewer.id} />
        </div>
      )}

      <div className='mt-[150px]'>
        <AnimeCatalogLanding />
      </div>
      <div className='mt-[100px]'>
        <AnimeCalendar />
      </div>
    </div>
  )
}
