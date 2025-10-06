import { AnimeListEntryFragment } from '@/graphql/generated/output'

export type AnimeStatusCardProps = {
  animeListEntry: AnimeListEntryFragment
  onDeleteButtonClick?: (animeUrl: string) => void
  onEditButtonClick?: (animeUrl: string) => void
}
