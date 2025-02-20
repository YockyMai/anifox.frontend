import { AnimeTypeVariants } from '@/services/api'

export type AnimeTypeSelectorProps = {
  type: AnimeTypeVariants | null
  onChangeType: (value: AnimeTypeVariants | null) => void
}
