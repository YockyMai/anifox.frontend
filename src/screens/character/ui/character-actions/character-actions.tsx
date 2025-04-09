import { Button, UIColors, UISizes } from '@anifox/ui'
import { IconCheck, IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { useParams } from 'react-router'

import { useViewer } from '@/entities/viewer'
import {
  useFavoriteCharactersQuery,
  useToggleFavoriteCharacterMutation
} from '@/graphql/generated/output'

import { CharacterPageParams } from '../../character.interface'

export const CharacterActions = () => {
  const { viewer } = useViewer()

  const { id } = useParams<CharacterPageParams>()

  const { data } = useFavoriteCharactersQuery({
    variables: { userId: viewer!.id }
  })

  const [toggleFavoriteCharacter] = useToggleFavoriteCharacterMutation({
    variables: {
      characterId: id!
    }
  })

  const isFavorite = data?.favoriteCharacters.data.some(
    (data) => data.characterId === id
  )

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
