import React from 'react'

import { useProfile } from '@/entities/profile'
import { FavoritesFilterView } from '@/entities/profile/store/favorites-filter'
import { useFavoriteAnimesQuery } from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

import { FavoritesList } from '../favorites-list/favorites-list'
import { FavoritesListDataItem } from '../favorites-list/favorites-list.interface'

export const FavoriteAnimes = () => {
  const { profile } = useProfile()

  const { data, loading, fetchMore } = useFavoriteAnimesQuery({
    variables: {
      userId: profile.id,
      page: 0
    },
    notifyOnNetworkStatusChange: true
  })

  const pageInfo = data?.favoriteAnimes.pageInfo

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          page: pageInfo.page + 1,
          userId: profile.id
        }
      })
    }
  }

  const favoritesListData: FavoritesListDataItem[] =
    data?.favoriteAnimes.data.map(({ anime, count, animeId }) => ({
      count,
      image: anime.image.medium ?? '',
      key: animeId,
      title: anime.title,
      to: ROUTES.CHARACTER.ROOT(anime.url)
    })) ?? []

  return (
    <FavoritesList
      data={favoritesListData}
      fetchNextPage={fetchNextPage}
      loading={loading}
      view={FavoritesFilterView.ANIMES}
      pageInfo={pageInfo}
    />
  )
}
