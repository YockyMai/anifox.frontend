'use client'

import { IconStarFilled } from '@tabler/icons-react'

import { Badge, Tooltip } from '@/common/components'
import { UISizes } from '@/common/types/ui-sizes'
import { useAnimeRatingQuery } from '@/services/queries/use-anime-rating-query'

import { getColorByRating } from '../../lib/get-color-by-rating'
import './anime-rate-button.css'
import { AnimeRateButtonProps } from './anime-rate-button.interface'
import { AnimeRateDropdown } from './ui'

export const AnimeRateButton = ({ animeUrl, rating }: AnimeRateButtonProps) => {
  const { data } = useAnimeRatingQuery(animeUrl)

  const color = getColorByRating(rating)

  return (
    <div className='w-fit'>
      <Tooltip
        unstyled
        withoutArrow
        position='bottom'
        label={<AnimeRateDropdown ratingDistribution={data ?? []} />}
      >
        <Badge className='anime-rate-button' radius={UISizes.MD} color={color}>
          Оценить аниме
          <IconStarFilled />
        </Badge>
      </Tooltip>
    </div>
  )
}
