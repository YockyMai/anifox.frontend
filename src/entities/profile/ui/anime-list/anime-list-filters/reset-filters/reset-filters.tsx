import { Button, UIColors } from '@anifox/ui'
import React from 'react'

import {
  $animeListFilters,
  useIsAnimeListFilterActive
} from '@/entities/profile/store'

export const ResetFilters = () => {
  const isFilterActive = useIsAnimeListFilterActive()

  if (!isFilterActive) {
    return null
  }

  return (
    <Button
      onClick={() => $animeListFilters.actions.resetFilters()}
      color={UIColors.RED}
    >
      Очистить фильтры
    </Button>
  )
}
