import { ScreenSection } from '@anifox/ui'
import { useParams } from 'react-router'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useCharacterQuery } from '@/graphql/generated/output'

import { CharacterPageParams } from '../../character.interface'
import { CharacterPictures } from '../character-pictures/character-pictures'

export const CharacterParticipation = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery({ variables: { characterId: id! } })

  const character = data?.character

  return (
    <>
      <div className='container mt-12'>
        {character?.pictures?.length ? (
          <ScreenSection title='Фотографии'>
            <CharacterPictures />
          </ScreenSection>
        ) : undefined}

        {character?.participation && character.participation.length > 0 && (
          <ScreenSection title='Участие в аниме'>
            <div className='anifox-grid'>
              {character.participation.map(({ anime, role, animeId }) => (
                <AnimeCard label={`${role} роль`} key={animeId} anime={anime} />
              ))}
            </div>
          </ScreenSection>
        )}
      </div>
    </>
  )
}
