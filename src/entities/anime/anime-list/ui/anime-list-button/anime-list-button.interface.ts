import { AnimeTrackStatuses } from '@/services/api'

export type AnimeListButtonProps = {
  animeUrl: string
  withoutTitle?: boolean
  openDelay?: number
  onlyContent?: boolean
  currentTrackStatus?: AnimeTrackStatuses
}
