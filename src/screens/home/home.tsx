import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing/anime-catalog-landing'

import { HomeCarousel } from './ui'

export const HomeScreen = () => {
  return (
    <div>
      <HomeCarousel />

      <div className='mt-[100px]'>
        <AnimeCatalogLanding />
      </div>
    </div>
  )
}
