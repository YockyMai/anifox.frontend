import { DragControls } from 'framer-motion'

import { Anime } from '@/services/api'

export type AnimeStatusMenuProps = {
  anime: Anime
  isCardHovered: boolean
  dragControls: DragControls
  withDragging?: boolean
  isDragging?: boolean
}
