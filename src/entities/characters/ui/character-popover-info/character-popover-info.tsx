import { Loader, Image, Spoiler } from '@anifox/ui'

import { useCharacterQuery } from '@/graphql/generated/output'
import { CharacterActions } from '@/screens/character/ui/character-actions'

import { CharacterPopoverInfoProps } from './character-popover-info.interface'

export const CharacterPopoverInfo = ({ malId }: CharacterPopoverInfoProps) => {
  const { data, loading, error } = useCharacterQuery({ variables: { malId } })

  const character = data?.character

  return (
    <div className='overflow-hidden rounded-lg bg-slate-100/60 drop-shadow-2xl backdrop-blur-3xl dark:bg-slate-900/60'>
      {loading && (
        <div className='flex h-full w-full items-center justify-center'>
          <Loader />
        </div>
      )}
      {error && (
        <div className='p-3'>
          <p className='text-red-400'>
            У нас еще нет информации об этом персонаже
          </p>
        </div>
      )}
      {character && (
        <div>
          <div className='flex items-center justify-between gap-x-5 bg-white/60 p-3 dark:bg-slate-950/60'>
            <div className='flex items-center gap-x-2'>
              <Image
                src={character.image}
                alt={character.name}
                width={50}
                height={50}
                className='mr-2'
              />
              <p className='text-md font-bold'>{character.name}</p>
            </div>

            <CharacterActions />
          </div>
          <div className='p-5'>
            <p className='whitespace-pre-line text-sm'>{character.about}</p>
          </div>
        </div>
      )}
    </div>
  )
}
