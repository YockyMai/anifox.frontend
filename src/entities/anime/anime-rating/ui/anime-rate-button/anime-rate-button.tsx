import { Badge, Button, HoverCard, UIColors } from '@anifox/ui'
import { IconStarFilled } from '@tabler/icons-react'
import { useMemo, useState } from 'react'

import { UISizes } from '@/common/types/ui-sizes'
import { AuthModal } from '@/entities/auth/auth-modal'
import { $viewer, useIsAuth } from '@/entities/viewer'
import {
  AnimeDocument,
  AnimeRatingDistributionDocument,
  useSaveAnimeRatingMutation
} from '@/graphql/generated/output'

import { AnimeRateButtonProps } from './anime-rate-button.interface'
import { AnimeRateDropdown } from './ui'

export const AnimeRateButton = ({
  animeId,
  animeUrl,
  rating,
  size = 28,
  withoutText,
  openDelay
}: AnimeRateButtonProps) => {
  const viewer = $viewer.selectors.viewer()
  const isAuth = useIsAuth()

  const [ratingMutation, { loading: ratingMutationLoading }] =
    useSaveAnimeRatingMutation({
      refetchQueries: () => {
        setProcessedRating(null)

        return [
          {
            query: AnimeDocument,
            variables: {
              url: animeUrl,
              userId: viewer?.id
            }
          },
          {
            query: AnimeRatingDistributionDocument,
            variables: {
              animeId
            }
          }
        ]
      }
    })

  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [processedRating, setProcessedRating] = useState<number | null>(null)

  const trigger = useMemo(() => {
    if (withoutText) {
      return (
        <Button
          color={UIColors.GREEN}
          style={{ height: size, width: size }}
          className='flex items-center justify-center p-3'
        >
          <IconStarFilled size={size - 7} />
        </Button>
      )
    }

    return (
      <Badge
        className='flex w-[155px] items-center justify-center gap-1'
        radius={UISizes.MD}
        color={UIColors.GREEN}
      >
        <p className='text-sm'>
          {typeof rating !== 'undefined'
            ? `Ваша оценка ${rating}`
            : 'Оценить аниме'}
        </p>
        <IconStarFilled />
      </Badge>
    )
  }, [size, rating, withoutText])

  const rateAnime = (rating: number) => {
    setProcessedRating(rating)
    if (isAuth) {
      ratingMutation({
        variables: {
          animeId,
          rating
        }
      }).then(() => {
        setProcessedRating(null)
      })
    } else {
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
        <AnimeRateDropdown
          ratingMutationLoading={ratingMutationLoading}
          processedRating={processedRating}
          onRateAnime={rateAnime}
          animeId={animeId}
        />
      </HoverCard>

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (typeof processedRating === 'number') {
            ratingMutation({
              variables: { animeId, rating: processedRating }
            })
          }
        }}
      />
    </div>
  )
}
