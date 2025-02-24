import { ReactNode } from 'react'

import { createAnimeCatalogFilterStore } from '../store/anime-catalog-filter'
import { AnimeCatalogFilterStore } from '../store/anime-catalog-filter/anime-catalog-filter.interface'

export type AnimeCatalogContext = {
  $filter: ReturnType<typeof createAnimeCatalogFilterStore>
  changeSearchParams: (params: Partial<AnimeCatalogFilterStore>) => void
}

export type AnimeCatalogContextProviderProps = {
  initialFilterState?: Partial<AnimeCatalogFilterStore>
  children: ReactNode
}
