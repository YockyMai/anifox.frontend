import {
  Loader,
  Image,
  Spoiler,
  MarqueeText,
  Fancybox,
  Carousel,
  ScreenSection
} from '@anifox/ui'
import { IconPhoto } from '@tabler/icons-react'

import { useCharacterQuery } from '@/graphql/generated/output'
import { CharacterActions } from '@/screens/character/ui/character-actions'
import { CharacterPicture } from '@/screens/character/ui/character-pictures/character-picture'

import { CharacterPopoverInfoProps } from './character-popover-info.interface'

export const CharacterPopoverInfo = ({ malId }: CharacterPopoverInfoProps) => {
  const { data, loading, error } = useCharacterQuery({ variables: { malId } })

  const character = data?.character

  const otherTitles = [character?.nameEn, character?.nameKanji]
    .filter(Boolean)
    .join(', ')

  return (
    <div className='overflow-hidden rounded-lg drop-shadow-2xl backdrop-blur-3xl'>
      {loading && (
        <div className='flex h-full w-full items-center justify-center'>
          <Loader />
        </div>
      )}
      {error && (
        <div className='p-3'>
          <p>У нас еще нет информации об этом персонаже :(</p>
        </div>
      )}
      {character && (
        <div>
          <div className='grid grid-cols-[180px_auto] grid-rows-1 items-start justify-between gap-x-5 bg-white/60 p-3 dark:bg-slate-950/60'>
            <div className='flex flex-col gap-y-2'>
              <Image
                src={character.image}
                alt={character.name}
                width={180}
                height={250}
              />
              <CharacterActions characterId={character.id} />
            </div>

            <div className='flex flex-col gap-y-4'>
              <div>
                <MarqueeText>
                  <p className='text-2xl font-bold dark:text-white'>
                    {character.name}
                  </p>
                </MarqueeText>
                <MarqueeText>
                  <p className='text-xs dark:text-slate-300'>{otherTitles}</p>
                </MarqueeText>
              </div>
              <Spoiler maxHeight={205}>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      character.about ??
                      'У этого персонажа отсутствует описание'
                  }}
                  className='whitespace-pre-line text-sm'
                />
              </Spoiler>
            </div>
          </div>
          <div className='bg-slate-100/60 px-5 pb-5 pt-2 dark:bg-slate-900/60'>
            <ScreenSection title='Фотографии' titleIcon={<IconPhoto />}>
              <Fancybox>
                <div className='h-[160px]'>
                  <Carousel
                    slides={(character.pictures ?? []).map((src) => ({
                      content: <CharacterPicture key={src} src={src} />,
                      size: 120
                    }))}
                    dragFree
                    slideSpacing={10}
                    align='end'
                  />
                </div>
              </Fancybox>
            </ScreenSection>
          </div>
        </div>
      )}
    </div>
  )
}
