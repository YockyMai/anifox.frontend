import { createContext, useContext, useRef } from 'react'

import { createAnimeCatalogFilterStore } from '../store/anime-catalog-filter'
import { DEFAULT_ANIME_CATALOG_FILTER_STORE } from '../store/anime-catalog-filter/anime-catalog-filter.const'
import {
  AnimeCatalogContext,
  AnimeCatalogContextProviderProps
} from './anime-catalog.interface'

const StoreContext = createContext<AnimeCatalogContext | null>(null)

export const AnimeCatalogContextProvider = ({
  initialFilterState,
  children
}: AnimeCatalogContextProviderProps) => {
  const storeRef = useRef<AnimeCatalogContext>(null)

  if (!storeRef.current) {
    const $filter = createAnimeCatalogFilterStore({
      ...DEFAULT_ANIME_CATALOG_FILTER_STORE,
      ...initialFilterState
    })

    storeRef.current = {
      $filter
    }
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useAnimeCatalogStores = () => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('Missing ProfileContextProvider')
  }

  return store
}
