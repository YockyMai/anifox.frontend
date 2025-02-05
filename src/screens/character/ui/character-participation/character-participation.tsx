import { useParams } from 'react-router'

import { ScreenSection } from '@/common/components'
import { AnimeCard } from '@/entities/anime/anime-card'
import { useCharacterQuery } from '@/services/queries'

import { CharacterPageParams } from '../../character.interface'
import { CharacterPictures } from '../character-pictures/character-pictures'
import './character-participation.css'

export const CharacterParticipation = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery(id!)

  return (
    <>
      <div className='character-participation'>
        {data?.pictures?.length ? (
          <ScreenSection title='Фотографии'>
            <CharacterPictures />
          </ScreenSection>
        ) : undefined}

        {data?.roles?.length ? (
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
        ) : undefined}
      </div>
    </>
  )
}
