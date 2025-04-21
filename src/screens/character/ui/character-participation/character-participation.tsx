import { ScreenSection } from '@anifox/ui'
import { useParams } from 'react-router'

import { useCharacterQuery } from '@/graphql/generated/output'

import { CharacterPageParams } from '../../character.interface'
import { CharacterPictures } from '../character-pictures/character-pictures'
import './character-participation.css'

export const CharacterParticipation = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery({ variables: { characterId: id! } })

  const character = data?.character

  return (
    <>
      <div className='character-participation'>
        {character?.pictures?.length ? (
          <ScreenSection title='Фотографии'>
            <CharacterPictures />
          </ScreenSection>
        ) : undefined}

        {/* {data?.roles?.length ? (
          <ScreenSection title='Участие в аниме'>
            <div className='anifox-grid'>
              {data?.roles.map(({ anime, role }) => (
                <AnimeCard
                  label={`${role} роль`}
                  key={anime.url}
                  anime={anime}
                />
              ))}
            </div>
          </ScreenSection>
        ) : undefined} */}
      </div>
    </>
  )
}
