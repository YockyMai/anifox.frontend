import { useAtom } from 'jotai'

import { AnimeStatusSelector } from '@/common/components'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

export const Status = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const [status, setStatus] = useAtom($animeCatalogFilterAtoms.status)

  return (
    <AnimeStatusSelector
      status={status}
      onChangeStatus={(status) => {
        setStatus(status)
        changeSearchParams({ status: status })
      }}
    />
  )
}
