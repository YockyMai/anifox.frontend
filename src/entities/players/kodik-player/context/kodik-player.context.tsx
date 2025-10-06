import { createContext, useContext, useRef } from 'react'

import { createKodikPlayerStore } from '../store'
import { createEpisodeSelectorStore } from '../store/episode-selector'
import {
  KodikPlayerStoresContext,
  KodikPlayerStoresProviderProps
} from './kodik-player.interface'

const StoreContext = createContext<KodikPlayerStoresContext>(null)

export const KodikPlayerStoresProvider = ({
  children,
  initialKodikPlayerStore
}: KodikPlayerStoresProviderProps) => {
  const storeRef = useRef<KodikPlayerStoresContext>(null)

  if (!storeRef.current) {
    const $episodeSelector = createEpisodeSelectorStore()
    const $kodikPlayer = createKodikPlayerStore(initialKodikPlayerStore)

    storeRef.current = {
      $episodeSelector,
      $kodikPlayer
    }
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useKodikPlayerStores = () => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('Missing StoreProvider')
  }

  return store
}
