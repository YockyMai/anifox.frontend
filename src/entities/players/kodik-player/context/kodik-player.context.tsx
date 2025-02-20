import { createContext, ReactNode, useContext, useRef } from 'react'

import { createKodikPlayerStore } from '../store'
import { createEpisodeSelectorStore } from '../store/episode-selector'
import { KodikPlayerStoresContext } from './kodik-player.interface'

const StoreContext = createContext<KodikPlayerStoresContext>(null)

export const KodikPlayerStoresProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const storeRef = useRef<KodikPlayerStoresContext>(null)

  if (!storeRef.current) {
    const $episodeSelector = createEpisodeSelectorStore()
    const $kodikPlayer = createKodikPlayerStore()

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
