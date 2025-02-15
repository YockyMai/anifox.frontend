import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'
import { useMemo } from 'react'

import { AnimeStatuses } from '@/services/api'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import { STATUS_OPTIONS } from './status.const'

export const Status = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const [status, setStatus] = useAtom($animeCatalogFilterAtoms.status)

  const value = useMemo(
    () => STATUS_OPTIONS.find((option) => option.value === status),
    [status]
  )

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const newValue = option ? (option.value as AnimeStatuses) : null
        setStatus(newValue)
        changeSearchParams({ status: newValue })
      }}
      options={STATUS_OPTIONS}
      label={'Статус'}
      placeholder={'Любой'}
    />
  )
}
