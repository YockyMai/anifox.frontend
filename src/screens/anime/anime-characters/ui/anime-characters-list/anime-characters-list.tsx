'use client'

import { useParams } from 'next/navigation'
import React, { Fragment } from 'react'

import { InfinityLoadingContainer } from '@/common/components'
import { AnimeCharacterCard } from '@/entities/anime-characters'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeCharactersQuery } from '@/services/queries'

import './anime-characters-list.css'

export const AnimeCharactersList = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAnimeCharactersQuery({
      animeUrl
    })

  return (
    <InfinityLoadingContainer
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    >
      <div className='anime-characters-list'>
        {data?.pages.map(({ characters }, page) => (
          <Fragment key={page}>
            {characters.map((character) => (
              <AnimeCharacterCard character={character} key={character.id} />
            ))}
          </Fragment>
        ))}
      </div>
    </InfinityLoadingContainer>
  )
}
