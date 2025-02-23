import {
  AnimeGenre,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeStudio,
  AnimeTrackStatuses,
  AnimeTranslation,
  AnimeTypeVariants
} from '../api.types'

export type AnimeImageVariants = {
  medium: string
  large: string
  cover?: string
}

export type AnimeResponse = {
  url: string
  title: string
  player_link: string
  image: AnimeImageVariants
  studio?: AnimeStudio[]
  season: AnimeSeasons
  description?: string
  other_title: string[]
  year?: number
  released_on?: string
  aired_on: string
  english: string[]
  japanese: string[]
  synonyms: string[]
  type?: AnimeTypeVariants
  episodes_aired?: number
  episodes?: number
  genres?: AnimeGenre[]
  status: AnimeStatuses
  rating_mpa: AnimeRatingMpa
  minimal_age?: number
  linkPlayer: string
  accentColor?: string
  rating?: number
  rating_count?: number
  shikimori_rating?: number
  translations: AnimeTranslation[]
  user?: {
    is_fav?: boolean
    list?: AnimeTrackStatuses | undefined
    rating?: number
  }
}
