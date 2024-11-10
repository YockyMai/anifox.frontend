'use client'

import { IconChartArrows, IconStars, IconTrendingUp } from '@tabler/icons-react'

import { AnimeCategoryList } from '@/entities/anime/anime-card'
import {
  useAllTimePopularAnimeListQuery,
  useMostRatedAnimeListQuery
} from '@/services/queries'

import './anime-catalog-landing.css'

export const AnimeCatalogLanding = () => {
  const { data: mostRatedAnimeData } = useMostRatedAnimeListQuery()
  const { data: allTimePopularAnimeData } = useAllTimePopularAnimeListQuery()

  return (
    <div className='anime-catalog-landing'>
      <AnimeCategoryList
        icon={<IconTrendingUp />}
        category='Самые популярные аниме'
        items={allTimePopularAnimeData ?? []}
        categoryLink='/popular'
      />

      <AnimeCategoryList
        icon={<IconStars />}
        category='Больше всего рейтинга'
        items={mostRatedAnimeData ?? []}
        categoryLink='/popular'
      />

      <AnimeCategoryList
        icon={<IconChartArrows />}
        category='Популярные новинки'
        items={allTimePopularAnimeData ?? []}
        categoryLink='/popular'
      />
    </div>
  )
}
