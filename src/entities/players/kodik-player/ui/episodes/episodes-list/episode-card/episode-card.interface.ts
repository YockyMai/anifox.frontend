import { EpisodeFragment } from '@/graphql/generated/output'

export type EpisodeCardProps = {
  episode: EpisodeFragment
  isSelected?: boolean
  onOpenFullInfo?: () => void
}
