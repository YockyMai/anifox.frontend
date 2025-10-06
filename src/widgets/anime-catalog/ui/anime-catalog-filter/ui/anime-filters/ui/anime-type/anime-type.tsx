import { Select } from '@anifox/ui'

import { AnimeType as AnimeTypeVariants } from '@/graphql/generated/output'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

import { TYPE_OPTIONS } from './anime-type.const'

export const AnimeType = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()
  const type = $filter.selectors.type()

  const value = TYPE_OPTIONS.find((option) => option.value === type)

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const type = option ? (option.value as AnimeTypeVariants) : null

        $filter.actions.setType(type)
        changeSearchParams({ type })
      }}
      options={TYPE_OPTIONS}
      placeholder={'Любой'}
      label={'Тип аниме'}
    />
  )
}
