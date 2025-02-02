import { useAtom } from 'jotai'

import { Select } from '@/common/components'
import { AnimeTypeVariants } from '@/services/api'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import { TYPE_OPTIONS } from './anime-type.const'

export const AnimeType = () => {
  const [type, setType] = useAtom($animeCatalogFilterAtoms.type)

  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const value = TYPE_OPTIONS.find((option) => option.value === type)

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const newValue = option ? (option.value as AnimeTypeVariants) : null

        setType(newValue)
        changeSearchParams({ type: newValue })
      }}
      options={TYPE_OPTIONS}
      placeholder={'Любой'}
      label={'Тип аниме'}
    />
  )
}
