import { ANIME_ORDER_VARIANTS } from '@/services/api'
import {
  AnimeCatalogContextProvider,
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog'

import { AnimePopularMetadata } from './anime-popular.metadata'

export const AnimePopularScreen = () => {
  return (
    <div className='mt-[100]'>
      <AnimePopularMetadata />

      <AnimeCatalogContextProvider
        initialFilterState={{ order: ANIME_ORDER_VARIANTS.RATING }}
      >
        <AnimeCatalogFilter />
        <AnimeCatalogList />
      </AnimeCatalogContextProvider>
    </div>
  )
}
