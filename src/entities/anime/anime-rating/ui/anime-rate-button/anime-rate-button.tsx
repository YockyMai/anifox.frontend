'use client'

import { IconStarFilled } from '@tabler/icons-react'
import { useMemo } from 'react'

import { Badge, Button, HoverCard } from '@/common/components'
import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { useAnimeRatingQuery } from '@/services/queries/use-anime-rating-query'

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
  const { data } = useAnimeRatingQuery(animeUrl)

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

  return (
    <div className='w-fit'>
      <HoverCard
        openDelay={openDelay}
        unstyled
        withoutArrow
        position='bottom'
        trigger={trigger}
      >
        <AnimeRateDropdown ratingDistribution={data ?? []} />
      </HoverCard>
    </div>
  )
}
