import { AnimeListStatus } from '@/graphql/generated/output'

export type TrackStatusOptionsProps = {
  currentAnimeListStatus?: AnimeListStatus
  saveAnimeListEntry: (status: AnimeListStatus) => void
  removeAnimeListEntry: (status: AnimeListStatus) => void
  processedAnimeListStatus: AnimeListStatus | null
  isLoading: boolean
}
