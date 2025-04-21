import { AnimeStatus } from '@/graphql/generated/output'

export const STATUS_OPTIONS: { value: AnimeStatus; label: string }[] = [
  {
    value: 'COMPLETED',
    label: 'Выпущен'
  },
  {
    value: 'ONGOING',
    label: 'Онгоинг'
  }
]
