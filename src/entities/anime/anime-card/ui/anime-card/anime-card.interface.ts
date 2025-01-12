import { Anime } from '@/services/api'

export type AnimeCardProps = {
  anime: Anime
  characterRole?: string
  withoutPanel?: boolean
}
