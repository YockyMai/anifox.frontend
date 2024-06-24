'use client'

import { Badge, Tooltip, UISizes } from '@anifox/ui'
import { IconStarFilled } from '@tabler/icons-react'

import { useGetAnimeRating } from '@/services/queries/use-get-anime-rating'

import { getColorByRating } from '../../lib/get-color-by-rating'
import './anime-rate-button.css'
import { AnimeRateButtonProps } from './anime-rate-button.interface'
import { AnimeRateDropdown } from './ui'

export const AnimeRateButton = ({ animeUrl, rating }: AnimeRateButtonProps) => {
  const { data } = useGetAnimeRating(animeUrl)

  const color = getColorByRating(rating)

  return (
    <div className='w-fit'>
      <Tooltip
        unstyled
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
