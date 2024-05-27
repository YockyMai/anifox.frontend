import { AnimeOrderVariants } from '@/services/api'

export const ANIME_ORDER_OPTIONS: Record<string, AnimeOrderVariants> = {
  DATE_ASC_UPDATE: 'DateASCUpdate',
  DATE_DESC_UPDATE: 'DateDESCUpdate',
  DATE_AIRED_ASC: 'DateAiredASC',
  DATE_AIRED_DESC: 'DateAiredDESC',
  DATE_ASC_CREATE: 'DateASCCreate',
  DATE_DESC_CREATE: 'DateDESCCreate',
  SHIKIMORI_RATING: 'ShikimoriRating'
} as const
