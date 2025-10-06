import { RatingMpa } from '@/graphql/generated/output'

export const RATING_MPA_OPTIONS: { value: RatingMpa; label: string }[] = [
  { value: 'PG', label: 'PG' },
  { value: 'PG_13', label: 'PG-13' },
  { value: 'R', label: 'R' },
  { value: 'R_PLUS', label: 'R+' },
  { value: 'G', label: 'G' }
] as const
