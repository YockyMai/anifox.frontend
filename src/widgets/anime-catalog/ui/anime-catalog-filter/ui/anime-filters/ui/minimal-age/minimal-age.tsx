import { Select } from '@anifox/ui'
import { useMemo } from 'react'

import { AnimeMinimalAge } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

import { MINIMAL_AGE_OPTIONS } from './minimal-age.const'

export const MinimalAge = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()

  const minimalAge = $filter.selectors.minimalAge()

  const value = useMemo(
    () =>
      MINIMAL_AGE_OPTIONS.find(({ value }) => value === minimalAge?.toString()),
    [minimalAge]
  )

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const minimalAge = option?.value
          ? (Number.parseInt(option.value) as AnimeMinimalAge)
          : null

        $filter.actions.setMinimalAge(minimalAge)
        changeSearchParams({ minimalAge })
      }}
      options={MINIMAL_AGE_OPTIONS}
      placeholder='Любой'
      label='Ограничение по возрасту'
    />
  )
}
