import { AnimeGenre } from '../fetch-anime-genres'
import {
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTypeVariants
} from '../fetch-anime-list'
import { AnimeStudio } from '../fetch-anime-studios'
import { AnimeTranslation } from '../fetch-anime-translation'

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
  minimal_age: number
  linkPlayer: string
  accentColor?: string
  rating?: number
  shikimori_rating?: number
  translations: AnimeTranslation[]
}
