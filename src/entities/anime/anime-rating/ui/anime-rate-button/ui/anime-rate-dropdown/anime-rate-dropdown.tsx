import { IconStarFilled } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useMemo } from 'react'

import { UIColors } from '@/common/types/ui-colors'

import { getColorByRating, getRatingDistribution } from '../../../../lib'
import './anime-rate-dropdown.css'
import { AnimeRateDropdownProps } from './anime-rate-dropdown.interface'

export const AnimeRateDropdown = ({
  scores,
  onRateAnime
}: AnimeRateDropdownProps) => {
  const { ratings } = useMemo(() => getRatingDistribution(scores), [scores])

  return (
    <div className='rate-dropdown'>
      <p>Нажмите на звездочку чтобы оценить аниме</p>

      {ratings.map(({ score, votes, percentage }) => {
        const color = getColorByRating(score)

        return (
          <div
            onClick={() => onRateAnime(score)}
            key={score}
            className={clsx('rate-dropdown__row')}
          >
            <div className='rate-dropdown__rating'>
              <IconStarFilled
                className={`rate-dropdown__rating_${color}`}
                size={45}
              />
              <p>{score}</p>
            </div>
            <div className={'rate-dropdown__slide'}>
              <span
                style={{
                  width: `${percentage}%`,
                  transition: '0.3s'
                }}
                className={clsx(
                  'rate-dropdown__fill-line',
                  color === UIColors.GREEN
                    ? 'bg-green-500'
                    : color === UIColors.ORANGE
                      ? 'bg-orange-300'
                      : 'bg-red-300'
                )}
              />
              <p className={clsx('rate-dropdown__count')}>{votes} голосов</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
