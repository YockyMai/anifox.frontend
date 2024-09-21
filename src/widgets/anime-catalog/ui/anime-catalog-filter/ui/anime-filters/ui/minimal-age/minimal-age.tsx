'use client'

import { useAtom } from 'jotai'

import { Select } from '@/common/components'
import { AnimeMinimalAge } from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

import { MINIMAL_AGE_OPTIONS } from './minimal-age.const'

export const MinimalAge = () => {
  const [minimalAge, setMinimalAge] = useAtom(
    $animeCatalogFilterAtoms.minimalAge
  )

  return (
    <Select
      value={minimalAge !== null ? minimalAge.toString() : null}
      onValueChange={(option) =>
        setMinimalAge(
          option?.value
            ? (Number.parseInt(option.value) as AnimeMinimalAge)
            : null
        )
      }
      options={MINIMAL_AGE_OPTIONS}
      placeholder={'Любой'}
      label={'Ограничение по возрасту'}
    />
  )
}
