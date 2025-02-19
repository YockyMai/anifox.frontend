import { DragControls } from 'framer-motion'

import { Anime, AnimeTrackStatuses } from '@/services/api'

export type AnimeStatusCardProps = {
  anime: Anime
  status: AnimeTrackStatuses
  dragControls: DragControls
  isDragging?: boolean
}
