import { Button, Transition, UIColors } from '@anifox/ui'

import {
  $animeListFilters,
  useIsAnimeListFilterActive
} from '@/entities/profile/store'

export const ResetFilters = () => {
  const isFilterActive = useIsAnimeListFilterActive()

  return (
    <Transition mounded={isFilterActive}>
      <Button
        fullWidth
        variant='light'
        onClick={() => $animeListFilters.actions.resetFilters()}
        color={UIColors.RED}
      >
        Очистить фильтры
      </Button>
    </Transition>
  )
}
