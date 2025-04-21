import { AnimeListStatus } from '@/graphql/generated/output'

export type AnimeListButtonProps = {
  animeUrl: string
  withoutTitle?: boolean
  openDelay?: number
  onlyContent?: boolean
  currentTrackStatus?: AnimeListStatus
}
