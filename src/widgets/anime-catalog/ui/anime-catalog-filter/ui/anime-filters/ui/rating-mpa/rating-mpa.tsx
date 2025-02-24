import { Select } from '@anifox/ui'

import { AnimeRatingMpa } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

import { RATING_MPA_OPTIONS } from './rating-mpa.const'

export const RatingMpa = () => {
  const { $filter } = useAnimeCatalogStores()

  const ratingMpa = $filter.selectors.ratingMpa()

  return (
    <div>
      <Select
        value={ratingMpa}
        onValueChange={(option) =>
          $filter.actions.setRatingMpa(
            option ? (option.value as AnimeRatingMpa) : null
          )
        }
        options={RATING_MPA_OPTIONS}
        placeholder={'Любой'}
        label={'Возрастной рейтинг'}
      />
    </div>
  )
}
