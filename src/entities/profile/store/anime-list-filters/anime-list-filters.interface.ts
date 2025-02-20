import {
  AnimeStatuses,
  AnimeTrackStatuses,
  AnimeTypeVariants
} from '@/services/api'

export type AnimeListFiltersStore = {
  search: string
  trackStatus: AnimeTrackStatuses | null
  type: AnimeTypeVariants | null
  status: AnimeStatuses | null
}
