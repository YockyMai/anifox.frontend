import { AnimeOrderVariants } from '@/services/api'

export const ANIME_ORDER_OPTIONS: Record<string, AnimeOrderVariants> = {
  UPDATE:'Update', 
  AIRED:'Aired', 
  RELEASED: 'Released', 
  RANDOM: 'Random'
} as const
