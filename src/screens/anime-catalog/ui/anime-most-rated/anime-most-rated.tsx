import { AnimeOrder } from '@/graphql/generated/output'
import { AnimeCatalogContextProvider } from '@/widgets/anime-catalog'
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
        initialFilterState={{ order: AnimeOrder.RATING }}
      >
        <AnimeCatalogFilter />
        <AnimeCatalogList />
      </AnimeCatalogContextProvider>
    </div>
  )
}
