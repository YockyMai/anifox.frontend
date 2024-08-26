import { AnimeEpisode, AnimeEpisodeTranslation } from '@/services/api'

export type KodikPlayerEpisode = Omit<AnimeEpisode, 'translations'> & {
  playerLink: string
  translation: AnimeEpisodeTranslation
  startFrom?: number
}
