import { AnimeListEntryWithAnimeFragment } from '@/graphql/generated/output'

export type AnimeStatusCardProps = {
  animeListEntry: AnimeListEntryWithAnimeFragment
  onDeleteButtonClick?: (animeUrl: string) => void
  onEditButtonClick?: (animeUrl: string) => void
}
