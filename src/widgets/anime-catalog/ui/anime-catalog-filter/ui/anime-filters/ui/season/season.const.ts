import { AnimeSeason } from '@/graphql/generated/output'

export const SEASON_OPTIONS: { value: AnimeSeason; label: string }[] = [
  { value: 'FALL', label: 'Осень' },
  { value: 'SPRING', label: 'Весна' },
  { value: 'WINTER', label: 'Зима' },
  { value: 'SUMMER', label: 'Лето' }
]
