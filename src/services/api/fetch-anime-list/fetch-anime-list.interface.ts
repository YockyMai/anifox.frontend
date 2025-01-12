import { AnimeImageVariants } from '../fetch-anime'
import { AnimeGenre } from '../fetch-anime-genres'
import { AnimeStudio } from '../fetch-anime-studios'

export type AnimeMinimalAge = 18 | 16 | 12 | 6 | 0
export type AnimeRatingMpa = 'PG' | 'PG-13' | 'R' | 'R+' | 'G'
export type AnimeSeasons = 'Winter' | 'Spring' | 'Summer' | 'Fall'
export type AnimeStatuses = 'Released' | 'Ongoing'
export type AnimeOrderVariants =
  | 'Update'
  | 'Aired'
  | 'Released'
  | 'Random'
  | 'Rating'

export type AnimeSortDirection = 'Asc' | 'Desc'

export type AnimeTypeVariants =
  | 'Movie'
  | 'Ona'
  | 'Ova'
  | 'Music'
  | 'Special'
  | 'Tv'

export type Anime = {
  url: string
  title: string
  image: AnimeImageVariants
  description: string
  episodes_aired: number
  studio?: AnimeStudio[]
  season?: AnimeSeasons
  episodes?: number
  genres?: AnimeGenre[]
  status: AnimeStatuses
  rating_mpa?: AnimeRatingMpa
  rating: number | null
  accent_color: string
  year?: number
  type?: AnimeTypeVariants
  minimal_age?: AnimeMinimalAge
}

export type FetchAnimeListParams = {
  limit?: number
  search?: string
  minimal_age?: AnimeMinimalAge | null
  rating_mpa?: AnimeRatingMpa | null
  status?: AnimeStatuses | null
  season?: AnimeSeasons | null
  genres?: string[] | null
  order?: AnimeOrderVariants | null
  sort?: AnimeSortDirection | null
  type?: AnimeTypeVariants | null
  years?: string[] | null
  translations?: string[] | null
  studio?: string | null
  page?: number
}
