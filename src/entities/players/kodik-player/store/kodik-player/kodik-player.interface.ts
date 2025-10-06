import {
  EpisodeFragment,
  EpisodeTranslationFragment
} from '@/graphql/generated/output'

export type KodikPlayerStore = {
  animeUrl: string
  animeId: string
  selectedEpisode: EpisodeFragment
  selectedTranslation: EpisodeTranslationFragment
}

export type InitKodikPlayerPayload = {
  animeUrl: string
  animeId: string
  selectedEpisode: EpisodeFragment
  selectedTranslation: EpisodeTranslationFragment
}
