import React from 'react'

import { useProfile } from '@/entities/profile'
import { FavoritesFilterView } from '@/entities/profile/store/favorites-filter'
import { useFavoriteCharactersQuery } from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

import { FavoritesList } from '../favorites-list/favorites-list'
import { FavoritesListDataItem } from '../favorites-list/favorites-list.interface'

export const FavoriteCharacters = () => {
  const { profile } = useProfile()

  const { data, loading, fetchMore } = useFavoriteCharactersQuery({
    variables: {
      userId: profile.id,
      page: 0
    },
    notifyOnNetworkStatusChange: true
  })

  const pageInfo = data?.favoriteCharacters.pageInfo

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
    data?.favoriteCharacters.data.map(({ character, count, characterId }) => ({
      count,
      image: character.image,
      key: characterId,
      title: character.name,
      to: ROUTES.CHARACTER.ROOT.replace(':id', characterId)
    })) ?? []

  return (
    <FavoritesList
      data={favoritesListData}
      fetchNextPage={fetchNextPage}
      loading={loading}
      view={FavoritesFilterView.CHARACTERS}
      pageInfo={pageInfo}
    />
  )
}
