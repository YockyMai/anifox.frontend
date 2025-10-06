import { IconChartArrows, IconStars, IconTrendingUp } from '@tabler/icons-react'

import { AnimeCategoryList } from '@/entities/anime/anime-card'
import {
  AnimeOrder,
  AnimeStatus,
  SortOrder,
  useAnimesQuery
} from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

export const AnimeCatalogLanding = () => {
  const { data: mostRatedAnimeData, loading: isLoadingMostRatedAnime } =
    useAnimesQuery({
      variables: {
        sort: SortOrder.DESC,
        order: AnimeOrder.RATING,
        limit: 7
      }
    })

  const {
    data: allTimePopularAnimeData,
    loading: isLoadingAllTimePopularAnime
  } = useAnimesQuery({
    variables: {
      sort: SortOrder.DESC,
      order: AnimeOrder.RELEASED_ON,
      limit: 7
    }
  })

  const { data: popularOngoingData, loading: isLoadingPopularOngoing } =
    useAnimesQuery({
      variables: {
        sort: SortOrder.DESC,
        order: AnimeOrder.RELEASED_ON,
        status: AnimeStatus.ONGOING,
        limit: 7
      }
    })

  return (
    <div className='flex flex-col gap-y-10'>
      <AnimeCategoryList
        isLoading={isLoadingPopularOngoing}
        icon={<IconChartArrows />}
        category='Популярные новинки'
        items={popularOngoingData?.animes.data ?? []}
        categoryLink={ROUTES.CATALOG.POPULAR_ONGOING}
      />

      <AnimeCategoryList
        isLoading={isLoadingAllTimePopularAnime}
        icon={<IconTrendingUp />}
        category='Самые популярные аниме'
        items={allTimePopularAnimeData?.animes.data ?? []}
        categoryLink={ROUTES.CATALOG.POPULAR}
      />

      <AnimeCategoryList
        isLoading={isLoadingMostRatedAnime}
        icon={<IconStars />}
        category='Больше всего рейтинга'
        items={mostRatedAnimeData?.animes.data ?? []}
        categoryLink={ROUTES.CATALOG.MOST_RATED}
      />
    </div>
  )
}
