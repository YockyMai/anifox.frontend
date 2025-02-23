import { AnimeTrackStatuses } from '@/services/api'

export type TrackStatusOptionsProps = {
  currentTrackStatus?: AnimeTrackStatuses
  addAnimeToTrackedList: (status: AnimeTrackStatuses) => void
  deleteAnimeFromTrackedList: (status: AnimeTrackStatuses) => void
}
