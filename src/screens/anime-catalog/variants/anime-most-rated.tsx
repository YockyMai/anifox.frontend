import { ANIME_ORDER_VARIANTS } from '@/services/api'
import { AnimeCatalogContextProvider } from '@/widgets/anime-catalog/context/anime-catalog.context'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { AnimeMostRatedMetadata } from './anime-most-rated.metadata'

export const AnimeMostRatedScreen = () => {
  return (
    <div className='mt-[100]'>
      <AnimeMostRatedMetadata />

      <AnimeCatalogContextProvider
        initialFilterState={{ order: ANIME_ORDER_VARIANTS.RATING }}
      >
        <AnimeCatalogFilter />
        <AnimeCatalogList />
      </AnimeCatalogContextProvider>
    </div>
  )
}
