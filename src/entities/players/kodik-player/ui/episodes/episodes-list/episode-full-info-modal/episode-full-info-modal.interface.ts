import { EpisodeFragment } from '@/graphql/generated/output'

export type EpisodeFullInfoModalProps = {
  open: boolean
  onClose: () => void
  episode: EpisodeFragment
}
