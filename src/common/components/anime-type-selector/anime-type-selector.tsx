import { Select } from '@anifox/ui'

import { AnimeTypeVariants } from '@/services/api'

import { TYPE_OPTIONS } from './anime-type-selector.const'
import { AnimeTypeSelectorProps } from './anime-type-selector.interface'

export const AnimeTypeSelector = ({
  onChangeType,
  type
}: AnimeTypeSelectorProps) => {
  const value = TYPE_OPTIONS.find((option) => option.value === type)

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const newValue = option ? (option.value as AnimeTypeVariants) : null

        onChangeType(newValue)
      }}
      options={TYPE_OPTIONS}
      placeholder={'Любой'}
      label={'Тип аниме'}
    />
  )
}
