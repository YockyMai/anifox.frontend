import { AnimeRatingMpa } from '@/services/api'

export const RATING_MPA_OPTIONS: { value: AnimeRatingMpa; label: string }[] = [
  { value: 'PG', label: 'PG' },
  { value: 'PG-13', label: 'PG-13' },
  { value: 'R', label: 'R' },
  { value: 'R+', label: 'R+' },
  { value: 'G', label: 'G' }
] as const
