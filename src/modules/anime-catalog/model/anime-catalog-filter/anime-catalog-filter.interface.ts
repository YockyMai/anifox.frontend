import {
  AnimeGenre,
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTranslation,
  AnimeTypeVariants
} from '@/services/api'

export type AnimeCatalogFilterState = {
  search: string
  status: AnimeStatuses | null
  orderBy: AnimeOrderVariants | null
  genres: AnimeGenre[]
  season: AnimeSeasons | null
  rating_mpa: AnimeRatingMpa | null
  minimal_age: AnimeMinimalAge | null
  type: AnimeTypeVariants | null
  years: string[]
  translations: AnimeTranslation[]
  studio: string | null
}
