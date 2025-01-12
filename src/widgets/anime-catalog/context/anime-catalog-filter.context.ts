import { createContext, useContext } from 'react'

import { AnimeCatalogPageSearchParams } from '@/screens/anime-catalog/anime-catalog.interface'

type AnimeCatalogFilterContextType = {
  changeSearchParams: (params: AnimeCatalogPageSearchParams) => void
}

export const AnimeCatalogFilterContext =
  createContext<AnimeCatalogFilterContextType>({
    changeSearchParams: () => {}
  })

export const useAnimeCatalogFilterContext = () =>
  useContext(AnimeCatalogFilterContext)
