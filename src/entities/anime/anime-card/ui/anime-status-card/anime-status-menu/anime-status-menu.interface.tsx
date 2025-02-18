import { Anime } from '@/services/api'

export type AnimeStatusMenuProps = {
  anime: Anime
  isCardHovered: boolean
  isDragging?: boolean
}
