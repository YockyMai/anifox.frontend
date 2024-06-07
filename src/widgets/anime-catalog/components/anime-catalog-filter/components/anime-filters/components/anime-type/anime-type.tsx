import { Select } from '@anifox/ui'
import { useStore } from 'zustand'

import { AnimeTypeVariants } from '@/services/api'
import { $animeCatalogFilterModel } from '@/widgets/anime-catalog/model/anime-catalog-filter'

import { TYPE_OPTIONS } from './anime-type.const'

export const AnimeType = () => {
  const type = useStore($animeCatalogFilterModel.store, (state) => state.type)

  const value = TYPE_OPTIONS.find((option) => option.value === type)

  return (
    <Select
      value={value}
      onValueChange={(value) =>
        $animeCatalogFilterModel.actions.setType(
          value.value as AnimeTypeVariants
        )
      }
      options={TYPE_OPTIONS}
      placeholder={'Любой'}
      label={'Тип аниме'}
    />
  )
}
