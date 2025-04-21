import { InfinityLoadingContainer } from '@anifox/ui'
import { IconMoodSad } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import React from 'react'
import { useParams } from 'react-router'

import { AnimeCharacterCard } from '@/entities/characters'
import { useCharactersQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

import { $animeCharactersFilterAtoms } from '../../atoms'
import { ANIME_CHARACTERS_LOADER } from './anime-characters-list.const'
import './anime-characters-list.css'

export const AnimeCharactersList = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const search = useAtomValue(
    $animeCharactersFilterAtoms.search.debouncedValueAtom
  )

  const role = useAtomValue($animeCharactersFilterAtoms.role)

  const { data, fetchMore, loading, error } = useCharactersQuery({
    variables: {
      animeUrl: animeUrl!,
      search,
      role,
      page: 0
    }
  })

  const characters = data?.characters.data
  const pageInfo = data?.characters.pageInfo

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          page: pageInfo.page + 1,
          animeUrl: animeUrl!,
          search,
          role
        }
      })
    }
  }

  return (
    <InfinityLoadingContainer
      fetchNextPage={fetchNextPage}
      hasNextPage={pageInfo?.hasNextPage ?? true}
      isFetchingNextPage={loading && !!pageInfo}
    >
      <div className='anime-characters-list'>
        {characters && (
          <>
            {characters?.map((character) => (
              <AnimeCharacterCard character={character} key={character.id} />
            ))}
          </>
        )}

        {loading && ANIME_CHARACTERS_LOADER}
      </div>

      {!loading && data?.characters.data.length === 0 && (
        <div className='mx-auto mt-10 flex w-fit items-center gap-x-3'>
          <IconMoodSad />
          <p>Пока-что у нас нет данных о персонажах из этого аниме</p>
        </div>
      )}

      {!loading && data?.characters.data.length === 0 && (role || search) && (
        <div className='mx-auto mt-10 flex w-fit items-center gap-x-3'>
          <IconMoodSad />
          <p>
            Мы ничего не нашли :(
            <br /> попробуйте другие фильтры
          </p>
        </div>
      )}

      {error && (
        <div className='mx-auto mt-10 flex w-fit items-center gap-x-3'>
          <IconMoodSad className='text-red-400' />
          <p className='text-red-400'>Произошла ошибка :(</p>
        </div>
      )}
    </InfinityLoadingContainer>
  )
}
