import { AnimeTrackStatuses } from '@/services/api'

export type AnimeListFiltersStore = {
  search: string
  status: AnimeTrackStatuses | null
}
