import { ReactNode } from 'react'

import { createKodikPlayerStore, KodikPlayerStore } from '../store'
import { createEpisodeSelectorStore } from '../store/episode-selector'

export type KodikPlayerStoresProviderProps = {
  children: ReactNode
  initialKodikPlayerStore: KodikPlayerStore
}

export type KodikPlayerStoreType = ReturnType<typeof createKodikPlayerStore>

export type EpisodeSelectorStoreType = ReturnType<
  typeof createEpisodeSelectorStore
>

export type KodikPlayerStoresContext = {
  $kodikPlayer: KodikPlayerStoreType
  $episodeSelector: EpisodeSelectorStoreType
} | null
