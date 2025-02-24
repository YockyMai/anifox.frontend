import { AnimeStatusSelector } from '@/common/components'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

export const Status = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()

  const status = $filter.selectors.status()

  return (
    <AnimeStatusSelector
      status={status}
      onChangeStatus={(status) => {
        $filter.actions.setStatus(status)
        changeSearchParams({ status })
      }}
    />
  )
}
