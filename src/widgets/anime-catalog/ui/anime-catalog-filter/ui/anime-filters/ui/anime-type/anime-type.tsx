'use client'

import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { AnimeTypeVariants } from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import { TYPE_OPTIONS } from './anime-type.const'

export const AnimeType = () => {
  const [type, setType] = useAtom($animeCatalogFilterAtoms.type)

  const value = TYPE_OPTIONS.find((option) => option.value === type)

  return (
    <Select
      value={value}
      onValueChange={(option) =>
        setType(option ? (option.value as AnimeTypeVariants) : null)
      }
      options={TYPE_OPTIONS}
      placeholder={'Любой'}
      label={'Тип аниме'}
    />
  )
}
