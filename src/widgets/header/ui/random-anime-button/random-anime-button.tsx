import { useHover } from '@anifox/hooks'
import { Button } from '@anifox/ui'
import { IconDice3Filled } from '@tabler/icons-react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'
import { ROUTES } from '@/screens/pages.routes'
import { Anime, api } from '@/services/api'
import { ANIME_ORDER_OPTIONS } from '@/widgets/anime-catalog/ui/anime-catalog-filter/ui/anime-order/anime-order.const'

import './random-anime-button.interface'
import { RandomAnimeButtonProps } from './random-anime-button.interface'

export const RandomAnimeButton = ({
  variant = UIVariants.LIGHT
}: RandomAnimeButtonProps) => {
  const { hoverProps } = useHover()

  const navigate = useNavigate()

  const [randomAnime, setRandomAnime] = useState<Anime[]>([])
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)

  const randomAnimeUrl = randomAnime[currentAnimeIndex]?.url

  const fetchRandomAnimeList = useCallback(async () => {
    const { data } = await api.fetchAnimeList({
      order: ANIME_ORDER_OPTIONS.RANDOM,
      limit: 20,
      page: 0
    })

    setRandomAnime(data)
  }, [])

  useEffect(() => {
    fetchRandomAnimeList()
  }, [fetchRandomAnimeList])

  useEffect(() => {
    const refetchRandomAnimeList = async () => {
      await fetchRandomAnimeList()

      setCurrentAnimeIndex(0)
    }

    if (currentAnimeIndex === 20) {
      refetchRandomAnimeList()
    }
  }, [currentAnimeIndex, fetchRandomAnimeList])

  const handleClick = () => {
    if (randomAnimeUrl) {
      if (currentAnimeIndex < 21) {
        setCurrentAnimeIndex((prev) => prev + 1)
      }

      navigate(ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', randomAnimeUrl))
    }
  }

  return (
    <Button
      {...hoverProps}
      color={UIColors.PURPLE}
      radius={UISizes.MD}
      size={UISizes.SM}
      variant={variant}
      icon={<IconDice3Filled />}
      onClick={handleClick}
    >
      Рандом
    </Button>
  )
}
