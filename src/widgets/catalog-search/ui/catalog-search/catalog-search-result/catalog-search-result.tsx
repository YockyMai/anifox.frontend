import { InfinityLoadingContainer } from '@anifox/ui'
import React from 'react'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useAnimesQuery } from '@/graphql/generated/output'
import { ANIME_CARD_LOADERS } from '@/widgets/anime-catalog/ui/anime-catalog-list/anime-catalog-list.const'
import { $catalogSearch } from '@/widgets/catalog-search/store'

export const CatalogSearchResult = () => {
  const search = $catalogSearch.selectors.search()

  const { data, fetchMore, loading } = useAnimesQuery({
    variables: { page: 0, search },
    notifyOnNetworkStatusChange: true
  })

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          page: pageInfo.page + 1,
          search: search
        }
      })
    }
  }

  const pageInfo = data?.animes.pageInfo

  return (
    <InfinityLoadingContainer
      fetchNextPage={fetchNextPage}
      hasNextPage={pageInfo?.hasNextPage ?? true}
      isFetchingNextPage={loading && !!pageInfo}
    >
      <div className='anifox-grid'>
        {data?.animes.data.map((anime) => (
          <AnimeCard labelWhite anime={anime} key={anime.id} />
        ))}
        {loading && ANIME_CARD_LOADERS}
      </div>
    </InfinityLoadingContainer>
  )
}
