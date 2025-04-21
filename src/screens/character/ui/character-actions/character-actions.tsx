import { Button, UIColors, UISizes } from '@anifox/ui'
import { IconCheck, IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { useParams } from 'react-router'

import { $viewer } from '@/entities/viewer'
import {
  useCharacterQuery,
  useToggleFavoriteCharacterMutation
} from '@/graphql/generated/output'

import { CharacterPageParams } from '../../character.interface'

export const CharacterActions = () => {
  const viewer = $viewer.selectors.viewer()

  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery({
    variables: {
      characterId: id!,
      userId: viewer?.id
    }
  })

  const isFavorite = data?.character.isFavorite

  const [toggleFavoriteCharacter] = useToggleFavoriteCharacterMutation({
    variables: {
      characterId: id!
    }
  })

  return (
    <Button
      size={UISizes.SM}
      icon={isFavorite ? <IconHeartFilled /> : <IconHeart />}
      rightIcon={isFavorite && <IconCheck />}
      color={UIColors.RED}
      onClick={() =>
        toggleFavoriteCharacter({ variables: { characterId: id! } })
      }
    >
      {isFavorite ? 'В избранном' : 'В избранное'}
    </Button>
  )
}
