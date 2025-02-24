import { IconStarFilled } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useMemo } from 'react'

import { UIColors } from '@/common/types/ui-colors'

import { getColorByRating, getRatingDistribution } from '../../../../lib'
import { AnimeRateDropdownProps } from './anime-rate-dropdown.interface'

export const AnimeRateDropdown = ({
  scores,
  onRateAnime
}: AnimeRateDropdownProps) => {
  const { ratings } = useMemo(() => getRatingDistribution(scores), [scores])

  return (
    <div className='w-full max-w-xs rounded-xl bg-slate-800 py-2 pl-3 pr-5'>
      <p>Нажмите на звездочку чтобы оценить аниме</p>

      {ratings.map(({ score, votes, percentage }) => {
        const color = getColorByRating(score)

        return (
          <div
            onClick={() => onRateAnime(score)}
            key={score}
            className='grid cursor-pointer select-none grid-cols-[45px_auto] items-center gap-x-2 transition-transform hover:scale-[120%]'
          >
            <div className='relative'>
              <IconStarFilled
                className={clsx(
                  color === UIColors.RED
                    ? 'fill-red-300'
                    : UIColors.GREEN
                      ? 'fill-green-400'
                      : 'fill-orange-300'
                )}
                size={45}
              />
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white'>
                {score}
              </p>
            </div>
            <div className='relative h-4 w-full min-w-[10px] overflow-hidden rounded bg-slate-600'>
              <span
                style={{
                  width: `${percentage}%`,
                  transition: '0.3s'
                }}
                className={clsx(
                  'absolute left-0 top-0 h-full w-0',
                  color === UIColors.GREEN
                    ? 'bg-green-500'
                    : color === UIColors.ORANGE
                      ? 'bg-orange-300'
                      : 'bg-red-300'
                )}
              />
              <p className='absolute left-1 top-1/2 -translate-y-1/2 text-xs text-white'>
                {votes} голосов
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
