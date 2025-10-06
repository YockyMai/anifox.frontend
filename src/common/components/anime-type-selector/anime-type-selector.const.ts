import { AnimeType } from '@/graphql/generated/output'

export const TYPE_OPTIONS: { value: AnimeType; label: string }[] = [
  { value: 'MOVIE', label: 'Фильм' },
  { value: 'ONA', label: 'Ona' },
  { value: 'OVA', label: 'Ova' },
  { value: 'MUSIC', label: 'Музыкальный' },
  { value: 'SPECIAL', label: 'Специальный' },
  { value: 'TV', label: 'Телесериал' }
]
