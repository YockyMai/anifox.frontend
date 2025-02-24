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
  const { data: mostRatedAnimeData = [], isLoading: isLoadingMostRatedAnime } =
    useMostRatedAnimeListQuery()

  const {
    data: allTimePopularAnimeData = [],
    isLoading: isLoadingAllTimePopularAnime
  } = useAllTimePopularAnimeListQuery()

  const { data: popularOngoingData = [], isLoading: isLoadingPopularOngoing } =
    usePopularOngoingQuery()

  return (
    <div className='flex flex-col gap-y-10'>
      <AnimeCategoryList
        isLoading={isLoadingPopularOngoing}
        icon={<IconChartArrows />}
        category='Популярные новинки'
        items={popularOngoingData}
        categoryLink={ROUTES.CATALOG.POPULAR_ONGOING}
      />

      <AnimeCategoryList
        isLoading={isLoadingAllTimePopularAnime}
        icon={<IconTrendingUp />}
        category='Самые популярные аниме'
        items={allTimePopularAnimeData}
        categoryLink={ROUTES.CATALOG.POPULAR}
      />

      <AnimeCategoryList
        isLoading={isLoadingMostRatedAnime}
        icon={<IconStars />}
        category='Больше всего рейтинга'
        items={mostRatedAnimeData}
        categoryLink={ROUTES.CATALOG.MOST_RATED}
      />
    </div>
  )
}
