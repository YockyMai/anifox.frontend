import { AnimeTypeVariants } from '@/services/api'

export const TYPE_OPTIONS: { value: AnimeTypeVariants; label: string }[] = [
  { value: 'Movie', label: 'Фильм' },
  { value: 'Ona', label: 'Ona' },
  { value: 'Ova', label: 'Ova' },
  { value: 'Music', label: 'Музыкальный' },
  { value: 'Special', label: 'Специальный' },
  { value: 'Tv', label: 'Телесериал' }
]
