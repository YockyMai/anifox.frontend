'use client'

import { useAtom } from 'jotai'

import { Select } from '@/common/components'
import { AnimeRatingMpa } from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

import { RATING_MPA_OPTIONS } from './rating-mpa.const'

export const RatingMpa = () => {
  const [ratingMpa, setRatingMpa] = useAtom($animeCatalogFilterAtoms.ratingMpa)

  return (
    <div>
      <Select
        value={ratingMpa}
        onValueChange={(option) =>
          setRatingMpa(option ? (option.value as AnimeRatingMpa) : null)
        }
        options={RATING_MPA_OPTIONS}
        placeholder={'Любой'}
        label={'Возрастной рейтинг'}
      />
    </div>
  )
}
