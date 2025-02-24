import { Select } from '@anifox/ui'

import { AnimeMinimalAge } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

import { MINIMAL_AGE_OPTIONS } from './minimal-age.const'

export const MinimalAge = () => {
  const { $filter } = useAnimeCatalogStores()

  const minimalAge = $filter.selectors.minimalAge()

  return (
    <Select
      value={minimalAge !== null ? minimalAge.toString() : null}
      onValueChange={(option) => {
        const newValue = option?.value
          ? (Number.parseInt(option.value) as AnimeMinimalAge)
          : null
        $filter.actions.setMinimalAge(newValue)
      }}
      options={MINIMAL_AGE_OPTIONS}
      placeholder={'Любой'}
      label={'Ограничение по возрасту'}
    />
  )
}
