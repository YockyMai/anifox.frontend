import { Select } from '@anifox/ui'

import { AnimeTypeVariants } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

import { TYPE_OPTIONS } from './anime-type.const'

export const AnimeType = () => {
  const { $filter } = useAnimeCatalogStores()
  const type = $filter.selectors.type()

  const value = TYPE_OPTIONS.find((option) => option.value === type)

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const newValue = option ? (option.value as AnimeTypeVariants) : null

        $filter.actions.setType(newValue)
      }}
      options={TYPE_OPTIONS}
      placeholder={'Любой'}
      label={'Тип аниме'}
    />
  )
}
