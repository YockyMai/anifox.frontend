import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { AnimeMinimalAge } from '@/services/api'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

import { MINIMAL_AGE_OPTIONS } from './minimal-age.const'

export const MinimalAge = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const [minimalAge, setMinimalAge] = useAtom(
    $animeCatalogFilterAtoms.minimalAge
  )

  return (
    <Select
      value={minimalAge !== null ? minimalAge.toString() : null}
      onValueChange={(option) => {
        const newValue = option?.value
          ? (Number.parseInt(option.value) as AnimeMinimalAge)
          : null
        setMinimalAge(newValue)
        changeSearchParams({ minimalAge: newValue })
      }}
      options={MINIMAL_AGE_OPTIONS}
      placeholder={'Любой'}
      label={'Ограничение по возрасту'}
    />
  )
}
