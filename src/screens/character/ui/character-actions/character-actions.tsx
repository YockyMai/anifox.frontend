import { Button, UIColors, UISizes } from '@anifox/ui'
import { IconCheck, IconHeart, IconHeartFilled } from '@tabler/icons-react'

import { $viewer } from '@/entities/viewer'
import {
  CharacterDocument,
  useCharacterQuery,
  useToggleFavoriteCharacterMutation
} from '@/graphql/generated/output'

import { CharacterActionsProps } from './character-actions.interface'

export const CharacterActions = ({ characterId }: CharacterActionsProps) => {
  const viewer = $viewer.selectors.viewer()

  const { data } = useCharacterQuery({
    variables: {
      characterId,
      userId: viewer?.id
    }
  })

  const isFavorite = data?.character.isFavorite

  const [toggleFavoriteCharacter, { loading }] =
    useToggleFavoriteCharacterMutation({
      variables: {
        characterId
      },
      refetchQueries: [
        {
          query: CharacterDocument,
          variables: {
            characterId,
            userId: viewer?.id
          }
        }
      ]
    })

  return (
    <Button
      fullWidth
      isLoading={loading}
      size={UISizes.SM}
      icon={isFavorite ? <IconHeartFilled /> : <IconHeart />}
      color={UIColors.RED}
      onClick={() => toggleFavoriteCharacter()}
    >
      {isFavorite ? 'В избранном' : 'В избранное'}
    </Button>
  )
}
