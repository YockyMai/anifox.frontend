'use client'

import { useParams } from 'next/navigation'

import { Image, Spoiler, TextWithBreaks } from '@/common/components'
import { useCharacterQuery } from '@/services/queries'

import { CharacterPageParams } from '../../character.interface'
import './character-info.css'

export const CharacterInfo = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery(id)

  return (
    <div className='character-info'>
      <div className='character-info__header'>
        <div className='character-info__header__content'>
          <div className='relative'>
            <div className='character-info__image'>
              <Image src={data!.image} alt='character image' />
            </div>
          </div>

          <div className='character-info__name'>
            <div>
              <p className='character-info__name__main'>{data?.name}</p>
            </div>
            {(data?.name_en || data?.name_kanji) && (
              <div>
                <p>
                  {data?.name_en && `${data?.name_en}, `}
                  {data?.name_kanji}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='character-info__body'>
        <div />
        {data?.about && (
          <Spoiler maxHeight={145}>
            <TextWithBreaks text={data.about} separator='.' />
          </Spoiler>
        )}
      </div>
    </div>
  )
}
