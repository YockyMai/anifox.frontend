import { AnimeListStatus, AnimeLiteFragment } from '@/graphql/generated/output'

export type AnimeStatusMenuProps = {
  anime: AnimeLiteFragment
  onDeleteButtonClick?: (animeUrl: string) => void
  onEditButtonClick?: (animeUrl: string) => void
  isCardHovered: boolean
  status?: AnimeListStatus
}
