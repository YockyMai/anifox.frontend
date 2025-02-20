import { AnimeEpisode, AnimeEpisodeTranslation } from '@/services/api'

export type KodikPlayerStore = {
  animeUrl: string
  selectedEpisode: AnimeEpisode | null
  selectedTranslation: AnimeEpisodeTranslation | null
}

export type InitKodikPlayerPayload = {
  animeUrl: string
  selectedEpisode: AnimeEpisode
  selectedTranslation: AnimeEpisodeTranslation
}
