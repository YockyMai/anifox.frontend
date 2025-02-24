import { ANIME_STATUSES } from '@/services/api'
import { AnimeCatalogContextProvider } from '@/widgets/anime-catalog/context/anime-catalog.context'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'
import { ANIME_ORDER_OPTIONS } from '@/widgets/anime-catalog/ui/anime-catalog-filter/ui/anime-order/anime-order.const'

import { AnimePopularOngoingMetadata } from './anime-popular-ongoing.metadata'

export const AnimePopularOngoingScreen = () => {
  return (
    <div className='mt-[100]'>
      <AnimePopularOngoingMetadata />

      <AnimeCatalogContextProvider
        initialFilterState={{
          order: ANIME_ORDER_OPTIONS.RATING,
          status: ANIME_STATUSES.ONGOING
        }}
      >
        <AnimeCatalogFilter />
        <AnimeCatalogList />
      </AnimeCatalogContextProvider>
    </div>
  )
}
