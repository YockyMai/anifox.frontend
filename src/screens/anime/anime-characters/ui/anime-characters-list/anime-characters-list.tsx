import { IconMoodSad } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { InfinityLoadingContainer } from '@/common/components'
import { AnimeCharacterCard } from '@/entities/anime-characters'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeCharactersQuery } from '@/services/queries'

import { $animeCharactersFilterAtoms } from '../../atoms'
import { ANIME_CHARACTERS_LOADER } from './anime-characters-list.const'
import './anime-characters-list.css'

export const AnimeCharactersList = () => {
  const params = useParams<AnimePageParams>()

  const search = useAtomValue(
    $animeCharactersFilterAtoms.search.debouncedValueAtom
  )

  const role = useAtomValue($animeCharactersFilterAtoms.role)

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAnimeCharactersQuery({
      animeUrl: params.animeUrl!,
      search,
      role
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

        {((isFetchingNextPage && hasNextPage) || isLoading) &&
          ANIME_CHARACTERS_LOADER}
      </div>

      {!hasNextPage &&
        !isLoading &&
        !isFetchingNextPage &&
        (data?.pages.length ?? 0) === 0 && (
          <div className='anime-characters-list__no-list'>
            <IconMoodSad />
            <p>Пока-что у нас нет данных о персонажах из этого аниме</p>
          </div>
        )}

      {data?.pages?.[0].characters.length === 0 &&
        data.pages.length === 1 &&
        (role || search) &&
        !isLoading && (
          <div className='anime-characters-list__no-list'>
            <IconMoodSad />
            <p>
              Мы ничего не нашли :(
              <br /> попробуйте другие фильтры
            </p>
          </div>
        )}
    </InfinityLoadingContainer>
  )
}
