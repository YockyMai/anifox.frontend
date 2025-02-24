import { AnimeStatusSelector } from '@/common/components'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

export const Status = () => {
  const { $filter } = useAnimeCatalogStores()

  const status = $filter.selectors.status()

  return (
    <AnimeStatusSelector
      status={status}
      onChangeStatus={(status) => {
        $filter.actions.setStatus(status)
      }}
    />
  )
}
