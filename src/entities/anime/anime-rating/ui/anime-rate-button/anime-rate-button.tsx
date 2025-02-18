import { Badge, Button, HoverCard } from '@anifox/ui'
import { IconStarFilled } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import { useMemo, useState } from 'react'

import { UISizes } from '@/common/types/ui-sizes'
import { AuthModal } from '@/entities/auth/auth-modal'
import { $userAtoms } from '@/entities/user/atoms'
import { useAnimeRatingMutation } from '@/services/mutations'

import { getColorByRating } from '../../lib/get-color-by-rating'
import './anime-rate-button.css'
import { AnimeRateButtonProps } from './anime-rate-button.interface'
import { AnimeRateDropdown } from './ui'

export const AnimeRateButton = ({
  animeUrl,
  rating,
  size = 28,
  withoutText,
  openDelay
}: AnimeRateButtonProps) => {
  const isAuth = useAtomValue($userAtoms.isAuth)

  const ratingMutation = useAnimeRatingMutation()

  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const color = getColorByRating(rating)

  const trigger = useMemo(() => {
    if (withoutText) {
      return (
        <Button
          color={color}
          style={{ height: size, width: size }}
          className='anime-rate-button-without-text'
        >
          <IconStarFilled size={size - 7} />
        </Button>
      )
    }

    return (
      <Badge className='anime-rate-button' radius={UISizes.MD} color={color}>
        <p>Оценить аниме</p>
        <IconStarFilled />
      </Badge>
    )
  }, [color, size, withoutText])

  const rateAnime = (rating: number) => {
    if (isAuth) {
      ratingMutation.mutate({ animeUrl, rating })
    } else {
      setSelectedRating(rating)
      setAuthModalIsOpened(true)
    }
  }

  return (
    <div className='w-fit'>
      <HoverCard
        openDelay={openDelay}
        unstyled
        withoutArrow
        position='bottom'
        trigger={trigger}
      >
        <AnimeRateDropdown onRateAnime={rateAnime} ratingDistribution={[]} />
      </HoverCard>

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (typeof selectedRating === 'number') {
            ratingMutation.mutate({ animeUrl, rating })
            setSelectedRating(null)
          }
        }}
      />
    </div>
  )
}
