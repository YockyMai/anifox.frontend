import React from 'react'

import { AnimeTypeSelector } from '@/common/components'
import { $animeListFilters } from '@/entities/profile/store'

export const Type = () => {
  const type = $animeListFilters.selectors.type()

  return (
    <AnimeTypeSelector
      type={type}
      onChangeType={(type) => $animeListFilters.actions.setType(type)}
    />
  )
}
