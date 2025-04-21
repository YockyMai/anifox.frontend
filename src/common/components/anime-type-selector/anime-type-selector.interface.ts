import { AnimeType } from '@/graphql/generated/output'

export type AnimeTypeSelectorProps = {
  type: AnimeType | null
  onChangeType: (value: AnimeType | null) => void
}
