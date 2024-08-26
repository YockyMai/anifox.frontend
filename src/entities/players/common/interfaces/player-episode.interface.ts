import { AnimeEpisode, AnimeEpisodeTranslation } from '@/services/api'

export type PlayerEpisode = Omit<AnimeEpisode, 'translations'> & {
  playerLink: string
  translation: AnimeEpisodeTranslation
  startFrom?: number
}
