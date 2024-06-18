import { IconStarFilled } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useMemo } from 'react'

import { getColorByRating, getRatingDistribution } from '../../../../lib'
import './anime-rate-dropdown.css'
import { AnimeRateDropdownProps } from './anime-rate-dropdown.interface'

export const AnimeRateDropdown = ({
  ratingDistribution
}: AnimeRateDropdownProps) => {
  const { ratings } = useMemo(
    () => getRatingDistribution(ratingDistribution ?? []),
    [ratingDistribution]
  )

  return (
    <div className='rate-dropdown'>
      <p>Нажмите на звездочку чтобы оценить аниме</p>

      {ratings.map(({ rating, count, percentage }) => (
        <div key={rating} className={clsx('rate-dropdown__row')}>
          <div className='rate-dropdown__rating'>
            <IconStarFilled
              className={`rate-dropdown__rating_${getColorByRating(rating)}`}
              size={45}
            />
            <p>{rating}</p>
          </div>
          <div className={'rate-dropdown__slide'}>
            <span
              style={{ width: `${percentage}%`, transition: '0.3s' }}
              className={`rate-dropdown__fill-line`}
            />
            <p className={'rate-dropdown__count'}>{count} голосов</p>
          </div>
        </div>
      ))}

      <p></p>
    </div>
  )
}
