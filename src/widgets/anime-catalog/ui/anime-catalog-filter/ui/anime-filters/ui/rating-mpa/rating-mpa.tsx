import { Select } from '@anifox/ui'

import { AnimeRatingMpa } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

import { RATING_MPA_OPTIONS } from './rating-mpa.const'

export const RatingMpa = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()

  const ratingMpa = $filter.selectors.ratingMpa()

  return (
    <div>
      <Select
        value={ratingMpa}
        onValueChange={(option) => {
          const ratingMpa = option ? (option.value as AnimeRatingMpa) : null

          $filter.actions.setRatingMpa(ratingMpa)
          changeSearchParams({ ratingMpa })
        }}
        options={RATING_MPA_OPTIONS}
        placeholder={'Любой'}
        label={'Возрастной рейтинг'}
      />
    </div>
  )
}
