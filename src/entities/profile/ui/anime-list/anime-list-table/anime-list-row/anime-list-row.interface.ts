import { Anime, AnimeTrackStatuses } from '@/services/api'

export type DraggableAnimeCardProps = {
  anime: Anime
  status: AnimeTrackStatuses
  isDragging?: boolean
  onDragChange: (isDragging: boolean, animeUrl: string) => void
}
