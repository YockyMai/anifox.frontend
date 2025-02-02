import { useAtom } from 'jotai'

import { Select } from '@/common/components'
import { AnimeStatuses } from '@/services/api'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import { STATUS_OPTIONS } from './status.const'

export const Status = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const [status, setStatus] = useAtom($animeCatalogFilterAtoms.status)

  return (
    <div>
      <Select
        value={status}
        onValueChange={(option) => {
          const newValue = option ? (option.value as AnimeStatuses) : null
          setStatus(newValue)
          changeSearchParams({ status: newValue })
        }}
        options={STATUS_OPTIONS}
        label={'Статус'}
        placeholder={'Любой'}
      />
    </div>
  )
}
