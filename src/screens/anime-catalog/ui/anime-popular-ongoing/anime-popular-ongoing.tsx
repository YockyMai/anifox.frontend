import { AnimeOrder, AnimeStatus } from '@/graphql/generated/output'
import { AnimeCatalogContextProvider } from '@/widgets/anime-catalog'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { AnimePopularOngoingMetadata } from './anime-popular-ongoing.metadata'

export const AnimePopularOngoingScreen = () => {
  return (
    <div className='mt-[100]'>
      <AnimePopularOngoingMetadata />

      <AnimeCatalogContextProvider
        initialFilterState={{
          order: AnimeOrder.RATING,
          status: AnimeStatus.ONGOING
        }}
      >
        <AnimeCatalogFilter />
        <AnimeCatalogList />
      </AnimeCatalogContextProvider>
    </div>
  )
}
