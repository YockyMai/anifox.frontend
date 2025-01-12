'use client'

import { IconChartArrows, IconStars, IconTrendingUp } from '@tabler/icons-react'

import { AnimeCategoryList } from '@/entities/anime/anime-card'
import { ROUTES } from '@/screens/pages.routes'
import {
  useAllTimePopularAnimeListQuery,
  useMostRatedAnimeListQuery,
  usePopularOngoingQuery
} from '@/services/queries'

import './anime-catalog-landing.css'

export const AnimeCatalogLanding = () => {
  const { data: mostRatedAnimeData } = useMostRatedAnimeListQuery()
  const { data: allTimePopularAnimeData } = useAllTimePopularAnimeListQuery()
  const { data: popularOngoingData } = usePopularOngoingQuery()

  return (
    <div className='anime-catalog-landing'>
      <AnimeCategoryList
        icon={<IconTrendingUp />}
        category='Самые популярные аниме'
        items={allTimePopularAnimeData ?? []}
        categoryLink={ROUTES.CATALOG.POPULAR}
      />

      <AnimeCategoryList
        icon={<IconStars />}
        category='Больше всего рейтинга'
        items={mostRatedAnimeData ?? []}
        categoryLink={ROUTES.CATALOG.MOST_RATED}
      />

      <AnimeCategoryList
        icon={<IconChartArrows />}
        category='Популярные новинки'
        items={popularOngoingData ?? []}
        categoryLink={ROUTES.CATALOG.POPULAR_ONGOING}
      />
    </div>
  )
}
