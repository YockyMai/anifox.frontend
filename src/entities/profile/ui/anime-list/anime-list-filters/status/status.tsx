import { AnimeStatusSelector, AnimeTypeSelector } from '@/common/components'
import { $animeListFilters } from '@/entities/profile/store'

export const Status = () => {
  const status = $animeListFilters.selectors.status()

  return (
    <AnimeStatusSelector
      status={status}
      onChangeStatus={(status) => $animeListFilters.actions.setStatus(status)}
      customLabel='Статус выхода'
    />
  )
}
