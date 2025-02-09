import { IconStarFilled } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useAtomValue } from 'jotai'
import { useMemo, useState } from 'react'

import { AuthModal } from '@/entities/auth/auth-modal'
import { $userAtoms } from '@/entities/user/atoms'
import { useAnimeRatingMutation } from '@/services/mutations'

import { getColorByRating, getRatingDistribution } from '../../../../lib'
import './anime-rate-dropdown.css'
import { AnimeRateDropdownProps } from './anime-rate-dropdown.interface'

export const AnimeRateDropdown = ({
  ratingDistribution,
  animeUrl
}: AnimeRateDropdownProps) => {
  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [rating, setRating] = useState<number | null>(null)

  const isAuth = useAtomValue($userAtoms.isAuth)

  const ratingMutation = useAnimeRatingMutation()

  const { ratings } = useMemo(
    () => getRatingDistribution(ratingDistribution ?? []),
    [ratingDistribution]
  )

  const rateAnime = (rating: number) => {
    if (isAuth) {
      ratingMutation.mutate({ animeUrl, rating })
    } else {
      setRating(rating)
      setAuthModalIsOpened(true)
    }
  }

  return (
    <div className='rate-dropdown'>
      <p>Нажмите на звездочку чтобы оценить аниме</p>

      {ratings.map(({ rating, count, percentage }) => (
        <div
          onClick={() => rateAnime(rating)}
          key={rating}
          className={clsx('rate-dropdown__row')}
        >
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

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (typeof rating === 'number') {
            ratingMutation.mutate({ animeUrl, rating })
            setRating(null)
          }
        }}
      />
    </div>
  )
}
