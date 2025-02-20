import { Anime } from '@/services/api'

export type AnimeStatusMenuProps = {
  anime: Anime
  onDeleteButtonClick?: (animeUrl: string) => void
  onEditButtonClick?: (animeUrl: string) => void
  isCardHovered: boolean
}
