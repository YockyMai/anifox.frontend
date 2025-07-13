import { HoverCard, Spoiler } from '@anifox/ui'
import { Link, useParams } from 'react-router'

import { CharacterPopoverInfo } from '@/entities/characters/ui/character-popover-info'
import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'

interface CharacterTagProps {
  id: string
  children: React.ReactNode
}

const CharacterTag = ({ id, children }: CharacterTagProps) => {
  return (
    <HoverCard
      unstyled
      position='bottom'
      trigger={
        <Link
          to={ROUTES.CHARACTER.ROOT(id)}
          className='cursor-pointer font-bold text-purple-500 hover:underline dark:text-purple-300'
        >
          {children}
        </Link>
      }
    >
      <div className='max-w-2xl'>
        <CharacterPopoverInfo malId={Number.parseInt(id)} />
      </div>
    </HoverCard>
  )
}

const parseCharacterTags = (text: string): React.ReactNode[] => {
  const regex = /\[character=(\d+)\]([\s\S]*?)\[\/character\]/g

  const result: React.ReactNode[] = []

  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, id, content] = match
    const index = match.index

    // Добавить обычный текст до тэга
    if (lastIndex < index) {
      result.push(text.slice(lastIndex, index))
    }

    // Добавить сам компонент
    result.push(
      <CharacterTag key={index} id={id}>
        {content}
      </CharacterTag>
    )

    lastIndex = index + fullMatch.length
  }

  // Добавить оставшийся текст после последнего тэга
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex))
  }

  return result
}

export const AnimeDescription = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  if (!data?.anime.description) {
    return null
  }

  return (
    <>
      {/* only for PC */}
      <div className='h-full overflow-hidden max-lg:hidden'>
        <Spoiler maxHeight={123}>
          <p className='overflow-hidden whitespace-pre-line'>
            {parseCharacterTags(data?.anime.description)}
          </p>
        </Spoiler>
      </div>

      {/* only for mobile */}
      <div className='mt-7 lg:hidden'>
        <p className='mb-2 text-center text-xl font-bold dark:text-slate-300'>
          Описание
        </p>
        <Spoiler buttonWidthFull maxHeight={220}>
          <p className='whitespace-pre-line text-center'>
            {parseCharacterTags(data?.anime.description)}
          </p>
        </Spoiler>
      </div>
    </>
  )
}
