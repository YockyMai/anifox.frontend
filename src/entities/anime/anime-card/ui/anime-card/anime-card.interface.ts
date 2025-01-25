import { Anime } from '@/services/api'

export type AnimeCardProps = {
  anime: Anime
  label?: string
  withoutPanel?: boolean
}
