import { HoverCard, UnstyledButton } from '@anifox/ui'
import { Matcher, MatchResponse } from 'interweave'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router'

import { CharacterPopoverInfo } from '@/entities/characters/ui/character-popover-info'
import { useCharacterLazyQuery } from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

type CharacterTagProps = {
  id: string
  children: ReactNode
}

const CharacterTag = ({ id, children }: CharacterTagProps) => {
  const [fetchCharacter] = useCharacterLazyQuery()
  const navigate = useNavigate()

  return (
    <HoverCard
      unstyled
      position='bottom'
      trigger={
        <UnstyledButton
          onClick={async () => {
            if (!id) {
              return
            }

            const { data } = await fetchCharacter({
              variables: { malId: Number.parseInt(id) }
            })

            // конвертация malId на id с нашей БД
            const characterId = data?.character.id

            if (characterId) {
              navigate(ROUTES.CHARACTER.ROOT(characterId))
            }
          }}
          className='cursor-pointer font-bold text-purple-500 hover:underline dark:text-purple-300'
        >
          {children}
        </UnstyledButton>
      }
    >
      <div className='max-w-2xl'>
        <CharacterPopoverInfo malId={Number.parseInt(id)} />
      </div>
    </HoverCard>
  )
}

export class CharacterMatcher extends Matcher<CharacterTagProps> {
  match(value: string): MatchResponse<{ extraProp: string }> | null {
    console.log(value)
    const regex = /\[character=(\d+) ([^\]]+)\]([\s\S]*?)\[\/character\]/
    const match = regex.exec(value)

    if (match) {
      return {
        index: match.index,
        length: match[0].length,
        match: match[0],
        extraProp: match[1],
        valid: true
      }
    }

    return null
  }

  replaceWith(children: ReactNode, props: CharacterTagProps) {
    return <CharacterTag {...props}>{children}</CharacterTag>
  }

  asTag() {
    return 'character'
  }
}
