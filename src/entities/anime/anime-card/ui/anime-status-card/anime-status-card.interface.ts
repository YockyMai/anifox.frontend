import { Anime, AnimeTrackStatuses } from '@/services/api'

export type AnimeStatusCardProps = {
  anime: Anime
  status: AnimeTrackStatuses
  onDeleteButtonClick?: (animeUrl: string) => void
  onEditButtonClick?: (animeUrl: string) => void
}
