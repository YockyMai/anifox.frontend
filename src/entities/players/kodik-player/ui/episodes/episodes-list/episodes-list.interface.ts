import { EpisodesQuery } from '@/graphql/generated/output'

export type EpisodesListProps = {
  episodes: EpisodesQuery['episodes']['data']
}
