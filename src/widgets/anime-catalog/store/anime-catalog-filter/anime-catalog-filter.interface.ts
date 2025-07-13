import { AnimeStatus } from '@/graphql/generated/output'
import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'

export type AnimeCatalogFilterStore = {
  status: AnimeStatus | null
  search: string
  genres: string[]
  minimalAge: AnimeMinimalAge | null
  ratingMpa: AnimeRatingMpa | null
  season: AnimeSeasons | null
  type: AnimeTypeVariants | null
  years: number[]
  translations: string[]
  studio: string | null
  sort: AnimeSortDirection | null
  order: AnimeOrderVariants | null
}
