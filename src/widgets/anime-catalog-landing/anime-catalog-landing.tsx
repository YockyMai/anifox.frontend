'use client'

import { IconChartArrows, IconStars, IconTrendingUp } from '@tabler/icons-react'

import { AnimeCategoryList } from '@/entities/anime/anime-card'
import { createAnimeCatalogSearchParams } from '@/screens/anime-catalog'
import { ANIME_CATALOG_SEARCH_PRESET } from '@/screens/anime-catalog/anime-catalog.const'
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
        categoryLink={`/anime?${createAnimeCatalogSearchParams({
          order: 'Rating',
          preset: ANIME_CATALOG_SEARCH_PRESET.ALL_TIME_POPULAR
        })}`}
      />

      <AnimeCategoryList
        icon={<IconStars />}
        category='Больше всего рейтинга'
        items={mostRatedAnimeData ?? []}
        categoryLink={`/anime?${createAnimeCatalogSearchParams({
          order: 'Rating',
          preset: ANIME_CATALOG_SEARCH_PRESET.MOST_RATED
        })}`}
      />

      <AnimeCategoryList
        icon={<IconChartArrows />}
        category='Популярные новинки'
        items={popularOngoingData ?? []}
        categoryLink={`/anime?${createAnimeCatalogSearchParams({
          order: 'Rating',
          status: 'Ongoing',
          years: [new Date().getFullYear().toString()],
          preset: ANIME_CATALOG_SEARCH_PRESET.POPULAR_ONGOING
        })}`}
      />
    </div>
  )
}
