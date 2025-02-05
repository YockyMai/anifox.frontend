import { useAtomValue } from 'jotai'

import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'
import { AnimeCatalogLanding } from '@/widgets/anime-catalog-landing'
import {
  AnimeCatalogFilter,
  AnimeCatalogList
} from '@/widgets/anime-catalog/ui'

import { AnimeCatalogMetadata } from './anime-catalog.metadata'
import { useSyncAnimeCatalogSearchParams } from './hooks'

export const AnimeCatalogScreen = () => {
  useSyncAnimeCatalogSearchParams()

  const isFilterActive = useAtomValue($animeCatalogFilterAtoms.isFilterActive)

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
