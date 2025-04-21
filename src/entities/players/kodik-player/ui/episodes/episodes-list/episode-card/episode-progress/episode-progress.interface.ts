import { EpisodeProgressFragment } from '@/graphql/generated/output'

export type EpisodeProgressProps = {
  progress: EpisodeProgressFragment
  episodeDuration: number
}
