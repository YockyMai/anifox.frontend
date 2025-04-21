import { ReactNode } from 'react'

import { createFavoritesFilterStore } from '../store/favorites-filter'

export type ProfileContext = {
  $favoritesFilter: ReturnType<typeof createFavoritesFilterStore>
} | null

export type ProfileContextProviderProps = {
  children: ReactNode
}
