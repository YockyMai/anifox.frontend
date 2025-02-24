import { useIsFilterActive } from '@/widgets/anime-catalog'
import { AnimeCatalogFilter, AnimeCatalogList } from '@/widgets/anime-catalog'
import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing'
import { AnimeCatalogContextProvider } from '@/widgets/anime-catalog/context/anime-catalog.context'

import { AnimeCatalogMetadata } from './anime-catalog.metadata'
import { useInitialFilterFromSearchParams } from './hooks'

const AnimeCatalog = () => {
  const isFilterActive = useIsFilterActive()

  return (
    <div className='mt-[100]'>
      <AnimeCatalogMetadata />

      <AnimeCatalogFilter />
      {isFilterActive ? (
        <AnimeCatalogList />
      ) : (
        <div className='mt-52'>
          <AnimeCatalogLanding />
        </div>
      )}
    </div>
  )
}

export const AnimeCatalogScreen = () => {
  const initialFilter = useInitialFilterFromSearchParams()

  return (
    <AnimeCatalogContextProvider initialFilterState={initialFilter}>
      <AnimeCatalog />
    </AnimeCatalogContextProvider>
  )
}
