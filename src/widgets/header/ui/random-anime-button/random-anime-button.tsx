import { Button, useHover } from '@anifox/ui'
import { IconDice3Filled } from '@tabler/icons-react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'
import { client } from '@/graphql/client'
import {
  RandomAnimesDocument,
  RandomAnimesQuery,
  RandomAnimesQueryVariables
} from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

import { RANDOM_ANIMES_COUNT } from './random-anime-button.const'
import './random-anime-button.interface'
import { RandomAnimeButtonProps } from './random-anime-button.interface'

export const RandomAnimeButton = ({
  variant = UIVariants.LIGHT
}: RandomAnimeButtonProps) => {
  const { hoverProps } = useHover()

  const navigate = useNavigate()

  const [randomAnimes, setRandomAnimes] = useState<
    RandomAnimesQuery['randomAnimes']
  >([])
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)

  const randomAnime = randomAnimes[currentAnimeIndex]

  const fetchRandomAnimeList = useCallback(async () => {
    const { data } = await client.query<
      RandomAnimesQuery,
      RandomAnimesQueryVariables
    >({
      query: RandomAnimesDocument,
      variables: {
        count: RANDOM_ANIMES_COUNT
      },
      fetchPolicy: 'no-cache'
    })

    setRandomAnimes(data.randomAnimes)
  }, [])

  useEffect(() => {
    fetchRandomAnimeList()
  }, [fetchRandomAnimeList])

  useEffect(() => {
    const refetchRandomAnimeList = async () => {
      await fetchRandomAnimeList()

      setCurrentAnimeIndex(0)
    }

    if (currentAnimeIndex === RANDOM_ANIMES_COUNT) {
      refetchRandomAnimeList()
    }
  }, [currentAnimeIndex, fetchRandomAnimeList])

  const handleClick = () => {
    if (randomAnime) {
      if (currentAnimeIndex < RANDOM_ANIMES_COUNT + 1) {
        setCurrentAnimeIndex((prev) => prev + 1)
      }

      navigate(ROUTES.CATALOG.ANIME.ROOT(randomAnime.id, randomAnime.url))
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
