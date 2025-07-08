import { AnimeListStatus } from '@/graphql/generated/output'

export type TriggerProps = {
  withoutTitle?: boolean
  currentTrackStatus?: AnimeListStatus
}
