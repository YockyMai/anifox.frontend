import {
  DEFAULT_DELEGATE_VALUE,
  Fancybox,
  HoverIcon,
  Image,
  Spoiler
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'
import { useParams } from 'react-router'

import { useViewer } from '@/entities/viewer'
import { useCharacterQuery } from '@/graphql/generated/output'

import { CharacterPageParams } from '../../character.interface'
import { CharacterActions } from '../character-actions'
import './character-info.css'

export const CharacterInfo = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery({ variables: { id: id! } })

  const character = data?.character

  const otherTitles = [character?.nameEn, character?.nameKanji]
    .filter(Boolean)
    .join(', ')

  const { isAuth } = useViewer()
  return (
    <div className='character-info'>
      <div className='character-info__header'>
        <div className='character-info__header__content'>
          <div className='relative'>
            <div className='character-info__image'>
              <Fancybox>
                <a
                  data-fancybox={DEFAULT_DELEGATE_VALUE}
                  href={character?.image}
                >
                  <div className='aspect-[3/4] w-full transition-transform hover:-translate-y-3 hover:scale-105'>
                    <Image src={character?.image} alt='character image' />
                  </div>
                </a>
              </Fancybox>
            </div>
          </div>

          <div className='character-info__name'>
            <div className='flex items-center'>
              <p className='character-info__name__main'>{character?.name}</p>
              {isAuth && <CharacterActions />}
            </div>
            {(character?.nameEn || character?.nameKanji) && (
              <div>
                <p>{otherTitles}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'character-info__body',
          !character?.about && 'character-info__body__mobile-hidden'
        )}
      >
        <div />
        {character?.about && (
          <Spoiler maxHeight={145}>
            <p className='whitespace-pre-line'>{character.about}</p>
          </Spoiler>
        )}
      </div>
    </div>
  )
}
