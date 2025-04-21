import { AnimeListStatus } from '@/graphql/generated/output'

export type AnimeListTableHeaderProps = {
  status: AnimeListStatus
  withReorder?: boolean
}
