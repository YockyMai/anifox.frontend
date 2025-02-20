import { AnimeStatuses } from '@/services/api'

export type AnimeStatusSelectorProps = {
  status: AnimeStatuses | null
  onChangeStatus: (value: AnimeStatuses | null) => void
  customLabel?: string
}
