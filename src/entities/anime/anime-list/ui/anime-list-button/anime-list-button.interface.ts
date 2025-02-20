import { AnimeTrackStatuses } from '@/services/api'

export type AnimeListButtonProps = {
  animeUrl: string
  withoutTitle?: boolean
  size?: number
  openDelay?: number
  onlyContent?: boolean
  currentTrackedStatus?: AnimeTrackStatuses
}
