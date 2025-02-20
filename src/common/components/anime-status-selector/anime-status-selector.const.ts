import { AnimeStatuses } from '@/services/api'

export const STATUS_OPTIONS: { value: AnimeStatuses; label: string }[] = [
  {
    value: 'Released',
    label: 'Выпущен'
  },
  {
    value: 'Ongoing',
    label: 'Онгоинг'
  }
]
