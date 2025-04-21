import { AnimeStatus } from '@/graphql/generated/output'

export type AnimeStatusSelectorProps = {
  status: AnimeStatus | null
  onChangeStatus: (value: AnimeStatus | null) => void
  customLabel?: string
}
