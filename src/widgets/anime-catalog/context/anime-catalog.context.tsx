import { createContext, useCallback, useContext, useRef } from 'react'
import { createSearchParams, useNavigate } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import {
  AnimeCatalogFilterStore,
  createAnimeCatalogFilterStore
} from '../store/anime-catalog-filter'
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

  const navigate = useNavigate()

  const changeSearchParams = useCallback(
    (params: Partial<AnimeCatalogFilterStore>) => {
      const $filter = storeRef.current?.$filter

      if ($filter) {
        const filters = $filter.store.getState()

        const filteredSearchParams = Object.entries({
          ...filters,
          ...params
        })
          .filter(
            ([, value]) => value !== undefined && value !== null && value !== ''
          )
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

        if (Object.values(filteredSearchParams).length) {
          navigate({
            pathname: ROUTES.CATALOG.ROOT,
            search: createSearchParams(filteredSearchParams).toString()
          })
        } else {
          navigate(ROUTES.CATALOG.ROOT)
        }
      }
    },
    [storeRef.current, navigate]
  )

  if (!storeRef.current) {
    const $filter = createAnimeCatalogFilterStore({
      ...DEFAULT_ANIME_CATALOG_FILTER_STORE,
      ...initialFilterState
    })

    storeRef.current = {
      $filter,
      changeSearchParams
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
    throw new Error('Missing AnimeCatalogContextProvider')
  }

  return store
}
