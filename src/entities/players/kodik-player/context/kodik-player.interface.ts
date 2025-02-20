import { createKodikPlayerStore } from '../store'
import { createEpisodeSelectorStore } from '../store/episode-selector'

export type KodikPlayerStoreType = ReturnType<typeof createKodikPlayerStore>

export type EpisodeSelectorStoreType = ReturnType<
  typeof createEpisodeSelectorStore
>

export type KodikPlayerStoresContext = {
  $kodikPlayer: KodikPlayerStoreType
  $episodeSelector: EpisodeSelectorStoreType
} | null
