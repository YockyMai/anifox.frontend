import { createContext, useContext, useRef } from 'react'

import {
  createFavoritesFilterStore,
  FavoritesFilterView
} from '../store/favorites-filter'
import {
  ProfileContext,
  ProfileContextProviderProps
} from './profile.interface'

const StoreContext = createContext<ProfileContext>(null)

export const ProfileContextProvider = ({
  children
}: ProfileContextProviderProps) => {
  const storeRef = useRef<ProfileContext>(null)

  if (!storeRef.current) {
    const $favoritesFilter = createFavoritesFilterStore({
      search: '',
      view: FavoritesFilterView.CHARACTERS
    })

    storeRef.current = {
      $favoritesFilter
    }
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useProfileStores = () => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('Missing ProfileContextProvider')
  }

  return store
}
